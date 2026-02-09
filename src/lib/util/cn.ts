import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

/**
 * Merge Tailwind CSS classes with clsx
 */
const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export default cn;
