"use client"
import '../public/css/Login.css'
function Login() {
    return(
        <div className="container">
            <div className="header">
                <div className="brand flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.358 28.4478V6.41968L2.83081 11.9267V33.9548L21.8702 44.9689L31.3974 39.4618L12.358 28.4478Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8696 22.9407L40.909 33.9547V22.9407L31.3969 17.4337V6.41962L21.8696 0.912598V22.9407Z" fill="white"/>
                    </svg>
                    <h2>Group 19</h2>
                </div>
            </div>
            <div className="content"></div>
            <div className="footer"></div>
        </div>
    )
}

export default Login
