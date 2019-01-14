import React, { Component } from 'react';
import axios from 'axios';
import Movie from './Movie';

class SingleItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movie: {}
    };
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/v1/movies/${id}`).then(res => {
      this.setState({
        loading: false,
        movie: res.data
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <h3>Loading...</h3>;
    }
    return (
      <Movie
        name={this.state.movie.name}
        genre={this.state.movie.genre}
        rating={this.state.movie.rating}
        explicit={this.state.movie.explicit}
        id={this.state.movie.id}
      />
    );
  }
}

export default SingleItem;
