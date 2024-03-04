
'use client'
import Link from "next/link";
import { useState } from "react";

export function Password() {
const [message, setMessage] = useState<string>("Come on! We're gonna keep it secret")
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center text-center pt-16"
      id="password"
    >
      <h1 className="text-5xl font-bold">What about your password?</h1>

      <input
        type="text"
        placeholder="Enter your name"
        className="w-1/2 h-14 text-2xl px-3 text-center mt-8 border-4 rounded-xl"
      />
      <p className="text-xl font-semibold mt-3">{message}</p>

      <Link href="#state" scroll={true}>
        <p className="font-semibold text-3xl text-white select-none py-4 px-12 mt-4 border-2 rounded-full bg-black hover-button">
          Confirm
        </p>
      </Link>
    </div>
  );
}
