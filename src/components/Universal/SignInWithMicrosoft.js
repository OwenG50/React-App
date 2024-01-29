import "../Universal/styles/SignIn.css"


function SignInWithMicrosoft(){

    return(
        <div className="WindowContainer">
            <h1 className="topText">Pitt Library Manager</h1>
            <h2 className="SchoolText">Sacred Heart University</h2>
            <button className="LogInButton">
                Sign In
                {/*ToDo add microsoft logo here*/}
            </button>
        </div>
    )

}

export default SignInWithMicrosoft;