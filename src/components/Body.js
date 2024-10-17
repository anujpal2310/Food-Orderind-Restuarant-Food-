import RestuarantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const filterData = (restuarantList, searchText) => {
  const filterData = restuarantList.filter((restuarant) =>
    restuarant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filterData;
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restuarantList, setRestaurantList] = useState([]);
  const [filteredRestuarantList, setFilteredRestaurantList] = useState([]);

  // console.log("render => body");

async function getRestuarants() {
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants.info);
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRestaurantList(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }

  useEffect(() => {
    getRestuarants();
  }, []);

  if (restuarantList.length === 0)
    return (
      <div className="flex p-5 pl-16 flex-wrap m-2 mt-0 bg-yellow-50">
        {Array(15)
          .fill("")
          .map((c, i) => (
            <Shimmer key={i} />
          ))}
      </div>
    );

  return filteredRestuarantList.length === 0 ? (
    <h1>No restuarant found!!!</h1>
  ) : (
    <>
      <div className="p-4 bg-yellow-50">
        <input
          type="text"
          className="p-1 pl-6 border border-black w-1/4 ml-14 rounded-l-full bg-yellow-50"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-1 w-24 bg-green-400 border border-black rounded-r-full"
          onClick={() => {
            const data = filterData(restuarantList, searchText);
            setFilteredRestaurantList(data);
          }}
        >
          search
        </button>
      </div>

      <div className="flex p-5 pl-16 flex-wrap m-2 mt-0 bg-yellow-50">
        {filteredRestuarantList.map((restuarant) => (
          <Link
            to={`/restuarant/${restuarant.info.id}`}
            key={restuarant.info.id}
          >
            <RestuarantCard {...restuarant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
