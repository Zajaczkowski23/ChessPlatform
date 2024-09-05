import { ReactNode } from "react";

export interface Square {
  row: number;
  col: number;
  isBlack: boolean;
  piece: string | null;
  children?: ReactNode;
}
