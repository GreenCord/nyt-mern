import React, { Component } from 'react';
import RemoveBtn from './RemoveBtn';
import CommentBtn from '../Comment/CommentBtn';
import CommentField from '../Comment/CommentField';
import API from '../../utils/API';
import Moment from 'react-moment';

class Saved extends Component {
	// constructor(props){
	// 	super(props)
	// }

	state = {
		comment: ''
	};

	handleInputChange = (i,event) => {
		console.log(event.target);
    const { name, value } = event.target;
    console.log('InputChange Comment Test:',name,value);
    this.setState({
      [name]: value
    });
  };
  
  // When the form is submitted, prepare the query used to perform the NYT API query
  handleFormSubmit = (i,event) => {
    event.preventDefault();
    // console.log('UNIMPLEMENTED: Submit comment.',this.state);
    API.createComment(this.state,i)
    .then(res=>{
    	console.log('Comment API res:',res);
    	this.props.loadSavedArticles();
    })
    .catch(err=>console.log(err));
  };

	// const Saved = props => (
	render() {
		return (
			<div ref={this.props.savedPanel} className="container-fluid">
				<div className="container">
					<div className="row">
						<div className="col-xs-12">
							<div className="panel panel-default">
								<div className="panel-heading">
									Saved Articles
								</div>
								<div className="panel-body">
									<div className="list-group">
										{this.props.results.map(result => (

									  <div href="#" className="list-group-item" key={result._id}>
									  	<div className="row">
									  		<div className="col-xs-12 col-sm-2 col-sm-push-10 text-right">
									  			<RemoveBtn onClick={() => this.props.handleRemoveArticle(result)} />
									  		</div>
									  		<div className="col-xs-12 col-sm-10 col-sm-pull-2">
									  			<h2>{result.headline}</h2>
									  			<p>
									  				<strong>
										  				<Moment format="MM/DD/YYYY">
					  										{result.pub_date}
					  									</Moment>
					  									&nbsp;&ndash;&nbsp;
					  								</strong>
									  				{result.snippet}
								  				</p>
									  		</div>
									  	</div>
									  	{result.comment.length ? (
									  		<div>
										  		{result.comment.map(comment => {
										  			return (
										  				<div className="row" key={comment._id}>
										  					<div className="col-xs-12">
										  						<div className="well">
										  							<p>
										  								<strong>
										  									<Moment format="MM/DD/YYYY">
										  										{comment.comment_date}
										  									</Moment>
										  									&nbsp;&ndash;&nbsp;
									  									</strong>
									  									{comment.comment}
								  									</p>
													  			</div>
													  		</div>
													  	</div>
										  			);
										  		})}
										  	</div>
									  	) : (
									  		<p><em>No comments yet.</em></p>
									  	)}
									  	
									  	<div className="row">
									  		<div className="col-xs-12">
									  			<form className="form-group form-horizontal">
									  				<CommentField handleInputChange={this.handleInputChange.bind(this,result._id)} />
									  			</form>
									  			<CommentBtn handleFormSubmit={this.handleFormSubmit.bind(this,result._id)} />
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
		)
	};
};
export default Saved;