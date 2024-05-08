// Hooks
import { useRef } from "react";
// Types
import type { FormEvent, RefObject } from "react";
import type { SecCompProps } from "@/types/Section.model";

export default function Email(props: SecCompProps) {
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Check email
    props.setSection((section) => section + 1);
  }

  return (
    <div
      id="email"
      ref={props.reference}
      tabIndex={props.index}
      onFocus={() => ref.current?.focus()}
      className="section min-h-screen min-w-screen flex flex-col items-center justify-center text-center"
    >
      <p className="text-4xl font-bold">Tell us your email</p>

      <form onSubmit={handleSubmit} className="border w-full">
        <input className="mt-8 py-2 px-3 w-3/4 border email" ref={ref} />
        <p className="mt-3 rounded-sm">Pipipipopopo</p>

        <button className="mt-6 py-4 px-6 rounded-full bg-black text-white text-2xl font-semibold">
          Next
        </button>
      </form>
    </div>
  );
}
