import { bold,rgb8 } from "./deps.ts";

/** Returns `Hello World` in bold */
export function getHelloWorld(): string {
	return rgb8(bold("Hello, World!"), 42)
}