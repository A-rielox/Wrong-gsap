import { useEffect, useRef, useState } from "react";

import "./App.css";

import gsap from "gsap";

function App() {
	let circle = useRef(null);
	let circleRed = useRef(null);
	let circleBlue = useRef(null);
	const [expanded, setExpanded] = useState(false);

	const handleExpand = () => {
		gsap.to(circleRed, {
			width: 200,
			height: 200,
			ease: "easeOut",
			duration: 0.8,
		});
		setExpanded(true);
	};
	const handleShrink = () => {
		gsap.to(circleRed, {
			width: 75,
			height: 75,
			ease: "easeOut",
			duration: 0.8,
		});
		setExpanded(false);
	};

	useEffect(() => {
		let tl = gsap.timeline();

		// gsap.fromTo(
		// 	circle,
		// 	{ opacity: 0, x: 60 },
		// 	{ opacity: 1, x: 0, ease: "easeOut", duration: 0.8 }
		// );
		// gsap.fromTo(
		// 	circleRed,
		// 	{ opacity: 0, x: 60 },
		// 	{ opacity: 1, x: 0, ease: "easeOut", duration: 0.8, delay: 0.3 }
		// );
		// gsap.fromTo(
		// 	circleBlue,
		// 	{ opacity: 0, x: 60 },
		// 	{ opacity: 1, x: 0, ease: "easeOut", duration: 0.8, delay: 0.6 }
		// );
		tl.fromTo(
			[circle, circleRed, circleBlue],
			{ x: 60, opacity: 0 },
			{ x: 0, opacity: 1, duration: 0.8, stagger: 0.3 }
		);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<div className="circle-container">
					<div ref={(el) => (circle = el)} className="circle"></div>
					<div
						ref={(el) => (circleRed = el)}
						onClick={expanded === false ? handleExpand : handleShrink}
						className="circle red"
					></div>
					<div
						ref={(el) => (circleBlue = el)}
						className="circle blue"
					></div>
				</div>
			</header>
		</div>
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

/* 
css

.App {
	text-align: center;
}

.App-header {
	min-height: 100vh;
}
.circle {
	width: 75px;
	height: 75px;
	border-radius: 100%;
	background-color: #fdcf51;
	margin: 50px;
	opacity: 1;
}

.circle.red {
	background-color: red;
}
.circle.blue {
	background-color: blue;
}

*/
