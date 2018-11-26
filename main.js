/**
 * Example implementation of Amazon Simple Email Service (Amazon SES)
 * 
 * @author Maciej Lisowski
 * @since 2018-11-25
 */

// import dotenv 
require('dotenv').config();
// import AWS SDK
const AWS = require('aws-sdk');

// Amazon SES configuration
const SESConfig = {
  apiVersion: '2010-12-01',
  accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION
};

var params = {
  Source: 'no-reply@t.zulier.com',
  Destination: {
    ToAddresses: [
      'maciej.lisowski.elk@gmail.com'
    ]
  },
  ReplyToAddresses: [
    'maciej@zulier.com',
  ],
  Message: {
    Body: {
      Html: {
        Charset: "UTF-8",
        Data: 'IT IS <strong>WORKING</strong>!'
      }
    },
    Subject: {
      Charset: 'UTF-8',
      Data: 'Node + SES Example'
    }
  }
};

new AWS.SES(SESConfig).sendEmail(params).promise().then((res) => {
  console.log(res);
});
