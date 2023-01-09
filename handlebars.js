const path = require("path");
var nodemailer = require("nodemailer");
var hbs = require("nodemailer-express-handlebars");

var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "youremail",
        pass: "yourpass",
    },
});

const handlebarOptions = {
    viewEngine: {
        extName: ".handlebars",
        partialsDir: path.resolve("./views"),
        defaultLayout: false,
    },
    viewPath: path.resolve("./views"),
    extName: ".handlebars",
};

transporter.use("compile", hbs(handlebarOptions));

var mailOptions = {
    from: "nspoli2345@gmail.com",
    to: "naznins9234@gmail.com",
    subject: "Admission Department of leading university",
    template: "email",
    context: {
        name: "Naznin Sultana Poli",
    },
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
});
