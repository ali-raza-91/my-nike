import { PiHeart } from "react-icons/pi";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { User } from "lucide-react";
import { MdClose } from "react-icons/md";
import { GrFormNext } from "react-icons/gr";
import { SiJordan } from "react-icons/si";
import { CircleHelp } from "lucide-react";
import { PackageSearch } from "lucide-react";
import { LuArchiveRestore } from "react-icons/lu";
import logo from "../../Assets/logo.png";
import converseImg from "../../Assets/converse.png";
import List from "../Navbar/List";

import { useState } from "react";

export default function Navbar() {
  // state for Menue

  let [Menue, setMenue] = useState(false);
  let [side, setside] = useState(1);
  const handleManue = () => {
    setMenue((Menue) => !Menue);
  };

  // navbar list items for large screen
  const list = [
    { id: 0, name: "New", link: "/" },
    { id: 1, name: "Men", link: "/men" },
    { id: 2, name: "Women", link: "/women" },
    { id: 3, name: "Kids", link: "/kids" },
    { id: 4, name: "Jordans", link: "/jordans" },
    { id: 5, name: "Sport", link: "/sport" },
  ];

  // side bar last section

  const last = [
    { id: 1, name: "Help", link: "/help", icon: <CircleHelp /> },
    { id: 2, name: "Bag", link: "/cart", icon: <IoBagOutline size={25} /> },
    { id: 3, name: "Order", link: "/orders", icon: <PackageSearch /> },
    {
      id: 4,
      name: "Find a Store",
      link: "/stores",
      icon: <LuArchiveRestore size={25} />,
    },
  ];

  // mobile menue items

  return (
    <>
      <nav
        className={`flex items-center justify-between px-4 py-2 shadow-sm backdrop-blur-sm transition-colors ${
          Menue ? "bg-white/70" : "bg-white"
        }`}
      >
        {/* logo section */}
        <div>
          <img src={logo} alt="nike" className="h-10" />
        </div>

        {/* list items section */}
          <ul className="hidden md:flex gap-1">
            {list.map((item) => (
              <li className="list-none flex group " key={item.id}>
                <a className="py-2 px-3 " href={item.link}>
                  {item.name}
                </a>
                <div className=" hidden group-hover:flex justify-center items-center mx-auto w-[100%]  absolute top-14 left-0">
                <List id={item.id}/>
                </div>
              </li>
            ))}
          </ul>

        {/* icons section */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-gray-100 py-1 px-3 rounded-full gap-2 w-fit hover:bg-gray-200">
            <IoSearchOutline className="text-lg text-gray-500" />
            <input
              className="bg-transparent border-none outline-none w-24 focus:w-32 transition-all duration-200 placeholder:text-gray-500 focus:bg-transparent"
              type="search"
              placeholder="Search"
            />
          </div>
          <IoSearchOutline className="text-xl cursor-pointer lg:hidden" />

          <User className="w-5 h-5 cursor-pointer md:hidden" />
          <PiHeart className="hidden md:block text-xl cursor-pointer " />
          <IoBagOutline className="text-xl cursor-pointer " />

          <IoMdMenu
            onClick={() => handleManue()}
            className="text-xl cursor-pointer md:hidden"
          />
        </div>
      </nav>
      {/* ------------------------------------------------------------------------ */}
      {/* menue items are here   */}
      {/* Sidebar for mobile device */}
      <div className="">
        {Menue && (
          <div className="absolute overflow-y-auto top-0 right-0 h-full z-50 bg-white p-4 w-[300px] shadow-lg md:hidden">
            <div className="flex justify-end mb-4">
              <button
                // onClick={() => setMenu(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <MdClose onClick={() => handleManue()} className="text-2xl" />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {list.map((item) => (
                <button
                  // onClick={()=> setside(2)}
                  key={item.id}
                  className="flex flex-row justify-between items-center  border-b border-gray-100 pb-4 "
                >
                  <a
                    href={item.link}
                    className="text-xl font-medium hover:text-gray-600 transition-colors"
                  >
                    {item.name}
                  </a>
                  <GrFormNext className="text-2xl" />
                </button>
              ))}
            </div>

            {/* jordan button section */}

            {
              <div className="my-10">
                <button
                  className="flex flex-row justify-between items-center  border-b border-gray-100 pb-4 gap-3"
                  type=""
                >
                  <SiJordan className="text-2xl" />
                  <a className="text-[18px] font-medium" href="/">
                    Jordan
                  </a>
                </button>

                <button
                  className="flex flex-row justify-between items-center  border-b border-gray-100 pb-4 gap-3"
                  type=""
                >
                  <img className="w-6 " src={converseImg} alt="img" />
                  <a className="text-[18px] font-medium" href="/">
                    Converse
                  </a>
                </button>
              </div>
            }

            {/* little more detail section */}

            <div className="w-[80%]">
              <p className="text-xl text-gray-500 ">
                Become a Nike Member for the best products,{" "}
              </p>
              <p className="text-xl text-gray-500">
                Inspiration and stories in sport
                <a className="text-2xl font-medium px-2 text-black" href="/">
                  Learn more
                </a>
              </p>
            </div>

            {/* buttons */}
            <div className="my-4">
              <button className="bg-black py-2 px-4 rounded-4xl text-white mx-2 ">
                <a href="/">Join Us</a>
              </button>

              <button className="bg-white py-2 px-4 rounded-4xl text-black border-2 border-gray-200 mx-2">
                <a href="/">Sign In</a>
              </button>
            </div>

            {/* last section is here */}

            <div className="flex flex-col gap-2 mt-20">
              {last.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-row  items-center  border-b border-gray-100 pb-4 gap-3 "
                >
                  {item.icon}

                  <a
                    href={item.link}
                    className="text-xl font-medium hover:text-gray-600 transition-colors"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Second sidebar */}
    </>
  );
}
