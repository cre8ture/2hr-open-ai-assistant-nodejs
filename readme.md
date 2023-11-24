
## Project Overview

This project is a Node.js application that uses the OpenAI API to generate AI responses. It uses Express.js for server-side logic and Axios for making HTTP requests. The application also uses a routing module for handling requests related to assistants. It uses OpenAI's Assistant feature: https://platform.openai.com/docs/assistants/overview and follows the basic tutorial for creating a math tutor linked with code interpretor. 

## Environment Variables

To run this project, you need to set up your OpenAI credentials. These credentials are stored in a `.env` file at the root of the project.

### Creating a .env file

1. In the root directory of the project, create a new file named `.env`.
2. Open the `.env` file in your text editor.
3. Add the environment variables in this format: `KEY=VALUE`.
4. Save the changes.

Your `.env` file should contain the following two lines:
- see example file `.env.example` (remember to remove the `.example` from the filename)

```shell
OPENAI_API_KEY=your_openai_api_key
ASSISTANT_ID=your_assistant_id
```

Replace `your_openai_api_key` and `your_assistant_id` with your actual OpenAI API key and assistant ID.

## Running the Project

After setting up the `.env` file with your OpenAI credentials, you can run the project using the following command ensuring you are in the root directory:

```bash
npm install
```

This installs all the node modules

```bash
npm start
```

This will start the server, and the application will begin listening for requests. On your web browser navigate to `localhost:3000/` to use the demo. 

## Note

Never commit your `.env` file to the repository. It contains sensitive data. Always add `.env` to your `.gitignore` file.

## How the Application Works

When the application starts, it creates an Express.js server and sets up routes for handling requests. The server communicates with the OpenAI API to generate responses based on user input.

The application also uses the `axios` module for making HTTP requests and the `dotenv` module for loading environment variables from the `.env` file.

## Contributing

Contributions are welcome! Please read the contributing guidelines before getting started.

## License

This project is licensed under the terms of the MIT license.

cre8ture: i should be able to copy and paste the whl-ole markdown

GitHub Copilot: # README

## Project Overview

This project is a Node.js application that uses the OpenAI API to generate AI responses. It uses Express.js for server-side logic and Axios for making HTTP requests. The application also uses a routing module for handling requests related to assistants.

## Environment Variables

To run this project, you need to set up your OpenAI credentials. These credentials are stored in a `.env` file at the root of the project.

### Creating a .env file

1. In the root directory of the project, create a new file named `.env`.
2. Open the `.env` file in your text editor.
3. Add the environment variables in this format: `KEY=VALUE`.
4. Save the changes.

