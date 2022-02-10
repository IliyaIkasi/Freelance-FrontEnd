import React from "react";
import Category from "./Categories";
import "../css/homepage.css";
import { CreateJobs, Jobs, JobsCategory } from "../../data";
import Footer from "./Footer";
import FeaturedJobs from "./FeaturedJobs";

const HomePage = () => {
	return (
		<div className="main-container">
			<div className="homepage-container">
				<div className="split-left">
					<div className="split-left-wrapper">
						<div className="content-text">
							<h1>
								Find the <br /> most exciting <br /> start-up jobs
							</h1>
						</div>
						<div className="search-job-section">
							<div className="search">
								<input
									type="search"
									id="search"
									placeholder="Job Title or Keyboard"
								/>
							</div>
							<div className="search-category-option">
								<select>
									<option value="">Search Category of Jobs</option>
									{JobsCategory.map((item) => (
										<option key={item.id} value={item.value}>{item.name}</option>
									))}
								</select>
							</div>
							<div className="find-job-btn">
								<input type="button" value="Find Job" />
							</div>
						</div>
						<div className="job-type">
							<div className="job-type-wrapper">
								{Jobs.map((item) => (
									<div className="job-type-item">{item.name}</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<div className="split-right">
					<div className="bg-img-bg">
						<div className="bg-img"></div>
					</div>
				</div>
			</div>
			<div className="category-container">
				<div className="category-container-header">
					<div className="category-header-text">
						<h6>
							Featured <b className="change-color">Top</b> Categories
						</h6>
					</div>
					<div className="category-header-text">
						<h1>
							Browse <b className="change-color">Top</b> Categories
						</h1>
					</div>
				</div>
				<div className="browse-job-category">
					{Jobs.map((item) => (
						<Category
							className="flex-box"
							key={item.id}
							name={item.name}
							avail={item.available}
						/>
					))}
				</div>
				<div className="browse-job-section">
					<button>Browse All Section</button>
				</div>
			</div>
			<section className="featured-jobs">
				<div className="featured-jobs-section">
					<div className="featured-jobs-header-text">
						<h6>
							RECENT <b className="change-color"> JOB</b>
						</h6>
					</div>
					<div className="featured-jobs-header-text">
						<h1>
							Featured <b className="change-color"> Jobs</b>
						</h1>
					</div>
				</div>
				<div className="featured-jobs-container">
					{CreateJobs.map((item) => (
						<FeaturedJobs
							key={item.id}
							image={item.image}
							name={item.name}
							author={item.author}
							location={item.location}
							amount={item.amount}
							type={item.type}
							create_time={item.create_time}
						/>
					))}
				</div>
			</section>
			<section className="footer-container">
				<Footer />
			</section>
		</div>
	);
};

export default HomePage;
