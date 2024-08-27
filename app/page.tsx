"use client"
import React from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleChnage = ()=>{
    router.push('/details');
  }
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
    <div className="flex flex-col justify-center items-center max-w-2xl mx-auto p-4">
      <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300  text-center font-sans font-bold">
        Track My Bus
      </h1>
      <p></p>
      <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
      TrackMyBus is designed specifically for bus employees and owners to streamline communication and avoid miscommunication. It provides real-time access to vehicle schedules, trip details, and station timings, ensuring everyone involved is on the same page. The app enhances coordination and helps manage operations more efficiently within the fleet
      </p>
      <input
        type="text"
        placeholder="KL38F4711"
        className="text-white text-center rounded-sm border border-slate-600 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-500 p-2"
      />
      <button onClick={handleChnage} className="relative z-10 mt-2 min-w-28 min-h-9 bg-neutral-950 border border-slate-600 text-white">GO</button>
    </div>
  
    </div>
  );
}
