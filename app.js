const express = require("express");
const app = express();
require("dotenv").config();

// Middleware to parse JSON
app.use(express.json());

// Import chat routes
const chatRoutes = require("./routes/chat");

// Use the chat routes
app.use("/api", chatRoutes); // POST /api/chat

// Health check
app.get("/", (req, res) => {
  res.send("DocuBuddy AI server is running! 🚀");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
