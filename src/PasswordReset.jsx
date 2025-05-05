import { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import '../src/css/Login.css'


const PasswordReset = () => {
    const location = useLocation();
    let pathname = location.pathname;
    const currentPath = pathname.split('/')[1];

    const { passwordReset } = useAuth();
    const emailRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState("");
      
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
              setLoading(true);
              const { data, error } = await passwordReset(emailRef.current.value);
              console.log(error);
              console.log(data);
              setMsg("Password reset has been sent to your email");
            } catch (e) {
              console.log(e);
            }
            setLoading(false);
        };
    
        return(
            <div className="hidden md:flex flex-col containerL justify-between">
            {/*Desktop*/}
            <div className="header flex justify-between">
                <div className="brand flex gap-3 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.358 28.4478V6.41968L2.83081 11.9267V33.9548L21.8702 44.9689L31.3974 39.4618L12.358 28.4478Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8696 22.9407L40.909 33.9547V22.9407L31.3969 17.4337V6.41962L21.8696 0.912598V22.9407Z" fill="white"/>
                    </svg>
                    <h2>Group 19</h2>
                </div>
                <div className="left flex gap-5">
                    <Link to="/login" className={`login ${currentPath ? 'shade' : 'none'}`}><p>Login</p></Link>
                    <Link to="/register"><p>Register</p></Link>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                <div className="username flex gap-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="26" viewBox="0 0 22 26" fill="none">
                    <g clip-path="url(#clip0_4614_599)">
                        <path d="M21.5028 21.1659C21.5028 22.3456 21.1646 23.3576 20.4881 24.2019C19.8116 25.0461 18.9971 25.4682 18.0447 25.4682H4.17968C3.22721 25.4682 2.41274 25.0461 1.73627 24.2019C1.05979 23.3576 0.721558 22.3456 0.721558 21.1659C0.721558 20.2459 0.767558 19.3773 0.859558 18.5601C0.951558 17.7429 1.12203 16.9203 1.37097 16.0923C1.61991 15.2643 1.9365 14.5554 2.32074 13.9655C2.70497 13.3756 3.21368 12.894 3.84686 12.5206C4.48004 12.1471 5.20792 11.9604 6.03051 11.9604C7.4484 13.3459 9.14228 14.0386 11.1122 14.0386C13.0821 14.0386 14.7759 13.3459 16.1938 11.9604C17.0164 11.9604 17.7443 12.1471 18.3775 12.5206C19.0107 12.894 19.5194 13.3756 19.9036 13.9655C20.2878 14.5554 20.6044 15.2643 20.8534 16.0923C21.1023 16.9203 21.2728 17.7429 21.3648 18.5601C21.4568 19.3773 21.5028 20.2459 21.5028 21.1659ZM17.3465 6.76513C17.3465 8.48608 16.7377 9.95537 15.5201 11.173C14.3024 12.3907 12.8331 12.9995 11.1122 12.9995C9.39123 12.9995 7.92193 12.3907 6.70428 11.173C5.48663 9.95537 4.8778 8.48608 4.8778 6.76513C4.8778 5.04418 5.48663 3.57489 6.70428 2.35724C7.92193 1.13959 9.39123 0.530762 11.1122 0.530762C12.8331 0.530762 14.3024 1.13959 15.5201 2.35724C16.7377 3.57489 17.3465 5.04418 17.3465 6.76513Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_4614_599">
                        <rect width="20.7812" height="24.9375" fill="white" transform="translate(0.721558 0.530762)"/>
                        </clipPath>
                    </defs>
                    </svg>
                    <input type="text" name='email' ref={emailRef} placeholder='Email' required/>
                </div>
                {msg && (
                <alert onClose={() => setMsg("")} dismissible>
                {msg}
                </alert>
                )}
                <button disabled={loading}className='submit'>Send Reset Link</button>
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

export default PasswordReset