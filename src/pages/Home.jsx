import { useContext } from "react";
import Banner from "../components/Banner";
import { AuthContext } from "../providers/AuthProvider";
import FeatureFoods from "./FeatureFoods";
import question from "../../public/question.json"
import food from "../../public/food.json"
import Questions from "./Questions";
import Foods from "../components/Foods";

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
      <Foods data={food}></Foods>
      <Questions data={question}></Questions>
    </>
  );
};

export default Home;
