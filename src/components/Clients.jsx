import { clientTestimonial } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="my-10 bg-[#134672] max-w-5xl p-10 rounded-lg mx-auto">
      <div className="grid grid-cols-4">
        {clientTestimonial.map((item) => {
          return (
            <Image
              key={item.id}
              src={item.clientLogo}
              width={150}
              height={120}
              alt="logo"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Clients;
