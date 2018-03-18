import axios from 'axios';
import dotenv from 'dotenv';



export default {
	getArticles: function() {
		const key = process.env.REACT_APP_NYTKEY;
		return console.log('UNIMPLEMENTED: Get Article',key);
	}
};