import { exec } from "child_process";
import { promisify } from "util";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import getDownloadURL
import { storage } from '../../../configs/FirebaseConfig';
import fs from "fs/promises"; // To handle file reading in Node.js
import { v4 as uuidv4 } from 'uuid'; // Import uuid

const execPromise = promisify(exec);

export async function POST(req) {
  const { text, voice } = await req.json(); // Make sure to retrieve the voice from the request body

  // Generate a random UUID for the file name
  const randomFileName = `${uuidv4()}.mp3`;
  const storageRef = ref(storage, `ai-short-video-files/${randomFileName}`);

  if (!text) {
    return new Response(JSON.stringify({ error: "Text is required." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Run the Python script to generate speech
    const { stdout, stderr } = await execPromise(`python3 text_to_speech.py "${text}" "${voice}"`);

    if (stderr) {
      console.error(stderr);
      return new Response(JSON.stringify({ error: "Failed to generate speech." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Assuming the output audio file is 'output.mp3'
    const filePath = "./output.mp3";

    // Read the generated file
    const fileBuffer = await fs.readFile(filePath);

    // Upload the file to Firebase Storage with a unique name
    await uploadBytes(storageRef, fileBuffer, {
      contentType: "audio/mpeg",
    });

    // Get the download URL of the uploaded file
    const downloadURL = await getDownloadURL(storageRef);

    return new Response(JSON.stringify({ message: "Speech generated and uploaded.", file: randomFileName, url: downloadURL }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error executing script or uploading file:", error);
    return new Response(JSON.stringify({ error: "Failed to generate or upload speech." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
