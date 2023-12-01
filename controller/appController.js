const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const { EMAIL, PASSWORD } = require("../env.js");

// send mail from real gmail account
const Contact = async (req, res) => {
  let config = {
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "INDIAN APPAREL",
      link: "https://www.indian-apparel.com/",
    },
  });

  let response = {
    body: {
      name: "Indian-apparel",
      intro: "Your Message Arrived!",
      table: {
        data: [
          {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            city: req.body.city,
           
          },
        ],
      },
    },
  };

  let response2={
      body:{
        name:req.body.name,
        intro:"Thank You for reaching out to Indian Apparel.",
        outro:"We will get back to you soon. Thank you, have a great day."
      }
  }

  let mail = MailGenerator.generate(response);
  let thnxMail=MailGenerator.generate(response2);
  let message = {
    from: EMAIL,
    to: " dhruv@teamflourish.co",
    subject: "Contact form",
    html: mail,
  };
  let message2={
    from: EMAIL,
    to:req.body.email,
    subject:"Thank You !",
    html:thnxMail,
  }
try {
  await transporter.sendMail(message)
   await transporter.sendMail(message2)
   res.send({
    msg:"You got your Mail",
   })
} catch (error) {
  res.send({
    msg: error.message,
    error,
  })
}













  // transporter
  //   .sendMail(message)
  //   .then(() => {
  //     return res.status(201).json({
  //       msg: "you shoud receive an email",
  //     });
  //   })
  //   .catch((error) => {
  //     return res.status(500).json({ error });
  //   });

};

module.exports = {
  Contact,
};
