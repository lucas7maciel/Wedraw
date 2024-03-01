'use client'

import Link from "next/link";
import PenIcon from "@/public/tools/pen.svg"
import EraserIcon from "@/public/tools/eraser.svg"
import PickerIcon from "@/public/tools/picker.svg"
import CustomCursor from "@/components/CustomCursor/index";
import { useState } from "react";

//fazer front (n todo completo)     V
//fazer caneta funcionar
//fazer borracha funcionar
//fazer picker funcionar
//mudar mouse                       V

export default function Home() {
  const [cursor, setCursor] = useState<string>('normal'); //consertar isso

  return (
    <main className="min-h-screen h-full flex flex-col items-center justify-center text-center pt-20">
      <h1 className="text-7xl font-bold select-none pb-6">WEDRAW</h1>
      <h2 className="text-3xl font-semibold select-none px-12">
        MORE PEOPLE. DRAW WITH THE ONES YOU LOVE
      </h2>

      <Link href="/signup">
        <p className="font-semibold text-3xl text-white select-none mt-5 mb-3 py-4 px-16 border-2 rounded-full bg-black">
          Sign Up
        </p>
      </Link>
      <div className="flex justify-center gap-6">
        <EraserIcon className="h-8 w-8 cursor-pointer" onClick={() => setCursor('eraser')} />
        <PenIcon className="h-8 w-8 cursor-pointer" onClick={() => setCursor('pen')}  />
        <PickerIcon className="h-8 w-8 cursor-pointer" onClick={() => setCursor('picker')} />
      </div>

      {/*Mudar isso pelo amor*/}
      <div className="absolute bottom-4">
        <span className="font-semibold">Made By</span>
        <span className="font-bold rainbow-text"> Lucas Maciel</span>
      </div>

      <CustomCursor type={cursor} />
    </main>
  );
}
