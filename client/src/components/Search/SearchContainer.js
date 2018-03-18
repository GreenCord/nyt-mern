import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import API from "../../utils/API";

import './SearchContainer.css';

class SearchResultContainer extends Component {
  state = {
    search: "",
    startYear: "",
    endYear: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    console.log('Results component mounted.');
  }

  getArticles = query => {
    // API.search(query)
    //   .then(res => this.setState({ results: res.data.data }))
    //   .catch(err => console.log(err));
    API.getArticles(query);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log('InputChange Test:',name,value);
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.getArticles(this.state.search);
  };

  handleClearResults = event => {
    event.preventDefault();
    this.setState({
      results: []
    });
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleClearResults={this.handleClearResults}
        />
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
