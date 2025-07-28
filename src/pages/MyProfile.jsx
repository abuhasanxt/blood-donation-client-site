import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

import useAxiosSecure from "../Utility/axiosSecure";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setPhoto(user.photoURL || "");
    }
  }, [user]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!user?.email) {
      return Swal.fire("Error", "User email not found", "error");
    }

    const updatedProfile = {
      email: user.email,
      name: name,
      photoUrl: photo,
    };

    try {
      const res = await axiosSecure.patch("/update-profile", updatedProfile);

      if (res.data.modifiedCount > 0) {
        Swal.fire("Updated!", "Your profile has been updated.", "success");
        setIsEditing(false);
      } else {
        Swal.fire("No Changes", "Nothing was updated.", "info");
      }
    } catch (error) {
      console.error("Update failed", error);
      Swal.fire("Error!", "Something went wrong.", "error");
    }
  };

  return (
    <div>
      <motion.h2
        animate={{
          color: ["#ff5733", "#33ff33", "#8a33ff"],
          transition: { duration: 2, repeat: Infinity },
        }}
        className="text-center text-3xl font-bold mb-6"
      >
        My Profile
      </motion.h2>

      <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg text-center space-y-4">
        <img
          src={photo || "https://i.ibb.co/RpYdqGy/default-avatar.png"}
          alt="User"
          className="w-32 h-32 mx-auto rounded-full border-4 border-red-300 object-cover"
        />
        <h2 className="text-2xl font-bold text-red-600">
          {name || "No Name Found"}
        </h2>
        <h3 className="text-gray-600">{user?.email}</h3>

        <button
          onClick={() => setIsEditing(true)}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Edit Profile
        </button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <form
            onSubmit={handleUpdate}
            className="bg-white p-6 rounded-xl shadow-xl space-y-4 max-w-sm w-full"
          >
            <h3 className="text-xl font-semibold text-center text-red-600">
              Edit Profile
            </h3>

            <div>
              <label className="block text-left mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-left mb-1">Photo URL</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
