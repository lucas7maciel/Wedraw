"use client";
import "./index.css";
import PenIcon from "@/public/tools/pen.svg";
import EraserIcon from "@/public/tools/eraser.svg";
import PickerIcon from "@/public/tools/picker.svg";
import { CursorProps } from "./Cursor.model"
import { useState, useEffect } from "react";
import Image from "next/image";

//colocar creditos
function CustomCursor(props: CursorProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [pointing, setPointing] = useState(false);

  const size = pointing ? 0 : 30;
  const style = {
    left: `${pos.x}px`,
    top: `${pos.y}px`,
    width: `${size}px`,
    height: `${size}px`,
  };

  const handleMouseMove = (e: any) => {
    setPos({ x: e.clientX, y: e.clientY });

    setPointing(
      window.getComputedStyle(e.target).getPropertyValue("cursor") === "pointer"
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!pointing && props.type != "normal") {
      document.body.classList.add("hide_cursor");
    } else {
      document.body.classList.remove("hide_cursor");
    }
  }, [pointing]);

  return props.type != "normal" ? (
    <Image
      className={`custom_cursor ${pointing ? "pointer" : ""} ${
        props.type
      } pointer-events-none`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      src={`/tools/${props.type}.svg`}
      alt="Pen Cursor"
      width={50}
      height={50}
    />
  ) : null;
}

export default CustomCursor;
