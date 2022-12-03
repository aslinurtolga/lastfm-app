import React from "react";

const TopCards = ({ item, name }) => {
  console.log(item);
  return (
    <div className="flex lg:w-3/4 md:w-4/5 sm:w-full xs:w-full m-5 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-500 to-indigo-200 rounded-md ">
      <a href={item?.url} className="flex">
        <img
          className="object-cover md:mr-6 w-full rounded-t-lg lg:h-48 md:h-36 sm:h-24 lg:w-48 md:w-36 sm:w-24 md:rounded-none md:rounded-l-lg"
          src={item.image[3]["#text"]}
          alt=""
        />
        <div className="flex flex-col justify-between leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item?.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-neutral-900 group-hover:text-white">
            {name}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-900">
            {item?.playcount} Play
          </p>
          {item?.listeners && (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-900">
              {item?.listeners} Listener
            </p>
          )}
        </div>
      </a>
    </div>
  );
};

export default TopCards;
