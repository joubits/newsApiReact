import React from 'react';
import News from './News';

const Listnews = ( { listnews } ) => {
    return (
        <div className="row">
            { listnews.map( news => (
                <News key={news.url} news={news} />
             ) ) }
        </div>    
    )
}

export default Listnews
