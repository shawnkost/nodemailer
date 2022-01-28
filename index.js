const nodemailer = require('nodemailer');
require('dotenv/config');

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

const options = {
  from: process.env.USER,
  to: process.env.RECEIVER,
  subject: 'Sending email with node.js!',
  text: "wow! That's simple!",
};

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Sent:' + info.response);
});
