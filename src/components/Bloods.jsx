import React, { Suspense } from "react";
import Blood from "./Blood";

const Bloods = ({ data }) => {
  return (
    <div>
      <h2 className="text-5xl font-bold text-center text-red-500 my-5">
        Why BloodConnect Stands Out
      </h2>

      <Suspense
        fallback={<span className="loading loading-bars loading-xl"></span>}
      >
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((singleBlood) => (
            <Blood key={singleBlood.id} singleBlood={singleBlood}></Blood>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Bloods;
