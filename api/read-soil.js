const { GoogleGenerativeAI } = require('@google/generative-ai');

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { plants, fasting, ferments, stress, lens } = req.body;
    
    // Initialize the classic SDK. Vercel automatically injects GEMINI_API_KEY from your dashboard settings.
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });

    // Map the user's complexity lens to a strict writing style
    const lensTones = {
      1: "Keep the tone accessible, intuitive, and focused on the 'meadow' and 'soil' metaphors. Avoid dense medical jargon.",
      2: "Use biological terms like 'motility', 'microbiome diversity', 'mucosa', and 'vagal tone'. Scientific but readable.",
      3: "Use deep scientific terminology, mentioning specific taxa (e.g., Akkermansia), biochemical pathways (SCFAs, butyrate), and cellular mechanics."
    };
    
    const stressLabels = ["Zen", "Low", "Mild", "Moderate", "Elevated", "High", "Very High", "Overwhelmed", "Burnout", "Crisis"];

    const prompt = `You are an expert microbiologist and gastroenterologist.
    Analyze the following gut ecosystem inputs from a user's simulation:
    - Botanical Diversity: ${plants} unique plants/herbs/spices per week
    - Digestive Rest Window: ${fasting} hours between meals
    - Fermented Foods: ${ferments} servings per day
    - Psychological Stress: Level ${stress}/10 (${stressLabels[stress - 1]})
    
    Write a highly personalized, two-paragraph narrative of what is currently happening in this person's gut environment based on these exact metrics. 
    Tone instruction: ${lensTones[lens]}
    
    Do not include greetings, formatting, or fluff. Just return the two paragraphs of synthesized text.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    return res.status(200).json({ narrative: response.text() });
    
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to synthesize narrative' });
  }
}
