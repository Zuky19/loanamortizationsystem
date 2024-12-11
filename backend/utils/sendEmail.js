import transporter from "./transporter.js"; // Path to transporter setup

export const sendEmail = async (to, subject, htmlContent) => {
  try {
    const mailOptions = {
      from: "ilyasalabi05@gmail.com", // Sender email
      to, // Recipient email
      subject, // Subject line
      html: htmlContent, // Email content in HTML
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email.");
  }
};
