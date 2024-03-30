import axios from "axios";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [suggestion, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  async function searchAPI(value: string) {
    console.log("value", value);
    setCity(value);
    if (value.length > 3) {
      console.log("value", value);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/find?q=${value}&appid=7f0712093a310a3017ba53a6acf80aee`
      );
      const suggestions = response.data.list.map((item: any) => item.name);
      console.log("userSearchedLocation", suggestions);
      setSuggestions(suggestions);
      setShowSuggestions(true);
    }
  }

  async function handleSearchAPI(e: React.FormEvent<HTMLFormElement>) {
    console.log("submitted value", city);
    e.preventDefault();
  }

  function handleSuggestionClick(value: string) {
    setCity(value);
    setShowSuggestions(false);
  }
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-200">
        <div id="Nav Bar" className="shadow-sm sticky bg-white">
          <div
            id="NavBar"
            className="flex h-[80px] justify-between w-[70%] px-3 mx-auto items-center"
          >
            <div id="LeftOfNavBar" className="flex gap-4 px-4">
              <p>Weather</p>
              <p></p>
            </div>

            <div
              id="LeftOfNavBar"
              className="tall:flex flex gap-4 px-4 items-center"
            >
              <p>Home</p>
              <p>Current Location</p>
              <form
                action="text"
                className="tall:flex h-10 hidden"
                onSubmit={handleSearchAPI}
              >
                <input
                  className="px-4 border border-gray-300 rounded-l-md focus:outline-none  focus:border-blue-500 "
                  placeholder="Search location.."
                  type="text"
                  value={city}
                  onChange={(e) => searchAPI(e.target.value)}
                />
                <>
                  {suggestion && showSuggestions && suggestion.length > 0 ? (
                    <ul className="flex absolute border  top-16 bg-white rounded-md  min-w-[210px]  flex-col gap-1 py-2 px-2">
                      {suggestion.map((item, i) => (
                        <li
                          key={i}
                          onClick={() => handleSuggestionClick(item)}
                          className="cursor-pointer p-1 rounded   hover:bg-gray-200"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </>
                <button className="px-4 py-[9px] bg-blue-500 text-white rounded-r-md  hover:bg-blue-600 ">
                  <IoIosSearch />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>HI</div>
    </>
  );
}

export default App;
