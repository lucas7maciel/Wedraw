"use client";

import PenIcon from "@/public/tools/pen.svg";
import EraserIcon from "@/public/tools/eraser.svg";
import PickerIcon from "@/public/tools/picker.svg";
import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import { Drawer } from "@/components/Drawer";

export function DrawingTools() {
  const [cursor, setCursor] = useState<string>("normal");

  return (
    <>
      <div className="flex justify-center gap-6">
        <EraserIcon
          className="h-8 w-8 cursor-pointer relative z-20"
          onClick={() => setCursor("eraser")}
        />
        <PenIcon
          className="h-8 w-8 cursor-pointer relative z-20"
          onClick={() => setCursor("pen")}
        />
        <PickerIcon
          className="h-8 w-8 cursor-pointer relative z-20"
          onClick={() => setCursor("picker")}
        />
      </div>
      <CustomCursor type={cursor} />
      <Drawer type={cursor} changeType={(type) => setCursor(type)} />
    </>
  );
}
