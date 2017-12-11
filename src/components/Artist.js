import React from 'react';

import '../css/Artists.css';

class Artist extends React.Component {
    render() {
        const {details, idx} = this.props;
        const index = parseInt(idx, 10) + 1;
        return (
            <div className="artist-details">
                <a href={`/artist/${details.name}`}><img src={details.image[2]['#text']} alt={details.name}/></a><br/>
                {index} - {details.name}
            </div>
        );
    }
}

export default Artist;