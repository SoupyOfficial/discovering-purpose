import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';

import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZ2cNI-ISAuklzTcQKl7qktT0j948Dlz8",
  authDomain: "loriwebsite.firebaseapp.com",
  projectId: "loriwebsite",
  storageBucket: "loriwebsite.appspot.com",
  messagingSenderId: "573603190228",
  appId: "1:573603190228:web:c93de678a23d9c0740f241",
  measurementId: "G-775N6WBLPW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);

async function loginWithGoogle() {
    try {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        const { user } = await signInWithPopup(auth, provider);

        return { uid: user.uid, displayName: user.displayName };
    } catch (error) {
        if (error.code !== 'auth/cancelled-popup-request') {
            console.error(error);
        }

        return null;
    }
}

async function submitResearch(formData) {
    try {
        await addDoc(collection(db, "research"), {
            title: formData.title.trim(),
            href: formData.href.trim(),
            content: formData.content.trim(),
            timestamp: serverTimestamp(),
        });
    } catch (error) {
        console.log(error);
    }
}

async function loadResearch(callback) {
    return onSnapshot(
        query(
            collection(db, 'research'),
            orderBy('timestamp', 'desc')
        ),
        (querySnapshot) => {
            const researchData = querySnapshot. docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            callback(researchData);
        }
    );
}

export { loginWithGoogle, submitResearch, loadResearch, auth }