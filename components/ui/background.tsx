"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import {TextField } from "@mui/material"
export default function BackgroundBeamsDemo() {
  return (
    <div className=" h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="gap-4 flex flex-col justify-center items-center max-w-2xl mx-auto p-4">
        <h1 className="relative  z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400  text-center font-sans font-bold">
          Track My Bus
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        TrackMyBus is designed specifically for bus employees and owners to streamline communication and avoid miscommunication. It provides real-time access to vehicle schedules, trip details, and station timings, ensuring everyone involved is on the same page. The app enhances coordination and helps manage operations more efficiently within the fleet.
        </p>
        <input
          type="text"
          placeholder="KL38F4711"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 text-white p-4 placeholder:text-neutral-700 h-10 max-w-52 "
        />
       <TextField id="outlined-basic" label="Outlined" variant="outlined" className="bg-white z-10 border-white" type="text" />
        <button className="min-w-32 min-h-7 rounded-lg bg-slate-200 bg-gradient-to-b from-neutral-200 to-neutral-600">Go</button>
      </div>
      <BackgroundBeams />
    </div>
  );
}
