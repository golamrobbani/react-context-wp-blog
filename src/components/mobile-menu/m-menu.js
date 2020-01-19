import React, { Fragment } from 'react';

const MMenu = () => {
    return (
        <Fragment>
            <div class="mobile">
                <div class="container">
                    <div class="menu-mobile">
                        <span class="item item-1"></span>
                        <span class="item item-2"></span>
                        <span class="item item-3"></span>
                    </div>
                    <div class="logo">
                        <a href="index.html">
                            <img src="images/logo-mobile.png" alt="Logo" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="hide-menu"></div>
        </Fragment>
    );
}

export default MMenu;
