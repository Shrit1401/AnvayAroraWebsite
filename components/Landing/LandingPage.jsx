import React from "react";

const LandingPage = () => {
  return (
    <div className="pt-36">
      <div className="flex justify-center flex-col  sm:flex-row gap-0 items-center sm:items-start">
        <div
          className="
        bg-[#d8fee4]
        h-[75vh]
        relative
        w-[90vw]
        sm:w-[60vw]
        rounded-[20px]
        text-black
             
        "
        >
          <div className="flex ">
            <p className="mt-5 ml-5">
              <h1 className="text-2xl">Hello</h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi, officia quas est molestiae at doloribus. Magnam totam dolor optio sed, temporibus eligendi ad blanditiis doloribus, alias atque, vel quo.lor optio sed, temporibus eligendi ad blanditiis doloribus, alias atque, vel quo.
            </p>

            <img src="https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            className="
            
            object-cover
            h-[75vh]
            w-[50vw]
            sm:w-[30vw]
            rounded-[20px]
            text-black
            sm:ml-14
            ml-0

            "
            alt="" />
          </div>
          <div
            className="
        bg-[#dcd8fe]
        h-[20vh]
        absolute
        bottom-0
        outline-black
        outline outline-[20px]        
        sm:w-[30vw]
        w-[60vw]
        rounded-[10px]
        text-black
             
        "
          >

<p className="mt-5 ml-5">
              <h1 className="text-5xl mb-2">Anvay Arora</h1>
              <p  className="text-2xl mb-2">CEO of Syler</p>
            </p>  
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 items-start">
          <div
            className="
        bg-[url('https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')]
        h-[50vh]
        bg-cover
        w-[30vw]
        sm:ml-14
        ml-0
        rounded-[20px]
        text-black
        "
          >
            {/* background image */}

            
          </div>

          <div
            className="
            bg-white
     bg-cover
        h-[20vh]
        w-[30vw]
        sm:ml-14
        ml-0
        rounded-[20px]
        text-black
             
        "
          >
           <div className="flex flex-col text-3xl h-[20vh] justify-around">
           <p className="ml-5"> Desigining Brands</p>
          <div className="
          bg-black
          h-[1px]
          rounded-[20px]
          text-black
          
          "/>
                      <p className="ml-5"> Desigining Brands</p>
           </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
