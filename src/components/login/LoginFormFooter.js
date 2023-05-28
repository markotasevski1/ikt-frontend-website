export function LoginFormFooter()
{
    return (
        <div>
            <div className="formGroup">
                <p>Don't have an account? <a href='/register'>Create free account</a></p>
            </div>
            <div className="formGroup">
                <h5>OR LOG IN WITH</h5>
            </div>
            <div className="formGroup">
                <div className="shortcutLogin">
                    <a href=""><img src={require('../../media/login/59439.png')} alt={'facebook'}/></a>
                    <a href=""><img src={require('../../media/login/twitter-png-icon-29.png')} alt={'twitter'}/></a>
                    <a href=""><img src={require('../../media/login/free-mail-icon-142-thumb.png')} alt={'mail'}/></a>
                </div>
            </div>
        </div>
    )
}
