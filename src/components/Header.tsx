import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Booking.com</Link>
        </span>

        <span className="flex gap-2">
          {isLoggedIn ? (
            <>
              <Link
                to="/booking"
                className="flex items-center  font-bold text-white px-3 hover:bg-blue-600"
              >
                My Bookings
              </Link>
              <Link
                to="/my-hotel"
                className="flex items-center  font-bold text-white px-3 hover:bg-blue-600"
              >
                My Hotels
              </Link>
              <SignOutButton></SignOutButton>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
