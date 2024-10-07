'use client';

import { Download, Search, WandSparkles } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

const Page = () => {
  const [inputPrompt, setInputPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState(null); // State to hold the generated image URL
  const [loading, setLoading] = useState(false);  // State to handle loading

  const generateImage = async () => {
    if (!inputPrompt) return;  // Prevent generating without a prompt
    setLoading(true);

    async function query(data) {
      try {
        const response = await fetch(
          'https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image',
          {
            headers: {
              Authorization: 'Bearer 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',
              'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Error: ${response.status} ${errorText}`);
        }

        const result = await response.blob();
        return result;
      } catch (error) {
        console.error('Error during image generation:', error);
        throw error;
      }
    }

    try {
      const imageBlob = await query({ inputs: inputPrompt });
      const imageObjectUrl = URL.createObjectURL(imageBlob);
      setImageUrl(imageObjectUrl); // Set the generated image URL in state
    } catch (error) {
      console.error('Failed to generate image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='container mx-auto pt-16 px-2 lg:px-10 py-32 '>
      <h1 className='text-center font-semibold text-2xl lg:text-4xl text-white mb-16'>
        Generate Text To Image
      </h1>

      <div className='flex items-center justify-center gap-3 bg-slate-900 lg:w-8/12 w-full mx-auto py-2 rounded-full px-3 lg:px-1'>
  <Search />
  <input
    type='text'
    className='w-7/12 sm:w-8/12 py-2 sm:py-3 outline-none bg-transparent text-white'
    placeholder="What's your idea ...."
    value={inputPrompt}
    onChange={(e) => setInputPrompt(e.target.value)} // Handle input change
  />
  <button
    className='w-4/12 sm:w-3/12 bg-purple-600 flex items-center gap-1 text-sm lg:text-base  justify-center py-2 sm:py-3 rounded-full hover:bg-purple-700'
    onClick={generateImage}
    disabled={loading}
  >
    {loading ? 'Generating...' : <>< WandSparkles className='w-[20px] lg:w-[32px]' /> Generate</>}
  </button>
</div>


      {imageUrl && (
        <div className='w-10/12 lg:w-4/12 mx-auto pt-14'>
<Image 
  src={imageUrl} 
  alt="Generated AI" 
  width={800} // Set an appropriate width 
  height={600} // Set an appropriate height 
  className="w-full h-auto" 
  layout="responsive" // Ensures responsiveness if needed
/>        </div>
      )}

      {imageUrl && (
        <a
          href={imageUrl}
          download='generated-image.png' // Trigger the download
          className='lg:w-3/12 mx-auto gap-2 mt-10 bg-purple-600 flex items-center justify-center py-3 rounded-full hover:bg-purple-700'
        >
          Download <Download />
        </a>
      )}
    </section>
  );
};

export default Page;
