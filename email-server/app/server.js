
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
    console.log("POSTTTT");
    
  const { subject, recipient, type, body } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 't442024@gmail.com', // המייל שלך
        pass: 'your-app-password'     // סיסמת אפליקציה מגוגל
      }
    });

    await transporter.sendMail({
      from: 't442024@gmail.com',
      to: recipient,
      subject: `${type} - ${subject}`,
      text: body
    });

    res.json({ message: 'Email sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
