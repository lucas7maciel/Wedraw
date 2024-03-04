import Link from "next/link";

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
      <div className="min-h-screen w-full flex flex-col justify-center items-center text-center" id="name">
        <h1 className="text-5xl font-bold">What's Your Name?</h1>
        <h2 className="text-3xl font-semibold mt-3">Please inform name and surname</h2>

        <input type="text" placeholder="Enter your name" className="w-1/2 h-14 text-2xl px-3 text-center mt-6 border-4 rounded-xl" />
      </div>
    </div>
  );
}
