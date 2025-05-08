import { useState } from "react";

const menu = [
  {
    category: "Featured",
    items: [
      { id: 0, name: "Air Force 1", link: "/air-force-1" },
      { id: 1, name: "Jordan 1", link: "/jordan-1" },
      { id: 2, name: "Air Max Dn", link: "/air-max-dn" },
      { id: 3, name: "Vomero", link: "/vomero" },
      { id: 4, name: "Metcon", link: "/metcon" },
      { id: 5, name: "Air Max 270", link: "/air-max-270" },
      { id: 6, name: "Air Max 90", link: "/air-max-90" },
      { id: 7, name: "Blazer", link: "/blazer" },
      { id: 8, name: "Pegasus", link: "/pegasus" },
      { id: 9, name: "NikeLab", link: "/nikelab" },
      { id: 10, name: "Sale Clothing", link: "/sale-clothing" },
    ],
  },
  {
    category: "Shoes",
    items: [
      { id: 0, name: "All Shoes", link: "/all-shoes" },
      { id: 1, name: "Running Shoes", link: "/running-shoes" },
      { id: 2, name: "Basketball Shoes", link: "/basketball-shoes" },
      { id: 3, name: "Training Shoes", link: "/training-shoes" },
      { id: 4, name: "Custom Shoes", link: "/custom-shoes" },
      { id: 5, name: "All Clothing", link: "/all-clothing" },
      { id: 6, name: "Tops & T-Shirts", link: "/tops-t-shirts" },
      { id: 7, name: "Shorts", link: "/shorts" },
      { id: 8, name: "Hoodies & Pullovers", link: "/hoodies-pullovers" },
      { id: 9, name: "Joggers & Sweatpants", link: "/joggers-sweatpants" },
      { id: 10, name: "Sports Bras", link: "/sports-bras" },
      { id: 11, name: "Pants & Tights", link: "/pants-tights" },
      { id: 12, name: "Yoga", link: "/yoga" },
      { id: 13, name: "Plus Size", link: "/plus-size" },
    ],
  },
  {
    category: "Clothing",
    items: [
      { id: 0, name: "All Shoes", link: "/all-shoes" },
      { id: 1, name: "Jordan Shoes", link: "/jordan-shoes" },
      { id: 2, name: "Running Shoes", link: "/running-shoes" },
      { id: 3, name: "Basketball Shoes", link: "/basketball-shoes" },
      { id: 4, name: "Training Shoes", link: "/training-shoes" },
      { id: 5, name: "Soccer Cleats", link: "/soccer-cleats" },
      { id: 6, name: "Sale Shoes", link: "/sale-shoes" },
      { id: 7, name: "All Clothing", link: "/all-clothing" },
      { id: 8, name: "Shorts", link: "/shorts" },
      { id: 9, name: "Hoodies & Pullovers", link: "/hoodies-pullovers" },
      { id: 10, name: "Joggers & Sweatpants", link: "/joggers-sweatpants" },
      { id: 11, name: "Socks", link: "/socks" },
      { id: 12, name: "Big & Tall", link: "/big-tall" },
    ],
  },
  {
    category: "Kid",
    items: [
      { id: 0, name: "Kids", link: "/kids" },
      { id: 1, name: "Infant & Toddler Shoes", link: "/infant-toddler-shoes" },
      { id: 2, name: "Kids Shoes", link: "/kids-shoes" },
      { id: 3, name: "Kids Basketball Shoes", link: "/kids-basketball-shoes" },
      { id: 4, name: "Kids Running Shoes", link: "/kids-running-shoes" },
      { id: 5, name: "Kids Jordan Shoes", link: "/kids-jordan-shoes" },
      { id: 6, name: "Kids Clothing", link: "/kids-clothing" },
      { id: 7, name: "Kids Backpacks", link: "/kids-backpacks" },
      { id: 8, name: "Kids Socks", link: "/kids-socks" },
      { id: 9, name: "Kids Sale", link: "/kids-sale" },
    ],
  },
];

export default function ServicesList() {
  const [activeColumn, setActiveColumn] = useState(null);

  const handleColumnClick = (category) => {
    setActiveColumn(activeColumn === category ? null : category);
  };

  return (
    <div className="  flex flex-col sm:flex-row justify-start sm:justify-center group">
      {menu.map((column) => (
        <div
          className={`flex flex-col w-full sm:w-40 p-2 sm:mx-8   cursor-pointer sm:cursor-auto `}
          key={column.category}
          onClick={() => handleColumnClick(column.category)}
        >
          <h1 className="text-start font-semibold text-2xl mb-4">
            {column.category}
          </h1>
          {column.items.map((item) => (
            <button
              className={`
                text-start text-gray-700 hover:text-gray-900 text-[17px] font-medium my-1 sm:my-2 w-28 lg:w-40
                ${item.id > 5 ? "sm:hidden group-hover:sm:block" : "block"}
                ${
                  activeColumn === column.category ? "block" : "hidden sm:block"
                }
              `}
              key={item.id}
            >
              {item.name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
