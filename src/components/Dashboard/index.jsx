import styles from "./styles.module.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [data, setData] = useState([]);
    const [user,setUser] = useState([]);


    useEffect(() => {
        handleOrderData();
    }, []);

    const handleOrderData = async () => {
        let data = localStorage.getItem("token");
        data = JSON.parse(data);
        console.log(data)
        setData(data.topic)
        setUser(data.user)
    };

    useEffect(()=>{
        console.log(data)
    },[data])

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <button className={styles.white_btn}>Previous Topics</button>
                <h1>FEYNMAN BOARD</h1>
                <Link to="/addtopic">
                <button className={styles.white_btn}>Add a new Topic</button>
                </Link>
            </nav>
            <div className="main-container">
                <h2>Hello {user.name} !</h2>
            </div>
            <div>
                {  data.map((val,index)=>{
                    return <div>
                            <h3>Topic : {val.title}</h3>
                            <p>{val.desc}</p>
                            <h4>Your Understanding of the topics:{val.level} </h4>{" "}
                        </div>
                })}
            </div>

            <div>
                
            </div>
            <nav className={styles.footer}></nav>
        </div>
    );
};

export default Dashboard;
