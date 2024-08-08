import { Item } from "@/db/types";

interface ItemCardProps {
  item: Item;
  onAddToCart: (item: Item) => void;
}

export default function ItemCard({ item, onAddToCart }: ItemCardProps) {
  return (
    <div className="border rounded-lg flex flex-col p-2">
      <img src={item.pic} alt={item.title} className="w-full h-40 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{item.title}</h3>
      <p className="text-sm text-gray-500 mb-2">{item.description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold">${item.price}</span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={() => onAddToCart(item)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
