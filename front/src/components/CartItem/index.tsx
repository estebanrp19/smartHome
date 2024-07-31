import { IProduct } from "@/interfaces";

function CartItem({ product }: { product: IProduct }) {
  return (
    <div className="flex items-center mx-20 justify-between bg-white p-4 rounded-lg shadow-md mb-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <span className="text-gray-500">${product.price}</span>
      </div>
      <div className="ml-auto text-lg font-bold">${product.price}</div>
    </div>
  );
}

export default CartItem;
