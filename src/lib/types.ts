export type variant = {
	name: string;
    isSelected: boolean;
    isDisabled: boolean;
	price: number;
	description: string;
};

export type ProductCardData = {
    id: number,
    name: string,
    defaultPrice: number,
    imageURL: string,
    tags: string[],
}

export interface ProductData extends ProductCardData {
    headline: string,
    imageURLS: string[],
    variants: variant[]
    selectedVariantIndex: number 
    relatedInfo: string,
    options: string,
}