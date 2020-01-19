import React, { Fragment } from 'react';

const Pagination = () => {
    return (
        <Fragment>

            <div class="pagination-wrap">

                <div class="older">
                    <a href="#">Older Posts <i class="fa fa-angle-double-right"></i></a>
                </div>
                <div class="newer">
                    <a href="#"><i class="fa fa-angle-double-left"></i> Newer Posts</a>
                </div>
            </div>

        </Fragment>
    );
}

export default Pagination;
