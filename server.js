require('dotenv').config();
const { Push7 } = require('node-push7');

const p7 = new Push7({
  appno: process.env.APP_NUMBER,
  apikey: process.env.API_KEY
});

// get app info
p7.head()
  .then(j => {
    console.log(j);
  }).catch(err => {
    console.error(`Error: ${err.name} (${err.message})`);
  });

// push notification
p7.send({
  title: '', // title of the notification
  body: '', // message of the notification
  icon: process.env.ICON,
  url: process.env.URL
}).then(res => console.log(res))
  .catch(err => console.error(`Error: ${err.name} (${err.message})`));
