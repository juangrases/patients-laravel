const axios = require('axios');


const BASE_URL = 'http://192.168.10.10/'

axios.get(BASE_URL+'/api/patient')
	.then(function (response) {
		// handle success
		console.log(response);
	})