"use client";

import CategorySelector from "@/components/CategorySelector";
import ItemCard from "@/components/ItemCard";
import ItemPopup from "@/components/ItemPopup";
import NavBar from "@/components/NavBar";
import SearchBar from "@/components/SearchBar";
import { items } from "@/db/samples";
import { Item } from "@/db/types";
import Image from "next/image";
import { useState } from "react";

const categories = ["Category A", "Category B"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [displayedItems, setDisplayedItems] = useState<Item[]>(items);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className="min-h-screen flex flex-col ">
      <NavBar />
      <main className="flex-grow max-w-6xl mx-auto p-4">
        <SearchBar />
        <CategorySelector
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedItems.map((item, i) => (
            <ItemCard key={i} item={item} onAddToCart={() => setSelectedItem(item)} />
          ))}
        </div>
      </main>
      {/* {Popup modal card} */}
      {selectedItem && <ItemPopup item={selectedItem} onClose={() => setSelectedItem(null)} />}
      {/* {Cart button} */}
    </div>
  );
}
