import React from "react";
import Button from "./Button";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="my-14 md:my-20">
      <div className="max-w-4xl bg-[--doplyColor] relative rounded-xl py-10 mx-auto overflow-hidden hover:bg-[--secondaryColor] transition-all">
        <h2 className="my-6 text-[--primaryColor] text-[34px] font-bold">
          Have a Project? <br /> Let’s Talk and Grow Your Business
        </h2>

        <div>
          <Button title="Get Started!" bgColor="#ffffff" icon="#2cee91" />
        </div>

        <Image
          src="/assets/images/half-ellipse.svg"
          width={160}
          height={160}
          alt="Ellipse"
          className="absolute -left-12 -bottom-12"
        />
      </div>
    </div>
  );
};

export default CallToAction;
