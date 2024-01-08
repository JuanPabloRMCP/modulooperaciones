import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Header from "../components/header/Header";
import Inicio from "../screens/inicio/Inicio";
import PreUso from "../screens/preUso/PreUso";

const DashBoard = () => {
	debugger;
	const autenticacionState = useSelector(
		(store: RootState) => store.autenticacion
	);
	let navigate = useNavigate();

	const logout = () => {
		navigate("/intranet/iniciosesion");
	};

	return (
		<div className='App'>
			<div className='saContenedor'>
				<header className='saContenedorCabecera'>
					<Header
						titulo='SELECCIÓN DE APLICACIONES'
						nombreUsuario={autenticacionState.listarAutenticacion?.nombre.toLowerCase()}
						cargoUsuario={autenticacionState.listarAutenticacion?.cargo.toLowerCase()}
						logout={logout}
					/>
				</header>
			</div>
			<section className='saContenedorDetalle'>
				<Routes>
					<Route path='/modulooperaciones' element={<Inicio />} />
					<Route path='inicio' element={<Inicio />} />
					<Route path='preuso' element={<PreUso />} />
				</Routes>
			</section>
		</div>
	);
};

export default DashBoard;
