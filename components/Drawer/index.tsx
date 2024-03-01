"use client";

import { useRef, useState, useEffect, RefObject, useCallback } from "react";
import useEyeDropper from "use-eye-dropper";
import { MousePos } from "../CustomCursor/MousePos.mode";

interface DrawerProps {
  type: string;
  changeType: (type: string) => void;
}

//fix eyedropper pra ts
export function Drawer(props: DrawerProps) {
  const [mouseData, setMouseData] = useState<MousePos>({ x: 0, y: 0 });
  const [canvasCTX, setCanvasCTX] = useState<CanvasRenderingContext2D | null>(
    null
  );
  const [color, setColor] = useState<string>("#000000");
  const [size, setSize] = useState<number>(5);

  const { open } = useEyeDropper();
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  const pickColor = useCallback(() => {
    const openPicker = async () => {
      try {
        const color = await open();
        setColor(color.sRGBHex);
        props.changeType("pen");
      } catch (e: any) {
        console.log(e);
      }
    };

    openPicker();
  }, [open]);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = canvasRef?.current;

    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setCanvasCTX(ctx);
    }
  }, [canvasRef]);

  useEffect(() => {
    if (props.type == "pen") {
      setSize(5);
    } else if (props.type == "eraser") {
      setSize(15);
    } else if (props.type == "picker") {
      pickColor();
    }
  }, [props.type]);

  const SetPos = (e: any) => {
    setMouseData({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const Draw = (e: any) => {
    if (e.buttons !== 1) return;
    const ctx = canvasCTX;

    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(mouseData.x, mouseData.y);
    setMouseData({
      x: e.clientX,
      y: e.clientY,
    });
    ctx.lineTo(e.clientX, e.clientY);
    ctx.strokeStyle = props.type != "eraser" ? color : "#ffffff";
    ctx.lineWidth = size;
    ctx.lineCap = "round";
    ctx.stroke();
  };

  return (
    <canvas
      className="absolute top-0 left-0 w-full h-full z-10"
      ref={canvasRef}
      onMouseEnter={(e) => SetPos(e)}
      onMouseMove={(e) => {
        if (props.type != "normal") {
          SetPos(e);
          Draw(e);
        }
      }}
      onMouseDown={(e) => SetPos(e)}
    ></canvas>
  );
}
