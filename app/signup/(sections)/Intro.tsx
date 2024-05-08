// Hooks
import { useRef } from "react";
// Types
import type { SecCompProps } from "@/types/Section.model";
import type { RefObject } from "react";

export default function Intro(props: SecCompProps) {
  const ref: RefObject<HTMLButtonElement> = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="section min-h-screen min-w-screen flex flex-col justify-center items-center text-center"
      ref={props.reference}
      onFocus={() => ref.current?.focus()}
      tabIndex={props.index}
    >
      <h1 className="font-bold text-5xl">Lets Sign Up!</h1>
      <h2 className="mt-4 font-semibold text-3xl">Introduce us to yourself</h2>

      <button
        className="mt-8 py-4 px-6 rounded-full bg-black text-white text-3xl font-bold"
        ref={ref}
        onClick={() => props.setSection(1)}
      >
        Get Started!
      </button>
    </div>
  );
}
