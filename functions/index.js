const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const admin = require('firebase-admin');

// Hellow Worlc function
exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const app = express();
app.use(cors());

admin.initializeApp();

app.post('/', async (req, res) => {
  let token = req.body.token;
  try {
    let response = await admin.messaging.send({
      notification: {
        title: 'Primera notificación',
        body: ''
      },
      token: token
    });

    return res.json(response);
  } catch(err) {
    return res.json(err).status(500);
  }
});

exports.notification = functions.https.onRequest(app);
