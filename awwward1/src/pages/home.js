import React, { useEffect, useState } from "react";

import gsap from "gsap";

import Banner from "../components/banner";
import Cases from "../components/cases";
import IntroOverlay from "../components/introOverlay";

// TIMELINE
// para no tener q usar ref y tener q pasarlas con prop drilling => usa clases y se hace directo
const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
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
			onComplete: completeAnimation,
		});
};

const Home = () => {
	const [animationComplete, setAnimationComplete] = useState(false);

	const completeAnimation = () => {
		setAnimationComplete(true);
	};

	useEffect(() => {
		homeAnimation(completeAnimation);
	}, []);

	return (
		<>
			{/* estilos de overlay en App.scss */}
			{animationComplete === false ? <IntroOverlay /> : ""}

			<Banner />

			<Cases />
		</>
	);
};

export default Home;
