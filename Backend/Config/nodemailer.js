import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
   host: process.env.SMTP_HOST || 'smtp.gmail.com',
   port: Number(process.env.SMTP_PORT) || 587,
   secure: process.env.SMTP_SECURE === 'true' || false,
   auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
   },
   tls: {
      rejectUnauthorized: process.env.NODE_ENV === 'production',
   },
});

transporter.verify((err, success) => {
   if (err) {
      // Log verification errors to help debugging during startup
      // eslint-disable-next-line no-console
      console.error('Nodemailer verification failed:', err.message || err);
   } else {
      // eslint-disable-next-line no-console
      console.log('Nodemailer is configured correctly');
   }
});

export default transporter;