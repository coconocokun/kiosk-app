import { Item } from "@/db/types";
import { useState } from "react";

interface ItemPopupProps {
  item: Item;
  onClose: () => void;
  onAddToCart: (item: Item, count: number) => void;
}

export default function ItemPopup({ item, onClose, onAddToCart }: ItemPopupProps) {
  const [count, setCount] = useState(1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-96 p-6">
        <div className="relative mb-2">
          <img src={item.pic} alt={item.title} className="w-full h-56 object-cover" />
          <button className="absolute top-2 right-2 bg-white rounded-full p-1" onClick={onClose}>
            X
          </button>
        </div>
        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
        <p className="text-sm text-gray-500 mb-4">{item.description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-lg">${item.price}</span>
          <div className="flex items-center">
            <button className="bg-gray-200 rounded-l px-2 py-1" onClick={() => setCount(Math.max(1, count - 1))}>
              -
            </button>
            <span className="px-4 py-1 bg-gray-100">{count}</span>
            <button
              className="bg-gray-200 rounded-r px-2 py-1"
              onClick={() => setCount(Math.min(count + 1, item.stock))}
            >
              +
            </button>
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg" onClick={() => onAddToCart(item, count)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
