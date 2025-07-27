import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Utility/axiosSecure";
import Swal from "sweetalert2";

const AdminDashboard = () => {
  const [donors, setDonors] = useState([]);
  console.log("🚀 ~ AdminDashboard ~ donors:", donors);
  const axiosSecure = useAxiosSecure();

  const handleRoleChange = (e, email) => {
    const role = e.target.value;
    axiosSecure
      .patch("/update-role", {
        role,
        email,
      })
      .then(({ data }) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Update Donor Successfully!",
            icon: "success",
            draggable: true,
          });

          axiosSecure.get("/get-donors").then(({ data }) => setDonors(data));
          console.log(data);
        }
      });
  };

  useEffect(() => {
    axiosSecure.get("/get-donors").then(({ data }) => setDonors(data));
  }, []);
  return (
    <div>
      Admin Dashboard
      <div className="p-6">
        {donors.map((donor) => (
          <div
            key={donor._id}
            className="bg-white w-sm shadow-md rounded-xl p-5 mb-4 border border-gray-200"
          >
            <div className="text-lg font-semibold text-gray-800">
              Name: <span className="text-blue-600">{donor.email}</span>
            </div>
            <div className="mt-1 mb-3 text-sm">
              Current Role:{" "}
              <span
                className={`font-medium ${
                  donor.role === "admin"
                    ? "text-green-600"
                    : donor.role === "moderator"
                    ? "text-purple-600"
                    : "text-gray-600"
                }`}
              >
                {donor.role.charAt(0).toUpperCase() + donor.role.slice(1)}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Change Role</span>
              <select
                defaultValue={donor.role}
                onChange={(e) => handleRoleChange(e, donor.email)}
                name="role"
                className="border border-gray-300 rounded-md px-3 py-1 text-sm"
              >
                <option value="admin">Admin</option>
                <option value="donor">Donor</option>
                <option value="volunteer">Volunteer</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
