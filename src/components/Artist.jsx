import React from 'react';
import PropTypes from 'prop-types';

import '../css/Artists.css';

class Artist extends React.Component {
  render() {
    const { details, idx } = this.props;
    const index = parseInt(idx, 10) + 1;
    return (
      <div className="artist-details">
        <a href={`/artist/${details.mbid}`}><img src={details.image[2]['#text']} alt={details.name} /></a><br />
        {index} - {details.name}
      </div>
    );
  }
}

Artist.propTypes = {
  details: PropTypes.shape.isRequired,
  idx: PropTypes.string.isRequired,
};

export default Artist;
