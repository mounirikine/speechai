"use client";
import React from "react";
import { ContainerScroll } from "../../../components/ui/container-scroll-animation";
import Image from "next/image";


export default function HeroScrollDemo() {
  return (
    (<div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <>
            
          </>
        }>
        <img src="https://images.ctfassets.net/lzny33ho1g45/1MbfHPPHvljFhxaAwMXW83/89543db8bc02e43f6a08aa704624c8a6/image2.jpeg?w=1400" className="h-full w-full " alt="" srcset="" />
      </ContainerScroll>
    </div>)
  );
}
