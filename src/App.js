import { Route, Routes, Navigate } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import Addtopic from "./components/Addtopic";

function App() {
	const name = localStorage.getItem("name");

	return (
		<Routes>
			{<Route path="/dashboard" exact element={<Dashboard/>} />}
			<Route path="/addtopic" exact element={<Addtopic/>} />
			<Route path="/landing" exact element={<Landing/>} />
			<Route path="/"element={<Navigate replace to="/landing"/>} />
		</Routes>
	);
}

export default App;