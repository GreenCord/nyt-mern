import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchContainer from './components/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component { 
  state = {
    currentPage: 'Search'
  };

  renderPage = () => {
    switch (this.state.currentPage) {
      case 'Search':
        return <SearchContainer />;
      default: 
        return console.log('Nothing to show. Return 404?');
    }
  }

  render() {
    return (
      <Router>
        <div id="body">
          <div className="main-wrapper">
            <Header />
            <Switch>
              <Route exact path="/">
                {this.renderPage()}
              </Route>
            </Switch>
          </div>
          <footer className="page-footer">
            <Footer />
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;