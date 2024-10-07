"use client";

import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";

const options = [
  "Custom Prompt",
  "Random AI Story",
  "Scary Story",
  "Historical Facts",
  "Bedtime Story",
  "Motivational",
  "Fun Facts",
];

const styleOptions = ["Realistic", "Cartoon", "Comic", "Watercolor", "GTA"];

const durationOptions = ["30 seconds", "15 seconds", "60 seconds"];

const CreateNew = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [videoScript, setVideoScript] = useState([]);
  const [imageList, setImageList] = useState([]);
  const [customPrompt, setCustomPrompt] = useState("");
  const [image, setImage] = useState("");
  const [textScript, setTextScript] = useState("");

  const [audioUrl, setAudioUrl] = useState("");
  const [caption, setCaption] = useState("");

  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    setCustomPrompt(value !== "Custom Prompt" ? value : "");
    checkFormCompletion(value, selectedStyle, selectedDuration);
  };

  const handleTextAreaChange = (e) => {
    setCustomPrompt(e.target.value);
    checkFormCompletion(e.target.value, selectedStyle, selectedDuration);
  };

  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
    checkFormCompletion(customPrompt, style, selectedDuration);
  };

  const handleDurationSelect = (e) => {
    setSelectedDuration(e.target.value);
    checkFormCompletion(customPrompt, selectedStyle, e.target.value);
  };

  const checkFormCompletion = (prompt, style, duration) => {
    setIsSubmitDisabled(!(prompt && style && duration));
  };

  const handleSubmit = async () => {
    const prompt = `Write a script to generate a ${selectedDuration} video on the topic: ${selectedOption} along with AI image prompts in ${selectedStyle} format for each scene. Provide the result in JSON format with 'imagePrompt' and 'contentText' as fields.`;

    try {
      const response = await axios.post("/api/getVideoScript", { prompt });
      setVideoScript(response.data.result);
      await generateSpeech(response.data.result);
    } catch (error) {
      console.error("Error fetching video script:", error);
      setError("Error fetching video script. Please try again.");
    }
  };

  const generateSpeech = async (scriptArray) => {
    // Check if the scriptArray is valid
    if (!Array.isArray(scriptArray) || scriptArray.length === 0) {
      console.error("Invalid script data:", scriptArray);
      setError("Text is required.");
      return;
    }

    // Initialize a variable to hold the concatenated text
    let concatenatedText = "";

    // Iterate over the array of script objects and concatenate contentText
    for (const script of scriptArray) {
      const { contentText } = script;
      concatenatedText += contentText + " "; // Add each contentText followed by a space
    }

    // Trim the concatenated text and set it
    const text = concatenatedText.trim();
    setTextScript(text); // Use trim() to remove any trailing space
    setMessage("");
    setError("");

    try {
      // Send the text to the backend API
      const response = await axios.post(
        "http://localhost:3000/api/speechGenerator",
        {
          text: text,
        }
      );

      if (response.data.url) {
        const audioUrl = response.data.url; // Store the audio URL
        setAudioUrl(audioUrl); // Set the audio URL in state
        setMessage(
          `Speech generated! You can download it [here](${audioUrl}).`
        );

        // Log the audio URL in the console
        // console.log("The URL of the audio is:", audioUrl);

        generateAudioCaption(audioUrl);
        generateImage();
      } else {
        setError("No URL returned from speech generator.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to generate speech. Please try again.");
    }
  };

  const generateAudioCaption = async (fileUrl) => {
    await axios
      .post("http://localhost:3000/api/generateCaption", {
        audioFileUrl: fileUrl,
      })
      .then((resp) => {
        setCaption(resp?.data?.result);
        // console.log(caption);
      });
  };

  const generateImage = async () => {
    async function query(data) {
      try {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
          {
            headers: {
              Authorization: "Bearer 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",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
          }
        );

        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
          const errorText = await response.text(); // Get the error message
          throw new Error(`Error: ${response.status} ${errorText}`);
        }

        const result = await response.blob();
        return result;
      } catch (error) {
        console.error("Error during image generation:", error);
        throw error; // Rethrow to handle it outside if needed
      }
    }

    try {
      const imageUrls = []; // Array to store generated image URLs

      // Use a for...of loop to await each image generation
      for (const element of videoScript) {
        const imageBlob = await query({ inputs: element.imagePrompt });
        const imageUrl = URL.createObjectURL(imageBlob);
        imageUrls.push(imageUrl); // Store each image URL

        // Optionally, if you want to set the image state for each image
        setImage(imageUrl); // Update the state with the latest image URL
      }

      // If you want to set all images at once (if setImage handles multiple images)
      // setImages(imageUrls); // Uncomment if you have a state for multiple images
    } catch (error) {
      console.error("Failed to generate image:", error);
    }
  };

  return (
    <div className="p-10 w-full max-w-full mx-auto">
      <Image
        src={image}
        alt="Description of the image"
        width={800} // Set an appropriate width
        height={600} // Set an appropriate height
        layout="responsive" // Ensures responsive behavior if needed
      />
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Create New Content</h1>
        <p className="text-gray-600 mb-6">
          Select the topic, style, and duration of your video.
        </p>

        {/* Topic Selection */}
        <select
          onChange={handleSelectChange}
          name="content-type"
          id="content-type"
          className="mt-2 p-2 w-full bg-slate-100 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
          value={selectedOption}
        >
          <option value="">Select Content Type</option>
          {options.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </select>

        {/* Custom Prompt Text Area */}
        {selectedOption === "Custom Prompt" && (
          <textarea
            name="custom-prompt"
            id="custom-prompt"
            className="mt-4 p-2 w-full bg-slate-100 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your custom prompt here"
            rows={4}
            onChange={handleTextAreaChange}
          />
        )}

        {/* Style Selection */}
        <div className="mt-6">
          <p className="text-gray-600 mb-2">Select the style of your video:</p>
          <div className="grid grid-cols-5 gap-4">
            {styleOptions.map((item, index) => (
              <button
                key={index}
                className={`p-4 border rounded shadow-md ${
                  selectedStyle === item ? "bg-blue-500 text-white" : "bg-white"
                }`}
                onClick={() => handleStyleSelect(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Duration Selection */}
        <div className="mt-6">
          <p className="text-gray-600 mb-2">
            Select the duration of your video:
          </p>
          <select
            onChange={handleDurationSelect}
            name="duration"
            id="duration"
            className="mt-2 p-2 w-full bg-slate-100 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            value={selectedDuration}
          >
            <option value="">Select Duration</option>
            {durationOptions.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className={`mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${
            isSubmitDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>

        {/* Message and Error Display */}
        {message && <p className="mt-4 text-green-600">{message}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </div>
    </div>
  );
};

export default CreateNew;

// import React, { useState } from 'react';
// import axios from 'axios';

// const TextToSpeech = () => {
//     const [text, setText] = useState('');
//     const [message, setMessage] = useState('');
//     const [error, setError] = useState('');

//     const handleTextChange = (e) => {
//         setText(e.target.value);
//     };

//     const generateSpeech = async () => {
//         setMessage('');
//         setError('');

//         if (!text) {
//             setError('Text is required.');
//             return;
//         }

//         try {
//             // Sending a POST request to the API endpoint
//             const response = await axios.post('http://localhost:3000/api/speechGenerator', {
//                 text: text,
//             });

//             if (response.data.file) {
//                 setMessage(`Speech generated! You can download it [here](http://localhost:3000/${response.data.file}).`);
//             }
//         } catch (err) {
//             console.error(err);
//             setError('Failed to generate speech. Please try again.');
//         }
//     };

//     return (
//         <div>
//             <h1>Text to Speech Generator</h1>
//             <textarea
//                 value={text}
//                 onChange={handleTextChange}
//                 placeholder="Enter text to convert to speech"
//             />
//             <button onClick={generateSpeech}>Generate Speech</button>
//             {message && <p>{message}</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };

// export default TextToSpeech;
