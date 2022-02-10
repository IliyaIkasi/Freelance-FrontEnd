import React from "react";
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagramSquare,
	FaTwitterSquare,
} from "react-icons/fa";
import "../css/footer.css";

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="footer-header">
				<div className="footer-box">
					<div className="footer-title">
						<h2>About Us</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Recusandae, ex dolores. Officia numquam cupiditate consequatur
							voluptas consequuntur magnam minima officiis quaerat iure, aliquid
							adipisci aperiam? Odit tempora enim facilis dicta.
						</p>
					</div>
				</div>
				<div className="footer-box">
					<div className="footer-title">
						<h2>Contact Info</h2>
						<p>Contact us using the following mediums.</p>
						<div className="footer-text">
							<li>
								<a href="tel:+09122515984">Phone: 09122515984</a>
							</li>
							<li>
								<a href="mailto:iliyaikasi@gmail.com">
									Email: iliyaikasi@gmail.com
								</a>
							</li>
						</div>
					</div>
				</div>
				<div className="footer-box">
					<div className="footer-title">
						<h2>Information Link</h2>
						<div className="footer-text">
							<li>
								<a href="http://">View Project</a>
							</li>
							<li>
								<a href="http://">Contact Us</a>
							</li>
							<li>
								<a href="http://">Testimonial</a>
							</li>
							<li>
								<a href="http://">Properties</a>
							</li>
							<li>
								<a href="http://">Support</a>
							</li>
						</div>
					</div>
				</div>
				<div className="footer-box">
					<div className="footer-title">
						<h2>NewsLetter</h2>
						<div className="footer-text">
							<p>Sign up for our exclusive news letter.</p>
						</div>
						<div className="footer-text-input">
							<input className="input-text" type="text" name="newsletter-text" id="newsletter-text" />
							<input className="input-btn" type="button" value="Submit" />
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="footer-bottom-text">
					<h5>Copyright ©2022 All Rights Reserved</h5>
				</div>
				<div className="footer-bottom-icons">
					<a href="" className="facebook">
						<FaFacebookSquare />
					</a>
					<a href="" className="github">
						<FaGithubSquare />
					</a>
					<a href="" className="twitter">
						<FaTwitterSquare />
					</a>
					<a href="" className="instagram">
						<FaInstagramSquare />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
