const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  console.log("Sending Welcom Email");
  sgMail.send({
    to: email,
    from: "alireza7612@gmail.com",
    subject: "Thanks for joining Us ! ",
    text: `Welcome to the app ${name}. See you Soon !`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "alireza7612@gmail.com",
    subject: `Goodbye ${name}`,
    text: `We Are Sorry for losing you ${name}, Please help us to with knowing the reason behind !`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
