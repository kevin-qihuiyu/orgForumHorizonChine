const nodeMailer = require('nodemailer');

module.exports = (req, res) => {
    let transporter = nodeMailer.createTransport({
        service: 'QQex',
        auth: {
            user: 'forum@afcp-paristech.org',
            pass: 'AFCPzui6'
        }
    });

    let mailOptions = {
        from: 'forum@afcp-paristech.org',
        to: 'forum.horizon.chine.2020@gmail.com',
        subject: req.body.name +'_'+req.body.entreprise + '_'+ req.body.job,
        text: '本邮件由地平线官网发送',
        // subject: req.body.subject,
        // body: req.body.message,
        // attachments: [
        //     {
        //         path: req.body.fileupload
        //     }
        // ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}