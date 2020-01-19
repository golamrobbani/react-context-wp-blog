import React, { Fragment } from 'react';
import {Link} from '@reach/router'


const Login = () => {
    return (
        <Fragment>

            <div>

                <form action="#" method="post" class="contact" style={{marginTop: "10px"}}>

                    <div class="contact-item">
                        <label>Username</label>
                        <input style={{width:'100%',height:'40px'}} name="email" value="" type="email" />
                    </div>
                    <div class="contact-item">
                        <label>Password</label>
                        <input style={{width:'100%',height:'40px'}} id="password" name="password" value="" type="text" />
                    </div>

                    <div class="contact-item form-submit">
                        <input style={{width:'100%',height:'40px'}} name="submit" type="submit" id="submit" class="submit" value="Login" />
                    </div>
                    <p>Don't have account?<Link to="/register">Account Create</Link></p>
                </form>

            </div>


        </Fragment>
    );
}

export default Login;
