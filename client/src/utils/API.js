import axios from 'axios';
import dotenv from 'dotenv';

const BASEURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
const KEY = process.env.REACT_APP_NYTKEY;

export default {
	getArticles: function(query) {
		query['api-key'] = KEY;
		console.log('Get Article',query)
		return axios({
			method: 'get',
			url: BASEURL,
			data: {
				qs: query
			}
		});
	}
};