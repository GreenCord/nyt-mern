import React, { Component } from "react";
import Search from "./Search";
import Results from "./Results";
import Saved from './Saved';
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

  // When this component mounts, load the saved articles from the database
  componentDidMount() {
    this.loadSavedArticles();
  };

  // Updates state of various inputs as they change
  handleInputChange = event => {
    const { name, value } = event.target;
    // console.log('InputChange Test:',name,value);
    this.setState({
      [name]: value
    });
  };
  
  // When the form is submitted, prepare the query used to perform the NYT API query
  handleFormSubmit = event => {
    event.preventDefault();
    let query = {
      q: this.state.q,
      begin_date: this.state.begin_date,
      end_date: this.state.end_date
    }
    this.getArticles(query);
  };

  // Get Articles from the NYT API query
  getArticles = query => {
    console.log('getArticles, using query',query);
    API.getArticles(query)
    .then(res=>{
      console.log('Results:',res.data.response.docs);
      this.setState({ results: res.data.response.docs });
    })
    .catch(err=>console.log(err));
  };

  // Load any saved articles from the database and update the state
  loadSavedArticles = () => {
    API.getDbArticles()
    .then(res => {
      console.log('Retrieved saved articles: ', res.data);
      this.setState({saved: res.data})
    })
    .catch(err => console.log(err));
  };

  // Saves a selected article to the database.
  handleSaveArticle = data => {
    console.log('Saving article:',data);
    const dbData = {
      nyt_id: data._id,
      headline: data.headline.main,
      snippet: data.snippet,
      web_url: data.web_url,
      pub_date: data.pub_date
    }
    API.saveArticle(dbData)
    .then(res=>{
      this.loadSavedArticles();
      // this.refs[savedpanel].scrollIntoView();
      console.log('refs',this)
    })
    .catch(err=>console.log(err));
  };

  // Clears the results state to empty the results panel.
  handleClearResults = event => {
    event.preventDefault();
    this.setState({
      results: []
    });
  };

  handleRemoveArticle = data => {
    console.log('Handle Remove Article: ',data);
    API.deleteArticle(data)
    .then(res=>this.loadSavedArticles())
    .catch(err=>console.log(err));
  };

  handleAddComment = data => {
    console.log('UNIMPLEMENTED: Handle add comment: ',data);
  };

  // componentDidUpdate() {
  //   // this.scrollIntoView();
  //   console.log('This updated:',this);
  // };

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
        <Saved
          results={this.state.saved}
          loadSavedArticles={this.loadSavedArticles}
          handleRemoveArticle={this.handleRemoveArticle}
          handleAddComment={this.handleAddComment}
        />
        
      </div>
    );
  }
};

export default SearchResultContainer;
