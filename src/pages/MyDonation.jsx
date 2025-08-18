import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const MyDonation = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  useEffect(() => {
    axios
      .get("https://mission-scic12-server-template.vercel.app/my-food", {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => setFoods(res.data));
  }, [user]);

  // Status Filter
  const filteredFoods = foods.filter((food) =>
    statusFilter ? food.status === statusFilter : true
  );

  const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
  const currentFoods = filteredFoods.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
          .delete(
            `https://mission-scic12-server-template.vercel.app/add-food/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              setFoods((prevFoods) => prevFoods.filter((f) => f._id !== id));
              Swal.fire("Deleted!", "Your food has been deleted.", "success");
            }
          });
      }
    });
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
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
        My Donation
      </motion.h2>

      {/* Status Filter Dropdown */}
      <div className="mb-4 flex justify-end">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border px-3 py-1 rounded-md"
        >
          <option value="">-- Filter by Status --</option>
          <option value="available">Available</option>
          <option value="pending">Pending</option>
          <option value="requested">Request</option>
        </select>
      </div>

      {filteredFoods.length === 0 ? (
        <div className="text-center space-y-4">
          <p className="text-gray-500 text-xl">No donation found.</p>
          <Link to="/dashboard/create-request" className="btn btn-primary">
            Add Donation
          </Link>
        </div>
      ) : (
        <>
          {/* ✅ Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-100 text-left text-sm text-gray-600 uppercase">
                  <th className="px-2 py-2">SL</th>
                  <th className="px-2 py-2">Photo</th>
                  <th className="px-2 py-2">Owner</th>
                  <th className="px-2 py-2">Email</th>
                  <th className="px-2 md:hidden lg:block py-2">District</th>
                  <th className="px-2 md:hidden lg:block py-2">Upazila</th>
                  <th className="px-2 py-2">Blood Group</th>
                  <th className="px-2 py-2 md:hidden lg:block">Location</th>
                  <th className="px-2 py-2">Date</th>
                  <th className="px-2 py-2">Time</th>
                  <th className="px-2 md:hidden lg:block py-2">Note</th>
                  <th className="px-2 py-2">Status</th>
                  <th className="px-2 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentFoods.map((food, index) => (
                  <tr
                    key={food._id}
                    className="border-t hover:bg-gray-50 text-sm"
                  >
                    <td className="px-2 py-2">
                      {(currentPage - 1) * itemsPerPage + index + 1}
                    </td>
                    <td className="px-2 py-2">
                      <img
                        src={food.ownerImg}
                        alt="photo"
                        className="w-12 h-12 object-cover rounded-full"
                      />
                    </td>
                    <td className="px-2 py-2">{food.ownerName}</td>
                    <td className="px-2 py-2">{food.ownerEmail}</td>
                    <td className="px-2 md:hidden lg:block py-2">
                      {food.district}
                    </td>
                    <td className="px-2 md:hidden lg:block py-2">
                      {food.upazila}
                    </td>
                    <td className="px-2 py-2">{food.blood_group_name}</td>
                    <td className="px-2 py-2 md:hidden lg:block">
                      {food.location}
                    </td>
                    <td className="px-2 py-2">{food.date}</td>
                    <td className="px-2 py-2">{food.time}</td>
                    <td className="px-2 py-2 md:hidden lg:block">
                      {food.note || "N/A"}
                    </td>
                    <td className="px-2 py-2">
                      <span
                        className={`px-2 py-1 text-xs font-semibold rounded ${
                          food.status === "requested"
                            ? "bg-red-500 text-white"
                            : food.status === "pending"
                            ? "bg-green-500 text-yellow-800"
                            : "bg-red-200 text-red-800"
                        }`}
                      >
                        {food.status}
                      </span>
                    </td>
                    <td className="px-4 py-2 space-x-2">
                      <Link to={`/update/${food._id}`}>
                        <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(food._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ Mobile Card View */}
          <div className="grid grid-cols-1 gap-4 md:hidden">
            {currentFoods.map((food, index) => (
              <div
                key={food._id}
                className="border rounded-lg p-4 shadow bg-white space-y-2"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={food.ownerImg}
                    alt="photo"
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div>
                    <p className="font-bold">{food.ownerName}</p>
                    <p className="text-sm text-gray-500">{food.ownerEmail}</p>
                  </div>
                </div>

                <p>
                  <span className="font-semibold">SL:</span>{" "}
                  {(currentPage - 1) * itemsPerPage + index + 1}
                </p>
                <p>
                  <span className="font-semibold">District:</span>{" "}
                  {food.district}
                </p>
                <p>
                  <span className="font-semibold">Upazila:</span> {food.upazila}
                </p>
                <p>
                  <span className="font-semibold">Blood Group:</span>{" "}
                  {food.blood_group_name}
                </p>
                <p>
                  <span className="font-semibold">Location:</span>{" "}
                  {food.location}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {food.date}
                </p>
                <p>
                  <span className="font-semibold">Time:</span> {food.time}
                </p>
                <p>
                  <span className="font-semibold">Note:</span>{" "}
                  {food.note || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded ${
                      food.status === "requested"
                        ? "bg-red-500 text-white"
                        : food.status === "pending"
                        ? "bg-green-500 text-yellow-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {food.status}
                  </span>
                </p>

                {/* Action */}
                <div className="flex gap-2 pt-2">
                  <Link to={`/update/${food._id}`}>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-xs">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(food._id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-4 space-x-2">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 rounded ${
                  currentPage === num
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {num}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MyDonation;
