import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddFoods from "../pages/AddFoods";
import AvailableFoods from "../pages/AvailableFoods";
import FoodDetails from "../pages/FoodDetails";
import axios from "axios";
import MyFood from "../pages/MyFood";
import RequestedFoods from "../pages/RequestedFoods";
import Update from "../pages/Update";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/available-food",
        Component: AvailableFoods,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFoods></AddFoods>
          </PrivateRoute>
        ),
      },
       {
        path:'update/:id',
        loader:({params})=>fetch(`http://localhost:5000/add-food/${params.id}`),
        Component:Update
      },
      {
        path: "/request",
        element: (
          <PrivateRoute>
            <RequestedFoods></RequestedFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-food",
        element: (
          <PrivateRoute>
            <MyFood></MyFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:foodId",
        loader: async ({ params }) => {
          const { data } = await axios.get(
            `http://localhost:5000/details/${params.foodId}`
          );
          return data;
        },
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
      {},
    ],
  },
]);

export default mainRoutes;
