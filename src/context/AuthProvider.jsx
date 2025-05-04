import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/Client";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);
const login = (email, password) => supabase.auth.signInWithPassword({email, password});

const signOut = () => supabase.auth.signOut();

const passwordReset = (email) =>
    supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "http://localhost:5173/update-password"
    });
const updatePassword = (updatedPassword) =>
    supabase.auth.updateUser({ password: updatedPassword });

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(null);
    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        setLoading(true);
        const getUser = async () => {
          const { data } = await supabase.auth.getUser();
          const { user: currentUser } = data;
          setUser(currentUser ?? null);
          setLoading(false);
        };
        getUser();
        
        const { data } = supabase.auth.onAuthStateChange((event, session) =>{
            if(event === "SIGNED_IN"){
                setUser(session.user);
                setAuth(true);
            } else if (event === "SIGNED_OUT") {
                setUser(session.user);
                setAuth(false);
            } else if (event === "SIGNED_IN") {
                setUser(false);
                setAuth(true);
            }
        });
        return () => {
            data.subscription.unsubscribe();
        };
    }, [])

    return(
        <AuthContext.Provider value={{user, login, signOut, passwordReset, updatePassword}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;