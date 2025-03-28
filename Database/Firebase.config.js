import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDoUwEB2_K6D62sPdPrSeo8g4P83dy0KeM",
  authDomain: "chat-974c8.firebaseapp.com",
  projectId: "chat-974c8",
  storageBucket: "chat-974c8.firebasestorage.app",
  messagingSenderId: "1005836675265",
  appId: "1:1005836675265:web:8a9c594d957820fc1a0c40",
};

console.log("database");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
