import type { CursorMode } from "./Cursor.model";

export interface Drawer {
  cursor: CursorMode;
  setCursor: (cursor: CursorMode) => void;
}
