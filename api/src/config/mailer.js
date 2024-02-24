const nodemailer = require("nodemailer");
require("dotenv").config();

// create reusable transporter object using the default SMTP transport
exports.transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: Boolean(process.env.EMAIL_USE_SSL), // true for 465, false for other ports)

  auth: {
    user: process.env.SMTP_USER, // generated ethereal user
    pass: process.env.SMTP_PASS, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
    debug: true,
  },
});
