const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKeys.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_URI,
});
// Use Firestore instead of Realtime Database
const db = admin.firestore();

module.exports = { db };
