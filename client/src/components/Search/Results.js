import React from "react";
import SaveBtn from './SaveBtn';

const Results = props => (
  <div className="container-fluid">
		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<div className="panel panel-default">
						<div className="panel-heading">
							Results
						</div>
						<div className="panel-body">
							<div className="list-group">
						    {props.results.map(result => (
							    <div className="list-group-item" key={result._id}>
								  	<div className="row">
								  		<div className="col-xs-12 col-sm-3 col-sm-push-9 text-right">
								  			<div className="row">
								  				<div className="col-xs-12 col-sm-12 col-md-6">
								  					<a className="btn btn-primary" href={result.web_url} role="button" target="_blank">Read Article</a>
								  				</div>
													<div className="col-xs-12 col-sm-12 col-md-6">
								  					<SaveBtn onClick={()=> props.handleSaveArticle(result)} />
								  				</div>
								  			</div>
								  		</div>
								  		<div className="col-xs-12 col-sm-9 col-sm-pull-3">
								  			<h2>{result.headline.main}</h2>
								  			<p>{result.snippet}</p>
								  		</div>
								  	</div>
								  </div>
							  ))}
						  </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Results;
