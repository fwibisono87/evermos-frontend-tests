import { writable, type Writable } from 'svelte/store';
import { defaultProducts } from './constants';
import type { ProductData } from './types';
import { persist, createLocalStorage } from '@macfja/svelte-persistent-store';

export const currentVariantId = writable(0);
export const products: Writable<ProductData[]> = persist(writable([]), createLocalStorage(), 'products');