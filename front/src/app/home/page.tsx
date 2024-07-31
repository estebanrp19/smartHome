import ProductList from "@/components/ProductsList";
import { IProduct } from "@/interfaces";

async function fetchProducts():Promise<IProduct[]> {
    const response = await fetch("http://localhost:3002/products")
    const products = await response.json();
    return products;
}

async function Home () {
    const products = await fetchProducts()
    
    return(
        <div>
            <ProductList products={products} />
        </div>
    )
}

export default Home;