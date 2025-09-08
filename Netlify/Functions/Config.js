// netlify/functions/config.js

exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firebaseConfig: {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: "dekha-5daeb.firebaseapp.com",
        databaseURL: "https://dekha-5daeb-default-rtdb.firebaseio.com",
        projectId: "dekha-5daeb",
        storageBucket: "dekha-5daeb.firebasestorage.app",
        messagingSenderId: "647841969799",
        appId: "1:647841969799:web:c133fdc1cc8ea986846a22"
      },
      cloudinaryConfig: {
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET
      },
      GIPHY_API_KEY: process.env.GIPHY_API_KEY,
      ADMIN_EMAIL: process.env.ADMIN_EMAIL
    }),
  };
};
