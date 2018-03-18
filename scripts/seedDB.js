const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytmerndb"
);

const articleSeed = {
		nyt_id: '5a9e670f5d97b30001393d44',
		headline:'An App That Helps You Ride Like a Pro — by Riding With a Pro',
		snippet:'Stomp Sessions, a new app created by former professional extreme sports athletes, helps link up skaters and riders with athletes for lessons.',
		web_url:'https://www.nytimes.com/2018/03/06/travel/skiing-skateboarding-app-stomp-sessions-review.html',
		pub_date:'2018-03-06T10:01:45+0000'
	};

db.Article
	.remove({})
	.then(()=> db.Article.collection.insertOne(articleSeed))
	.then(data=>{
		console.log("Record inserted!");
		process.exit(0);
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});