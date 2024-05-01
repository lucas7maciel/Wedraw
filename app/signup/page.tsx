'use client'

import { Name } from "./name";
import { Password } from "./password";
import { State } from "./state";
import { Parallax } from "./parallax";

/*
O que fazer:
- Repetir animações               V (checar)
- Checar inputs                   V (alterar)
- Mensagens
- Animações das mensagens         V
- Voltar                          V
- Gerenciar focus
- Ver se pode scrollar

- Paralax
*/

export default function SignUp() {
  function scroll(section : string) {
    const el: HTMLElement | null = document.getElementById(section);

    el?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <div className="min-h-screen w-full pt-8">
      <Parallax />
      <div className="relative z-20 min-h-screen w-full flex flex-col justify-center items-center text-center" id="home">
        <h1 className="font-bold text-5xl">Let's Sign Up!</h1>
        <h2 className="font-semibold text-4xl mt-3 w-3/4">Introduce us to yourself with some basic information</h2>

        <button onClick={() => scroll("name")} className="font-semibold text-3xl text-white select-none py-4 px-12 mt-6 border-2 rounded-full bg-black hover-button">
          Get Started
        </button>
  
      </div>
      <Name />
      <Password />
      <State />
    </div>
  );
}
