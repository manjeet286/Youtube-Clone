import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
	method: 'GET',
	hostname: 'youtube138.p.rapidapi.com',
	port: null,
	path: '/channel/channels/?id=UCJ5v_MCY6GNUBTO8-D3XoAg&hl=en&gl=US',
	headers: {
		'x-rapidapi-key': 'f68fd3567dmsh7c69d06e71573fap106ccajsn7e73626412ec',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};