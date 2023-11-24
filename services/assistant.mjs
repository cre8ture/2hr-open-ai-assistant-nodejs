
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import OpenAI from "openai";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `${__dirname}/../.env` });


const openai = new OpenAI(
   { apiKey: process.env.OPENAI_API_KEY}
);

//create assistant only need to do this once 
 async function openAiCall() {
    const assistant = await openai.beta.assistants.create({
        name: "Math Tutor",
        instructions: "You are a personal math tutor. Write and run code to answer math questions.",
        tools: [{ type: "code_interpreter" }],
        model: "gpt-4-1106-preview"
      });

//   console.log(myAssistant);
}

// openAiCall()
export default openai;
