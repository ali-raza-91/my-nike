import nike from "./Assets/logo.png";

import Navbar from "./Component/Navbar/Navbar";
// import Hero from "./Component/Hero/Hero";
import Card from "./Component/Card/Card";
import Product from "./Component/Product/Product";
import ServicesList from "./Component/ServiceList/ServicesList";
import Footer from "./Component/Footer/Footer";
// import Lastfooter from "./Component/Lastfooter/Lastfooter";

function App() {
  const btn = [
    { id: 0, name: "Find a Store", link: "/" },
    { id: 1, name: "Help", link: "/help" },
    { id: 2, name: "Join Us", link: "/join" },
    { id: 3, name: "Sign In", link: "/signin" },
  ];

  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Card />
      <div className="w-full flex flex-col justify-center items-center mt-14 gap-y-3">
        <h1 className="text-4xl font-extrabold text-center">
          THE DREAM IS REAL
        </h1>
        <p className="text-[18px]  text-center">
          Every goal is within reach in the kylian Mbappe Mercurial Superfly
        </p>
        <button className="py-2 px-5 rounded-full bg-black text-white hover:bg-gray-600 mt-4">
          Shop
        </button>
      </div>
      <div className="ml-8 sm:ml-12 md:ml-16 lg:ml-20 mt-20 ">
        <h1 className="text-4xl font-medium">Shop The Classics</h1>
      </div>
      <Product />
      <div className="flex flex-col justify-center items-center gap-6 my-10">
        <img className=" w-30 h-auto" src={nike} alt="logo" />
        <div className="flex flex-row gap-8">
          {btn.map((item) => {
            return (
              <button className="text-gray-800 hover:text-black text-xl" key={item.id}>
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      <ServicesList/>
      <Footer/>
      {/* <Lastfooter/> */}
    </>
  );
}

export default App;
