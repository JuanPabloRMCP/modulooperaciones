import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import DashBoard from "./DashBoardRouter";
import PrivateRouter from "./PrivateRouter";

import Inicio from "../screens/inicio/Inicio";
import PreUso from "../screens/preUso/PreUso";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Navigate replace to='/intranet/moduloOpe' />}
				/>
				<Route path='/intranet/moduloOpe' element={<PrivateRouter />}>
					<Route
						path='/intranet/moduloOpe'
						element={<Navigate replace to='dashboard/inicio' />}
					/>
					<Route path='dashboard' element={<DashBoard />}>
						<Route path='inicio' element={<Inicio />} />
						<Route path='preuso' element={<PreUso />} />
					</Route>
				</Route>
				{/* <Route path='/' element={<Inicio />}></Route> */}
			</Routes>
		</BrowserRouter>
	);
};
