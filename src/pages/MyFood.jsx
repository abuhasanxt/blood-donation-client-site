import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router";
import { motion } from "motion/react";
import Swal from "sweetalert2";

const MyFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  console.log("🚀 ~ MyFood ~ foods:", foods);

  useEffect(() => {
    axios
      .get("http://localhost:5000/my-food", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setFoods(res.data));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/add-food/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              setFoods((prevFoods) => prevFoods.filter((f) => f._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your Food has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log("🚀 ~ handleDelete ~ error:", error);
          });
      }
    });
  };
  return (
    <div>
      <motion.h2
        animate={{
          color: ["#ff5733", "#33ff33", "#8a33ff"],
          transition: { duration: 2, repeat: Infinity },
        }}
        className="text-center text-3xl font-bold"
      >
        My Foods
      </motion.h2>

      {foods.length === 0 ? (
        <div className="text-center space-y-4">
          <p className="text-gray-500 text-xl">No foods yet.</p>
          <Link to="/add-food" className="btn btn-primary w-sm">
            Add Food
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-3 gap-5">
          {foods.map((food) => (
            <div
              key={food._id}
              className="p-4 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={food.img}
                alt="photo"
                className=" w-full object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-1">
                  <div>
                    <p className="flex items-center gap-1 text-sm text-gray-600">
                      {" "}
                      <FcBusinessman />
                      Owner Photo :
                    </p>
                  </div>
                  <img
                    className="w-12 rounded-full"
                    src={food.ownerImg}
                    alt="owner"
                  />
                </div>
                <h3 className="text-sm text-gray-600">
                  {" "}
                  ➡️Owner Name:{food.ownerName}
                </h3>
                <h3 className="text-sm text-gray-600">
                  📧 Email:{food.ownerEmail}
                </h3>
                <h3 className="text-sm text-gray-600">
                  🍔 Food Name: {food.name}
                </h3>
                <p className="text-sm text-gray-600">
                  📦 Quantity:{" "}
                  <span className="font-medium">{food.quantity}</span>
                </p>
                <p className="text-sm text-gray-600">
                  📍 Location:{" "}
                  <span className="font-medium">{food.location}</span>
                </p>
                <p className="text-sm text-gray-600">
                  ⏳ Expires on:{" "}
                  <span className="font-medium">{food.date}</span>
                </p>
                {food.note && (
                  <p className="text-sm text-gray-700">📝 {food.note}</p>
                )}
                <p>🟢Status: {food.status}</p>
                <div className="flex justify-between">
                  <Link to={`/update/${food._id}`}>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-lg shadow-md transition duration-300">
                      Update
                    </button>
                  </Link>

                  <button
                    onClick={() => handleDelete(food._id)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 cursor-pointer text-white rounded-lg shadow-md transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyFood;

//  <div className="grid grid-cols-1 md:grid-cols-2 p-4 lg:grid-cols-3 gap-5">
//         {foods.map((food) => (
//           <div
//             key={food._id}
//             className="p-4 bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
//           >
//             <img src={food.img} alt="photo" className=" w-full object-cover" />
//             <div className="p-4 space-y-2">
//               <div className="flex items-center gap-1">
//                 <div>
//                   <p className="flex items-center gap-1 text-sm text-gray-600">
//                     {" "}
//                     <FcBusinessman />
//                     Owner Photo :
//                   </p>
//                 </div>
//                 <img
//                   className="w-12 rounded-full"
//                   src={food.ownerImg}
//                   alt="owner"
//                 />
//               </div>
//               <h3 className="text-sm text-gray-600">
//                 {" "}
//                 ➡️Owner Name:{food.ownerName}
//               </h3>
//               <h3 className="text-sm text-gray-600">
//                 📧 Email:{food.ownerEmail}
//               </h3>
//               <h3 className="text-sm text-gray-600">
//                 🍔 Food Name: {food.name}
//               </h3>
//               <p className="text-sm text-gray-600">
//                 📦 Quantity:{" "}
//                 <span className="font-medium">{food.quantity}</span>
//               </p>
//               <p className="text-sm text-gray-600">
//                 📍 Location:{" "}
//                 <span className="font-medium">{food.location}</span>
//               </p>
//               <p className="text-sm text-gray-600">
//                 ⏳ Expires on: <span className="font-medium">{food.date}</span>
//               </p>
//               {food.note && (
//                 <p className="text-sm text-gray-700">📝 {food.note}</p>
//               )}
//               <p>🟢Status: {food.status}</p>
//               <div className="flex justify-between">
//                 <Link to={`/update/${food._id}`}>
//                   <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-lg shadow-md transition duration-300">
//                     Update
//                   </button>
//                 </Link>

//                 <button
//                   onClick={() => handleDelete(food._id)}
//                   className="px-4 py-2 bg-red-600 hover:bg-red-700 cursor-pointer text-white rounded-lg shadow-md transition duration-300"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
