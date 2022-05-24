import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import "./styles/App.scss";
import Header from "./components/header";

import gsap from "gsap";

import Home from "./pages/home";
import CaseStudies from "./pages/caseStudies";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";
import Navigation from "./components/navigation";

const routes = [
	{ path: "/", name: "Home", Component: Home },
	{ path: "/case-studies", name: "caseStudies", Component: CaseStudies },
	{ path: "/approach", name: "approach", Component: Approach },
	{ path: "/services", name: "services", Component: Services },
	{ path: "/about-us", name: "about", Component: About },
];

function debounce(fn, ms) {
	let timer;

	return () => {
		clearTimeout(timer);

		timer = setTimeout(() => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}

function App() {
	// para el flash inicial
	gsap.to("body", { css: { visibility: "visible" }, duration: 0 });

	//  para q se actualizen las dimensiones al hacer el resize de la pantalla
	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
	});

	useEffect(() => {
		let vh = dimensions.height * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);

		const debouncedHandleResize = debounce(function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		}, 1000);

		window.addEventListener("resize", debouncedHandleResize);

		return () => {
			window.removeEventListener("resize", debouncedHandleResize);
		};
	}, []);

	return (
		<>
			<Header />

			{console.log(dimensions)}

			<div className="App">
				{routes.map(({ path, Component }) => (
					<Route key={path} exact path={path}>
						<Component /* dimensions={dimensions} */ />
					</Route>
				))}
			</div>

			{/* se pone aqui para q quede detras del resto */}
			<Navigation />
		</>
	);
}

export default App;
