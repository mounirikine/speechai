"use client";
import React from "react";
import { ContainerScroll } from "../../../components/ui/container-scroll-animation";
import Image from "next/image";

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            {/* You can add any title or header content here */}
          </>
        }
      >
        <Image
          src="https://images.ctfassets.net/lzny33ho1g45/1MbfHPPHvljFhxaAwMXW83/89543db8bc02e43f6a08aa704624c8a6/image2.jpeg?w=1400"
          alt="Scroll Animation Image"
          width={1400} // Set an appropriate width
          height={800} // Set an appropriate height based on the image ratio
          className="h-full w-full"
        />
      </ContainerScroll>
    </div>
  );
}
