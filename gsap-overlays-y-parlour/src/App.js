import { useEffect, useRef } from "react";

import "./App.css";
import gsap from "gsap";
/* 
con cdn de gsap en index de public
	cdn iconos ionicons
	<script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
*/
function App() {
	let ref1 = useRef(null);
	let ref2 = useRef(null);
	let leftRef = useRef(null);
	let tl = gsap.timeline();

	let tc1 = gsap.timeline({ paused: true, reversed: true });

	useEffect(() => {
		// transicion carga
		tl.to(".overlay-first", {
			left: "-100%",
			ease: "power4.easeInOut",
			duration: 1.2,
		}).to(".overlay-second", {
			left: "-100%",
			ease: "power4.easeInOut",
			delay: -0.8,
			duration: 1.2,
		});

		// cards
		console.log(ref1);
		ref1.addEventListener("click", (e) => {
			e.stopPropagation();
			tc1.play();
		});

		// arrow left
		leftRef.addEventListener("click", (e) => {
			e.stopPropagation();
			tc1.reverse();
		});

		// con el 0.2 afuera, hace q no se espere a terminar la anterior para empezar, sino q lo hace altiro 0.2 segundos desde q empieza la anterior
		tc1.to(ref1, {
			ease: "power4.easeInOut",
			height: 640,
			width: 320,
			top: 0,
			left: 0,
			margin: 0,
			duration: 0.5,
		});
		tc1.to(
			".card-1 h3",
			{
				ease: "power4.easeInOut",
				duration: 0.5,
				fontSize: 24,
				margin: "32px",
				y: -250,
				// delay: -0.3,
			},
			0.01
		);
		tc1.to(
			".card-1 p",
			{
				ease: "power4.easeInOut",
				duration: 0.5,
				padding: 24,
				marginLeft: 8,
				y: -580,
				// delay: -0.3,
			},
			0.02
		);
		tc1.to(
			".card-1 button",
			{
				ease: "elastic.out(1, 0.9)",
				duration: 0.5,
				bottom: "60px",
				marginLeft: 8,
			}
			// 0.02
		);
		tc1.to(
			".left",
			{
				ease: "elastic.out(1, 0.9)",
				duration: 0.5,
				top: "24px",
				left: "24px",
			}
			// 0.02
		);

		tc1.to(
			ref2,
			{
				ease: "power4.easeInOut",
				x: 400,
				delay: -0.3,
				duration: 1.5,
			},
			0.2
		);

		// tc1.to(".card-1 h3", {
		// 	ease: "power4.easeInOut",
		// 	duration: 0.5,
		// 	fontSize: 24,
		// 	margin: "32px",
		// 	y: -250,
		// 	delay: -0.3,
		// });
	}, []);

	return (
		<div className="App">
			<div className="overlay-first"></div>
			<div className="overlay-second"></div>

			<div className="container">
				<nav>
					<h1>Parlour</h1>
					<ion-icon name="search-outline"></ion-icon>
				</nav>

				<h2>
					A Parlour
					<br />
					is a <span>reception</span> space
				</h2>
				<p>Learn More</p>

				<div className="card card-1" ref={(e) => (ref1 = e)}>
					<h3>Julie, India</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Incidunt, mollitia deleniti ducimus quod a excepturi dolor
						doloremque expedita alias aliquid possimus quidem, tempore
						soluta cumque enim, qui laudantium culpa eius.
					</p>

					<button>More Info</button>
					<div className="left" ref={(e) => (leftRef = e)}>
						<ion-icon name="arrow-back-outline"></ion-icon>
					</div>
				</div>

				<div className="card card-2" ref={(e) => (ref2 = e)}>
					<h3>Nirosha, India</h3>
				</div>
			</div>
		</div>
	);
}

export default App;
