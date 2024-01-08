import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../redux/store";
import useFetchAndLoad from "../common/hook/useFetchAndLoad";
import { useEffect } from "react";
import { Autenticacion } from "../services/services";
import { onListarAutenticacion } from "../redux/state/Autenticacion";

const useAuth = () => {
	debugger;
	let token;
	const _user: any = localStorage.getItem("TokenMineria");
	const autenticacionState = useSelector(
		(store: RootState) => store.autenticacion
	);

	const { callEndpoint } = useFetchAndLoad();
	const dispatch = useDispatch();

	useEffect(() => {
		const dataAutenticacion = async () => {
			await loadDataAutenticacion();
		};

		dataAutenticacion();
	}, []);

	const loadDataAutenticacion = async () => {
		// const Token: any = localStorage.getItem("TokenMineria");
		const data = await callEndpoint(Autenticacion(_user));

		if (data.status === 200) {
			dispatch(onListarAutenticacion({ listarAutenticacion: data.data }));
		}
	};

	if (_user && autenticacionState.listarAutenticacion) {
		token = _user;
	}

	return token;
};

const PrivateRouter = () => {
	const token = useAuth();

	return token ? (
		<Outlet />
	) : (
		// <Navigate to='mineria.cosapi.com.pe' />
		<>{(window.location.href = "http://mineria.cosapi.com.pe")}</>
		// <h1>Hola Mundo</h1>
	);
};

export default PrivateRouter;
