import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

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
const storage = getStorage();

export { storage };

//https://firebasestorage.googleapis.com/v0/b/tcg-manager-4b6a2.appspot.com/o/deck%2Fdeck-images%2F95c4f025639d7ee5596ca45c1d12f6b2-digital_camera_photo-1080x675.jpg?alt=media&token=85e54a4e-b4cb-454e-ac0c-1eeb457e16e2