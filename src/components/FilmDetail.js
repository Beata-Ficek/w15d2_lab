import React from 'react';

const FilmDetail = (props) => {
  if (!props.film) return null;
  return (
    <React.Fragment>
      <h3>{props.film.title}</h3>
      <p>Description: {props.film.description}</p>
      <p>Director: {props.film.director}</p>
      <p>Release Date: {props.film.release_date}</p>
    </React.Fragment>

  );
}

export default FilmDetail;
