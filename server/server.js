const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Send Email to Admin
        const adminResponse = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact - ${subject}`,
            html: `
                <h2>New Contact Message</h2>
                <hr>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        console.log("Admin Response:", adminResponse);

        if (adminResponse.error) {
            return res.status(500).json({
                success: false,
                message: adminResponse.error.message,
            });
        }

        // Send Auto Reply
        console.log("Sending Auto Reply To:", email);

        const autoReplyResponse = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: email,
            subject: "Thank You for Contacting Me",
            html: `
                <h2>Thank You ${name}! 😊</h2>

                <p>We have received your message successfully.</p>

                <p>We will contact you as soon as possible.</p>

                <hr>

                <p><strong>Your Subject:</strong> ${subject}</p>

                <br>

                <p>Best Regards,</p>
                <h3>Aryan Ardeshana</h3>
            `,
        });

        console.log("Auto Reply Response:", autoReplyResponse);

        if (autoReplyResponse.error) {
            console.error("Auto Reply Error:", autoReplyResponse.error);
        }

        return res.status(200).json({
            success: true,
            message: "Message Sent Successfully",
        });

    } catch (err) {
        console.error("Server Error:", err);

        return res.status(500).json({
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
    console.log(`Server Running on Port ${PORT}`);
});