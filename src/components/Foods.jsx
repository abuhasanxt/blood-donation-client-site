import React, { Suspense } from 'react';
import Food from './Food';

const Foods = ({data}) => {
    return (
        <div>
      <h2 className="text-2xl font-bold text-center my-5">Foods</h2>

      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((singleFood) => (
            <Food
              key={singleFood.id}
              singleFood={singleFood}
            ></Food>
          ))}
        </div>
      </Suspense>
    </div>
    );
};

export default Foods;