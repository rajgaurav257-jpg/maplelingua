import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import axios from "axios";
import jwt from "jsonwebtoken";
import Contact from "./models/Contact.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// ===============================
// MongoDB Connection
// ===============================
mongoose.connect(
"mongodb://Maplelingua:MapleLingua969@ac-cdmpgb7-shard-00-00.lq6qz6z.mongodb.net:27017,ac-cdmpgb7-shard-00-01.lq6qz6z.mongodb.net:27017,ac-cdmpgb7-shard-00-02.lq6qz6z.mongodb.net:27017/maplelingua?ssl=true&replicaSet=atlas-6b4ffr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=maplelingua-cluster"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// ===============================
// Admin credentials
// ===============================
const ADMIN_EMAIL = "admin@maplelingua.com";
const ADMIN_PASSWORD = "admin123";
const JWT_SECRET = "supersecretkey";


// ===============================
// Test route
// ===============================
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});


// ===============================
// Admin Login API
// ===============================
app.post("/admin/login", (req, res) => {

  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {

    const token = jwt.sign(
      { email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      success: true,
      token
    });

  } else {

    res.status(401).json({
      success: false,
      message: "Invalid credentials"
    });

  }

});


// ===============================
// Contact Form API
// ===============================
app.post("/contact", async (req, res) => {

  try {

    const { name, email, phone, message, language, captcha } = req.body;

    if (!captcha) {
      return res.status(400).json({
        success:false,
        message:"Captcha required"
      });
    }

    // Google reCAPTCHA verify
    const secretKey = "6LfCsYssAAAAAOCoRN8Lq2OtRFNkllKJgFJrhRfT";

    const verifyURL = "https://www.google.com/recaptcha/api/siteverify";

    const response = await axios.post(
      verifyURL,
      {},
      {
        params:{
          secret: secretKey,
          response: captcha
        }
      }
    );

    if(!response.data.success){

      return res.status(400).json({
        success:false,
        message:"Captcha verification failed"
      });

    }

    // Save contact
    const newContact = new Contact({
      name,
      email,
      phone,
      message,
      language
    });

    await newContact.save();

    res.json({
      success:true,
      message:"Form saved successfully"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success:false,
      message:"Server error"
    });

  }

});


// ===============================
// Get all contacts (Admin)
// ===============================
app.get("/admin/contacts", async (req, res) => {

  try {

    const contacts = await Contact.find().sort({ createdAt:-1 });

    res.json({
      success:true,
      data:contacts
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:"Error fetching contacts"
    });

  }

});


// ===============================
// Delete contact
// ===============================
app.delete("/admin/contact/:id", async (req, res) => {

  try {

    await Contact.findByIdAndDelete(req.params.id);

    res.json({
      success:true,
      message:"Contact deleted"
    });

  } catch (error) {

    res.status(500).json({
      success:false,
      message:"Delete failed"
    });

  }

});


// ===============================
// Server start
// ===============================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});