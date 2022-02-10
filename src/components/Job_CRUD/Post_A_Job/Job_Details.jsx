import "../../css/post_a_job.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Job_Details = () => {
	const [job_title, setJob_title] = useState("");
	const [contract_type, setContract_type] = useState("");
	const [basic_salary, setBasic_Salary] = useState("");
	const [working_experience, setWorking_experience] = useState("");
	const [recruiter, setRecruiter] = useState("");

	const submitJobDetails = async (event) => {
		const url = "http://localhost:4000/api/recruiter/signup";

		event.preventDefault();

		await axios.post(url, {
			job_title,
			contract_type,
			basic_salary,
			working_experience,
			recruiter,
		});

		const test = {
			job_title,
			contract_type,
			basic_salary,
			working_experience,
			recruiter,
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
				// 	submitJobDetails(e);
				// }}
				>
					<div className="job-details details">
						<div className="job-title title">
							<h2 className="center-text">Job Details</h2>
						</div>
						<div className="form-section-text">
							<div className="form-section-textbox">
								<label>Job Title: </label>
								<input
									type="text"
									placeholder="Job Title"
									name="job_title"
									id="job_title"
									value={job_title}
									onChange={(e) => setJob_title(e.target.value)}
								/>
							</div>
							<div className="form-section-textbox">
								<label>Contract Type: </label>
								<input
									type="text"
									placeholder="Contract Type"
									name="contract_type"
									id="contract_type"
									value={contract_type}
									onChange={(e) => setContract_type(e.target.value)}
								/>
							</div>
							<div className="form-section-textbox">
								<label>Basic Salary: </label>
								<input
									type="text"
									placeholder="Basic Salary"
									name="basic_salary"
									id="basic_salary"
									value={basic_salary}
									onChange={(e) => setBasic_Salary(e.target.value)}
								/>
							</div>
							<div className="form-section-textbox">
								<label>Working Experience: </label>
								<input
									type="text"
									placeholder="Working Experience"
									name="working_experience"
									id="working_experience"
									value={working_experience}
									onChange={(e) => setWorking_experience(e.target.value)}
								/>
							</div>
							<div className="form-section-textbox">
								<label>Recruiter Username: </label>
								<input
									type="text"
									name="recruiter"
									id="recruiter"
									value={recruiter}
									onChange={(e) => setRecruiter(e.target.value)}
								/>
							</div>
						</div>
						<div className="buttons">
							<div className="preview-btn">
								<div className="nav-link">
									<button type="submit">Submit</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Job_Details;
