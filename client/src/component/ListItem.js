import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ name, genre, rating, explicit, id }) => {
  return (
    <Link
      to={`/${id}`}
      className={`list-group-item ${
        explicit ? 'bg-success' : 'bg-danger'
      } mt-50 d-flex justify-content-center align-items-center`}
    >
      <h4>
        {name} | {genre} | {explicit ? 'Explicit' : 'Safe'}
      </h4>
    </Link>
  );
};

export default ListItem;
