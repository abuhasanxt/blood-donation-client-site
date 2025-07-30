import { useContext } from "react";
import Banner from "../components/Banner";
import { AuthContext } from "../providers/AuthProvider";
import FeatureFoods from "./FeatureFoods";
import work from "../../public/work.json"
import blood from "../../public/bloodConnect.json"

import Bloods from "../components/Bloods";
import Works from "./Works";


const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && (
        <p className="text-center text-xl font-bold py-2  ">
          Welcome Mr. {user?.displayName} ❤️‍🔥❤️‍🔥. Now You Can Watch All the
          Recipies🍉🍉
        </p>
      )}
      <Banner></Banner>
      <FeatureFoods></FeatureFoods>
      <Bloods data={blood}></Bloods>
    <Works data={work}></Works>
    </>
  );
};

export default Home;
