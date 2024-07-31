"use client";
import { useCart } from "@/context/CartContext";
import CartItem from "@/components/CartItem";
import { IProduct } from "@/interfaces";
import { isAuthenticated } from "@/helpers/verifyToken";
import Link from "next/link";

const Checkout: React.FC = () => {
  const { cart, clearCart } = useCart();

  if (!isAuthenticated()) {
    return (
      <div className="mt-20">
        <h1 className="text-center my-5 text-4xl font-bold text-primary">
          Necesitas iniciar sesión para visualizar tu carrito
        </h1>
        <div className="flex justify-center mb-20">
          <Link href="/login">
            <button className="transition lg border rounded-lg p-3 bg-[#588157] text-white hover:bg-[#3A5A40] hover:-translate-y-1 hover:scale-110 duration-300">
              Iniciar sesión
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const calculateTotal = (): number => {
    return cart.reduce(
      (total: number, product: IProduct) => total + product.price,
      0
    );
  };

  return (
    <div>
      <h1 className="text-center my-5 text-5xl font-bold text-primary">
        Tu carrito
      </h1>
      <div>
        {cart.length > 0 ? (
          cart.map((product: IProduct) => (
            <CartItem key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-xl">Tu carrito está vacío</p>
        )}
      </div>

      {cart.length > 0 && (
        <div className="h-32 w-1/2 mx-auto mt-5 bg-[#588157] rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-white">Total:</span>
            <span className="font-semibold">
              ${calculateTotal().toFixed(2)}
            </span>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 bg-[#588157] hover:bg-[#3c5a39] text-white p-2 rounded">
              Proceder al Pago
            </button>
            <button
              className="flex-1 border-[#588157] bg-white text-[#588157] p-2 rounded hover:bg-[#588157] hover:text-white"
              onClick={clearCart}
            >
              Limpiar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
