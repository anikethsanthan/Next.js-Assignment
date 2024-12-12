"use client";
import { useState } from "react";
import Image from "next/image";

const categories = [
  { id: 1, title: "STRENGTH", image: "/Photo1.jpg" },
  { id: 2, title: "MOBILITY", image: "/Phto2.jpeg" },
  { id: 3, title: "DRILLS", image: "/Photo3.jpg" },
];

 function Main() {
  const [activeId, setActiveId] = useState(2);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <div className="flex flex-wrap  justify-center border-black border-2 rounded-lg h-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
              activeId === category.id ? "w-80" : "w-52"
            }`}
            onClick={() => setActiveId(category.id)}
          >
            <div
              className="overflow-hidden  bg-pink-200 shadow-lg cursor-pointer"
              style={{ height: "300px" }}
            >
              <Image
                src={category.image}
                alt={`${category.title} Image`}
                width={288}
                height={300}
                className="object-cover w-full h-full"
              />
              <h3 className=" relative top-[-302px] ml-[18px] mt-4 text-xl font-semibold text-white">{category.title}</h3>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}


export default Main;




