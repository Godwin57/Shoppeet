import Image from "next/image";
import productCardType from "@/types/productCardType";

function ProductCard({imageurl, title, rating, description}:productCardType) {
    return (
        <div>
            <Image src={imageurl} alt={title} height={500} width={500} />
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProductCard;