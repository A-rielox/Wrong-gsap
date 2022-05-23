import { useEffect, useRef } from "react";

import "./App.scss";

import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import People from "./imagen.avif";

function App() {
	let container = useRef(null);
	let image = useRef(null);

	gsap.registerPlugin(CSSRulePlugin);
	let imageReveal = CSSRulePlugin.getRule(".img-container::after");

	let tl = gsap.timeline();

	useEffect(() => {
		tl.to(container, { visibility: "visible", duration: 0 })
			.to(imageReveal, {
				cssRule: { width: "0%" },
				ease: "power2",
			})
			.fromTo(
				image,
				{ scale: 1.6 },
				{ scale: 1, ease: "power2", delay: -1 }
			);
	}, []);

	return (
		<section className="main">
			<p>GSAP IMAGE REVEAL</p>
			<div className="container" ref={(el) => (container = el)}>
				<>
					<div className="img-container">
						<img
							ref={(el) => {
								image = el;
							}}
							alt="fotito"
							src={People}
						/>
					</div>
				</>
			</div>
		</section>
	);
}

export default App;

/* 


function App() {
	let logoItem = useRef(null);

	useEffect(() => {
		// logoItem.style.display = "none";
		// el tiene el target, duration y luego { el object con css props }
		gsap.to(logoItem, {
			opacity: 1,
			y: -60,
			ease: "easyOut",
			duration: 1.8,
		});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img
					src={logo}
					className="App-logo"
					alt="logo"
					ref={(el) => (logoItem = el)}
				/>

*/
