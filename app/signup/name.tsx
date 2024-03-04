"use client";
import Link from "next/link";
import { useState } from "react";

interface InputProps {
    state: 'message-normal' | 'message-error' | 'message-warning',
    message: string
}

export function Name() {
  const [message, setMessage] = useState<InputProps>({message: "Please inform name and surname", state: 'message-normal'})
  const [value, setValue] = useState<string>("")

  function checkName() {
    if (!value) {
        setMessage({state: 'message-error', message: "Input vazio"})
    }
  }
  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center text-center pt-14"
      id="name"
    >
      <h1 className="text-5xl font-bold">What's Your Name?</h1>

      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Enter your name"
        className={`w-1/2 h-14 text-2xl px-3 text-center mt-8 border-4 rounded-xl ${message.state}`}
      />
      <p className="text-xl font-semibold mt-3">{message.message}</p>

    <button onClick={() => checkName()} className="p-8 text-3xl bg-black text-white">Enviar</button>
      <Link href="#password" scroll={true}>
        <p className="font-semibold text-3xl text-white select-none py-4 px-12 mt-4 border-2 rounded-full bg-black hover-button">
          Confirm
        </p>
      </Link>
    </div>
  );
}
