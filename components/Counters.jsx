import React from "react";

const Counters = () => {
  return (
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto my-6">
      <div class="flex flex-col">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-4 gap-4">
          <div class="flex items-start p-4 rounded-xl shadow-lg bg-white">
            <div class="flex items-center justify-center bg-blue-50 h-12 w-12 rounded-full ">
              <img src="/family.svg" alt="" />
            </div>

            <div class="ml-4">
              <h2 class="text-3xl font-bold">10,000+</h2>
              <p class="mt-2 text-sm text-gray-500">Registered Users</p>
            </div>
          </div>

          <div class="flex items-start p-4 rounded-xl shadow-lg bg-white">
            <div class="flex items-center justify-center bg-orange-50 h-12 w-12 rounded-full border border-orange-100">
              <img src="/deliveryBoy.svg" alt="" />
            </div>

            <div class="ml-4">
              <h2 class="text-3xl font-bold">50,000+ </h2>
              <p class="mt-2 text-sm text-gray-500">Orders Delivered</p>
            </div>
          </div>
          <div class="flex items-start p-4 rounded-xl shadow-lg bg-white">
            <div class="flex items-center justify-center bg-red-50 h-12 w-12 rounded-full border border-red-100">
              <img src="/location.svg" alt="" />
            </div>

            <div class="ml-4">
              <h2 class="text-3xl font-bold">500+</h2>
              <p class="mt-2 text-sm text-gray-500">
                Locations in Maharashstra
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
