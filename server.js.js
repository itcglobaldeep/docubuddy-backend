require('dotenv').config();
const express = require('express');
const cors = require('cors');
const chatRoute = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRoute);

app.get('/', (req, res) => {
  res.send('DocuBuddy AI Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});