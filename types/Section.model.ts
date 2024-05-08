import { FC, MutableRefObject, RefObject } from "react";

// Separar isso dps
export interface SecCompProps {
  reference: RefObject<HTMLDivElement>;
  index: number,
  // setState function
  setSection: (section: number | ((section: number) => number)) => void;
}

export interface SectionProps {
  // Separar isso
  comp: FC<SecCompProps>;
  ref: MutableRefObject<HTMLDivElement | null | undefined>;
}
