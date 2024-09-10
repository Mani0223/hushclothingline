import React from 'react';

function CollectionPage({ products }) {
  return (
    <div>
      <h1>Products in the Collection</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            {product.images && product.images.length > 0 && (
              <img src={product.images[0].src} alt={product.title} />
            )}
            <button>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollectionPage;