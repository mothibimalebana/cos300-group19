import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/Client";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    return(
        <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;