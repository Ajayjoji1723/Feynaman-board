import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/Profile";
import Addtopic from "./components/Addtopic";
import Landing from "./components/Landing Page";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{<Route path="/dashboard" exact element={<Dashboard/>} />}
			<Route path="/addtopic" exact element={<Addtopic />} />
			<Route path="/landing" exact element={<Landing />} />
			<Route path="/"element={<Navigate replace to="/landing" />} />
		</Routes>
	);
}

export default App;