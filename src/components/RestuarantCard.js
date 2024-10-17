import { IMG_URL } from "../config";
const RestuarantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => {
  // console.log(Restuarant);
  return (
    <div className="w-[250px] m-1 border border-black break-words p-1 rounded-lg">
      <img
        className="w-full mb-5 rounded-t-lg"
        src={IMG_URL + cloudinaryImageId}
        alt="dishes"
      />
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="mt-3 text-gray-500">{cuisines.join(",")}</p>
      <div className="flex justify-between mt-5 text-sm items-center">
        <h6 className="bg-green-400 p-1 rounded-full">
          ⭐{avgRating} &nbsp;stars
        </h6>
        <h6 className="">{costForTwoString}</h6>
        <h6>{deliveryTime}&nbsp; MINS</h6>
      </div>
    </div>
  );
};

export default RestuarantCard;
