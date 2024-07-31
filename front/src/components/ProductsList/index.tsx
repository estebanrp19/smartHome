import { IProduct, IProductListProps } from "@/interfaces";
import ProductCard from "../ProductsCard";

function ProductList({products}: IProductListProps) {    
  return (
      <div className="grid grid-cols-1 gap-6 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6 col-span-full">
          Lista de Productos
        </h1>
        {products.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    );
}

export default ProductList;