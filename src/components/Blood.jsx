import React from "react";

const Blood = ({ singleBlood }) => {
  const { title, abd, photo } = singleBlood;

  return (
    <div className="p-3">
      <div className="bg-gradient-to-br from-red-100 via-white to-red-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
        {/* Image */}
        <figure className="flex justify-center pt-4">
          <img
            src={photo}
            alt={title}
            className="w-32 h-32 object-cover rounded-full border-4 border-red-500 shadow-sm transition-transform duration-300 hover:scale-110"
          />
        </figure>

        {/* Content */}
        <div className="p-5 text-center space-y-2">
          <h3 className="text-xl font-semibold text-red-700">{title}</h3>

          <p className="text-gray-700 dark:text-gray-300 text-sm">{abd}</p>
        </div>
      </div>
    </div>
  );
};

export default Blood;
