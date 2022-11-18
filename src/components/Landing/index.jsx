import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";

const Landing = () => {
	const [data, setData] = useState({ name: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:1000/login-user";
			const { data:res } = await axios.post(url,data);
			console.log(res)
			localStorage.setItem("token", JSON.stringify(res.data));
			window.location="/dashboard";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.main_container}>
			<div className={styles.user_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h2>FEYNMAN BOARD</h2>
						<input
							type="text"
							placeholder="Enter User Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className={styles.input}
						/>
						
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn} onClick={handleSubmit}>
							Take me to Feynman
						</button>
				
					</form>
				</div>
				
			</div>
		</div>
	);
};

export default Landing;