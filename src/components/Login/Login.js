import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Login = () => {
    const { signInUsingGoogle, setIsLoading,setUser } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/products'
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);                
                setUser(result.user);
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div>
            <div className='login-form'>
                <div>
                    <h2>Login</h2>
                    {/* <form onSubmit="">
                        <input type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <input type="password" name="" id="" placeholder="enter your password" />
                        <br />
                        <input type="submit" value="Submit" />
                    </form> */}
                    {/* <p>new to ema-john website?<Link to="/register">Create Account</Link></p> */}
                    {/* <div>-----------------or----------------------</div> */}
                    <button
                        onClick={handleGoogleLogIn}
                        className="btn-regular">Google sign in</button>
                </div>
            </div>
        </div>
    );
};

export default Login;