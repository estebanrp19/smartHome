import { IProduct } from "@/interfaces";

function ProductCard({ product }: { product: IProduct }) {
  console.log("home:", product.image);
  
  return (
    <div
      key={product.id}
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
    >
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full h-64"
      />     

      <div className="p-4">
        <h3 className="text-xl font-bold">{product.name}</h3>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-semibold">${product.price}</span>
          <a href={`http://localhost:3000/detail/${product.id}`} className="inline-flex items-center justify-center rounded-md bg-[#588157] px-4 py-2 text-sm text-white font-medium text-background transition-colors hover:bg-[#4a6b49]">
            Ver Detalle
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
