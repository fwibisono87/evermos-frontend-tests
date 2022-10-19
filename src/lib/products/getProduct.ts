import type { ProductData } from '../types';
import { get } from 'svelte/store';
import { products } from '../stores';

export default async function getAllProducts(id: number): Promise<ProductData> {
	const url = `https://my-json-server.typicode.com/fwibisono87/evermos-db/products/${id}`;
	let data;
	try {
		const resp = await fetch(url, {
			method: 'GET'
		});
		data = await resp.json();
	} catch {
		console.log('fetching error!, attempting to use local');
		console.log(get(products));
		data = get(products)[id];
		
	}
	return data;
}
