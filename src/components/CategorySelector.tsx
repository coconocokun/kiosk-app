type CategorySelectorProps = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export default function CategorySelector({ categories, selectedCategory, onSelectCategory }: CategorySelectorProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4 mt-4">
      <button
        className={`rounded-full ${selectedCategory == "All" ? "bg-blue-600 text-white" : "bg-gray-200"} px-3 py-1`}
        onClick={() => onSelectCategory("All")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`rounded-full ${
            selectedCategory == category ? "bg-blue-600 text-white" : "bg-gray-200"
          } px-3 py-1`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
