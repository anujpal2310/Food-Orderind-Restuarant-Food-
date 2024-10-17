import { useDispatch } from "react-redux";
import { IMG_URL } from "../config";
import { addItem } from "../utils/cartSlice";
const MenuCard = ({ name, imageId, description,id }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-80 border border-black break-words p-1 m-2 rounded-lg">
      <div className="flex justify-between">
        <div className="font-bold">
          <h3 className="text-lg">{name}</h3>
        </div>
        <div className="w-40">
          <img src={IMG_URL + imageId} alt="" className="rounded-full" />
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-5">{description?description:""}</p>
      <div className="flex justify-between text-sm mt-5 items-center">
        {/* <div></div> */}
        <h4 className="font-bold italic">Rs. 219</h4>
        <button
          className="p-2 bg-green-400 rounded-lg font-bold"
          onClick={() => dispatch(addItem({ name, imageId,id}))}
        >
          ADD
        </button>
      </div>
      <hr />
    </div>
  );
};
export default MenuCard;
