import Link from "next/link";
import PenIcon from "@/public/tools/pen.svg"
import EraserIcon from "@/public/tools/eraser.svg"
import PickerIcon from "@/public/tools/picker.svg"

//fazer front (n todo completo)
//fazer caneta funcionar
//fazer borracha funcionar
//fazer picker funcionar
//mudar mouse

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold pb-6">WEDRAW</h1>
      <h2 className="text-3xl font-semibold px-12">
        MORE PEOPLE. DRAW WITH THE ONES YOU LOVE
      </h2>

      <Link href="/signup">
        <p className="font-semibold text-3xl text-white mt-8 mb-3 py-4 px-16 border-2 rounded-full bg-black">
          Sign Up
        </p>
      </Link>
      <div className="flex justify-center gap-6">
        <EraserIcon className="h-8 w-8 cursor-pointer" />
        <PenIcon className="h-8 w-8 cursor-pointer" />
        <PickerIcon className="h-8 w-8 cursor-pointer" />
      </div>

      {/*Mudar isso pelo amor*/}
      <div className="mt-20">
        <span className="font-semibold">Made By</span>
        <span className="font-bold"> Lucas Maciel</span>
      </div>
    </main>
  );
}
