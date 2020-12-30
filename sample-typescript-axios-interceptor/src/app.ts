import axios from 'axios';

axios.interceptors.response.use(res => res, (error) => {
	console.log(error.response.status)
	if (error.response.status === 401) {
		error.config.headers['Authorization'] = 'jwt-token-test'
		return axios(error.config);
	}

	return Promise.reject()
});

const url = 'https://b3dc6d2018f6b18fb8433be0dc47b814.m.pipedream.net';


(async () => {
	const response = await axios.post(url)
	console.log(response)
})()