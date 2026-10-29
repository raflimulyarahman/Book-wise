export { cn } from "cn";

export const getInitials = (name: string): string =>
  name
    .trim()
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
