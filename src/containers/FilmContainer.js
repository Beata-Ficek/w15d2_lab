import React from 'react';
import FilmSelector from '../components/FilmSelector';
import FilmDetail from '../components/FilmDetail';

class FilmContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      films: [],
      currentFilm: null
    };
    this.handleFilmSelected = this.handleFilmSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://ghibliapi.herokuapp.com/films';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({films: data})
    });

    request.send();
  }

  handleFilmSelected(index) {
    const selectedFilm = this.state.films[index];
    this.setState({currentFilm: selectedFilm})
  }

  render(){
    return (
      <div>
        <h2>Film Container</h2>
        <FilmSelector films={this.state.films} onFilmSelected={this.handleFilmSelected} />
        <FilmDetail film={this.state.currentFilm} />
      </div>
    );
  }
}

export default FilmContainer;
