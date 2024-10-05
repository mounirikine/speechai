'use client';

import { Download, Search, WandSparkles } from 'lucide-react';
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [inputPrompt, setInputPrompt] = useState(''); // Input text for speech generation
  const [audioUrl, setAudioUrl] = useState(null); // URL of the generated audio
  const [loading, setLoading] = useState(false);  // State for managing loading status
  const [error, setError] = useState('');         // State for error handling
  const [message, setMessage] = useState('');     // State for displaying success messages
  const [selectedVoice, setSelectedVoice] = useState('en-US-GuyNeural'); // Default voice selection

  // List of available voices
  const voices = [
    'en-US-GuyNeural',      // English (US) - Guy
    'en-US-JennyNeural',    // English (US) - Jenny
    'en-US-AriaNeural',     // English (US) - Aria
    'fr-FR-HenriNeural',    // French (France) - Henri
    'pt-BR-AntonioNeural',   // Portuguese (Brazil) - Antonio
    'zh-CN-XiaoxiaoNeural',  // Chinese (Mandarin) - Xiaoxiao
    'ar-SA-HamedNeural',     // Arabic (Saudi Arabia) - Hamed
];


  const generateSpeech = async () => {
    if (!inputPrompt.trim()) {
      setError("Text is required.");
      return;
    }
    
    setLoading(true);
    setError("");
    setMessage("");

    try {
      // Send the input text and selected voice to the backend API for speech generation
      const response = await axios.post('/api/speechGenerator', { text: inputPrompt, voice: selectedVoice });

      if (response.data.url) {
        const audioUrl = response.data.url;  // Get the audio URL
        setAudioUrl(audioUrl);  // Set audio URL for playback and download
        setMessage(`Speech generated! Listen to the audio or download it below.`);
        console.log("Audio URL:", audioUrl);
      } else {
        setError("Failed to retrieve the speech URL.");
      }
    } catch (error) {
      console.error("Error generating speech:", error);
      setError("Failed to generate speech. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='container mx-auto pt-16 px-10 '>
      <h1 className='text-center font-semibold text-4xl text-white mb-16'>
        Generate Text To Audio
      </h1>
      <div className="w-8/12 mx-auto bg-slate-900 mb-10">
      <select
          className='text-center py-3 w-full  mx-auto outline-none bg-transparent text-white   bg-slate-900' 
          value={selectedVoice}
          onChange={(e) => setSelectedVoice(e.target.value)} // Handle voice change
        >
          {voices.map((voice) => (
            
            <option key={voice} value={voice} className='bg-slate-900'>
              {voice}
            </option>
          ))}
        </select>
      </div>

      <div className='flex flex-col items-center justify-center gap-3 bg-slate-900 w-8/12 mx-auto py-2 rounded-lg px-4'>
     
        
        <textarea
          rows='3' // Set the number of rows for the textarea
          className='w-full py-3 outline-none bg-transparent text-white resize-none' // 'resize-none' to prevent resizing
          placeholder="Enter the text ..."
          value={inputPrompt}
          onChange={(e) => setInputPrompt(e.target.value)} // Handle input change
        />
        
        {/* Dropdown for selecting voice */}
       

        <button
          className='w-full bg-purple-600 flex items-center gap-1 justify-center py-3 rounded-lg hover:bg-purple-700 mt-3'
          onClick={generateSpeech}
          disabled={loading}
        >
          {loading ? 'Generating...' : <><WandSparkles /> Generate</>}
        </button>
      </div>

      {/* Display error messages */}
      {error && <p className='text-red-600 text-center mt-4'>{error}</p>}

      {/* Display success message */}
      {message && <p className='text-green-600 text-center mt-4'>{message}</p>}

      {/* Display generated audio with audio tag and download link */}
      {audioUrl && (
        <div className='text-center mt-10'>
          {/* Audio playback */}
          <audio controls className='w-6/12 mx-auto'>
            <source src={audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>

          {/* Download the generated audio */}
          <a
            href={audioUrl}
            download='generated-speech.mp3'
            className=' w-3/12 mx-auto gap-2 mt-6 bg-purple-600 flex items-center justify-center py-3 rounded-full hover:bg-purple-700'
          >
            Download Audio <Download />
          </a>
        </div>
      )}
    </section>
  );
};

export default Page;
