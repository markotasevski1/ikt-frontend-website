import "../../style/LoginStyle.scss";

function Login(){
    return(
        <div className="login">
            <div className="leftLogin">
                <div className="centerLeftLogin">
                    <div className="logoLogin">
                        <img src={require('../../media/login/LernDeutsch (2).png')}/>
                    </div>
                    <div>
                        <p>Easy, Fun and Effective Learn German Online</p>
                    </div>
                    <div>
                        <button>Sign in</button>
                        <button>Register</button>
                    </div>
                </div>
            </div>
            <div className="rightLogin">
                <img src={require('../../media/login/—Pngtree—boy character computer learning illustration_6406919.png')}/>
            </div>
        </div>
    )
}
export default Login;