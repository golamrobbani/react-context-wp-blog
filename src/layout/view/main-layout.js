import React, { Fragment } from 'react';

import Preloader from '../../components/preload'
import MobileMenu from '../../components/mobile-menu'

import Sidebar from '../../features/sidebar'
import Footer from '../../features/footer'


const MainLayout = (props) => {
    return (
        <Fragment>
            {/* start-preload */}
            {/* <Preloader /> */}
            {/* end-preload */}


            {/* start-mobile-menu */}
            <MobileMenu />
            {/* end-mobile-menu */}


            {/* start-main-content */}
            <div class="container">
                <div class="row">
                    {/* start-left-sidebar */}
                    <div class="col-md-3">
                        <Sidebar />
                    </div>
                    {/* end-left-sidebar */}

                    {/* start-right-content */}
                    <div class="col-md-9 col-md-offset-3">
                        <div class="posts">
                            <div class="posts-inner">
                                {props.children}
                            </div>
                        </div>
                    </div>
                    {/* end-right-content */}
                </div>
            </div>
            {/* end-main-content */}


            {/* start-footer */}
            <Footer />
            {/* end-footer */}
        </Fragment>
    );
}

export default MainLayout;
