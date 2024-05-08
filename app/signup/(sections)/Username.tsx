// Functions
import { checkUsername } from "@/utils/CheckInputs";
// Hooks
import { useRef, useState } from "react";
// Types
import type { FormEvent, RefObject } from "react";
import type { SecCompProps } from "@/types/Section.model";

export default function Username(props: SecCompProps) {
  const [message, setMessage] = useState<string>(
    "Keep calm. We re gonna keep it secret!"
  );

  // Every section has a ref to its main input component
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (checkUsername(ref.current, setMessage)) {
      props.setSection((section: number) => section + 1);
    }
  }

  return (
    <div
      id="username"
      ref={props.reference}
      tabIndex={props.index}
      onFocus={() => ref.current?.focus()}
      className="section min-h-screen min-w-screen flex flex-col items-center justify-center text-center"
    >
      <p className="text-4xl font-bold">Tell us your username</p>

      <form onSubmit={handleSubmit} className="w-full">
        <input className="mt-8 py-2 px-3 w-3/4 border text-center" ref={ref} />
        <p className="mt-3 rounded-sm">{message}</p>

        <button
          type="submit"
          className="mt-6 py-4 px-6 rounded-full bg-black text-white text-2xl font-semibold"
        >
          Next
        </button>
      </form>
    </div>
  );
}
