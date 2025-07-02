const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccountKeys.json");
// console.log("Service Account Key Loaded:", serviceAccount);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_URI,
});

const db = admin.database();
module.exports = { db };
