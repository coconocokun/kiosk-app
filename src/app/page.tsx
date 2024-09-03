"use client";

import CategorySelector from "@/components/CategorySelector";
import ItemCard from "@/components/ItemCard";
import ItemPopup from "@/components/ItemPopup";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import { items } from "@/db/samples";
import { Item } from "@/db/types";
import { useCart } from "@/lib/cartContext";
import Image from "next/image";
import { useEffect, useState } from "react";

const categories = ["Category A", "Category B"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedItems, setDisplayedItems] = useState<Item[]>(items);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const { addToCart, clearCart } = useCart();

  const filterItems = items.filter((item) => {
    const matchCategory = selectedCategory == "All" || item.category == selectedCategory;

    const matchTitle = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchDescription = item.description.toLowerCase().includes(searchQuery.toLowerCase());

    return (matchCategory && matchTitle) || (matchCategory && matchDescription);
  });

  useEffect(() => {
    setDisplayedItems(filterItems);
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col ">
      <NavBar />
      <main className="flex-grow max-w-6xl mx-auto p-4">
        <SearchBar onSearch={setSearchQuery} />
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-32">
          {displayedItems.map((item, i) => (
            <ItemCard key={i} item={item} onAddToCart={() => setSelectedItem(item)} />
          ))}
        </div>
      </main>
      {selectedItem && (
        <ItemPopup
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={(item: Item, count: number) => addToCart(item, count)}
        />
      )}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <button className="w-full bg-blue-600 text-white rounded py-2">Go to Cart</button>
        <button className="w-full bg-red-600 text-white rounded py-2 mt-2" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
}
