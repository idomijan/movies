import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class CreateEditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name || '',
      genre: props.genre || '',
      rating: props.rating || '',
      explicit: props.explicit || false
    };

    this.onChangeItem = this.onChangeItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeItem(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, genre, rating, explicit } = this.state;
    const { id, history } = this.props;
    //We're editing
    if (id) {
      axios
        .put(`/api/v1/movies/${id}`, {
          name: name,
          genre: genre,
          rating: rating,
          explicit: explicit
        })
        .then(() => {
          this.props.updateState(name, genre, rating, explicit);
          this.props.toggleEdit();
        });
    } else {
      //we're not
      axios
        .post('/api/v1/movies', {
          name: name,
          genre: genre,
          rating: rating,
          explicit: explicit
        })
        .then(() => {
          history.push('/');
        });
    }
  }

  render() {
    const { name, genre, rating, explicit } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Title of the movie</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={this.onChangeItem}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <input
            name="genre"
            type="text"
            className="form-control"
            id="genre"
            value={genre}
            onChange={this.onChangeItem}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            name="rating"
            type="number"
            className="form-control"
            id="rating"
            value={rating}
            onChange={this.onChangeItem}
          />
        </div>
        <div className="form-group">
          <label htmlFor="explicit">Is this movie explicit</label>
          <select
            name="explicit"
            type="boolean"
            className="form-control"
            id="explicit"
            value={explicit}
            onChange={this.onChangeItem}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="buttom"
              className="btn btn-danger"
              onClick={this.props.toggleEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(CreateEditMovie);
