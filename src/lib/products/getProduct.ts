import type { ProductData } from "../types"
import {} from "svelte/store";

export default async function getAllProducts(id: number): Promise<ProductData> {
    const url = `https://my-json-server.typicode.com/fwibisono87/evermos-db/products/${id}`;
		console.log(url);
		const resp = await fetch(url, {
			method: 'GET'
        })
	const data = await resp.json()
	return data
}

