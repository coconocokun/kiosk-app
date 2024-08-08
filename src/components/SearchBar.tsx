import Image from "next/image";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-l-md flex-grow p-2"
      />
      <button className="bg-blue-600 p-2 rounded-r-md">
        <Image src={"/search.svg"} alt="search" width={24} height={24} />
      </button>
    </div>
  );
}
