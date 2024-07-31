"use client"
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { IProduct } from "@/interfaces";

async function fetchProductById(id: string): Promise<IProduct> {
  const response = await fetch(`http://localhost:3002/products/${id}`);
  const product = await response.json();
  return product;
}

function Detail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<IProduct | null>(null);
  const { addToCart, showLoginMessage, setShowLoginMessage } = useCart();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const loadProduct = async () => {
      const fetchedProduct = await fetchProductById(params.id);
      setProduct(fetchedProduct);
    };

    loadProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      setShowLoginMessage(true);
    } else {
      addToCart(product!);
      setShowLoginMessage(false); // Resetear mensaje al añadir al carrito
    }
  };

  if (!product) {
    return <div className="text-center text-lg">Cargando...</div>;
  }
  console.log( "detail: ", product.image);
  

  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <img
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
          />
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
          <div>
            <p>{product.description}</p>
          </div>
          <div className="text-4xl font-bold">${product.price}</div>
          <div>
            <strong>Stock: </strong>
            {product.stock}
          </div>
          <button
            onClick={handleAddToCart}
            className="transition lg border rounded-lg p-3 bg-[#588157] text-white hover:bg-[#3A5A40] hover:-translate-y-1 hover:scale-110 duration-300"
          >
            Añadir al Carrito
          </button>
          {showLoginMessage && (
            <p className="text-red-500">
              Inicie sesión para añadir productos al carrito.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Detail;
