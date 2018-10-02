import React from 'react';

const FilmSelector = (props) => {
  const options = props.films.map((film, index) => {
    return <option value={index} key={index}>{film.title}</option>
  })

  function handleChange(event) {
    props.onFilmSelected(event.target.value);
  }

  return (
    <select id="film-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default">Choose a film...</option>
      { options }
    </select>
  )
}

export default FilmSelector;
