import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfpgnUr3pYAYnkJN3uZyEVBVqqAYvK_QI",
  authDomain: "tcg-manager-4b6a2.firebaseapp.com",
  projectId: "tcg-manager-4b6a2",
  storageBucket: "tcg-manager-4b6a2.appspot.com",
  messagingSenderId: "381215255934",
  appId: "1:381215255934:web:fe42603d79723030fe572f"
};

// Initialize Firebase
const fireBaseConnection = initializeApp(firebaseConfig);

export { fireBaseConnection };