export function RegisterForm()
{
    return(
        <div className="register">
            <div className="registerCard">
                <div className="registerLogo">
                    <img src={require("../../media/login/LernDeutsch (2).png")}/>
                </div>
                <div className="label">
                        <p>Register</p>
                    </div>
                <div className="registerForm">
                    <div className="form-group">
                        <input type="name" id="inputName" placeholder="Full Name"></input>
                    </div>
                    <div className="form-group">
                        <input type="username" id="inputUsername" placeholder="Pick a username"></input>
                    </div>
                    <div className="form-group">
                        <input type="email" id="inputEmail" placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" id="inputPassword" placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" id="inputConfirmPassword" placeholder="Repeat password"></input>
                    </div>  
                    <div className="form-group">
                        <button>Register</button>
                    </div>
                    <div className="form-group">
                        <label>Have an account? <a href="">Sign In</a></label>
                    </div>
                </div>
            </div>
        </div>
    )
}