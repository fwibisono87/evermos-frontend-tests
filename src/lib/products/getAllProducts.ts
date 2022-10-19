import { products } from "$lib/stores";
import {} from "svelte/store";

export default async function getAllProducts() {
    const url = 'https://my-json-server.typicode.com/fwibisono87/evermos-db/products/';
		const resp = await fetch(url, {
			method: 'GET'
        })
	const data = await resp.json()
	products.set(data)
}

