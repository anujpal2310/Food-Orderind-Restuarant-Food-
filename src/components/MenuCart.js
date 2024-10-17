import { IMG_URL } from "../config";
const MenuCart = ({ name, imageId }) => {
  return (
    <div className="p-2 bg-pink-50 w-[100vh] m-1 rounded-2xl">
      <h3 className="text-center font-bold-100 italic font-bold">{name}</h3>
      <div className="flex justify-between items-center">
        <img className="w-44 rounded-full" src={IMG_URL + imageId} alt="" />
        <div className="w-48 flex items-center justify-around">
          <button className="w-10 bg-red-300 rounded-2xl text-3xl">-</button>
          <span>5</span>
          <button className="w-10 bg-red-300 rounded-2xl text-3xl">+</button>
        </div>
        <h3 className="font-bold">Rs. 678</h3>
      </div>
    </div>
  );
};

export default MenuCart;
