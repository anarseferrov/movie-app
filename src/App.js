import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import MoviesUI from './components/MoviesUI';

class App extends Component {
  state = {
    search: [],
    query: '',
    error: false,
    isLoading: false
  }
  //when button clicks data send to state
  onSearchMovie = (event) => {
    const API_KEY = '81a42f6c'
    this.setState({ isLoading: true });
    fetch(`http://www.omdbapi.com/?s=${this.state.query}&apikey=${API_KEY}`)
      .then(response => response)
      .then(response => response.json())
      .then(response => {
        if (response.Response === "False") {
          this.setState({ error: true });
        } else {
          this.setState({ search: response.Search });
        }
        this.setState({ isLoading: false });
      })

      .catch(error => {
        console.log(error)
      })
    event.preventDefault()
  }
  //this function takes query from input and send to fetch
  inputChanged = (event) => {
    this.setState({
      query: event.target.value
    });
    if (this.state.query === '') {
      this.setState({
        error: false,
        search: []
      });
    }
  }

  render() {
    return (
      <div className="container">
        <SearchBar
          onSearchMovie={this.onSearchMovie}
          inputChanged={this.inputChanged}
        />
        <MoviesUI
          search={this.state.search}
          query={this.state.query}
          error={this.state.error}
          isLoading={this.state.isLoading}
        />
      </div>
    );
  }
}

export default App;
