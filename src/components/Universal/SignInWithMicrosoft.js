import "../Universal/styles/SignIn.css";
import { useNavigate } from 'react-router-dom';

function SignInWithMicrosoft() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        // Navigate to UserRegistration component
        navigate("/Login");
    };

    return (
        <div className="WindowContainer">
            <h1 className="topText">Pitt Library Manager</h1>
            <h2 className="SchoolText">Sacred Heart University</h2>
            <button className="LogInButton" onClick={handleSignIn}>
                Sign In
                {/*ToDo add microsoft logo here*/}
            </button>
        </div>
    );


}

export default SignInWithMicrosoft;
