
// Functions
//import { checkUsername } from "@/utils/CheckInputs";
// Hooks
import { useRef, useState } from "react";
// Types
import type { FormEvent, RefObject } from "react";
import type { SecCompProps } from "@/types/Section.model";

export default function Name(props: SecCompProps) {
  const [message, setMessage] = useState<string>("Name and surname");

  // Every section has a ref to its main input component
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    props.setSection((section: number) => section + 1);
  }

  return (
    <div
      ref={props.reference}
      tabIndex={props.index}
      onFocus={() => ref.current?.focus()}
      className="section min-h-screen min-w-screen flex flex-col items-center justify-center pt-24 text-center"
    >
      <p className="text-5xl font-bold">Tell us your name</p>

      <form onSubmit={handleSubmit} className="w-full block mt-8 text-center">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 mx-auto w-1/2">
          <div className="text-start block flex-[1_1_10rem]">
            <label className="font-semibold">First Name</label>
            <br />
            <input
              className="mt-2 py-3 px-3 w-full border text-xl text-center"
              ref={ref}
            />
          </div>
          <div className="text-start block flex-[1_1_10rem]">
            <label className="font-semibold">Last Name</label>
            <br />
            <input className="mt-2 py-3 px-3 w-full border text-xl text-center" />
          </div>
        </div>

        <p className="mt-6 text-xl font-semibold rounded-sm">{message}</p>

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
