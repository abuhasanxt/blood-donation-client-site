// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { Link, useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import districts from "../../public/district.json";
// import upazilas from "../../public/upazila.json";

// const AddDonation = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);
//   // console.log("🚀 ~ AddDonation ~ user:", user)

//   const [formData, setFormData] = useState({
//     name: "",
//     img: "",
//     quantity: "",
//     location: "",
//     date: "",
//     note: "",
//     upazila:"",
//     district:""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       ...formData,
//       ownerEmail: user.email,
//       ownerName: user.displayName,
//       ownerImg: user.photoURL,
//       status: "available",
//     };
//     console.log("Form Data Submitted:");

//     axios.post("http://localhost:5000/add-food", data).then((res) => {
//       if (res.data.insertedId) {
//         console.log("🚀 ~ handleSubmit ~ res:", res.data);
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Food added successfully",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       }
//       navigate("/my-food");
//     });
//   };

//   return (
//     <div className="mt-5">
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6"
//       >
//         <h2 className="text-2xl font-semibold text-center">Add a Foods </h2>

//         <div>
//           <span className="text-xl font-medium">Districts</span>
//           <select
//           onChange={handleChange}
//           name="district"
//           value={formData.district}
//             className="border w-full border-gray-300 rounded-md px-3 py-1 text-xl"
//             id=""
//           >
//             {districts.map((district) => (
//               <option key={district.id} value={district.id}>
//                 {district.name}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div>
//           <span className="text-xl font-medium">Upazilas</span>
//           <select
//           name="upazila"
//           onChange={handleChange}
//              value={formData.upazila}
//             className="border w-full border-gray-300 rounded-md px-3 py-1 text-xl"
//             id=""
//           >
//             {upazilas.map((upazila) => (
//               <option key={upazila.id} value={upazila.id}>
//                 {upazila.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Food Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Food Image (URL)
//           </label>
//           <input
//             type="url"
//             name="img"
//             value={formData.img}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Food Quantity
//           </label>
//           <input
//             type="number"
//             name="quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Pickup Location
//           </label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Expired Date
//           </label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Additional Notes
//           </label>
//           <textarea
//             name="note"
//             rows="4"
//             value={formData.note}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           ></textarea>
//         </div>

//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-green-500 w-full cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddDonation;

// import axios from "axios";
// import React, { useContext, useState } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { useNavigate } from "react-router-dom"; // 🔄 তুমি আগে useNavigate import করছিলে ভুল জায়গা থেকে
// import Swal from "sweetalert2";
// import districts from "../../public/district.json";
// import upazilas from "../../public/upazila.json";

// const AddDonation = () => {
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     name: "",
//     img: "",
//     quantity: "",
//     location: "",
//     date: "",
//     note: "",
//     upazila: "",
//     district: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // ✅ Filter upazilas based on selected district
//   const filteredUpazilas = upazilas.filter(
//     (upazila) => upazila.district_id === formData.district
//   );

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = {
//       ...formData,
//       ownerEmail: user.email,
//       ownerName: user.displayName,
//       ownerImg: user.photoURL,
//       status: "available",
//     };

//     axios.post("http://localhost:5000/add-food", data).then((res) => {
//       if (res.data.insertedId) {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Food added successfully",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         navigate("/my-food");
//       }
//     });
//   };

//   return (
//     <div className="mt-5">
//       <form
//         onSubmit={handleSubmit}
//         className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6"
//       >
//         <h2 className="text-2xl font-semibold text-center">Add a Food</h2>

//         {/* ✅ District */}
//         <div>
//           <label className="text-xl font-medium">Districts</label>
//           <select
//             name="district"
//             value={formData.district}
//             onChange={handleChange}
//             className="border w-full border-gray-300 rounded-md px-3 py-1 text-xl"
//           >
//             <option value="" disabled>
//               -- Select District --
//             </option>
//             <option value="">Select District</option>
//             {districts.map((district) => (
//               <option key={district.id} value={district.id}>
//                 {district.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* ✅ Filtered Upazilas */}
//         <div>
//           <label className="text-xl font-medium">Upazilas</label>
//           <select
//             name="upazila"
//             value={formData.upazila}
//             onChange={handleChange}
//             className="border w-full border-gray-300 rounded-md px-3 py-1 text-xl"
//           >
//             <option value="">Select Upazila</option>
//             {filteredUpazilas.map((upazila) => (
//               <option key={upazila.id} value={upazila.id}>
//                 {upazila.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* ✅ Food Name */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Food Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         {/* ✅ Image URL */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Food Image (URL)
//           </label>
//           <input
//             type="url"
//             name="img"
//             value={formData.img}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         {/* ✅ Quantity */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Food Quantity
//           </label>
//           <input
//             type="number"
//             name="quantity"
//             value={formData.quantity}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         {/* ✅ Location */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Pickup Location
//           </label>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         {/* ✅ Expired Date */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Expired Date
//           </label>
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           />
//         </div>

//         {/* ✅ Note */}
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-1">
//             Additional Notes
//           </label>
//           <textarea
//             name="note"
//             rows="4"
//             value={formData.note}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
//           ></textarea>
//         </div>

//         {/* ✅ Submit Button */}
//         <div className="text-center">
//           <button
//             type="submit"
//             className="bg-green-500 w-full text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddDonation;

import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import districts from "../../public/district.json";
import upazilas from "../../public/upazila.json";
import bloodGroup from "../../public/bloodGroup.json"

const AddDonation = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    img: "",
    time: "",
    location: "",
    date: "",
    note: "",
    district_id: "",
    upazila_id: "",
    blood_group:""
  });

  // Filtered upazilas based on selected district_id
  const filteredUpazilas = upazilas.filter(
    (u) => u.district_id === formData.district_id
  );

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedDistrict = districts.find(
      (d) => d.id === formData.district_id
    );
    const selectedUpazila = upazilas.find((u) => u.id === formData.upazila_id);

    const selectedBloodGroup = bloodGroup.find(
  (group) => group.id === formData.blood_group
);
    const data = {
      ...formData,
        blood_group_name: selectedBloodGroup?.group || "",
      district: selectedDistrict?.name || "",
      upazila: selectedUpazila?.name || "",
      ownerEmail: user.email,
      ownerName: user.displayName,
      ownerImg: user.photoURL,
      status: "available",
    };

    axios.post("http://localhost:5000/add-food", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Food added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/my-donation");
      }
    });
  };

  return (
    <div className="mt-5">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">Add a Food</h2>

        {/* District */}
        <div>
          <span className="text-xl font-medium">District</span>
          <select
            name="district_id"
            value={formData.district_id}
            onChange={(e) => {
              handleChange(e);
              setFormData((prev) => ({
                ...prev,
                upazila_id: "", // reset upazila when district changes
              }));
            }}
            className="border w-full border-gray-300 rounded-md px-3 py-1 text-xl"
            required
          >
            <option value="" disabled>
              -- Select District --
            </option>
            {districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
        </div>

        {/* Upazila */}
        <div>
          <span className="text-xl font-medium">Upazila</span>
          <select
            name="upazila_id"
            value={formData.upazila_id}
            onChange={handleChange}
            className="border w-full border-gray-300 rounded-md px-3 py-1 text-xl"
            required
          >
            <option value="" disabled>
              -- Select Upazila --
            </option>
            {filteredUpazilas.map((upazila) => (
              <option key={upazila.id} value={upazila.id}>
                {upazila.name}
              </option>
            ))}
          </select>
        </div>

        {/* blood group */}
          <div>
          <span className="text-xl font-medium">Blood Group</span>
          <select
            name="blood_group"
            value={formData.blood_group}
            onChange={handleChange}
            className="border w-full border-gray-300 rounded-md px-3 py-1 text-xl"
            required
          >
            <option value="" disabled>
              -- Select Blood Group --
            </option>
            { bloodGroup.map((group) => (
              <option key={group.id} value={group.id}>
                {group.group}
              </option>
            ))}
          </select>
        </div>

     

        <div>
         
         <h2 className="text-xl font-medium">Time</h2>
          <input
          type="time"
          name="time"
          placeholder="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full border text-xl border-gray-300 rounded-lg px-4 py-2"
          required
        />
        </div>

        <div> 
          <h2 className="text-xl font-medium">Location</h2>
          <input
          type="text"
          name="location"
          placeholder="Hospital Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border text-xl border-gray-300 rounded-lg px-4 py-2"
          required
        />
        </div>

        <div>
          <h2 className="text-xl font-medium"> Date</h2>
          <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        </div>

        <textarea
          name="note"
          placeholder="Additional Notes"
          rows="4"
          value={formData.note}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        ></textarea>

        <button
          type="submit"
          className="bg-green-500 w-full text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddDonation;
