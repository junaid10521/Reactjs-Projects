import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://react-burger-builder-c2583.firebaseio.com/'
});

export default instance;