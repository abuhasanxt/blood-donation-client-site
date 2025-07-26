import React from 'react';

const Food = ({singleFood}) => {
    const {name,title,abd,photo}=singleFood;
    return (
        <div className='p-3'>
      <div className="card bg-base-100 w-full shadow-sm dark:bg-gray-900 dark:text-white">
   
         <figure className=" avatar rounded-full">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl "
          />
        </figure>
     
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <h3>{title}</h3>
          <p>
           {abd}
          </p>
          
        </div>
      </div>
    </div>
    );
};

export default Food;