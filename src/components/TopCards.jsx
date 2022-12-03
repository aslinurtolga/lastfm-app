import React from "react";

const TopCards = ({ item, name }) => {
  console.log(item);
  return (
    <div className="relative md:left-48 ">
      <a
        href={item?.url}
        className="flex md:w-1/3 sm:w-1/2 h-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-500 to-indigo-200 rounded-md "
      >
        <img
          className="object-cover md:mr-6 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={item.image[3]["#text"]}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {item?.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 group-hover:text-white">
            {name}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item?.playcount} Play
          </p>
          {item?.listeners && (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item?.listeners} Listener
            </p>
          )}
        </div>
      </a>
    </div>
  );
};

export default TopCards;
