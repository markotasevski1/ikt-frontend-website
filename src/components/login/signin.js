import "../../style/SigninStyle.scss";

function Signin(){
    return(
        <div className="signin">
            <div className="signinCard">
                <div className="signinLogo">
                    <img src={require("../../media/login/LernDeutsch (2).png")}/>
                </div>
                <div className="label">
                        <p>Sign In</p>
                    </div>
                <div className="signinForm">
                    <div className="form-group">
                        <input type="email" id="inputEmail" placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" id="inputPassword" placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                        <label className="forgotPassword"><a href="">Forgot password?</a></label>
                    </div>
                    <div className="form-group">
                        <button>Sign In</button>
                    </div>
                    <div className="form-group">
                        <label>Don't have an account? <a href="">Create free account</a></label>
                    </div>
                    <div className="form-group">
                        <p>OR LOG IN WITH</p>
                    </div>
                    <div className="form-group">
                        <div className="shortcutLogin">
                            <a href=""><img src={require('../../media/login/59439.png')}/></a>
                            <a href=""><img src={require('../../media/login/twitter-png-icon-29.png')}/></a>
                            <a href=""><img src={require('../../media/login/free-mail-icon-142-thumb.png')}/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signin;