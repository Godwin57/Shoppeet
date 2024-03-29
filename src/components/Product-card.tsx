"use client"

import Image from "next/image";
import productCardType from "@/types/productCardType";
import { ratingType } from "@/types/fetchProductsType";


function addToCart(id:number, title:string, imageurl:string, description:string, price:number, rating:ratingType){
    const product = {id, title, imageurl, description, price, rating};
    console.log(`Product with id of ${id} and title ${title} was clicked`);
    console.log(product)
}

function ProductCard({imageurl, title, rating, description, id, price}:productCardType) {
    return (
        <div className='flex flex-col space-y-6 w-96 shrink-0 rounded-xl bg-gray-300 p-6'>
            <Image src={imageurl} alt={title} height={230} width={230} />
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="font-bold">${price}</p>
            <p>{description}</p>
            <button className="rounded-lg bg-black text-white py-2 px-10 text-lg hover:cursor"
             onClick={() => addToCart(id, title, imageurl, description, price, rating)}>
                Add to cart
            </button>
        </div>
    );
}

export default ProductCard;