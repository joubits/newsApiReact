import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const Listnews = ( { listnews } ) => {
    return (
        <div className="row">
            { listnews.map( news => (
                <News key={news.url} news={news} />
             ) ) }
        </div>    
    )
}

Listnews.propTypes = {
    listnews: PropTypes.array.isRequired
}

export default Listnews
