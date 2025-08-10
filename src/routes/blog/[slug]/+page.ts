import { error } from "@sveltejs/kit"
import type { PAGEMODULE } from "$lib/types"

const pages = import.meta.glob("../../../posts/*.md")

export async function load({ params }) {
	try {
		const page = (await pages[`../../../posts/${params.slug}.md`]()) as PAGEMODULE

		return {
			component: page.default,
			metadata: page.metadata
		}
	} catch (e) {
		error(404, "Page doesn't exist!")
	}
}

export function entries() {
	return Object.keys(pages).map((page) => ({
		slug: page.replace("../../../posts/", "").replace(".md", "")
	}))
}
