//firebase.js
// استخدم بيانات مشروع Firebase الخاص بك هنا
const firebaseConfig = {
    apiKey: "API_KEY_HERE",
    authDomain: "PROJECT_ID.firebaseapp.com",
    projectId: "PROJECT_ID",
    storageBucket: "PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();