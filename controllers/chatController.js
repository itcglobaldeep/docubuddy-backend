const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const chatWithOpenAI = async (req, res) => {
  const { message } = req.body;

  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: message }],
      model: "gpt-3.5-turbo",
    });

    res.json({ reply: chatCompletion.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI error:", error);
    res.status(500).json({ error: "Something went wrong with OpenAI" });
  }
};

module.exports = { chatWithOpenAI };
