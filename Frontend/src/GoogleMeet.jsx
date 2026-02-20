import React from "react";
import { useState } from "react";

const GoogleMeet = () => {

    const[time, setTime]=useState({});

    const handleInput=(e)=>{
        setTime({
             ...time,
         [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async () => {
            try {
                const response = await fetch("http://localhost:8000/create/google-meeting", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(time),
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);
                
            }
    }

    return (
        <div>
            <h1>Google Meet</h1>

            <div>
                Start : <input type="datetime-local" name="startTime" onChange={handleInput} /> <br />
                End : <input type="datetime-local" name="endTime" onChange={handleInput}  />
            </div> <br />

            <button onClick={handleSubmit}>Generate Google Meet Link</button>

        </div>
    );
};

export default GoogleMeet;