import React, { Fragment } from 'react';

const Search = () => {
    return (
        <Fragment>

            <div class="box-search">
                <form role="search" method="get" action="#">
                    <input type="text" placeholder="Search ..." name="s" />
                </form>
            </div>

        </Fragment>
    );
}

export default Search;
