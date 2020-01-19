import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import Limg from './logo.png'
import Limg2 from './logo-light.png'

const Logo = () => {
    return (
        <Fragment>
            <div class="logo">
                <Link to="/">
                    <img src={Limg2} alt="Logo" class="logo-light" />
                    <img src={Limg} alt="Logo" />
                </Link>
            </div>
        </Fragment>
    );
}

export default Logo;
