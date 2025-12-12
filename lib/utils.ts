import { type ClassValue, clsx } from "clsx";

// Simple classnames utility (no need for tailwind-merge in this project)
export function cn(...inputs: ClassValue[]) {
    return clsx(inputs);
}
