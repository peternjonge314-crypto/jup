const nodemailer = require("nodemailer");

if (missingVariables.length > 0) {
  console.error(`Set these environment variables before running: ${missingVariables.join(", ")}`);
  process.exit(1);
}



sendEmail().catch((error) => {
  console.error("Email could not be sent:", error.message);
  process.exitCode = 1;
});
