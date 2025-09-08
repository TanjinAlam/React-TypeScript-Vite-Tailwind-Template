import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { apiClient } from "../api-collection";
import { HotelType } from "../shared/types";
import MyHotels from "../components/MyHotel";

const MyHotel = () => {
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {},
    }
  );

  if (!hotelData) {
    return <span>No Hotels found</span>;
  }
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500"
        >
          Add Hotel
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        {hotelData.map((hotel: HotelType) => (
          <div
            key={hotel._id}
            className="border border-slate-300 rounded-lg p-8"
          >
            <MyHotels {...hotel} />
            {/* <h2 className="font-bold">{hotel.name}</h2>
            <div className="whitespace-pre-line">{hotel.description}</div>
            <div className="flex lg:flex-row flex-col gap-2">
              <span className="border p-3 border-slate-300 flex-1 flex items-center justify-center">
                <BsMap className="mr-1" />
                {hotel.city}, {hotel.country}
              </span>
              <div className="border border-slate-300 p-3 flex-1 flex items-center justify-center">
                <BsBuilding className="mr-1" />
                {hotel.type}
              </div>
              <div className="border border-slate-300 p-3 flex-1 flex items-center justify-center">
                <BiMoney className="mr-1" />£{hotel.pricePerNight} per night
              </div>
              <div className="border border-slate-300 p-3 flex-1 flex items-center justify-center">
                <BiHotel className="mr-1" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="border border-slate-300 p-3 flex-1 flex items-center justify-center">
                <BiStar className="mr-1" />
                {hotel.starRating} Star Rating
              </div>
            </div>
            <span className="flex justify-end mt-2">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="flex bg-blue-600 text-white text-xl font-bold p-2 hover:bg-blue-500"
              >
                View Details
              </Link>
            </span> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotel;
