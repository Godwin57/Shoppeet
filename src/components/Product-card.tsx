import Image from "next/image";
import productCardType from "@/types/productCardType";

function ProductCard({imageurl, title, rating, description}:productCardType) {
    return (
        <div className='flex flex-col space-y-4 w-80 shrink-0 rounded-xl items-center bg-gray-300 p-6'>
            <Image src={imageurl} alt={title} height={230} width={230} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProductCard;