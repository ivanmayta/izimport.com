import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getHostFromUrl = (url: string) => {
  const urlObj = new URL(url)
  return urlObj.host
}
