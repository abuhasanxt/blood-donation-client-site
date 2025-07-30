import axios from "axios";

const useAxiosPublic= ()=>{
    const instance= axios.create({
        baseURL:"https://mission-scic12-server-template.vercel.app"
    });
    return instance;
}

export default useAxiosPublic;