"use client";

import "./index.css";
import { CursorProps } from "./Cursor.model";
import { MousePos } from "./MousePos.mode";
import { useState, useEffect, MouseEvent } from "react";
import Image from "next/image";

//colocar creditos
function CustomCursor(props: CursorProps) {
  const [pos, setPos] = useState<MousePos>({ x: 0, y: 0 });
  const [pointing, setPointing] = useState<boolean>(false);

  //component properties
  const classes : string = `custom_cursor ${pointing ? "pointer" : ""} ${
    props.type
  } select-none pointer-events-none`;
  const size : number = pointing ? 0 : 30;
  const style : object = {
    left: `${pos.x}px`,
    top: `${pos.y - size}px`,
    width: `${size}px`,
    height: `${size}px`,
  };

  const handleMouseMove = (e: any) => {
    //saves mouse movement
    setPos({ x: e.clientX, y: e.clientY });
    setPointing(
      window.getComputedStyle(e.target).getPropertyValue("cursor") === "pointer"
    );
  };

  useEffect(() => {
    //tracks mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    //if cursor is pointing, no custom asset will be displayed
    if (!pointing && props.type != "normal") {
      document.body.classList.add("hide_cursor");
    } else {
      document.body.classList.remove("hide_cursor");
    }
  }, [pointing]);

  return props.type != "normal" ? (
    <Image
      className={classes}
      style={style}
      src={`/tools/${props.type}.svg`}
      alt="Custom Cursor"
      width={50}
      height={50}
    />
  ) : null;
}

export default CustomCursor;
