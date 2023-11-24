import openai from '../services/assistant.mjs';
import express from 'express';
import dotenv from 'dotenv';

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { getThreadIdForUser } from '../services/dataStore.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: `${__dirname}/../.env` })

let assistant = { 'id': process.env.ASSISTANT_ID }

const router = express.Router();

// Assuming you have a function to get the thread ID for a user
// This function should interact with your local store
async function callGetThreadIdForUser(user) {
  // Implement this function
  getThreadIdForUser(user)
}

router.post('/assistant', async (req, res) => {
  let threadId = await callGetThreadIdForUser(req.user);

  console.log("iam assistant id", assistant)
  // console.log("i am req", req)
  if (!threadId) {
    const thread = await openai.beta.threads.create();
    threadId = thread.id;
  }

  // Add a message to the thread
  const message = await openai.beta.threads.messages.create(
    threadId,
    {
      role: "user",
      content: req.body.content
    }
  );

  const run = await openai.beta.threads.runs.create(
    threadId,
    {
      assistant_id: assistant.id,
    }
  );

  // Wait for a while before fetching the messages
  await new Promise(resolve => setTimeout(resolve, 5000));

  const messages = await openai.beta.threads.messages.list(threadId);

  // Filter for messages where role is 'assistant' or 'user'
  const relevantMessages = messages.data.filter(message => ['assistant', 'user'].includes(message.role));

  // Map each message to an object with the role and text
  const formattedMessages = relevantMessages.map(message => ({
    role: message.role,
    text: message.content[0].text.value
  }));


  // Send the assistant's response back to the client
  res.json(formattedMessages);
});

export default router;