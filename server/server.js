const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Resend } = require("resend");
require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connect
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB Error:", err));

const resend = new Resend(process.env.RESEND_API_KEY);

// Contact API
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Save to MongoDB
        const contact = new Contact({
            name,
            email,
            subject,
            message,
        });

        await contact.save();

        // Send Email
        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact - ${subject}`,
            html: `
        <h2>New Portfolio Contact</h2>
        <hr>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }

        console.log(data);

        res.status(200).json({
            success: true,
            message: "Message Sent Successfully",
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(` Server Running on Port ${PORT}`);
});