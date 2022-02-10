import "../css/featuredjobs.css";
import React from "react";

const FeaturedJobs = ({
	image,
	name,
	author,
	location,
	amount,
	type,
	create_time,
}) => {
	return (
		<div className="featured-jobs-container">
			<div className="featured-jobs-box">
				<div className="jobs-image">{image}</div>
				<div className="jobs-text">
					<div className="jobs-text-top">
						<div className="jobs-text-name"><h2>{name}</h2></div>
					</div>
					<div className="jobs-text-bottom">
						<div className="jobs-author-name"><h4>{author}</h4></div>
						<div className="jobs-location down"><h4>{location}</h4></div>
						<div className="jobs-amount down"><h4>{amount}</h4></div>
					</div>
				</div>
				<div className="jobs-type-text">
					<button className="jobs-type">{type}</button>
					<div className="jobs-create-time">{create_time}</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturedJobs;
