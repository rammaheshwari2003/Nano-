const express = require("express");
const route = express.Router();
const meetingModel = require("../model/tldv");

const meetingController = require("../controller/meetingController");
const googlemeetController = require("../controller/googlemeetController");
const microsoftTeamMeeting = require("../controller/microsoftTeamMeeting");
const zoomMeet = require("../controller/zoomMeeting");

// route.post("/meeting", meetingController.meetingZoom);
route.post("/meeting", zoomMeet.ZoomMeeting);



route.post("/time", meetingController.time);

route.post("/google-meeting", googlemeetController.googleMeeting);

route.post("/microsoftTeam-meeting", microsoftTeamMeeting.microsoftTeamMeeting);

route.post("/save-summary", (req, res) => {
  console.log("HEADERS:", req.headers);
  console.log("BODY:", req.body);
  res.status(200).json({ ok: true });
});


module.exports = route;