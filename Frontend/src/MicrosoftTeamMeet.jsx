import React,{useState} from "react";

const MicrosoftTeamMeet = () => {

     const[time, setTime]=useState({});

    const handleInput=(e)=>{
        setTime({
             ...time,
         [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = async () => {
            try {
                const response = await fetch("http://localhost:8000/create/microsoftTeam-meeting", {
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
        <>
        <h1>Microsoft Teams Meet</h1>
        <div>
                Start : <input type="datetime-local" name="startTime" onChange={handleInput} /> <br />
                End : <input type="datetime-local" name="endTime" onChange={handleInput}  /> <br />
                Subject : <input type="text" name="subject" onChange={handleInput} />
            </div> <br />

            <button onClick={handleSubmit}>Generate Microsoft Team Meet Link</button>
        </>
    )
};

export default MicrosoftTeamMeet;