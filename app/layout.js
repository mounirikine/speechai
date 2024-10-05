import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs"; 
import Provider from "./provider";
import {Poppins} from 'next/font/google'
import {Lexend} from 'next/font/google'
import "./style.css";
import PrelineScript from "./components/PrelineScript";
export const metadata = {
  title: "SpeechAI",
  description: "SPEECH AI",
};

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Add all available weights
});
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={lexend.className}
      >
        <Provider>
        {children}
        </Provider>
        <PrelineScript />
      </body>
    </html>
    </ClerkProvider>
  );
}
