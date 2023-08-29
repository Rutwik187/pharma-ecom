import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Category = ({ category: { image, categoryName, slug } }) => {
  return (
    <div>
      <Link href={`/category/${slug.current}`}>
        <div className="block group w-28 md:w-40 cursor-pointer m-2 ">
          <img
            src={urlFor(image).url()}
            alt=""
            className=" w-40 h-32 object-contain transition duration-500 group-hover:scale-105 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-lg p-3 rounded-lg"
          />

          <div className="mt-3">
            <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4 text-center">
              {categoryName}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Category;
