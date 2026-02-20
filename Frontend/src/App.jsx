import React from "react";
import GoogleMeet from "./GoogleMeet";
import MicrosoftTeamMeet from "./MicrosoftTeamMeet";
import ZoomMeeting from "./ZoomMeeting";

const App = () => {

    
    return (
        <div>
            <ZoomMeeting />

            <GoogleMeet />
            <MicrosoftTeamMeet />
            
        </div>
    );
};

export default App;
