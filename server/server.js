const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Contact = require("./models/Contact");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connect
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.log("❌ MongoDB Error:", err));

// Contact API
app.post("/api/contact", async (req, res) => {

    try {

        console.log("======================================");
        console.log("📩 New Contact Request Received");
        console.log("REQ BODY:", req.body);

        const {
            name,
            email,
            subject,
            message,
        } = req.body;

        console.log("------------- Parsed Data -------------");
        console.log("Name    :", name);
        console.log("Email   :", email);
        console.log("Subject :", subject);
        console.log("Message :", message);
        console.log("---------------------------------------");

        // Validation
        if (
            !name ||
            !email ||
            !subject ||
            !message
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required."
            });
        }

        // Save MongoDB
        const contact = new Contact({
            name: name.trim(),
            email: email.trim(),
            subject: subject.trim(),
            message: message.trim(),
        });

        const savedContact = await contact.save();

        console.log("✅ MongoDB Saved Successfully");
        console.log(savedContact);

        return res.status(200).json({
            success: true,
            message: "Message Saved Successfully",
            data: savedContact,
        });

    } catch (err) {

        console.log("❌ MongoDB Save Error");
        console.log(err);

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message,
        });
    }

});

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server Running On Port ${PORT}`);
});