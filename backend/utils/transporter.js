import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ilyasalabi05@gmail.com", // Replace with your email
    pass: "ipkr umcc bzzz xbvt",
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Error setting up transporter:", error);
  } else {
    console.log("Transporter is ready to send emails.");
  }
});

export default transporter;
