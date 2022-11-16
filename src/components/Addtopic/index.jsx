import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import axios from 'axios';

const Addtopic = () => {
    const [data, setData] = useState({
        topicname: "",
        desc: ""

    });
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:1234/add-topic";
            const { data: res } = await axios.post(url, data);
        }
        catch {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }

        }
    }
    return (
        <div className={styles.main_container}>
            <div className={styles.addtopic_container}>
                <div className={styles.left}>
                    <h2>Level of Understanding</h2>
                    <button type="submit" className={styles.greenish_btn}>Understood</button>
                    <button type="submit" className={styles.yellow_btn}>Somewhat Understood</button>
                    <button type="submit" className={styles.blue_btn}>Not Clear</button>
                    <button type="submit" className={styles.red_btn}>What Rubbish</button>

                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h2> Create A Topic</h2>
                        < input type="text"
                            placeholder="Enter Title of the Topic"
                            name='name'
                            onChange={handleChange}
                            value={data.name}
                            required
                            className={styles.input}
                        />
                        < input type="textarea"
                            placeholder="Write about the topic"
                            name='phone'
                            onChange={handleChange}
                            value={data.phone}
                            required
                            className={styles.input1}
                        />

                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>Submit</button>


                    </form>
                </div>
            </div>
        </div>
    )
};
export default Addtopic;