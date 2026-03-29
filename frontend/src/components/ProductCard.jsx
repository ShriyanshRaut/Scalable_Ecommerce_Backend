function ProductCard({ product }) {
  if (!product) return null;

  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-lg transition">
      
      <img
        src={product.images?.[0] || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />

      <h2 className="text-lg font-semibold">{product.name}</h2>

      <p className="text-green-600 font-medium mb-2">
        ₹ {product.price}
      </p>

      <button className="bg-black text-white px-3 py-1 rounded w-full">
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;