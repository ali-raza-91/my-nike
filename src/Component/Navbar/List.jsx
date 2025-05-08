export default function List({ id }) {
  // new section

  const newFeature = [
    { id: 0, name: "New Arrivals", link: "/" },
    { id: 1, name: "Best Sellers", link: "/" },
    { id: 2, name: "Latest Drops", link: "/" },
    { id: 3, name: "Mothers Day Shop", link: "/" },
    { id: 4, name: "SNKRS Launch Calendar", link: "/" },
    { id: 5, name: "Shop All Sale", link: "/" },
  ];

  const newShop = [
    { id: 0, name: "Men", link: "/" },
    { id: 1, name: "Women", link: "/" },
    { id: 2, name: "Kids", link: "/" },
    { id: 3, name: "Shop All", link: "/" },
  ];

  const newTrending = [
    { id: 0, name: "24.7 Collection", link: "/" },
    { id: 1, name: "Nike Style By", link: "/" },
    { id: 2, name: "ACG Essentials", link: "/" },
    { id: 3, name: "Style Your Air", link: "/" },
    { id: 4, name: "Vomero 18", link: "/" },
    { id: 5, name: "Running Shoe Finder", link: "/" },
  ];

  // Men section ------------------------------------

  const menCategories = [
    {
      title: "Featured",
      items: [
        { id: 0, name: "New Arrivals", link: "/" },
        { id: 1, name: "Best Sellers", link: "/" },
        { id: 2, name: "Latest Drops", link: "/" },
        { id: 3, name: "Mothers Day Shop", link: "/" },
        { id: 4, name: "Style Your Air", link: "/" },
        { id: 5, name: "Spring Essentials", link: "/" },
        { id: 6, name: "Shop All Sale", link: "/" },
      ],
    },
    {
      title: "Shoes",
      items: [
        { id: 7, name: "All Shoes", link: "/" },
        { id: 8, name: "Basketball", link: "/" },
        { id: 9, name: "Lifestyle", link: "/" },
        { id: 10, name: "Jordan", link: "/" },
        { id: 11, name: "Retro Running", link: "/" },
        { id: 12, name: "Running", link: "/" },
        { id: 13, name: "Sandals & Slides", link: "/" },
        { id: 14, name: "Shoes $100 & Under", link: "/" },
        { id: 15, name: "Training & Gym", link: "/" },
      ],
    },
    {
      title: "Clothing",
      items: [
        { id: 16, name: "All Clothing", link: "/" },
        { id: 17, name: "Hoodies & Sweatshirts", link: "/" },
        { id: 18, name: "Jackets & Vests", link: "/" },
        { id: 19, name: "Matching Sets", link: "/" },
        { id: 20, name: "Pants", link: "/" },
        { id: 21, name: "Shorts", link: "/" },
        { id: 22, name: "Tops & T-Shirts", link: "/" },
        { id: 23, name: "24.7 Collection", link: "/" },
      ],
    },
    {
      title: "Accessories",
      items: [
        { id: 24, name: "Bags & Backpacks", link: "/" },
        { id: 25, name: "Hats & Headwear", link: "/" },
        { id: 26, name: "Socks", link: "/" },
        { id: 27, name: "Sunglasses", link: "/" },
        { id: 28, name: "Belts", link: "/" },
      ],
    },
  ];

  // Women section ---------------------------------

  const womenCategories = [
    {
      title: "Featured",
      items: [
        { id: 0, name: "New Arrivals", link: "/" },
        { id: 1, name: "Best Sellers", link: "/" },
        { id: 2, name: "Latest Drops", link: "/" },
        { id: 3, name: "Mothers Day Shop", link: "/" },
        { id: 4, name: "Style Your Air", link: "/" },
        { id: 5, name: "Spring Essentials", link: "/" },
        { id: 6, name: "Shop All Sale", link: "/" },
      ],
    },
    {
      title: "Shop by color",
      items: [
        { id: 0, name: "Blue", link: "/" },
        { id: 1, name: "Peach", link: "/" },
        { id: 2, name: "Purple", link: "/" },
        { id: 3, name: "Neon", link: "/" },
        { id: 4, name: "Neutral", link: "/" },
      ],
    },
    {
      title: "Shoes",
      items: [
        { id: 7, name: "All Shoes", link: "/" },
        { id: 8, name: "Basketball", link: "/" },
        { id: 9, name: "Lifestyle", link: "/" },
        { id: 10, name: "Jordan", link: "/" },
        { id: 11, name: "Retro Running", link: "/" },
        { id: 12, name: "Running", link: "/" },
        { id: 13, name: "Sandals & Slides", link: "/" },
        { id: 14, name: "Shoes $100 & Under", link: "/" },
        { id: 15, name: "Training & Gym", link: "/" },
      ],
    },
    {
      title: "Clothing",
      items: [
        { id: 16, name: "All Clothing", link: "/" },
        { id: 17, name: "Hoodies & Sweatshirts", link: "/" },
        { id: 18, name: "Jordan", link: "/" },
        { id: 19, name: "Jackets & Vests", link: "/" },
        { id: 20, name: "Matching Sets", link: "/" },
        { id: 21, name: "Pants", link: "/" },
        { id: 22, name: "Shorts", link: "/" },
        { id: 23, name: "Tops & T-Shirts", link: "/" },
        { id: 24, name: "24.7 Collection", link: "/" },
      ],
    },
    {
      title: "Accessories",
      items: [
        { id: 25, name: "Bags & Backpacks", link: "/" },
        { id: 26, name: "Hats & Headwear", link: "/" },
        { id: 27, name: "Socks", link: "/" },
        { id: 28, name: "Sunglasses", link: "/" },
        { id: 29, name: "Belts", link: "/" },
      ],
    },
  ];

  // Kids section ----------------------------------

  const kidsCategories = [
    {
      title: "Featured",
      items: [
        { id: 0, name: "New Arrivals", link: "/" },
        { id: 1, name: "Best Sellers", link: "/" },
        { id: 2, name: "Latest Drops", link: "/" },
        { id: 3, name: "Mothers Day Shop", link: "/" },
        { id: 4, name: "Style Your Air", link: "/" },
        { id: 5, name: "Spring Essentials", link: "/" },
        { id: 6, name: "Shop All Sale", link: "/" },
      ],
    },
    {
      title: "All Shoes",
      items: [
        { id: 7, name: "Basketball", link: "/" },
        { id: 8, name: "Lifestyle", link: "/" },
        { id: 9, name: "Jordan", link: "/" },
        { id: 10, name: "Retro Running", link: "/" },
        { id: 11, name: "Running", link: "/" },
        { id: 12, name: "Sandals & Slides", link: "/" },
        { id: 13, name: "Soccer", link: "/" },
      ],
    },
    {
      title: "All Clothing",
      items: [
        { id: 14, name: "Bras", link: "/" },
        { id: 15, name: "Hoodies & Sweatshirts", link: "/" },
        { id: 16, name: "Jordan", link: "/" },
        { id: 17, name: "Matching Sets", link: "/" },
        { id: 18, name: "Jackets & Vests", link: "/" },
        { id: 19, name: "Pants & Tights", link: "/" },
        { id: 20, name: "Shorts", link: "/" },
        { id: 21, name: "Tops & T-Shirts", link: "/" },
      ],
    },
    {
      title: "Shop by Age",
      items: [
        { id: 22, name: "Teen", link: "/" },
        { id: 23, name: "Big Kids (7-15 yrs)", link: "/" },
        { id: 24, name: "Little Kids (3-7 yrs)", link: "/" },
        { id: 25, name: "Baby & Toddler (0-3 yrs)", link: "/" },
      ],
    },
    {
      title: "Accessories",
      items: [
        { id: 26, name: "Bags & Backpacks", link: "/" },
        { id: 27, name: "Hats & Headwear", link: "/" },
        { id: 28, name: "Socks", link: "/" },
        { id: 29, name: "Sunglasses", link: "/" },
        { id: 30, name: "Belts", link: "/" },
      ],
    },
    {
      title: "Shop By Sport",
      items: [
        { id: 31, name: "Gymnastics", link: "/" },
        { id: 32, name: "Basketball", link: "/" },
        { id: 33, name: "Football", link: "/" },
        { id: 34, name: "Running", link: "/" },
        { id: 35, name: "Soccer", link: "/" },
      ],
    },
  ];

  // Jordan Section ------------------------------

  const jordanCategories = [
    // Featured Section
    {
      title: "Featured",
      items: [
        { id: 0, name: "New Arrivals", link: "/" },
        { id: 1, name: "Best Sellers", link: "/" },
        { id: 2, name: "Mothers Day Shop", link: "/" },
        { id: 3, name: "Mini Me", link: "/" },
        { id: 4, name: "Shop All Sale", link: "/" },
      ],
    },
    // Shop All Columns (merged duplicates)
    {
      title: "Men",
      items: [
        { id: 5, name: " Shop All", link: "/" },
        { id: 6, name: " Shoes", link: "/" },
        { id: 7, name: "  AJ1", link: "/" },
        { id: 8, name: "   Clothing", link: "/" },
        { id: 9, name: "     Basketball", link: "/" },
      ],
    },
    {
      title: "Women",
      items: [
        { id: 10, name: " Shop All", link: "/" },
        { id: 11, name: " Shoes", link: "/" },
        { id: 12, name: "  AJ1", link: "/" },
        { id: 13, name: "   Clothing", link: "/" },
        { id: 14, name: "     Basketball", link: "/" },
      ],
    },

    {
      title: "Kids",
      items: [
        { id: 15, name: "Shop All", link: "/" },
        { id: 16, name: "Shoes", link: "/" },
        { id: 17, name: "AJ1", link: "/" },
        { id: 18, name: "Clothing", link: "/" },
        { id: 19, name: "Basketball", link: "/" },
        { id: 20, name: "Big Kids", link: "/" },
        { id: 21, name: "Little Kids", link: "/" },
        { id: 22, name: "Baby & Toddler", link: "/" },
      ],
    },
   
    // Collections Section
    {
      title: "Accessories",
      items: [
        { id: 23, name: "Shop All", link: "/" },
        { id: 24, name: "Bags & Backpacks", link: "/" },
        { id: 25, name: "Hats & Headwear", link: "/" },
      ],
    },
   
    {
      title: "Collections",
      items: [
        { id: 26, name: "Jordan Heat Check", link: "/" },
        { id: 27, name: "Jordan Cleats", link: "/" },
        { id: 28, name: "Jordan Sleeper Picks", link: "/" },
        { id: 29, name: "Colors of the Season", link: "/" },
      ],
    },
  ];

  // sport section -------------------------

  const sport = [
    {
      title: "Basketball",
      items: [
        { id: 1, name: "Shoes", link: "/" },
        { id: 2, name: "Apparel", link: "/" },
        { id: 3, name: "Equipment", link: "/" },
        { id: 4, name: "Kobe", link: "/" },
        { id: 5, name: "Jordan", link: "/" },
        { id: 6, name: "NBA Gear", link: "/" },
        { id: 7, name: "WNBA Gear", link: "/" },
        { id: 8, name: "NCAA Gear", link: "/" }
      ]
    },
    {
      title: "Running",
      items: [
        { id: 9, name: "Road", link: "/" },
        { id: 10, name: "Race", link: "/" },
        { id: 11, name: "Trail", link: "/" },
        { id: 12, name: "Track & Field", link: "/" },
        { id: 13, name: "Apparel", link: "/" },
        { id: 14, name: "Equipment", link: "/" },
        { id: 15, name: "Stride & Swift Collection", link: "/" },
        { id: 16, name: "Running Shoe Finder", link: "/" }
      ]
    },
    {
      title: "Soccer",
      items: [
        { id: 17, name: "Cleats", link: "/" },
        { id: 18, name: "Indoor Footwear", link: "/" },
        { id: 19, name: "Apparel", link: "/" },
        { id: 20, name: "Equipment", link: "/" },
        { id: 21, name: "National Team Gear", link: "/" },
        { id: 22, name: "Club Team Gear", link: "/" },
        { id: 23, name: "NWSL Gear", link: "/" }
      ]
    },
    {
      title: "More Sports",
      items: [
        { id: 24, name: "Baseball", link: "/" },
        { id: 25, name: "Cheer", link: "/" },
        { id: 26, name: "Fan Gear", link: "/" },
        { id: 27, name: "Football", link: "/" },
        { id: 28, name: "Gymnastics", link: "/" },
        { id: 29, name: "Lacrosse", link: "/" },
        { id: 30, name: "Pickleball", link: "/" },
        { id: 31, name: "Skateboarding", link: "/" },
        { id: 32, name: "Softball", link: "/" },
        { id: 33, name: "Swimming", link: "/" },
        { id: 34, name: "Tennis", link: "/" },
        { id: 35, name: "Volleyball", link: "/" },
        { id: 36, name: "Wrestling", link: "/" }
      ]
    },
    {
      title: "Training",
      items: [
        { id: 37, name: "Shoes", link: "/" },
        { id: 38, name: "Socks", link: "/" },
        { id: 39, name: "Apparel", link: "/" },
        { id: 40, name: "Equipment", link: "/" }
      ]
    },
    {
      title: "Golf",
      items: [
        { id: 41, name: "Shoes", link: "/" },
        { id: 42, name: "Apparel", link: "/" },
        { id: 43, name: "Equipment", link: "/" },
        { id: 44, name: "Jordan", link: "/" }
      ]
    }
  ];
  
  switch (id) {
    case 0:
      return (
        <div className=" w-[100vw] flex flex-row justify-center   gap-24 py-12   bg-white border-white">
          {/* Feature section */}
          <div>
            <h3 className="xl font-bold mb-1">Feature</h3>

            <ul className="flex flex-col ">
              {newFeature.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="text-[12px] font-medium text-gray-500"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Shop section */}

          <div>
            <h3 className="xl font-bold mb-1">Shop</h3>

            <ul className="flex flex-col ">
              {newShop.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="text-[12px] font-medium text-gray-500"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Trending section */}

          <div>
            <h3 className="xl font-bold mb-1">Trending</h3>

            <ul className="flex flex-col ">
              {newTrending.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      className="text-[12px] font-medium text-gray-500"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      );

    case 1:
      return (
        <div className="w-[100vw] flex flex-row justify-center bg-white  gap-24 py-12   ">
          {menCategories.map((column) => (
            <div key={column.title} className="">
              <h3 className="xl font-bold mb-1">{column.title}</h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {column.items.map((item) => (
                  <li key={item.id}>
                    <a
                      className="text-[12px] font-medium text-gray-500"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case 2:
      return (
        <div className="w-[100vw] flex flex-row justify-center gap-24 py-12   bg-white ">
          {womenCategories.map((column) => {
            return (
              <div key={column.title}>
                <h3 className="xl font-bold mb-1">{column.title}</h3>

                <ul>
                  {column.items.map((items) => {
                    return (
                      <li key={items.id}>
                        <a
                          className="text-[12px] font-medium text-gray-500"
                          href={items.link}
                        >
                          {items.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      );
    case 3:
      return (
        <div className="w-[100vw] flex flex-row justify-center gap-24 py-12   bg-white">
          {kidsCategories.map((column) => {
            return (
              <div key={column.title}>
                <h3 className="xl font-bold mb-1">{column.title}</h3>
                <ul>
                  {column.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <a
                          className="text-[12px] font-medium text-gray-500"
                          href={item.link}
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      );
    case 4:
      return (
        <div className="w-[100vw] flex flex-row justify-center gap-24 py-12   bg-white">
          {jordanCategories.map((column) => {
            return (
              <div key={column.title}>
                <h3 className="xl font-bold mb-1">{column.title}</h3>
                <ul>
                  {column.items.map((item) => {
                    return (
                      <li key={item.id}>
                        <a
                          className="text-[12px] font-medium text-gray-500"
                          href={item.link}
                        >
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      );

    case 5:
   
        return (
          <div className="w-[100vw] flex flex-row justify-center gap-24 py-12   bg-white">
            {sport.map((column) => {
              return (
                <div key={column.title}>
                  <h3 className="xl font-bold mb-1">{column.title}</h3>
                  <ul>
                    {column.items.map((item) => {
                      return (
                        <li key={item.id}>
                          <a
                            className="text-[12px] font-medium text-gray-500"
                            href={item.link}
                          >
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      default:
      return null; // or a fallback component
  }
}


