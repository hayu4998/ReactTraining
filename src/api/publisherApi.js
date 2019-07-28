"use strict";
import axios from "axios"
import _ from 'lodash'
import config from '../config'

var PublisherApi = {
	getAllPublishers: function(cb) {
		axios
			.get(config.api+'/publisher')
			.then(response => response.data)
			.then(data => {
				//console.log(data)
				cb(_.cloneDeep(data)) 
			})
	},
	
    //Add the rest of the  CRUD operation here
};

module.exports = PublisherApi;