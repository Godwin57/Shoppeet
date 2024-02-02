import fetchData from "@/utils/fetchData";
import {productType} from "@/types/fetchProductsType";

const getUniqueElem = (arr:string[]) => {
    let uniqueElem = new Set(arr);
    return Array.from(uniqueElem);
}

async function CateogoriesPage() {
    const URL = 'http://localhost:3000/products';
    const products = await fetchData(URL);

    const categories = getUniqueElem(products.map((product:productType) => product.category));

    return (
        <div>
            <h1 className="font-bold text-2xl">Available categories:</h1>
            {categories.map((category:string) => (
                <h2 key={category}>{category}</h2>
            ))}
        </div>
    );
}

export default CateogoriesPage;