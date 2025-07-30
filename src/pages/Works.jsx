import React, { Suspense } from 'react';
import Work from './Work';

const Works = ({ data }) => {
  return (
    <div className="bg-gray-300 py-5 my-5 dark:bg-gray-900 dark:text-white">
      <h2 className="text-2xl font-bold text-center my-2">How It Works</h2>

      <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {data.map((singleWork) => (
            <Work key={singleWork.id} singleWork={singleWork} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Works;
