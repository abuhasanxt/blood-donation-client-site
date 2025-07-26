import { useRouteError } from "react-router";

import errorImg from "../assets/error.jpg";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="max-w-md mx-auto mt-20">
      <img src={errorImg} alt="" />
    </div>
  );
};

export default Error;
