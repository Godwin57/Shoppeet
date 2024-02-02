"use client"

import Image from "next/image";
import productCardType from "@/types/productCardType";

function addToCart({id, title, imageurl, description, price, rating}:productCardType){
    const product = {id, title, imageurl, description, price, rating};
    console.log(`Product with id of ${id} and title ${title} was clicked`);
}

function ProductCard({imageurl, title, rating, description, id, price}:productCardType) {
    return (
        <div className='flex flex-col space-y-6 w-96 shrink-0 rounded-xl bg-gray-300 p-6'>
            <Image src={imageurl} alt={title} height={230} width={230} />
            <h2 className="font-bold text-xl">{title}</h2>
            <p>{description}</p>
            <button className="rounded-lg bg-black text-white py-2 px-10 text-lg hover:cursor"
             onClick={() => addToCart({id, title, imageurl, description, price, rating})}>
                Add to cart
            </button>
        </div>
    );
}

export default ProductCard;