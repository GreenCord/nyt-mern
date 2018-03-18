import React from "react";

const Search = props => (
  <div className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <div className="panel panel-default">
            <div className="panel-heading">
              Search
            </div>
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <label htmlFor="q">Search</label>
                  <input 
                    onChange={props.handleInputChange}
                    value={props.q}
                    name="q"
                    type="text"
                    className="form-control"
                    placeholder="Search a topic..."
                    id="q"
                  />
                </div>
                {/*
                <div className="form-group">
                  <label htmlFor="num-limit">Number of Articles</label>
                  <select className="form-control" id="num-limit">
                    <option>1</option>
                    <option>5</option>
                    <option>10</option>
                  </select>
                </div>
                */}
                <div className="form-group">
                  <label htmlFor="begin_date">Start Year (Optional)</label>
                  <input 
                    onChange={props.handleInputChange}
                    value={props.begin_date}
                    name="begin_date"
                    type="text"
                    className="form-control" 
                    placeholder=""
                    id="begin_date" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="end_date">End Year (Optional)</label>
                  <input 
                    onChange={props.handleInputChange}
                    value={props.end_date}
                    name="end_date"
                    type="text"
                    className="form-control" 
                    placeholder=""
                    id="end_date"
                  />
                </div>
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                  <i className="material-icons">search</i>Search
                </button>
                <button onClick={props.handleClearResults} className="btn btn-warning">
                  <i className="material-icons">delete_sweep</i>Clear Results
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Search;
