const AwsSes = require('./main')
const config = require('./awsConfig')


const ses = AwsSes(config)

const mailOpt = {
    toAddress: 'ramazanalltuntepe@gmail.com',
    subjet: 'AWS Simple Email Service Test',
    body: '<p>This email was sent with <a href="https://aws.amazon.com/ses/">'
}
ses.sendMail(mailOpt)