import React, { Fragment } from 'react';

const SinglePost = () => {
    return (
        <Fragment>

            <article class="post">
                <div class="post-header">
                    <h2 class="title"><span>Creativity is more than a song and dance act</span></h2>


                    <div class="post-details">
                        <div class="post-cat">
                            <a href="#">Travel</a>
                        </div>
                        <a href="#" class="post-date"><span>Aug 06, 2018</span></a>
                        <div class="post-details-child">
                            <a href="#" class="post-views">15 views</a>
                            <a href="#" class="post-comments">03 Comments</a>
                            <div class="post-share-icon">
                                <span>SHARE</span>
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook"></i><span>Facebook</span></a></li>
                                    <li><a href="#"><i class="fa fa-google"></i><span>Google Plus</span></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i><span>Twitter</span></a></li>
                                    <li><a href="#"><i class="fa fa-behance"></i><span>Behance</span></a></li>
                                    <li><a href="#"><i class="fa fa-dribbble"></i><span>Dribbble</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="post-media">
                    <img src="images/single.jpg" alt="Post" />
                </div>
                <div class="post-content">


                    <div class="the-excerpt">
                        <p>There’s nothing quite as frightening as the unknown. These words of former US Secretary of Defense Donald Rumsfeld should be truly terrifying (although the general consensus at the time was that they sounded like nonsense).</p>
                        <blockquote>
                            <p>Donec eget ipsum sagittis, varius leo non, mattis eros. Donec eleifend, urna ut elementum tincidunt, velit nibh pulvinar odio, ac tristique mauris magna sit amet arcu. Aenean vestibulum gravida rutrum. Morbi vel augue a lectus ultricies varius nec id elit. </p>
                        </blockquote>
                        <p>Design works within constraints. The Columban monks who crafted the Book of Kells worked with four inks on vellum, a material made of calfskin. The materials were simple but clearly defined. The cenobitic designers knew the hues of the inks, the weight of the vellum, and crucially, they knew the dimensions of each page.</p>
                        <h1>Heading H1</h1>
                        <h2>Heading H2</h2>
                        <h3>Heading H3</h3>
                        <h4>Heading H4</h4>
                        <h5>Heading H5</h5>
                        <h6>Heading H6</h6>
                        <p>
                            The ratio of the browser window is just one example of a known unknown on the web. The simplest way to deal with this situation is to use flexible units for layout: percentages rather than pixels. Instead, designers chose to pretend that the browser dimensions were a known known. They created fixed width layouts for one specific window size.
                </p>
                        <ol>
                            <li>The option to use percentages instead of pixels has been with us since the days of TABLE layouts.</li>
                            <li>Flexible images. Research carried out by Richard Rutter showed that browsers were becoming increasingly adept at resizing images. The intrinsic dimensions of an image need not be a limiting factor.</li>
                            <li>Media queries. Thanks to the error-handling model of CSS, browsers had been adding feature upon feature over time.</li>
                        </ol>
                        <p>
                            Suspendisse eleifend nulla ac rhoncus egestas. Sed vehicula ipsum vitae finibus condimentum. Phasellus rhoncus, nulla et sodales sodales, massa nisl volutpat odio, ac sodales risus metus sollicitudin odio.
                </p>
                    </div>


                    <div class="post-tags">
                        <strong>Tags: </strong>
                        <ul>
                            <li><a href="#">Art</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Trip</a></li>
                            <li><a href="#">Tip</a></li>
                        </ul>
                    </div>
                    <div class="post-author">
                        Writed by  <a href="#">Kendy</a>
                    </div>
                </div>

            </article>

        </Fragment>
    );
}

export default SinglePost;
