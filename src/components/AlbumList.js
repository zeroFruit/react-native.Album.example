import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

const ROOT_URL = 'https://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = { albums: [] };
  }

  componentWillMount() {
    axios.get(ROOT_URL)
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }

  renderAlbums() {
    return this.state.albums.map(album => (
      <AlbumDetail
        album={ album }
        key={ album.title } />
    ));
  }
}

export default AlbumList;
