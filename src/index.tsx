import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { AppRouter } from "./routes/AppRouter";

import "../src/css/index.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={store}>
		<AppRouter />
	</Provider>
);
