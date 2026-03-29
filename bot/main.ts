import { Client, GatewayIntentBits } from 'discord.js';
import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const openaiConfig = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(openaiConfig);

// Event listener for when the bot is ready
client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}`);
});

// Event listener for messages
client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith('!ask')) {
        const question = message.content.slice(5);
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: question }],
        });
        message.reply(response.data.choices[0].message.content);
    }
});

// Log in to Discord with your app's token
client.login(process.env.DISCORD_TOKEN);