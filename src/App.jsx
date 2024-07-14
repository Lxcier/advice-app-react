import React, { useState, useEffect } from 'react';
import "./App.css";
import axios from "axios";

const App = () => {
    const [advice, setAdvice] = useState("");

    const fetchAdvice = async () => {
        try {
            const response = await axios.get("https://api.adviceslip.com/advice");
            const { advice } = response.data.slip;
            setAdvice(advice);
        } catch (error) {
            console.error("Error fetching advice:", error);
        }
    };

    useEffect(() => {
        fetchAdvice();
    }, []);

    return (
        <div className="app">
            <div className="card">
                <h2 className="heading">{advice}</h2>
                <button className="button" onClick={fetchAdvice}>
                    <span>GIVE ME ADVICE!</span>
                </button>
            </div>
        </div>
    );
};

export default App;
