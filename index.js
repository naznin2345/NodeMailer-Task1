var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "youremail",
        pass: "yourpass",
    },
});

var mailOptions = {
    from: "nspoli2345@gmail.com",
    to: "naznins9234@gmail.com",
    subject: "Admission Department Of Leading University",
    text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
