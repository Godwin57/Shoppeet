export interface ratingType {
    rate: number;
    count: number;
}

export interface productType {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: ratingType;
    title: string;
}

export interface productsType{
    products: productType[];
}