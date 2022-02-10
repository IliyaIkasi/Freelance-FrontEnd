import "../../css/post_a_job.css";
import React from "react";

const Company_Details = () => {
	return (
		<div className="main-container">
			<div className="post-job-container">
				<div className="post-job-header">
					<h2>Post a Job</h2>
				</div>
				<div className="post-job-form">
					<form action="">
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
									/>
								</div>
								<div className="form-section-textbox">
									<label>Company Telephone: </label>
									<input
										type="tel"
										placeholder="Company Telephone"
										name="company_tel"
										id="company_tel"
									/>
								</div>
								<div className="form-section-textbox">
									<label>Company Address: </label>
									<input
										type="text"
										placeholder="Company Address"
										name="company_address"
										id="company_address"
									/>
								</div>
							</div>
							<div className="preview-btn">
								<button type="submit">Preview</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Company_Details;
