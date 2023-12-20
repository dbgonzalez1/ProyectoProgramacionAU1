const nodemailer = require("nodemailer");
const  { HOSTEMAIL, USEREMAIL, PASSEMAIL, PORTEMAIL } = require('./config.js');

const sendEmail = async (email, subject, msg) => {
    try {
        const transporter = nodemailer.createTransport({
            //service: 'gmail',
            host: HOSTEMAIL,
            auth: {
                user: USEREMAIL,
                pass: PASSEMAIL,
            },
            tls: {
                rejectUnauthorized: false,
            },
            port: PORTEMAIL
        });

        const mailOptions = {
            from: 'Notificacion Grupo',
            to: `${email}`,
            subject: subject,
            html: msg,
        };

       await transporter.sendMail(mailOptions);

        return null;
    } catch (error) {
        console.log(error);
        return error;
    }

}

module.exports={
    sendEmail
}