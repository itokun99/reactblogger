const { google } = require('googleapis');


const API_KEY = "AIzaSyCgwo2fNF4rRz1YLLXG4EaRSSjSkN5Qv-E";
const VERSION = "v3";

const blogger = google.blogger({
  version : VERSION,
  auth : API_KEY
})

export default blogger;