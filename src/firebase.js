import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAkkv7HexCRsRdWWHYuNhHjcwQiH7PGtwk',
  authDomain: 'learn-lingo-app-64d51.firebaseapp.com',
  databaseURL:
    'https://learn-lingo-app-64d51-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'learn-lingo-app-64d51',
  storageBucket: 'learn-lingo-app-64d51.appspot.com',
  messagingSenderId: '179884021441',
  appId: '1:179884021441:web:8afa4c138d78b0d8046640',
  measurementId: 'G-ZCTXMECFB6',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, analytics, auth, db };
