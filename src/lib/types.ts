export type TagData = {
    title: string;
}

export type variant = {
	name: string;
	status: 'selected' | 'unselected' | 'disabled';
	price: number;
	description: string;
};

export type ProductCardData = {
    id: number,
    name: string,
    defaultPrice: number,
    imageURL: string,
    tags: TagData[],
}

export interface ProductData extends ProductCardData {
    headline: string,
    variants: variant[]
    selectedVariantIndex: number 
    relatedInfo: string,
    options: string,
}