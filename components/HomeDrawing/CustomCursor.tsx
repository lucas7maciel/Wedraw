"use client";

// Components
import Image from "next/image";
// Hooks
import { useState, useEffect } from "react";
// Styles
import styles from "@/components/HomeDrawing/CustomCursor.module.css";
// Types
import type { CursorPos, CursorMode } from "@/types/Cursor.model";

function CustomCursor(props: { cursor: CursorMode }) {
  const [pointing, setPointing] = useState<boolean>(false);
  const [pos, setPos] = useState<CursorPos>({ x: 0, y: 0 });

  // Sets cursor mode, if its pointing, etc
  const classes: string = `${pointing ? "pointer" : ""} ${props.cursor}`;

  // Defines cursor's asset position in styling
  const size: number = pointing ? 0 : 30;
  const style: object = {
    left: `${pos.x}px`,
    top: `${pos.y - size}px`,
    width: `${size}px`,
    height: `${size}px`,
  };

  // Updates cursor position and checks if it's current tool can be used
  const handleMouseMove = (e: MouseEvent) => {
    setPos({ x: e.clientX, y: e.clientY });

    // Checks for interactive UI
    const target = e.target as HTMLElement | null;

    if (target) {
      setPointing(
        window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
      );
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // If cursor is pointing to UI element, no custom asset will be displayed
    if (!pointing && props.cursor != "normal") {
      document.body.classList.add("hide_cursor");
    } else {
      document.body.classList.remove("hide_cursor");
    }
  }, [props.cursor, pointing]);

  return props.cursor != "normal" ? (
    <Image
      className={`${styles.custom_cursor} select-none pointer-events-none ${classes}`}
      style={style}
      src={`/tools/${props.cursor}.svg`}
      alt="Custom Cursor"
      width={50}
      height={50}
    />
  ) : null;
}

export default CustomCursor;
