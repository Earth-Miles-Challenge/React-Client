import Cookies from 'universal-cookie';

export const getToken = () => {
	const cookies = new Cookies();
	return cookies.get('token');
}