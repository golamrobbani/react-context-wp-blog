import React, { Fragment } from 'react';
import Instagram from '../../../components/instagram'
import AboutWidget from '../../../components/about'
import ContactWidget from '../../../components/contact'
import WebLinksWidget from '../../../components/web-links'
import CopyRight from '../../../components/copyright'

const Footer = () => {
    return (
        <Fragment>
            <footer id="footer" class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 col-md-offset-3">
                            <div class="footer-inner">
                                {/*==start-instagram==*/}
                                <div class="row">
                                    <div class="col-sm-12">
                                        <Instagram />
                                    </div>
                                </div>
                                {/*==end-instagram==*/}

                                <div class="footer-widgets">
                                    <div class="row">
                                        {/*==start-widget-area==*/}
                                        <div class="col-sm-4">
                                            <div class="widget">
                                                <AboutWidget />
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="widget">
                                                <ContactWidget />
                                            </div>
                                        </div>

                                        <div class="col-sm-4">
                                            <div class="widget">
                                                <WebLinksWidget />
                                            </div>
                                        </div>
                                        {/*==end-widget-area==*/}

                                        {/*==start-copyright==*/}
                                        <div class="col-sm-12">
                                            <CopyRight />
                                        </div>
                                        {/*==start-copyright==*/}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
}

export default Footer;
