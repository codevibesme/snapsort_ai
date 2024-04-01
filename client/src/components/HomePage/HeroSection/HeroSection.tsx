import React from 'react'
import Link from 'next/link';
import { Boxes } from '@/components/ui/background-boxes'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { cn } from '@/utils/cn'
const HeroSection: React.FC = () => {
  const words = `Say goodbye to manual downloads! Let our server handle the heavy lifting while you effortlessly share and access your images in a snap.`;
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
      Snapsort AI: Image Evolution
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
      Streamlining Image Sharing Effortlessly
      </p>
      <div className='max-w-screen-lg mx-auto px-4 mt-4 z-20'>
      <TextGenerateEffect words={words} />
      </div>
      <div className="mt-5 flex justify-center text-center z-20">
        <Link href="/register">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" bg-black text-white flex items-center space-x-2"
      >
        <p>Unlock Snapsort AI</p>
      </HoverBorderGradient>
      </Link>
    </div>
    </div>
  )
}

export default HeroSection