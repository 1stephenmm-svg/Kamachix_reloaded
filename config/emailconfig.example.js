const nodemailer = require('nodemailer');

function configmail(){
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport({
      service: '"Outlook365"',
      auth: {
          user: 'FbB0e@example.com',
          pass: 'password'
      }
  });

  return transporter;
}

module.exports.configmail = configmail;
