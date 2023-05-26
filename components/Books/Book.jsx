import React from "react";

const Book = () => {
  return (
    <div className="h-[100vh] relative mt-24">
      <div className="flex justify-around">
        <div className="font-light text-center text-black">
          <div className="background-circle" />
          <h1 className="text-8xl ">
            Free Guide for <br /> Publishing
          </h1>

          <p className="w-[500px] text-justify pt-40 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quod voluptates voluptatem quos
            voluptate quas quibusdam, quia, quod voluptates voluptatem quos
            voluptate quas
          </p>
        </div>

        <div className="border-2 border-dashed border-black rounded-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* a rectangle with absoulute and behind the picture in their and gradient */}

      <div className="absolute left-0 w-full bottom-0 right-[10px] h-[100vh] -z-10 mb-10 bg-white -mt-40 "></div>
    </div>
  );
};

export default Book;
