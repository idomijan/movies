import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

const SingleMovie = ({
  name,
  genre,
  rating,
  explicit,
  onEdit,
  id,
  history
}) => {
  return (
    <div className={`movie ${explicit ? 'bg-danger' : 'bg-success'} `}>
      <div className="movie-block">
        <div className="movie-name">
          <h4>{name}</h4>
        </div>
        <div className="movie-text">
          {explicit
            ? 'This movie contains explicit content'
            : 'This movie is safe for children'}
        </div>
        <div className="d-flex justify-content-between align-items-end mt-5">
          <button
            className="btn btn-link text-white"
            onClick={() => {
              axios.delete(`/api/v1/movies/${id}`).then(() => {
                history.push('/');
              });
            }}
          >
            Delete
          </button>
          <button className="btn btn-link text-white" onClick={onEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SingleMovie);
