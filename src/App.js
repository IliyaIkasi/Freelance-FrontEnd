import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/Form/LoginForm";
import RegisterForm from "./components/Form/RegisterForm";
import HomePage from "./components/Homepage/HomePage";
import FindAJob from "./components/Job_CRUD/FindAJob";
import Recruiter_Details from "./components/Job_CRUD/Post_A_Job/Recruiter_Details";
import Company_Details from "./components/Job_CRUD/Post_A_Job/Company_Details";
import Job_Details from "./components/Job_CRUD/Post_A_Job/Job_Details";

const App = () => {
	return (
		<BrowserRouter>
			<div className="">
				<NavBar />
				<Routes>
					<Route path="" element={<HomePage />} />
					<Route path="login" element={<LoginForm />} />
					<Route path="register" element={<RegisterForm />} />
					<Route path="findJob" element={<FindAJob />} />
					<Route path="postJob_recruiterDetails" element={<Recruiter_Details />} />
					<Route path="postJob_jobDetails" element={<Job_Details />} />
					<Route path="*" element={<HomePage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
