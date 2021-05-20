import {Grid } from '@material-ui/core'
import React, { useState} from 'react'
import BrandName from "../BrandName";
import Footer from '../Footer';



const LoginReg = () => {

   

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSignIn = (e) => {
        
    }

    const handleJoinNow = (e) => {
        e.preventDefault();
        setLogin(false)
    }
    
    return (
        <section>
            {login ? <Grid container>
                <Grid className="login-page" item lg={4} md={6} sm={6} xs={11}>
                    <BrandName />
                    <form>
                    <div>
                            <input value={email} onChange={(e) => {
                                const newEmail = e.target.value;
                                setEmail(newEmail)
                            }} type="text" placeholder="Email" />
                    </div>
                    <div>
                            <input value={password} onChange={(e) => {
                                const newPwd = e.target.value;
                                setPassword(newPwd)
                            }} type="password" placeholder="Password" />
                    </div>
                    <div className="login-btn" onClick={handleSignIn}> Login </div>
                    </form>

                    <div className="txt-forget-pwd"> Forgot Password? </div>
                    <div className="txt-do-you"> Don't have an account?
                    <span
                        onClick= {(e) => {
                                e.preventDefault();
                                setLogin(!login)
                            }}
                        className="txt-join"> Join now!</span> </div>
                </Grid>
            </Grid> :  <Grid container>
                <Grid className="login-page" item lg={4} md={6} sm={6} xs={11}>
                    <BrandName />
                    <form>
                    
                    <div>
                                <input value={user} onChange={(e) => {
                                    const newUser = e.target.value;
                                    setUser(newUser)
                        }
                        } type="text" placeholder="Username" />
                    </div>
                    <div>
                                <input value={email} onChange={(e) => {
                                    const newEmail = e.target.value;
                                    setEmail(newEmail)
                                }} type="email" placeholder="Email" />
                    </div>
                    <div> 
                                <input  value={password} onChange={(e) => {
                                    const newPwd = e.target.value;
                                    setPassword(newPwd)
                                }} type="password" placeholder="Password" />
                    </div>
                    
                            <div className="login-btn" onClick={handleJoinNow}> Join Now</div>
                    </form>

                        <div className="txt-do-you"> Do you have an account? <span
                            onClick={(e) => {
                                e.preventDefault();
                                setLogin(!login)
                            }}
                            className="txt-join"> Sign in!</span> </div>
                </Grid>
            </Grid>}
            <Footer />
        </section>
    )
}

export default LoginReg
