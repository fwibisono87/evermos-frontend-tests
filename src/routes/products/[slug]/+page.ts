import { error } from '@sveltejs/kit';
import getProduct from '$lib/products/getProduct';
import type { ProductData } from '$lib/types';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const id = params.slug;
	const data: ProductData = await getProduct(id);

	return {
		title: 'Hello world!',
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
		slug: params.slug,
		product: data
	};
}
