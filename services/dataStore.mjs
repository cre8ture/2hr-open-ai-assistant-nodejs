import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function getThreadIdForUser(user) {



  const dataPath = path.join(__dirname, '..', 'data', 'users.json');

  let users;
  try {
    const rawData = fs.readFileSync(dataPath, 'utf-8');
    users = JSON.parse(rawData);
  } catch (err) {
    users = {};
  }

  if (!users[user]) {
    // User does not exist, return null
    return null;
  }

  return users[user].threadId;
}