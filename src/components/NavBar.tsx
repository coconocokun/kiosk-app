import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center p-4">
      <h1 className="text-2xl font-bold">Kiosk App</h1>
      <div className="relative">
        <Image src={"/cart.svg"} alt="cart" width={32} height={32} />
        <span className="absolute -top-2 -right-2 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center">
          3
        </span>
      </div>
    </nav>
  );
}
