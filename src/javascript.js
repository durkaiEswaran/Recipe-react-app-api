import { HfInference } from '@huggingface/inference';

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients and suggests a recipe. The recipe can include extra ingredients.suggest more of a indian dishes. Format your response in markdown.`;

// Initialize the Hugging Face API
const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

export async function getRecipeFromMistral(ingredients) {
    const ingredientString = ingredients.join(", ");
    
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1", // Correct model name
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientString}. Please give me a recipe!` }
            ],
            max_tokens: 1024,
        });

        return response.choices[0].message.content;
    } catch (err) {
        console.error("Error fetching recipe:", err);
    }
}
