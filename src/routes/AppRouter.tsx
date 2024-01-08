import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashBoard from "./DashBoardRouter";
import PrivateRouter from "./PrivateRouter";

import Inicio from "../screens/inicio/Inicio";
import PreUso from "../screens/preUso/PreUso";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/intranet/modulooperaciones' element={<PrivateRouter />}>
					<Route path='DashBoard' element={<DashBoard />}>
						<Route path='inicio' element={<Inicio />} />
						<Route path='preuso' element={<PreUso />} />
					</Route>
				</Route>
				{/* <Route path='/' element={<Inicio />}></Route> */}
			</Routes>
		</BrowserRouter>
	);
};
