import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

export default function Page() {
  return (
    <section className="flex items-center justify-center  test  h-screen ">
      
        <SignIn />
      

    
    </section>
  );
}
