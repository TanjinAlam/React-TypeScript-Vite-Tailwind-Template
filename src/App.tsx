import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import MyHotels from "./pages/MyHotels";
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./context/AppContext";
import EditHotel from "./pages/EditHotel";

function App() {
  const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>Home Page</p>
            </Layout>
          }
        ></Route>
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search Page</p>
            </Layout>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Layout>
              <Register />
            </Layout>
          }
        />
        {isLoggedIn && (
          <>
            <Route
              path="/add-hotel"
              element={
                <Layout>
                  <AddHotel />
                </Layout>
              }
            />
            <Route
              path="/my-hotel"
              element={
                <Layout>
                  <MyHotels />
                </Layout>
              }
            />
            <Route
              path="/edit-hotel/:hotelId"
              element={
                <Layout>
                  <EditHotel />
                </Layout>
              }
            />
          </>
        )}

        <Route
          path="/sign-in"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
