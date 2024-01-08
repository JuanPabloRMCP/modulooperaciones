import { useEffect, useState } from "react";

const useFetchAndLoad = () => {
	const [loading, setLoading] = useState(false);
	let controller: any;

	const callEndpoint = async (axiosCall: any) => {
		if (axiosCall.controller) controller = axiosCall.controller;
		setLoading(true);
		let result = null;
		try {
			result = await axiosCall.call;
		} catch (err) {
			result = err;
			setLoading(false);
		}
		setLoading(false);
		return result;
	};
	const cancelEndpoint = () => {
		setLoading(false);
		controller && controller.abort();
	};

	useEffect(() => {
		return () => {
			cancelEndpoint();
		};
	}, []);

	return { loading, callEndpoint, setLoading };
};
export default useFetchAndLoad;
