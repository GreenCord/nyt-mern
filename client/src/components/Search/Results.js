import React from "react";

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
								  		<div className="col-xs-12 col-sm-2 col-sm-push-10 text-right"><a className="btn btn-success" href="" role="button">Save</a></div>
								  		<div className="col-xs-12 col-sm-10 col-sm-pull-2">
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
