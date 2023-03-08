import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Logement from "./pages/Logement";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/logement/:id" element={<Logement />} />
					<Route path="/*" element={<Error />} />
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;