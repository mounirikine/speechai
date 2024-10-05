/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
   export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "write a script to generate 30 seconds video on topic : intersting histocal story a long with ai image prompt in realistic format for each scene for each and give me result in json format with image prompt and contentText as fileld"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"contentText\": \"In the heart of ancient Rome, a young slave named Spartacus dreamed of freedom.\",\n    \"imagePrompt\": \"A young, muscular slave with determined eyes, chained and working in a Roman quarry, sunlight streaming down on him. Realistic style.\"\n  },\n  {\n    \"contentText\": \"He was a skilled gladiator, renowned for his courage and strength.\",\n    \"imagePrompt\": \"Spartacus, now a gladiator, fighting in a bloody Roman arena, a crowd cheering in the background. Dramatic lighting, realistic style.\"\n  },\n  {\n    \"contentText\": \"But Spartacus yearned for more than just survival.\",\n    \"imagePrompt\": \"Spartacus standing on a balcony overlooking the Roman city at night, a look of yearning and longing in his eyes. Realistic style.\"\n  },\n  {\n    \"contentText\": \"He dreamt of a world where slaves were not mere possessions, but free men.\",\n    \"imagePrompt\": \"A montage of scenes showing the harsh reality of slavery in Rome: slaves working in fields, being whipped, and chained together. Realistic style.\"\n  },\n  {\n    \"contentText\": \"And one fateful day, Spartacus rose up in rebellion.\",\n    \"imagePrompt\": \"Spartacus leading a band of gladiators and slaves in a violent uprising against Roman soldiers. Dramatic lighting, realistic style.\"\n  },\n  {\n    \"contentText\": \"He rallied thousands of slaves to his cause, forming an army that threatened the very foundation of the Roman Empire.\",\n    \"imagePrompt\": \"A vast army of slaves, led by Spartacus, marching across a dusty Roman road. Epic landscape, realistic style.\"\n  },\n  {\n    \"contentText\": \"For three years, Spartacus and his forces fought a fierce and bloody war against the might of Rome.\",\n    \"imagePrompt\": \"A chaotic battlefield scene with Roman soldiers clashing with Spartacus's army. Realistic style, emphasis on the brutality of war.\"\n  },\n  {\n    \"contentText\": \"They won many battles, proving that even the most downtrodden can rise up and fight for their freedom.\",\n    \"imagePrompt\": \"Spartacus standing victorious on a battlefield, his army celebrating behind him. Realistic style, emphasis on the triumph of the rebellion.\"\n  },\n  {\n    \"contentText\": \"But ultimately, the Roman legions proved too strong.\",\n    \"imagePrompt\": \"A Roman legion marching towards Spartacus's army, overwhelming them with sheer numbers. Realistic style, emphasis on the Roman army's might.\"\n  },\n  {\n    \"contentText\": \"In a final, desperate battle, Spartacus was defeated and killed.\",\n    \"imagePrompt\": \"Spartacus falling in battle, surrounded by fallen soldiers. Realistic style, emphasis on the tragic defeat.\"\n  },\n  {\n    \"contentText\": \"His rebellion was crushed, but his legend lived on.\",\n    \"imagePrompt\": \"A statue of Spartacus standing tall in a Roman forum, overlooking the city. Realistic style, emphasis on the lasting legacy of the rebellion.\"\n  },\n  {\n    \"contentText\": \"Spartacus became a symbol of hope for the oppressed, a reminder that even the most powerful empires can be challenged.\",\n    \"imagePrompt\": \"A close-up shot of a single chained hand, symbolizing the enduring struggle for freedom. Realistic style, emphasis on the continuing fight for human rights.\"\n  }\n]\n```\n\n**Notes:**\n\n* This JSON format includes two fields: `contentText` for the narration and `imagePrompt` for the AI image generation.\n* The image prompts are designed to generate realistic images, but you can adjust them to match your desired art style (e.g., \"photorealistic\", \"painting\", \"anime\").\n* The number of scenes (12 in this case) can be adjusted to fit your desired video length.\n* To generate the images, you can use AI image generation tools like DALL-E 2, Midjourney, or Stable Diffusion.\n* This script is just a starting point. You can customize the content, image prompts, and overall structure to fit your specific needs and creative vision.\n\n**Remember:** The success of your video will depend on the quality of the AI-generated images and the effectiveness of your narration and editing. \n"},
          ],
        },
      ],
    });
