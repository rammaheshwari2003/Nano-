import React from "react";
import axios from "axios";

const ZoomMeeting = () => {
    const [time, setTime] = React.useState({});

    const handleChange=(e)=>{
        setTime({
            ...time,
            [e.target.name]: e.target.value
        })
    }
    
    
    

    const fetchMeeting = async () => {
        try {
            const res = await axios.post("http://localhost:8000/create/meeting", {...time});
            // alert("Meeting Link: " + res.data.join_url);
            const { join_url, start_url } = res.data;
        
        // Host ke liye start_url
        window.open(start_url, "_blank"); // new tab me open
        console.log(res.data);
        
        } catch (error) {
            console.error(error.response?.data || error.message);
            alert("Failed to create meeting");
        }
    };

    
    return <>
    <h1>Zoom Meeting</h1>

            <div>
            Start Time : <input type="datetime-local" name="startTime" onChange={handleChange}  /> <br />
            End Time : <input type="datetime-local" name="endTime"  onChange={handleChange}/> <br />
            </div> <br />
            
            <button onClick={fetchMeeting}>Generate Zoom Meeting Link</button>
            </>
};

export default ZoomMeeting;