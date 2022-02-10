import "../../css/post_a_job.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Recruiter_Details = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [company_name, setCompany_name] = useState("");
	const [contact_tel, setContact_tel] = useState("");
	const [contact_address, setContact_address] = useState("");

	const navigate = useNavigate();

	const submitRecruiterDetails = async (event) => {
		const url = "http://localhost:4000/api/recruiter/signup";
		event.preventDefault();

		await axios.post(url, {
			username,
			email,
			password,
			company_name,
			contact_tel,
			contact_address,
		});
		const test = {
			username,
			email,
			password,
			company_name,
			contact_tel,
			contact_address,
		};
		console.log("Test => " + test);
	};
	return (
		<div className="job-container">
			<div className="post-job-form">
				<div className="post-job-header">
					<h2>Post a Job</h2>
				</div>
				<form
				// onSubmit={(e) => {
				// 	submitRecruiterDetails(e);
				// }}
				>
					<div className="recruiter-details details">
						<div className="recruiter-title title">
							<h2 className="center-text">Personal Details</h2>
						</div>
						<div className="form-section-text">
							<div className="form-section-textbox">
								<label>Username: </label>
								<input
									type="text"
									placeholder="Username"
									name="username"
									id="username"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="form-section-textbox">
								<label>Email: </label>
								<input
									type="email"
									placeholder="email@email.com"
									name="email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-section-textbox">
								<label>Password: </label>
								<input
									type="password"
									placeholder="password"
									name="password"
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="form-section-textbox">
								<label>Confirm Password: </label>
								<input
									type="new-password"
									placeholder="confirmPassword"
									name="confirmPassword"
									id="confirmPassword"
								/>
							</div>
						</div>
					</div>
					<div className="company-details details">
						<div className="company-title title">
							<h2 className="center-text">Company Details</h2>
						</div>
						<div className="form-section-text">
							<div className="form-section-textbox">
								<label>Company Name: </label>
								<input
									type="text"
									placeholder="Company Name"
									name="company_name"
									id="company_name"
									value={company_name}
									onChange={(e) => setCompany_name(e.target.value)}
								/>
							</div>
							<div className="form-section-textbox">
								<label>Contact Telephone: </label>
								<input
									type="tel"
									placeholder="Contact Telephone"
									name="contact_tel"
									id="contact_tel"
									value={contact_tel}
									onChange={(e) => setContact_tel(e.target.value)}
								/>
							</div>
							<div className="form-section-textbox">
								<label>Contact Address: </label>
								<input
									type="text"
									placeholder="Contact Address"
									name="contact_address"
									id="contact_address"
									value={contact_address}
									onChange={(e) => setContact_address(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div className="preview-btn">
						<button
							onClick={() => {
								navigate("/postJob_jobDetails");
							}}
							type="submit"
						>
							Next
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Recruiter_Details;
