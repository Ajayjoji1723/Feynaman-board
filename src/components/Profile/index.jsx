import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Dashboard = () => {
    const [order, setOrder] = useState({});
    const [name, setName] = useState("");
    const [user, setUser] = useState([]);

    useEffect(() => {
        handleOrderData();
    }, []);

    const handleOrderData = async () => {
        let user = localStorage.getItem("token");
        user = JSON.parse(user);

        const { data: res } = await axios.get(
            `http://localhost:1234/get-order?user_id=$`
        );
        console.log(res);
        setOrder(res.data.order);
    };

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <button className={styles.white_btn}>Previous Topics</button>
                <h1>FEYNMAN BOARD</h1>
                <button className={styles.white_btn}>Add a new Topic</button>
            </nav>
            <div className="main-container">
                <h2>Hello {user.name} !</h2>
            </div>
            <div>
                {" "}
                <h3>Topic : {user.title}</h3>
            </div>

            <div>
                <h4>Your Understanding of the topics: </h4>{" "}
            </div>
            <div>
                {order.length > 0 &&
                    order.map((val, key) => {
                        return <div key={key}>{val.subTotal}</div>;
                    })}
            </div>
            <nav className={styles.footer}></nav>
        </div>
    );
};

export default Dashboard;
