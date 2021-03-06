/**
  Example usage, call this in your browser:
    http://yourserver:yourport/sendmail/[youremail@yourserver.com]
*/

var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'your custom smtp server',
    port: 0, // your custom smtp server port
    auth: {
        user: 'your custom smtp user',
        pass: 'your custom smtp password'
    }
  }
);

app.get('/sendmail/:email', function (req, res) {
  console.log('Sending e-mail to: ' + req.params['email']);

  var email = {
    from : 'your from email',
    to : req.params['email'],
    subject: 'E-mail Test',
    text: '',
    html: '<i>Test Send E-mail with nodejs and Locaweb server</i>'
  };

  transporter.sendMail(email, function(err, info) {
    if (err ){
      console.log(error);
      res.status(500).send();
    } else {
      console.log('E-mail sent: ' + info.response);
      res.status(200).send();
    }
  });
});

app.listen(3035, function () {
  console.log('Server runing...');
});
