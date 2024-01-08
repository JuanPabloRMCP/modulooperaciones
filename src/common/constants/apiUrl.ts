const BASE_URL = process.env.REACT_APP_BASE_URL;
const AUTH_URL = process.env.REACT_APP_ICSS_URL;

const apiUrls = {
	BASE_URL: BASE_URL,
	AUTENTICACION_URL: `${AUTH_URL}/Usuario`,
};

export default apiUrls;
