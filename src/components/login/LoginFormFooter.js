export function LoginFormFooter()
{
    return (
        <div>
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
    )
}