import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import MyHotel from "./pages/MyHotel";
import AddHotel from "./pages/AddHotel";

function App() {
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
        ></Route>
        <Route
          path="/add-hotel"
          element={
            <Layout>
              <AddHotel />
            </Layout>
          }
        ></Route>
        <Route
          path="/my-hotel"
          element={
            <Layout>
              <MyHotel />
            </Layout>
          }
        ></Route>
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
