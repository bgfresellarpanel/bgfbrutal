// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBIMlDbz41xtX0-5zReDYgbVPaB9Di-mZM",
    authDomain: "developer-70f89.firebaseapp.com",
    databaseURL: "https://developer-70f89-default-rtdb.firebaseio.com",
    projectId: "developer-70f89",
    storageBucket: "developer-70f89.appspot.com",
    messagingSenderId: "64198470420",
    appId: "1:64198470420:android:c2700841cbc2cc62e83001"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };