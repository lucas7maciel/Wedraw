"use client";

// Components
import CustomCursor from "@/components/HomeDrawing/CustomCursor";
import { Drawer } from "@/components/HomeDrawing/Drawer";
// Hooks
import { useState } from "react";
// Types
import type { CursorMode } from "@/types/Cursor.model";
// Icons
import PenIcon from "@/public/tools/pen.svg";
import EraserIcon from "@/public/tools/eraser.svg";
import PickerIcon from "@/public/tools/picker.svg";

// This component returns drawing tools (pencil, picker and eraser icons) and sets cursor state
export function DrawingTools() {
  const [cursor, setCursor] = useState<CursorMode>("normal");

  return (
    <>
      <div className="flex justify-center items-center gap-6">
        <EraserIcon
          className={`h-8 w-8 cursor-pointer relative z-20 tool ${
            cursor == "eraser" ? "hover-tool" : ""
          }`}
          onClick={() => setCursor("eraser")}
        />
        <PenIcon
          className={`h-8 w-8 cursor-pointer relative z-20 tool ${
            cursor == "pen" ? "hover-tool" : ""
          }`}
          onClick={() => setCursor("pen")}
        />
        <PickerIcon
          className={`h-8 w-8 cursor-pointer relative z-20 tool ${
            cursor == "picker" ? "hover-tool" : ""
          }`}
          onClick={() => setCursor("picker")}
        />
      </div>

      {/* Drawable canva placed behind page contents */}
      <Drawer cursor={cursor} setCursor={(cursor) => setCursor(cursor)} />
      {/* Sets cursor assets and covers it */}
      <CustomCursor cursor={cursor} />
    </>
  );
}
