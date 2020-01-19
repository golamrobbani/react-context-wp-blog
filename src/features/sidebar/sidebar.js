import React, { Fragment } from 'react';

import Logo from '../../components/logo'
import VarticalNave from '../../components/vertical-nave'
import SocialIcon from '../../components/social-icon'
import SearchBox from '../../components/search'
import CopyRight from '../../components/copyright'


const Sidebar = () => {
    return (
        <Fragment>
            <div class="header affix">
                <div class="table">
                    <div class="table-cell">
                        <Logo />
                        <VarticalNave />
                        <SocialIcon />
                        <SearchBox />
                        <CopyRight />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Sidebar;
