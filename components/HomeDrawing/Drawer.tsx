"use client";

// Hooks
import { useRef, useState, useEffect, RefObject, useCallback } from "react";
import useEyeDropper from "use-eye-dropper";
// Types
import type { CursorPos } from "@/types/Cursor.model";
import type { Drawer } from "@/types/Drawer.model";
import type { MouseEvent as ReactMouseEvt } from "react";

// Fix eye dropper para ts
export function Drawer(props: Drawer) {
  // Drawing pencil props and positioning
  const [mousePos, setMousePos] = useState<CursorPos>({ x: 0, y: 0 });
  const [color, setColor] = useState<string>("#000000");
  const [size, setSize] = useState<number>(5);

  // Canva
  const [canvasCTX, setCanvasCTX] = useState<CanvasRenderingContext2D | null>(
    null
  );

  // Refs
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  // Components
  const { open } = useEyeDropper(); // Color picker

  function setPos(e: MouseEvent) {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function Draw(e: MouseEvent) {
    if (e.buttons !== 1 || !canvasCTX) {
      return;
    }

    // Setting cursor | lining pos
    setPos(e);
    canvasCTX.beginPath();
    canvasCTX.moveTo(mousePos.x, mousePos.y);

    // Line styling
    canvasCTX.lineTo(e.clientX, e.clientY);
    canvasCTX.strokeStyle = props.cursor != "eraser" ? color : "#ffffff";
    canvasCTX.lineCap = "round";
    canvasCTX.lineWidth = size;

    canvasCTX.stroke();
  }

  // Lauches when user picks the color, not when picker is activated
  const pickColor = useCallback(async () => {
    try {
      const color = await open();
      setColor(color.sRGBHex);
      props.setCursor("pen");
    } catch (error) {
      console.log(error);
    }
  }, [open, props]);

  // Keeps drawer size equal to window size
  useEffect(() => {
    const canvas = canvasRef?.current;

    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    setCanvasCTX(ctx);
  }, [canvasRef]);

  // Sets cursor properties based on its mode
  useEffect(() => {
    switch (props.cursor) {
      case "pen":
        setSize(5);
        break;
      case "eraser":
        setSize(15);
        break;
      case "picker":
        pickColor();
        break;
    }
  }, [props.cursor, pickColor]);

  return (
    <canvas
      className="absolute top-0 left-0 w-full h-full z-10"
      ref={canvasRef}
      onMouseMove={(e: ReactMouseEvt<HTMLCanvasElement>) => {
        if (props.cursor === "normal") {
          return;
        }

        setPos(e.nativeEvent);
        Draw(e.nativeEvent);
      }}
    ></canvas>
  );
}
