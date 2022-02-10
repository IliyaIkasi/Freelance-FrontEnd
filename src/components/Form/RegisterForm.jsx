import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/form.css";

function RegisterForm() {
	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [company_name, setCompany_name] = useState("");
	const [contact_tel, setContact_tel] = useState("");
	const [contact_address, setContact_address] = useState("");

	const saveForm = async (event) => {
		const url = "http://localhost:4000/api/recruiter/signup";

		event.preventDefault();

		const test = await axios.post(url, {
			first_name,
			last_name,
			username,
			email,
			password,
			company_name,
			contact_tel,
			contact_address,
		});
		console.log("url", test);
	};

	return (
		<div className="App">
			<div className="form-container">
				<form
					onSubmit={(e) => {
						saveForm(e);
					}}
				>
					<div className="form-group">
						<div className="form-title">
							<h1 className="text-center">
								<b> Registration Form</b>
							</h1>
						</div>
						<div className="form-text">
							<div className="form-textbox">
								<label>First Name: </label>
								<input
									type="text"
									placeholder="First Name"
									name="firstName"
									className="form-control"
									value={first_name}
									onChange={(e) => setFirst_name(e.target.value)}
								/>
							</div>
							<div className="form-textbox">
								<label>Last Name: </label>
								<input
									type="text"
									placeholder="Last Name"
									name="lastName"
									className="form-control"
									value={last_name}
									onChange={(e) => setLast_name(e.target.value)}
								/>
							</div>
							<div className="form-textbox">
								<label>Email: </label>
								<input
									type="text"
									placeholder="Email"
									name="email"
									className="form-control"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-textbox">
								<label>Username: </label>
								<input
									type="text"
									placeholder="Username"
									name="username"
									className="form-control"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="form-textbox">
								<label>Password: </label>
								<input
									type="password"
									placeholder="Password"
									name="password"
									className="form-control"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							<div className="form-textbox">
								<label>Company Name: </label>
								<input
									type="text"
									placeholder="Company Name"
									name="company_name"
									className="form-control"
									value={company_name}
									onChange={(e) => setCompany_name(e.target.value)}
								/>
							</div>
							<div className="form-textbox">
								<label>Contact Telephone: </label>
								<input
									type="text"
									placeholder="Contact Telephone"
									name="contact_tel"
									className="form-control"
									value={contact_tel}
									onChange={(e) => setContact_tel(e.target.value)}
								/>
							</div>
							<div className="form-textbox">
								<label>Contact Address: </label>
								<input
									type="text"
									placeholder="Contact Address"
									name="contact_address`"
									className="form-control"
									value={contact_address}
									onChange={(e) => setContact_address(e.target.value)}
								/>
							</div>
						</div>
						<div className="form-buttons btn-b">
							<button className="submitBtn" type="submit">
								Register
							</button>
							<button className="resetBtn" type="reset">
								Reset
							</button>
							<Link to="/login" className="form-link">
								Already Have An Account? Click Here.
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default RegisterForm;
