/**
 * Example implementation of Amazon Simple Email Service (Amazon SES)
 * 
 * @author Maciej Lisowski
 * @since 2018-11-25
 */



// import AWS SDK
const AWS = require('aws-sdk');
const { REPLY_TO, MAIL_FROM } = require('./awsConfig')


class AwsSes {

  constructor(config) {
    this.ses = new AWS.ses(config)
  }

  sendMail({ toAddress, subject, body }) {
    var params = {
      Source: MAIL_FROM,
      Destination: {
        ToAddresses: [
          toAddress
        ]
      },
      ReplyToAddresses: [
        REPLY_TO
      ],
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: body
          }
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject
        }
      }
    };
    try {
      const result = this.ses.sendEmail(params).promise()
      return result['messageId']
    } catch (error) {
      return new Error(error)
    }

  }
}

module.exports = AwsSes





