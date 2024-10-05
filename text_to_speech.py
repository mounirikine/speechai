# from gtts import gTTS
# import os
# import sys

# def text_to_speech(text, lang='ar'):
#     try:
#         # Create gTTS object
#         tts = gTTS(text=text, lang=lang)
#         # Save the output to an MP3 file
#         output_file = "output.mp3"
#         tts.save(output_file)
#         return output_file
#     except Exception as e:
#         print(f"Error generating speech: {e}")
#         return None

# if __name__ == "__main__":
#     # Check for input text or use default text
#     input_text = sys.argv[1] if len(sys.argv) > 1 else "Hello, this is a default text."
#     # You can specify the language as a second argument (e.g., 'en', 'es', 'fr')
#     lang = sys.argv[2] if len(sys.argv) > 2 else 'en'
    
#     output_file = text_to_speech(input_text, lang)
    
#     if output_file:
#         print(f"Generated speech saved to {output_file}")
#     else:
#         print("Failed to generate speech.")


# from gtts import gTTS
# import os
# import sys

# def text_to_speech(text, lang='ar'):
#     try:
#         # Create gTTS object with Arabic language
#         tts = gTTS(text=text, lang=lang)
#         # Save the output to an MP3 file
#         output_file = "output.mp3"
#         tts.save(output_file)
#         return output_file
#     except Exception as e:
#         print(f"Error generating speech: {e}")
#         return None

# if __name__ == "__main__":
#     # Check for input text or use default Arabic text
#     input_text = sys.argv[1] if len(sys.argv) > 1 else "مرحبًا، هذا نص افتراضي."
#     # You can specify the language as a second argument, defaults to Arabic
#     lang = sys.argv[2] if len(sys.argv) > 2 else 'ar'
    
#     output_file = text_to_speech(input_text, lang)
    
#     if output_file:
#         print(f"Generated speech saved to {output_file}")
#     else:
#         print("Failed to generate speech.")

import asyncio
import sys
import edge_tts

# List of voice options
voices = [
    'en-US-GuyNeural',    # English (US) - Guy
    'en-US-JennyNeural',  # English (US) - Jenny
    'en-US-AriaNeural',   # English (US) - Aria
    'fr-FR-HenriNeural',  # French (France) - Henri
    'fr-FR-JoséphineNeural',  # French (France) - Joséphine
    'de-DE-KlausNeural',  # German (Germany) - Klaus
    'de-DE-MarleneNeural',  # German (Germany) - Marlene
    'es-ES-GonzaloNeural', # Spanish (Spain) - Gonzalo
    'es-ES-LaiaNeural',   # Spanish (Spain) - Laia
    'it-IT-GiorgioNeural', # Italian (Italy) - Giorgio
    'it-IT-CarmelaNeural', # Italian (Italy) - Carmela
    'pt-BR-AntonioNeural', # Portuguese (Brazil) - Antonio
    'pt-BR-AlineNeural',  # Portuguese (Brazil) - Aline
    'zh-CN-XiaoxiaoNeural', # Chinese (Mandarin) - Xiaoxiao
    'zh-CN-WangWeiNeural', # Chinese (Mandarin) - Wang Wei
    'ja-JP-IchiroNeural',  # Japanese - Ichiro
    'ja-JP-AikoNeural',    # Japanese - Aiko
    'ko-KR-SeoYoungNeural', # Korean - SeoYoung
    'ko-KR-MinSooNeural',   # Korean - MinSoo
    'nl-NL-JohanNeural',   # Dutch (Netherlands) - Johan
    'nl-NL-MaartjeNeural', # Dutch (Netherlands) - Maartje
]

async def text_to_speech(text, voice):
    try:
        # Create a TTS client using edge_tts
        communicate = edge_tts.Communicate(text, voice)

        output_file = "output.mp3"
        await communicate.save(output_file)
        return output_file
    except Exception as e:
        print(f"Error generating speech: {e}")
        return None

if __name__ == "__main__":
    input_text = sys.argv[1] if len(sys.argv) > 1 else "مرحبًا، هذا نص افتراضي."
    voice = sys.argv[2] if len(sys.argv) > 2 else voices[0]  # Default voice can be changed

    output_file = asyncio.run(text_to_speech(input_text, voice))

    if output_file:
        print(f"Generated speech saved to {output_file}")
    else:
        print("Failed to generate speech.")
