import React /*, { useEffect, useState } */ from "react";
// import { NavLink } from "react-router-dom";
// import { withRouter } from "react-router-dom";
// import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
// import { openMenu, closeMenu } from "../animations/menuAnimations";

// Define reducer

const Header = ({ history, dimensions }) => {
	return (
		<div className="header">
			<div className="container">
				<div className="row v-center space-between">
					<div className="logo">
						<a href="/">AGENCY.</a>
					</div>

					<div className="nav">
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Header;
// export default withRouter(Header);
