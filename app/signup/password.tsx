"use client";

import { KeyboardEvent, useState } from "react";

export function Password() {
  const [message, setMessage] = useState<string>("Come on! We're gonna keep it secret!"
  );
  const [animation, setAnimation] = useState<'none' | 'error' | 'success'>('none')
  const [value, setValue] = useState<string>("");

  const animDuration: number = 700

  //mudar isso, trocar por uma biblioteca
  function playAnimation(type: 'none' | 'error' | 'success', message: string) {
    setMessage(message)
    setAnimation(type)

    setTimeout(() => setAnimation('none'), animDuration)
  }

  function scroll(section: string) {
    const el: HTMLElement | null = document.getElementById(section);

    el?.scrollIntoView({
      behavior: "smooth",
    });
  }

  function checkPassword() {
    if (!value) {
      playAnimation('error', "Empty input");
    } else if (value.length < 6) {
      playAnimation('error', "Password length must be bigger than 6")
    } else if (value.length > 15) {
      playAnimation('error', "Password length must be lower than 15")
    } else if (value.includes(" ")) {
      playAnimation('error', 'Password cannot contain spaces')
    } else {
      scroll("state");
    }
  }

  return (
    <div
      className="min-h-screen w-full flex flex-col justify-center items-center text-center pt-14"
      id="password"
    >
      <h1 className="text-5xl font-bold">What about your password?</h1>

      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          console.log(e.key);
          if (e.key == "Enter") checkPassword();
        }}
        placeholder="Enter your password"
        className={`w-1/2 h-14 text-2xl px-3 text-center mt-8 border-4 rounded-xl anim-${animation}`}
      />
      <p className={`text-xl font-semibold mt-3 message-${animation}`}>{message}</p>

      <button
        onClick={() => checkPassword()}
        className="font-semibold text-3xl text-white select-none py-4 px-12 mt-4 border-2 rounded-full bg-black hover-button"
      >
        Confirm
      </button>
      <button onClick={() => scroll("name")} className="text-xl font-semibold mt-2">Back</button>
    </div>
  );
}
