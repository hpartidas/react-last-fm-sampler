import React, {Component} from 'react';
import config from '../config/config';

import '../css/App.css';

import Artist from './Artist';

class App extends Component {
  constructor() {
    super();
    this.state = {
      topAlbums: {},
      artists: {}
    };

    this.getTopAlbums = this.getTopAlbums.bind(this);
    this.getTopArtists = this.getTopArtists.bind(this);
  }

  componentDidMount() {
    const artists = localStorage.getItem(`top-50-artists`);
    if (artists) {
      this.setState({artists: artists});
    } else {
      this.getTopArtists();
    }
  }

  getTopArtists() {
    const promise = fetch(`${config.LAST_FM_API_URI}/2.0/?method=chart.gettopartists&api_key=${config.LAST_FM_API_KEY}&format=json`)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.statusText);
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let artists = {...this.state.artists};
        artists = {...data.artists.artist};
        this.setState({artists: artists});
        localStorage.setItem(`top-50-artists`, artists.toJSON());
      })
      .catch((error) => {
        console.log(`Request failed with error: ${error}`);
      });
  }

  getTopAlbums(artist) {
    const uri = `${config.LAST_FM_API_URI}/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${config.LAST_FM_API_KEY}&format=json`;
    fetch(uri)
      .then((response) => {
        console.log(`Request with response: ${response}`);
      })
      .catch((error) => {
        console.log(`Request failed with error: ${error}`);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Top Artists</h1>
        <div className="artist-list">
          {
            Object
              .keys(this.state.artists)
              .map(idx => <Artist key={idx} idx={idx} details={this.state.artists[idx]}/>)
          }
        </div>
      </div>
    );
  }
}

export default App;
