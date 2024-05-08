"use client";

// Sections
import Intro from "@/app/signup/(sections)/Intro";
import Username from "@/app/signup/(sections)/Username";
import Email from "@/app/signup/(sections)/Email";
import Registering from "@/app/signup/(sections)/Registering";
// Hooks
import { RefObject, useEffect, useRef, useState } from "react";
// Types
import type { SectionProps } from "../../types/Section.model";

// This function doesnt contain any DOM elements, just the logic to navigate
// through them, they're located in './(sections)'
export default function SignUp() {
  // Current section index
  const [currSec, setCurrSec] = useState<number>(0);

  // Sections components and data
  const sections: Array<SectionProps> = [
    {
      comp: Intro,
      ref: useRef(),
    },
    {
      comp: Username,
      ref: useRef(),
    },
    {
      comp: Email,
      ref: useRef(),
    },
    {
      comp: Registering,
      ref: useRef(),
    },
  ];

  //
  function scrollInto(sec: number) {
    const el: HTMLElement | null | undefined = sections[sec]?.ref.current;

    if (el) {
      (document.activeElement as HTMLElement)?.blur();

      el.scrollIntoView({ behavior: "smooth" });
      el.focus();
      console.log(`Focando em ${sec} (scrollInto)`)
    }
  }

  // Event handlers
  function handleKeyboard(e: KeyboardEvent) {
    // Disable scrolling through keyboard
    const keysToDisable: Array<string> = [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "PageUp",
      "PageDown",
      " ",
    ];

    if (keysToDisable.includes(e.key)) {
      e.preventDefault();
    }

    // If user is typing info, scrolling will stay disabled
    //if (document.activeElement instanceof HTMLInputElement) {
    //  return;
    //}

    // Custom keyboard scrolling
    if (e.key === "ArrowUp") {
      console.log("Arrow up")
      setCurrSec((sec) => (sec > 0 ? sec - 1 : sec));
    } else if (e.key === "ArrowDown") {
      console.log("Arrow down")
      setCurrSec((sec) => (sec + 1 < sections.length ? sec + 1 : sec));
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Add necessary Event Listener for better UX
    // - Changes sections through user scroll and keydown
    //document.addEventListener("scrollend", handleScroll);
    document.addEventListener("keydown", handleKeyboard);
    //document.addEventListener("resize", getSectionTops);

    return () => {
      document.body.style.overflow = "auto";

      //document.removeEventListener("scrollend", handleScroll);
      document.removeEventListener("keydown", handleKeyboard);
      //document.removeEventListener("resize", getSectionTops);
    };
  }, []);

  // Will scroll offsetY into current section's top
  useEffect(() => {
    console.log(`Nova seção ${currSec}`)
    scrollInto(currSec)
  }, [currSec]);

  return (
    <>
      {/* All other sections */}
      {sections.map((Section, index) => (
        <Section.comp
          key={index}
          index={index}
          reference={Section.ref as RefObject<HTMLDivElement>}
          setSection={setCurrSec}
        />
      ))}
      
    </>
  );
}

/** Talvez eu use (espero que não)
 *   // Gets the Y Offset of all sections
  function getSectionTops(): Array<number> {
    const sectionDivs = document.querySelectorAll<HTMLElement>(".section");
    const tops: Array<number> = Array.from(sectionDivs).map(
      (section) => section.offsetTop
    );

    return tops;
  }

  // This function gets the nearest section based on window Y Offset, so when
  // user scrolls we can 'end' the task by focusing the nearest section
  function getNearestTop() {
    const currTop: number = window.scrollY;
    const sectionTops: Array<number> = getSectionTops(); // Lembrar de tentar state

    const differences = sectionTops.map((top) => Math.abs(top - currTop));
  }
 */

  // Event handlers
  /*function handleScroll() {
    console.log("Ativou handle scroll")

    const tops: Array<number | undefined> = sections.map(sec => sec.ref.current?.offsetTop)
    const differences: Array<number | undefined> = tops.map(top => {
      if (top === undefined) {
        return top
      }

      return Math.abs(window.scrollY - top)
    })

    const filteredDiffs: Array<number> = differences.filter((diff): diff is number => diff !== undefined);

    if (filteredDiffs.length) {
      const minDiff: number = Math.min(...filteredDiffs)
      const nearestRef = differences.indexOf(minDiff)

      setCurrSec(currSec => {
        if (currSec === nearestRef) {
          scrollInto(nearestRef)
        }

        return nearestRef
      })
    }
  }*/
