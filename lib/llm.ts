import { GoogleGenAI } from '@google/genai';
import Groq from 'groq-sdk';

const GEMINI_API_KEY = process.env.API_KEY;
const GROQ_API_KEY = process.env.GROQ_API_KEY;

const SYSTEM_RULES = `You are Kohai, a wholesome anime companion. Stay SFW. Never roleplay a minor. Keep replies short (<= 3 sentences), friendly, and cozy.`;

// Try Gemini first
let ai: GoogleGenAI | null = null;
if (GEMINI_API_KEY) {
  try {
    ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  } catch (e) {
    console.error("Failed to initialize Gemini:", e);
    ai = null;
  }
}

// Groq fallback (Llama-3.1)
const groq = GROQ_API_KEY ? new Groq({ apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true }) : null;
const GROQ_MODEL = 'llama-3.1-8b-instant';

export async function llmReply(text: string): Promise<string> {
  // Prefer Gemini
  if (ai) {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: text,
            config: {
                systemInstruction: SYSTEM_RULES,
            },
        });
        const resultText = response.text;
        if (resultText) {
          return resultText.trim();
        }
    } catch (e) {
        console.error("Gemini API error, falling back to Groq:", e);
    }
  }

  // Fallback to Groq
  if (groq) {
    try {
        const chat = await groq.chat.completions.create({
            model: GROQ_MODEL,
            messages: [
                { role: 'system', content: SYSTEM_RULES },
                { role: 'user', content: text }
            ],
            temperature: 0.7,
            max_tokens: 160,
        });
        const resultText = chat.choices?.[0]?.message?.content;
        if (resultText) {
          return resultText.trim();
        }
    } catch (e) {
        console.error("Groq API error:", e);
    }
  }
  
  return "I’m not connected to any model yet. Please make sure a `process.env.API_KEY` (for Gemini) or `process.env.GROQ_API_KEY` is set.";
}
