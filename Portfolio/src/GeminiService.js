import { GoogleGenerativeAI } from "@google/generative-ai";

// .env file se key uthayega (Vercel pe bhi kaam karega)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const askAssistant = async (userMessage) => {
  try {const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // SYSTEM PROMPT: AI ko batana ke wo kaun hai
    const systemPrompt = `You are Adil's AI Assistant. 
    Adil is a Software Engineering student at UOG (University of Gujrat). 
    Skills: React.js, Tailwind CSS, API Integration, State Management.
    He is learning from "Complete Coding with Prashant Sir".
    Your tone: Professional, helpful, and confident. 
    Keep answers short (max 2-3 sentences). 
    If someone asks for a job, tell them Adil is ready for Frontend opportunities!`;

    const result = await model.generateContent(`${systemPrompt}\n\nUser Question: ${userMessage}`);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("AI Error:", error);
    return "Adil's assistant is taking a short nap. Please try again later!";
  }
};