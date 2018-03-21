import axios from 'axios';

const BASEURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const KEY = process.env.REACT_APP_NYTKEY;

export default {

	getArticles: function(query) {
		console.log('Axios getting articles with',query);
		return axios({
			method: 'get',
			url: BASEURL,
			params: {
					'api-key': KEY,
					'q': query.q,
					'begin_year': query.begin_year,
					'end_year': query.end_year
			}
		});
	},

	getDbArticles: function() {
		console.log('Loading saved articles...');
		return axios({
			method: 'get',
			url: '/api/articles'
		});
	},

	saveArticle: function(data) {
		return axios({
			method: 'post',
			url: '/api/articles',
			data: data
		});
	},

	deleteArticle: function(data) {
		console.log('Deleting article',data);
		return axios({
			method: 'post',
			url: '/api/articles/delete',
			data: data
		});
	},

	createComment: function(data,articleid) {
		console.log('API.createComment:',data);
		return axios({
			method: 'post',
			url: '/api/articles/comment/' + articleid,
			data: data
		});
	}
};