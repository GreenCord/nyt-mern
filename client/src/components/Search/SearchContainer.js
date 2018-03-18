import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import API from "../../utils/API";

import './SearchContainer.css';

class SearchResultContainer extends Component {
  state = {
    q: "",
    begin_date: "",
    end_date: "",
    results: [],
    saved: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    console.log('Results component mounted.');
    this.loadSavedArticles();
  }

  getArticles = query => {
    // API.search(query)
    //   .then(res => this.setState({ results: res.data.data }))
    //   .catch(err => console.log(err));
    console.log('getArticles, using query',query);
    API.getArticles(query)
    .then(res=>{
      console.log('Results:',res.data.response.docs);
      this.setState({ results: res.data.response.docs });
    })
    .catch(err=>console.log(err));
  };

  loadSavedArticles = () => {
    API.getDbArticles()
    .then(res => console.log('Loading saved articles:',res))
    .catch(err => console.log(err));
  }

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
    let query = {
      q: this.state.q,
      begin_date: this.state.begin_date,
      end_date: this.state.end_date
    }
    this.getArticles(query);
  };

  handleSaveArticle = data => {
    console.log('UNIMPLEMENTED: Saving article:',data);
    const dbData = {
      nyt_id: data._id,
      headline: data.headline,
      snippet: data.snippet,
      web_url: data.web_url
    }
    API.saveArticle(dbData)
    .then(res=>this.loadSavedArticles)
    .catch(err=>console.log(err));
  }

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
          search={this.state.q}
          begin_date={this.state.begin_date}
          end_date={this.state.end_date}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleClearResults={this.handleClearResults}
        />
        <Results 
          results={this.state.results} 
          handleSaveArticle={this.handleSaveArticle}
        />
      </div>
    );
  }
}

export default SearchResultContainer;
