import React from "react";

const Work = ({ singleWork }) => {
  const { title, description, photo } = singleWork;
  return (
    <div className="p-4 bg-gradient-to-br from-red-100 via-white to-red-200 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-md space-y-3 text-center">
      <h2 className="text-xl font-bold text-red-700 flex items-center justify-center gap-2">
        {title}
      </h2>

      <h2 className="text-gray-700 dark:text-gray-300 flex items-center justify-center gap-2 text-sm">
        {description}
      </h2>

      <img
        src={photo}
        alt={title}
        className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-red-500 shadow-sm hover:scale-105 transition duration-300"
      />
    </div>
  );
};

export default Work;
