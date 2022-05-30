import { useEffect, useRef } from "react";

import "./App.scss";

import imgGirl from "./images/girl.webp";
import imgBoy from "./images/boy.webp";
import arrow from "./images/arrow-right.svg";
	
import gsap from "gsap";

function App() {
	let app = useRef(null);
	let images = useRef(null);
	let content = useRef(null);

	let tl = gsap.timeline().delay(0.5);

	useEffect(() => {
		// IMAGES VARS
		const girlImage = images.firstElementChild;
		const boyImage = images.lastElementChild;

		// CONTENT VARS
		const headlineFirst = content.children[0].children[0];
		const headlineSecond = headlineFirst.nextSibling;
		const headlineThird = headlineSecond.nextSibling;
		const contentP = content.children[1];
		const contentButton = content.children[2];

		// ====================== IMAGES ANIMATIONS
		// con el 0.2 afuera, hace q no se espere a terminar la anterior para empezar, sino q lo hace altiro 0.2 segundos desde q empieza la anterior
		// prettier-ignore
		tl
		.to(app, { visibility: "visible", duration: 0 })
		.from(girlImage, { y: 1280,ease: "power2", duration: 1.2 }, 'Start')
		.from(girlImage.firstElementChild, {scale: 1.6, ease: 'power2', duration: 1.5}, 0.2)
		.from(boyImage, { y: 1280,ease: "power2", duration: 1.2 }, 0.2)
		.from(boyImage.firstElementChild, {scale: 1.6, ease: 'power2', duration: 1.5}, 0.2)

		// ====================== TEXT ANIMATIONS
		// es y: 44 xq tienen una height de 44 en el css
		tl.from(
			[
				headlineFirst.children,
				headlineSecond.children,
				headlineThird.children,
			],
			{ y: 44, ease: "power2", duration: 1, stagger: 0.2 },
			"Start"
		)
			.from(contentP, { y: 20, opacity: 0, ease: "power2" }, 0.8)
			.from(contentButton, { x: -30, opacity: 0, ease: "power2" }, 1);
	}, [tl]);

	return (
		<div className="hero" ref={(el) => (app = el)}>
			<div className="container">
				<div className="hero-inner">
					{/* ====== HERO CONTENT ====== */}
					<div className="hero-content">
						<div
							className="hero-content-inner"
							ref={(el) => (content = el)}
						>
							<h1>
								<div className="hero-content-line">
									<div className="hero-content-line-inner">
										Relieving the burden
									</div>
								</div>
								<div className="hero-content-line">
									<div className="hero-content-line-inner">
										of disease caused
									</div>
								</div>
								<div className="hero-content-line">
									<div className="hero-content-line-inner">
										by behaviors.
									</div>
								</div>
							</h1>

							<p>
								Better treats serious cardiometabolic diseases to
								transform lives and reduce healthcare utilization
								through the use of digital therapeutics.
							</p>

							<div className="btn-row">
								<button className="explore-button">
									Explore
									<div className="arrow-icon">
										<img src={arrow} alt="row" />
									</div>
								</button>
							</div>
						</div>
					</div>

					{/* ====== HERO IMAGES ====== */}
					<div className="hero-images">
						<div
							className="hero-images-inner"
							ref={(el) => (images = el)}
						>
							<div className="hero-image girl">
								<img src={imgGirl} alt="girl" />
							</div>

							<div className="hero-image boy">
								<img src={imgBoy} alt="boy" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

/* 

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
*/

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
