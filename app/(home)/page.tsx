
import Link from "next/link";
import { DrawingTools } from "./drawingTools";

//fazer picker funcionar    V
//alternar entre tools      V
//detalhes (hover, control z, centralizar nome, mudar no rolinho do mouse, ajeitar mouse, etc)

export default function Home() {

  return (
    <>
    <main className="min-h-screen h-full flex flex-col items-center justify-center text-center pt-20">
      <h1 className="text-7xl font-bold select-none pb-6">WEDRAW</h1>
      <h2 className="text-3xl font-semibold select-none px-12">
        MORE PEOPLE. DRAW WITH THE ONES YOU LOVE
      </h2>

      <Link href="/signup" className="relative z-20">
        <p className="font-semibold text-3xl text-white select-none mt-5 mb-3 py-4 px-16 border-2 rounded-full bg-black">
          Sign Up
        </p>
      </Link>
      <DrawingTools />

      {/*Mudar isso pelo amor*/}
      <div className="absolute bottom-4">
        <span className="font-semibold select-none relative z-20">Made By</span>
        <span className="font-bold rainbow-text select-none relative z-20"> Lucas Maciel</span>
      </div>
    </main>
    </>
  );
}
