import { initializeApp } from "firebase/app"
import firebaseConfig from "./firebase.config";

const intializeAuth = () => {
    initializeApp(firebaseConfig);
}

export default intializeAuth;