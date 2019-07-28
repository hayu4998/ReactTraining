"use strict";
import axios from "axios"
import _ from "lodash"
import config from '../config'
 //var localauthors = require('./authorModel').authors;

// var _clone = function(item) {
// 	return JSON.parse(JSON.stringify(item)); // pass by value
// };

var AuthorApi = {
	getAllAuthors: function(cb) {
		axios.get(config.api+'/author')
			.then(response => response.data)
			.then(data => {
				//console.log(data)
				cb(_.cloneDeep(data)) 
			})
	},
	
    //Add the rest of the  CRUD operation here
};

module.exports = AuthorApi;