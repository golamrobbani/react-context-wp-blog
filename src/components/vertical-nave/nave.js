import React, { Fragment } from 'react';
import { Link } from "@reach/router";

const Nave = () => {
    return (
        <Fragment>

            <div class="main-menu">
                <nav>
                    <ul class="menu-list">
                        <li class="menu-item-has-children">
                            <Link to="/">Home</Link>
                            <ul class="sub-menu">
                                <li>
                                    <Link to="/">Standard Layout</Link>
                                </li>
                                <li>
                                    <a href="index-grid.html">Grid Layout</a>
                                </li>
                                <li>
                                    <a href="index-grid-1st-large.html">Grid 1st Large</a>
                                </li>
                                <li>
                                    <a href="index-list.html">List Layout</a>
                                </li>
                                <li>
                                    <a href="index-list-1st-large.html">List 1st Large</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/lifestyle">Lifestyle</Link>
                        </li>
                        <li>
                            <Link to="/travel">Travel</Link>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="single.html">Single</a>
                            <ul class="sub-menu">
                                <li>
                                    <a href="single.html">Image</a>
                                </li>
                                <li>
                                    <a href="single.html">Gallery</a>
                                </li>
                                <li>
                                    <a href="single.html">Slideshow</a>
                                </li>
                                <li>
                                    <a href="single.html">Youtube Video</a>
                                </li>
                                <li>
                                    <a href="single.html">Vimeo Video</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/deshboard">Deshboard</Link>
                        </li>

                    </ul>
                </nav>
            </div>


        </Fragment>
    );
}

export default Nave;
