import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAxiosSecure = () => {
  const { user } = useContext(AuthContext);
  // console.log("🚀 ~ useAxiosSecure ~ user:", user.accessToken);
  const instance = axios.create({
    baseURL: "https://mission-scic12-server-template.vercel.app",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
  return instance;
};

export default useAxiosSecure;
