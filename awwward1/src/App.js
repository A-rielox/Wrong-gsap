import React, { useEffect } from "react";

import "./styles/App.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import Cases from "./components/cases";
import IntroOverlay from "./components/introOverlay";

import gsap from "gsap";

function App() {
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);

		// para el flash inicial
		gsap.to("body", { css: { visibility: "visible" }, duration: 0 });

		// TIMELINE
		// para no tener q usar ref y tener q pasarlas con prop drilling => usa clases y se hace directo
		const tl = gsap.timeline();

		// .to(".intro-overlay", { css: { display: "none" } }) para q ya no esté el overlay al terminar la animación y pueda interactuar con la página
		tl.from(".line span", {
			y: 100,
			ease: "power4.out",
			delay: 1,
			skewY: 7,
			stagger: {
				amount: 0.3,
			},
			duration: 1.8,
		})
			.to(".overlay-top", {
				height: 0,
				ease: "expo.inOut",
				stagger: 0.4,
				duration: 1.6,
			})
			.to(".overlay-bottom", {
				width: 0,
				ease: "expo.easeInOut",
				delay: -0.8,
				stagger: {
					amount: 0.8,
				},
				duration: 1.6,
			})
			.to(".intro-overlay", { css: { display: "none" } })
			.from(".case-image img", {
				scale: 1.4,
				ease: "expo.easeInOut",
				delay: -3,
				stagger: {
					amount: 0.6,
				},
				duration: 1.6,
			});
	}, []);

	return (
		<div className="App">
			{/* estilos de overlay en App.scss */}
			<IntroOverlay />

			<Header />

			<Banner />

			<Cases />
		</div>
	);
}

export default App;
