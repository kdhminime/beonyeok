import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.REACT_APP_API_KEY, dangerouslyAllowBrowser: true});

/**
 * @param {string} text - The text to be translated
 * @param {string} additionalInfo - Additional information to be passed to the model
 * @returns {string} - The translated text
 */
export const translateGPT = async (chatHistory: any): Promise<string | null> => {
   const completion : any = await openai.chat.completions.create({
    messages: chatHistory,
    model: "ft:gpt-3.5-turbo-1106:personal::8okccOcw",
  });

  return completion.choices[0].message.content;
};