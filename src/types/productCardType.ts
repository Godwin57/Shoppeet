import { ratingType } from "./fetchProductsType"

export default interface productCardType{
    imageurl: string;
    title: string;
    rating: ratingType;
    description: string;
}