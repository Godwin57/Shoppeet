import fetchData from "@/utils/fetchData";
import {productType} from "@/types/fetchProductsType";
import ProductCard from "@/components/Product-card";

async function ProductPage() {
    const URL = 'http://localhost:3000/products';
    const products = await fetchData(URL);

    return (
        <div className="flex flex-wrap space-x-10 space-y-10 justify-center">
            {products.map((product:productType) => (
                <ProductCard imageurl={product.image} title={product.title} rating = {product.rating} 
                description={product.description} />
            ))}
        </div>
    );
}

export default ProductPage;