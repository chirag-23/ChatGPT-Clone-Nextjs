import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.CHAT_GPT_KEY
});

export default openai;