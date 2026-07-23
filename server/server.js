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

        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact - ${subject}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        if (error) {
            console.error("Resend Error:", error);

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }

        console.log("Email Sent:", data);

        res.status(200).json({
            success: true,
            message: "Message Sent Successfully",
        });

    } catch (err) {
        console.error("Server Error:", err);

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
    console.log(`Server Running on Port ${PORT}`);
});