import React, { Fragment, useState, useEffect } from 'react';

import Axios from 'axios'
import ClientConfig from '../../app/client-config'
import { Link } from '@reach/router'
import RenderHTML from 'react-render-html';

const WPSiteURL = ClientConfig.siteUrl



const FuncAuthorBox = (props) => {

    const [error, setError] = useState('')
    const [user, setUser] = useState({})


    useEffect(() => {
        if (props.id) {
            Axios.get(`${WPSiteURL}/wp-json/wp/v2/users/${props.id}`)
                .then((r) => {
                    console.log('useEffectResponseData', r.data)
                    setUser(r.data)
                    setError('')
                })
                .catch((e) => {
                    setError('Server Error')
                })
        }
    }, [props])

    const createMarkup = (data) => ({
        __html: data
    });


    return (
        <Fragment>
          { error && <div className="alert alert-danger" dangerouslySetInnerHTML={createMarkup(error)} />}
        
            {Object.keys(user).length > 0 && (

                <div class="author-box">
                    <div class="header-top clearfix">
                        <div class="avatar-author">
                            <img src={user.avatar_urls['96']} alt="Avatar" />
                        </div>
                        <div class="author-name">
                            <h3 class="title">
                                <Link to={`/user/${user.id}`}>{user.name}</Link>
                            </h3>
                            <div class="author-socials">

                                <Link to={user.acf.behance_link} target="_blank" class="fa fa-behance" title="Behance"></Link>
                                <Link to={user.acf.dribbble_link} target="_blank" class="fa fa-dribbble" title="Dribbble"></Link>
                                <Link onClick={(event) => { event.preventDefault(); window.open(`${user.acf.facebook_link}`); }} to="../../" target="_blank" class="fa fa-facebook" title="Facebook"></Link>
                                <Link to={user.acf.google_link} target="_blank" class="fa fa-google" title="Google Plus"></Link>
                                <Link to={user.acf.twitter_link} target="_blank" class="fa fa-twitter" title="Twitter"></Link>
                            </div>
                        </div>

                    </div>
                    <div class="author-description">
                        {user.description}
                        <Link to={`/user/${user.id}`}>Get in touch.</Link>
                    </div>
                </div>

            )}

        </Fragment>
    );
}

export default FuncAuthorBox;
