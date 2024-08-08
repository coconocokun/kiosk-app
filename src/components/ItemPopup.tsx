import { Item } from "@/db/types";

interface ItemPopupProps {
  item: Item;
  onClose: () => void;
}

export default function ItemPopup({ item, onClose }: ItemPopupProps) {
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
          {/* {????} */}
          <button>Count button</button>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Add to Cart</button>
      </div>
    </div>
  );
}
