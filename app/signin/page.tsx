import Image from "next/image";

//#afd4f9

export default function SignIn() {
  return (
    <div className="min-h-screen w-full pt-24 pb-12 flex items-stretch justify-center">
      <div className="w-3/5 flex items-stretch bg-[#afd4f9] shadow-lg overflow-hidden rounded-3xl">
        <div className="relative z-20 h-full flex-[1_0_45%] bg-neutral-50 flex flex-col items-center justify-center rounded-3xl shadow-md">
          <h1 className="text-5xl font-bold rainbow-text select-none pointer-events-none">
            WEDRAW
          </h1>

          <div className="w-4/6 flex flex-col mt-10">
            <label className="text-sm font-bold self-start">Nick</label>
            <input
              className="text-sm font-bold py-3 px-4 rounded-md"
              type="text"
              placeholder="Enter nick"
            />

            <label className="text-sm font-bold self-start mt-5">
              Password
            </label>
            <input
              className="text-sm font-bold py-3 px-4 rounded-md"
              type="text"
              placeholder="Enter password"
            />

            <div className="flex items-center mt-3">
              <div className="flex-1 flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-sm font-semibold">Remember Me</span>
              </div>
              <span className="flex-1 text-sm text-end font-semibold">
                Forgot Pass
              </span>
            </div>
          </div>

          <button className="text-xl text-white font-bold py-2 px-8 mt-6 mb-3 rounded-full bg-black">
            Sign In
          </button>
          <span className="font-semibold text-sm">Sign Up</span>
        </div>
        <div className="relative z-10 flex justify-center items-center teste">
          <Image
            className="h-full w-full object-contain"
            src="/arts/duck.gif"
            alt="Art"
            width={500}
            height={500}
          />
          <span className="absolute bottom-8 left-1/2 translate-x-[-50%] text-white text-center whitespace-nowrap font-bold">
            Made by cesar772
          </span>
        </div>
      </div>
    </div>
  );
}
