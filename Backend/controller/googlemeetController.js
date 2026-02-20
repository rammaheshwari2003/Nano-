const {google} = require('googleapis');

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI,
);

const googleMeeting= async(req,res)=>{
    const {startTime, endTime} = req.body;
    
    oauth2Client.setCredentials({
      refresh_token: process.env.ADMIN_REFRESH_TOKEN,
    });

    const scopes = ['https://www.googleapis.com/auth/calendar'];

const url = oauth2Client.generateAuthUrl({
  access_type: 'offline', // refresh token ke liye
  prompt: 'consent',      // first-time consent force karega
  scope: scopes
});

console.log(url); // ye URL browser me open karo

    try {
         //  Set admin credentials using saved refresh token
         
        const calendar = google.calendar({version: 'v3', auth:oauth2Client });

        const response = await calendar.events.insert({
  calendarId: "primary",
  conferenceDataVersion: 1,
  resource: {
    summary: "Google Meet (via Admin)",
    description: "Meeting created by Admin",

    start: {
      dateTime: new Date(startTime).toISOString(),
      timeZone: "Asia/Kolkata",
    },

    end: {
      dateTime: new Date(endTime).toISOString(),
      timeZone: "Asia/Kolkata",
    },

    conferenceData: {
      createRequest: {
        requestId: Date.now().toString(),
        conferenceSolutionKey: {
          type: "hangoutsMeet",
        },
      },
    },
  },
});


        const meetLink = response.data.hangoutLink;

        res.status(200).json({
      success: true,
      meetLink,
    });

  } catch (error) {
    console.error(" Failed to generate meet link:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to create Google Meet link",
    });
  }

}

module.exports={googleMeeting}