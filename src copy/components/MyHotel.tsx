import { BsBuilding, BsMap } from "react-icons/bs";
import { HotelType } from "../shared/types";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";

const MyHotels = (hotel: HotelType) => {
  return (
    <div className="">
      <h1 className="font-bold text-2xl">{hotel.name}</h1>
      <p className="whitespace-pre-line">{hotel.description}</p>
      <div className="grid grid-cols-5 gap-2">
        <div className="border border-slate-300 rounded-sm p-3 flex items-center">
          <BsMap className="mr-1" />
          {hotel.city}, {hotel.country}
        </div>
        <div className="border border-slate-300 rounded-sm p-3 flex items-center">
          <BsBuilding className="mr-1" />
          {hotel.type}
        </div>
        <div className="border border-slate-300 rounded-sm p-3 flex items-center">
          <BiMoney className="mr-1" />£{hotel.pricePerNight} per night
        </div>
        <div className="border border-slate-300 rounded-sm p-3 flex items-center">
          <BiHotel className="mr-1" />
          {hotel.adultCount} adults, {hotel.childCount} children
        </div>
        <div className="border border-slate-300 rounded-sm p-3 flex items-center">
          <BiStar className="mr-1" />
          {hotel.starRating} Star Rating
        </div>
      </div>
      <span className="flex justify-end mt-4">
        <Link
          to={`/edit-hotel/${hotel._id}`}
          className="flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500"
        >
          View Details
        </Link>
      </span>
    </div>
  );
};

export default MyHotels;
