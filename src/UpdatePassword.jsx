import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";



const UpdatePassword = () => {
    const { updatePassword } = useAuth();
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
      
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!passwordRef.current?.value || !confirmPasswordRef.current?.value) {
          setErrorMsg("Please fill all the fields");
          return;
        }
        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
          setErrorMsg("Passwords doesn't match. Try again");
          return;
        }
        try {
          setErrorMsg("");
          setLoading(true);
          const { data, error } = await updatePassword(passwordRef.current.value);
          if (!error) {
            navigate("/");
          }
        } catch (error) {
          setErrorMsg("Error in Updating Password. Please try again");
        }
        setLoading(false);
      };

        return(
            <div className="hidden md:flex flex-col container justify-between">
            {/*Desktop*/}
            <div className="header flex justify-between">
                <div className="brand flex gap-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.358 28.4478V6.41968L2.83081 11.9267V33.9548L21.8702 44.9689L31.3974 39.4618L12.358 28.4478Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8696 22.9407L40.909 33.9547V22.9407L31.3969 17.4337V6.41962L21.8696 0.912598V22.9407Z" fill="white"/>
                    </svg>
                    <h2>Group 19</h2>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div className="password flex gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 30" fill="none">
                        <path d="M17.5559 10.2849V9.07267C17.5559 5.73053 15.2542 3.01147 12.4251 3.01147C9.59598 3.01147 7.2943 5.73053 7.2943 9.07267V12.7094H6.26814C5.13629 12.7094 4.21582 13.7968 4.21582 15.1339V24.8318C4.21582 26.1689 5.13629 27.2562 6.26814 27.2562H18.5821C19.7139 27.2562 20.6344 26.1689 20.6344 24.8318V15.1339C20.6344 13.7968 19.7139 12.7094 18.5821 12.7094H9.34663V9.07267C9.34663 7.06762 10.7278 5.43595 12.4251 5.43595C14.1224 5.43595 15.5036 7.06762 15.5036 9.07267V10.2849H17.5559Z" fill="white"/>
                    </svg>
                    <input type="password" name='password' ref={passwordRef} placeholder='Password'/>
                </div>
                <div className="password flex gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" viewBox="0 0 25 30" fill="none">
                        <path d="M17.5559 10.2849V9.07267C17.5559 5.73053 15.2542 3.01147 12.4251 3.01147C9.59598 3.01147 7.2943 5.73053 7.2943 9.07267V12.7094H6.26814C5.13629 12.7094 4.21582 13.7968 4.21582 15.1339V24.8318C4.21582 26.1689 5.13629 27.2562 6.26814 27.2562H18.5821C19.7139 27.2562 20.6344 26.1689 20.6344 24.8318V15.1339C20.6344 13.7968 19.7139 12.7094 18.5821 12.7094H9.34663V9.07267C9.34663 7.06762 10.7278 5.43595 12.4251 5.43595C14.1224 5.43595 15.5036 7.06762 15.5036 9.07267V10.2849H17.5559Z" fill="white"/>
                    </svg>
                    <input type="password" name='confirmPassword' ref={confirmPasswordRef} placeholder='Confirm Password'/>
                </div>
                    {errorMsg && (
                    <Alert
                        variant="danger"
                        onClose={() => setErrorMsg("")}
                        dismissible>
                        {errorMsg}
                    </Alert>
                    )}
                <button disabled={loading}className='submit'>Update</button>
            </form>
            <div className="footer flex justify-between">
                <div className="left flex gap-10">
                    <p>About Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                </div>
                <div className="right flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                        <path d="M12.6734 22.9208C18.412 22.9208 23.064 18.2687 23.064 12.5301C23.064 6.79156 18.412 2.13953 12.6734 2.13953C6.93481 2.13953 2.28278 6.79156 2.28278 12.5301C2.28278 18.2687 6.93481 22.9208 12.6734 22.9208Z" stroke="white" stroke-width="1.6625" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M16.8296 9.21445C16.3631 8.26371 14.963 6.60069 12.1627 6.83811C9.36241 7.07606 7.26195 9.69034 7.49574 13.0169C7.72953 16.344 10.296 18.2449 12.6292 18.2449C15.4295 18.2449 16.8296 15.9637 16.8296 15.9637" stroke="white" stroke-width="1.6625" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>2025 All Rights Reserved | Design By  Group 19</p>
                </div>
            </div>
        </div>
        )
};

export default UpdatePassword;