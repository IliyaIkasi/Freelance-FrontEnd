import { Link } from "react-router-dom";
import "./css/navbar.css";

function NavBar() {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light ">
			<div className="container">
				<Link to="" className="navbar-brand">
					Navbar
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav mid-page">
						<Link className="nav-link" aria-current="page" to="">
							Home
						</Link>
						<Link to="/findJob" className="nav-link">
							Find A Job
						</Link>
						<Link to="/postJob_recruiterDetails" className="nav-link">
							Post A Job
						</Link>
						<Link to="/about" className="nav-link">
							About
						</Link>
						<Link to="/page" className="nav-link">
							Page
						</Link>
						<Link to="/contact" className="nav-link">
							Contact
						</Link>
					</div>
					<div className="navbar-nav end-page">
						<Link to="/register" className="nav-link">
							Sign Up
						</Link>
						<Link className="nav-link" to="/login">
							Log In
						</Link>
						{/* <Link className="nav-link disabled">Disabled</Link> */}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
