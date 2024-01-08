import axios from "axios";
import apiUrl from "../common/constants/apiUrl";

// const instance = axios.create({
// 	baseURL: apiUrl.BASE_URL,
// 	headers: {
// 		"Access-Control-Allow-Headers": "*",
// 		"Access-Control-Allow-Origin": "*",
// 		"Access-Control-Allow-Methods": "*",
// 		"X-Requested-With": "*",
// 	},
// });

const intanceIS = axios.create({
	baseURL: apiUrl.AUTENTICACION_URL,
	headers: {
		"Access-Control-Allow-Headers": "*",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "*",
		"X-Requested-With": "*",
	},
});

export const loadAbort = () => {
	const controller = new AbortController();
	return controller;
};

export const Autenticacion = (Token: string) => {
	const controller = loadAbort();

	return {
		call: intanceIS.get(
			`${apiUrl.AUTENTICACION_URL}/decodificarToken?token=${Token}`,
			{
				signal: controller.signal,
			}
		),
		controller,
	};
};
