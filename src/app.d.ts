// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
import type { SvelteComponent } from "svelte"

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	declare module "*.md" {
		export default class Comp extends SvelteComponent{}

		export const metadata: Record<string, unknown>
	}
}

export {}
