import fetchData from "@/utils/fetchData";
import {productType} from "@/types/fetchProductsType";

async function ProductPage() {
    const URL = 'http://localhost:3000/products';
    const products = await fetchData(URL);

    return (
        <div>
            {products.map((product:productType) => (
                <h2 key={product.id}>{product.title}</h2>
            ))}
        </div>
    );
}

export default ProductPage;