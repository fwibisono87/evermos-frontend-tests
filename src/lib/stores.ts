import { writable, type Writable } from 'svelte/store';
import { defaultProducts } from './constants';
import type { ProductData } from './types';

export const products: Writable<ProductData[]> = writable([])