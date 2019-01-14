import React, { Component } from 'react';
import ListItems from './ListItems';
import ListItem from './ListItem';
import axios from 'axios';
import _ from 'lodash';

class ItemsBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: {}
    };
  }

  componentDidMount() {
    axios.get('/api/v1/movies').then(response => {
      this.setState({
        loading: false,
        movies: response.data
      });
    });
  }

  render() {
    if (this.state.loading === true) {
      return <h1>Lading movies </h1>;
    }
    return <ListItems>{this.renderMovies()}</ListItems>;
  }

  renderMovies() {
    return _.map(this.state.movies, movie => {
      return (
        <ListItem
          key={movie.id}
          name={movie.name}
          genre={movie.genre}
          rating={movie.rating}
          explicit={movie.explicit}
          id={movie.id}
        />
      );
    });
  }
}

export default ItemsBody;
