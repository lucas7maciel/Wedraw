// Hooks
import { useRef, useState } from "react";
// Types
import type { FormEvent, RefObject } from "react";
import type { SecCompProps } from "@/types/Section.model";

export default function Email(props: SecCompProps) {
  const [message, setMessage] = useState<string>("Pipipopopo")

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
      className="section min-h-screen min-w-screen flex flex-col items-center justify-center pt-24 text-center"
    >
      <p className="text-5xl font-bold">Tell us your email</p>

      <form onSubmit={handleSubmit} className="w-full block">
        <input
          className="mt-8 py-3 px-3 w-1/2 border text-xl text-center"
          ref={ref}
        />
        <p className="mt-4 text-xl font-semibold rounded-sm">{message}</p>

        <button
          type="submit"
          className="mt-10 py-4 px-6 rounded-full bg-black text-white text-2xl font-bold"
        >
          Confirm
        </button>
        <p
          className="font-semibold text-lg mt-3 cursor-pointer"
          onClick={() => props.setSection((sec) => sec - 1)}
        >
          Back
        </p>
      </form>
    </div>
  );
}
