// import dotenv 
require('dotenv').config();

// Amazon SES configuration
module.exports = {
    apiVersion: '2010-12-01',
    accessKeyId: process.env.AWS_SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
    region: process.env.AWS_SES_REGION,

    MAIL_FROM: 'no-reply@t.zulier.com',
    REPLY_TO:'example-reply@mail.com'
}