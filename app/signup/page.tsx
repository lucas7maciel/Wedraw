import Link from "next/link";
import { Name } from "./name";
import { Password } from "./password";
import { State } from "./state";

export default function SignUp() {
  return (
    <div className="min-h-screen w-full pt-8">
      <div className="min-h-screen w-full flex flex-col justify-center items-center text-center">
        <h1 className="font-bold text-5xl">Let's Sign Up!</h1>
        <h2 className="font-semibold text-4xl mt-3 w-3/4">Introduce us to yourself with some basic information</h2>
        <Link href="#name" scroll={true}>
        <p className="font-semibold text-3xl text-white select-none py-4 px-12 mt-6 border-2 rounded-full bg-black hover-button">
          Get Started
        </p>
      </Link>
      </div>
      <Name />
      <Password />
      <State />
    </div>
  );
}
