"use strict";
import axios from "axios"
import _ from "lodash"
import config from '../config.js'

var BookApi = {
	getAllBooks: function (cb) {
		axios.get(config.api + '/book')
			.then(response => response.data)
			.then(data => {
				//console.log(data)
				cb(_.cloneDeep(data))
			})
	},

	deleteBook: function (bookId, cb) {
		axios.delete(config.api + '/book/' + bookId)
			.then(response => response.status)
			.then(status => {
				cb(status)
			})
	},

	getAuthorOfBook: function (bookId, cb) {
		axios.get(config.api + '/authorOfBook/' + bookId)
			.then(response => response.data)
			.then(data => {
				//console.log(data)
				cb(_.cloneDeep(data))
			})
	},

	addBook: function (book, cb) {
		// console.log('add book api called')
		axios.post(config.api + '/book', book)
			.then(response => response.status)
			.then(status => {
				console.log(status)
				cb(status)
			})
	}

	//Add the rest of the  CRUD operation here
};

module.exports = BookApi;