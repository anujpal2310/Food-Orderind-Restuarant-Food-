import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import Shimmer from "./Shimmer";

const Restuarant = () => {
  const { id } = useParams();
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    async function getRestuarantMenus() {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.7271012&lng=88.39528609999999&restaurantId=${id}`
      );
      const json = await data.json();

      setMenuItems(
        json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards
      );
    }
    getRestuarantMenus();
  }, []);
  return menuItems.length === 0 ? (
    <div className="flex p-2 flex-wrap bg-yellow-50 pl-16 items-center">
      {Array(15)
        .fill("")
        .map((c, i) => (
          <Shimmer key={i} />
        ))}
    </div>
  ) : (
    <div className="flex p-2 flex-wrap bg-yellow-50 pl-16">
      {menuItems?.map((menu) => (
        <MenuCard {...menu.card.info} key={menu.card.info.id} />
      ))}
    </div>
  );
};

export default Restuarant;
