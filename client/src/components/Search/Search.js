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
                  <label htmlFor="search">Search</label>
                  <input 
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Search a topic..."
                    id="search"
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
                  <label htmlFor="startYear">Start Year (Optional)</label>
                  <input 
                    onChange={props.handleInputChange}
                    value={props.startYear}
                    name="startYear"
                    type="text"
                    className="form-control" 
                    placeholder=""
                    id="startYear" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endYear">End Year (Optional)</label>
                  <input 
                    onChange={props.handleInputChange}
                    value={props.endYear}
                    name="endYear"
                    type="text"
                    className="form-control" 
                    placeholder=""
                    id="endYear"
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
