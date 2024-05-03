import { Link } from "react-router-dom";

const MyHotel = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">My Hotels</h1>
        <Link
          to="/add-hotel"
          className="bg-blue-600 text-white p-1 font-medium"
        >
          Add Hotel
        </Link>
      </div>
    </div>
  );
};

export default MyHotel;
