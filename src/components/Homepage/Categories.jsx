import "../css/category.css";

const Category = ({ name, avail }) => {
	return (
		<div className="job-category">
			<div className="job-category-header">
				<div className="dots"></div>
				<div className="dots"></div>
				<div className="dots"></div>
			</div>
			<h4 className="iterate-job">{name}</h4>
			<h4 className="iterate-job">{avail}</h4>
		</div>
	);
};

export default Category;
