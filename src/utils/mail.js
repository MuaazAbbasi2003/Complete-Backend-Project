import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Task manager System",
      link: "https://mailgen.js",
    },
  });
  const emailTextual = mailGenerator.generatePlaintext(options.mailgenContent);
  const emailHTMl = mailGenerator.generate(options.mailgenContent);

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });
  const mail = {
    from: process.env.EMAIL_FROM || "noreply@taskmanager.com",
    to: options.email,
    subject: options.subject,
    text: emailTextual,
    html: emailHTMl,
  };
  try {
    await transporter.sendMail(mail);
  } catch (error) {
    console.error("enter proper credentials");
    console.error("the error is ", error);
  }
};

const emailVerifcationMailgenContenent = (username, verificationUrl) => {
  return {
    body: {
      name: username,
      intro: "Welcome to Mailgen! We're very excited to have you on board.",
      action: {
        instructions: "To get started with Mailgen, please click here:",
        button: {
          color: "#22BC66",
          text: "Confirm your account",
          link: verificationUrl,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};
const resetPasswordMailgenContent = (username, resetLink) => {
  return {
    body: {
      name: username,
      intro: "We're sorry to hear that you had trouble signing in.",
      action: {
        instructions: "To sign in , please click here:",
        button: {
          color: "#22BC66",
          text: "Reset your password",
          link: resetLink,
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};

export { emailVerifcationMailgenContenent, resetPasswordMailgenContent };
export { sendEmail };
