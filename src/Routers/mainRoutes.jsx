import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddFoods from "../pages/AddDonation";
import AvailableBloods from "../pages/AvailableBloods";
import BloodDetails from "../pages/BloodDetails";
import axios from "axios";
import MyFood from "../pages/MyDonation";
import RequestedFoods from "../pages/MyRequest";
import Update from "../pages/Update";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import MyDonation from "../pages/MyDonation";
import MyRequest from "../pages/MyRequest";
import AllUser from "../pages/AllUser";
import MyProfile from "../pages/MyProfile";
import AllRequest from "../components/AllRequest";
import Funding from "../components/Funding";

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
        Component: AvailableBloods,
      },
      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(`https://mission-scic12-server-template.vercel.app/add-food/${params.id}`),
        Component: Update,
      },
      // {
      //   path: "/request",
      //   element: (
      //     <PrivateRoute>
      //       <RequestedFoods></RequestedFoods>
      //     </PrivateRoute>
      //   ),
      // },
      // {
      //   path: "/my-food",
      //   element: (
      //     <PrivateRoute>
      //       <MyFood></MyFood>
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/details/:foodId",
        loader: async ({ params }) => {
          const { data } = await axios.get(
            `https://mission-scic12-server-template.vercel.app/details/${params.foodId}`
          );
          return data;
        },
        element: (
          <PrivateRoute>
            <BloodDetails></BloodDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <Dashboard></Dashboard>
              </PrivateRoute>
            ),
          },
          {
            path:'/dashboard/all-request',
            Component:AllRequest
          },
          {
            path:'/dashboard/funding',
            Component:Funding
          },
          {
            path: "/dashboard/create-request",
            element: <AddFoods></AddFoods>,
          },
          {
            path: "/dashboard/all-users",
            element: <AllUser></AllUser>,
          },
          {
            path: "/dashboard/my-profile",
            element: <MyProfile></MyProfile>,
          },
          {
            path: "/dashboard/my-requests",
            element: <MyRequest></MyRequest>,
          },
          {
            path: "/dashboard/my-donation",
            element: <MyDonation></MyDonation>,
          },
        ],
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
