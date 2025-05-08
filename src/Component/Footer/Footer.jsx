import { ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [activeColumn, setActiveColumn] = useState(null);

  const handleColumnClick = (category) => {
    setActiveColumn(activeColumn === category ? null : category);
  };

  const menu = [
    {
      category: "Resources",
      items: [
        { id: 0, name: "Gift Cards", link: "/gift-cards" },
        { id: 1, name: "Find a Store", link: "/store-locator" },
        { id: 2, name: "Membership", link: "/membership" },
        { id: 3, name: "Nike Journal", link: "/journal" },
        { id: 4, name: "Site Feedback", link: "/feedback" },
      ],
    },
    {
      category: "Help",
      items: [
        { id: 5, name: "Get Help", link: "/help" },
        { id: 6, name: "Order Status", link: "/order-status" },
        { id: 7, name: "Shipping and Delivery", link: "/shipping" },
        { id: 8, name: "Returns", link: "/returns" },
        { id: 9, name: "Order Cancellation", link: "/cancel-order" },
        { id: 10, name: "Payment Options", link: "/payments" },
        { id: 11, name: "Gift Card Balance", link: "/gift-card-balance" },
        { id: 12, name: "Contact Us", link: "/contact" },
      ],
    },
    {
      category: "Company",
      items: [
        { id: 13, name: "About Nike", link: "/about" },
        { id: 14, name: "News", link: "/news" },
        { id: 15, name: "Careers", link: "/careers" },
        { id: 16, name: "Investors", link: "/investors" },
        { id: 17, name: "Purpose", link: "/purpose" },
        { id: 18, name: "Sustainability", link: "/sustainability" },
      ],
    },
    {
      category: "Promotions & Discounts",
      items: [
        { id: 19, name: "Student", link: "/student-discount" },
        { id: 20, name: "Military", link: "/military-discount" },
        { id: 21, name: "Teacher", link: "/teacher-discount" },
        {
          id: 22,
          name: "First Responders & Medical Professionals",
          link: "/first-responders-discount",
        },
        { id: 23, name: "Birthday", link: "/birthday-offer" },
      ],
    },
  ];

  return (
    <footer className="w-full mx-4 py-6 px-4 my-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row flex-wrap gap-6">
        {menu.map((column) => {
          const isActive = activeColumn === column.category;
          return (
            <div
              key={column.category}
              className="w-full  md:w-[22%] cursor-pointer"
              onClick={() => handleColumnClick(column.category)}
            >
              <h2 className="flex justify-between items-center font-bold text-lg text-gray-900 mb-2 sm:cursor-auto">
                <span>{column.category}</span>
                <ChevronRight
                  className={`md:hidden transition-transform ${
                    isActive ? "-rotate-90" : "-rotate-270"
                  }`}
                />
              </h2>
              <ul
                className={`space-y-2 pl-2 ${
                  isActive ? "block" : "hidden"
                } sm:block`}
              >
                {column.items.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="text-gray-700 hover:text-black text-[16px]"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
