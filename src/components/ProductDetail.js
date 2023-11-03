import React from 'react';

const ProductDetail = () => {
  const product = {
    name: 'Zapatos',
    description: 'Calzado de cuero. Suela reforzada. Hecha a mano. Fabricación Argentina.',
    price: '$899.00',
    sku: 'SKU123456',
    availableQuantity: 50,
  };

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: {product.price}</p>
      <p>SKU: {product.sku}</p>
      <p>Cantidad disponible: {product.availableQuantity}</p>
    </div>
  );
};

export default ProductDetail;
