import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/form.css";

function LoginForm() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitForm = async (e) => {
		const url = "http://localhost:4000/api/recruiter/login";
		e.preventDefault();
		// axios.defaults.withCredentials = true;
		const data = {
			username: username,
			email: email,
			password: password,
		};
		const test = await axios
			.post(url, data, { withCredentials: true })
			.then((res) => {
				console.log("test => ", res);
			})
			.catch((err) => console.log("Axios Error Message" + err));
		console.log("test => ", test);
	};

	const resetForm = (e) => {
		e.preventDefault();
		setUsername("");
		setEmail("");
		setPassword("");
	};

	return (
		<div className="App">
			<div className="form-container login-container">
				<form
					onSubmit={(e) => {
						submitForm(e);
					}}
				>
					<div className="form-group login-form">
						<div className="form-title">
							<h1 className="text-center">
								<b>Login Form</b>
							</h1>
						</div>
						<div className="form-text form-text-l1">
							<div className="form-textbox form-textbox-l1">
								<label>Username: </label>
								<input
									type="text"
									name="username"
									placeholder="Username"
									className="form-control"
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>
							<div className="form-textbox form-textbox-l1">
								<label>Email: </label>
								<input
									type="text"
									name="email"
									placeholder="email@email.com"
									className="form-control"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="form-textbox form-textbox-l1">
								<label>Password:</label>
								<input
									type="password"
									name="password"
									placeholder="Password"
									className="form-control"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
						</div>
						<div className="form-buttons btn-b">
							<button className="submitBtn" type="submit">
								Login
							</button>
							<button className="resetBtn" type="reset" onClick={resetForm}>
								Reset
							</button>
							<Link to="/register" className="form-link">
								Don't Have An Account? Click Here.
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;
