const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const handleChat = async (req, res) => {
  const { message } = req.body;

  if (!message) return res.status(400).json({ error: 'Message is required' });

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    const reply = completion.data.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'AI response failed' });
  }
};

module.exports = { handleChat };