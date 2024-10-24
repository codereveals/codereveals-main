import Highlight from "@/components/Highlight";
import Image from "next/image";
import React from "react";

const ProductsPage = () => {
  return (
    <>
      <section className="container">
        <div className="w-full">
          <h3 className="text-center">
            Home / <span className="text-[--secondaryColor]">Products</span>
          </h3>
          <h2 className="text-3xl lg:text-5xl font-bold text-center">
            Our Recent Works
          </h2>
        </div>
        <div className="w-full px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            <div>
              <Image
                width={800}
                height={800}
                alt="Portfolio"
                src="/assets/images/studio.jpg"
                className="rounded-lg transition-all hover:scale-105 hover:opacity-60"
              />
            </div>
            <div>
              <Image
                width={800}
                height={800}
                alt="Portfolio"
                src="/assets/images/store.png"
                className="rounded-lg transition-all hover:scale-105 hover:opacity-60"
              />
            </div>
            <div>
              <Image
                width={800}
                height={800}
                alt="Portfolio"
                src="/assets/images/vibyvibes.png"
                className="rounded-lg transition-all hover:scale-105 hover:opacity-60"
              />
            </div>
            <div>
              <Image
                width={800}
                height={800}
                alt="Portfolio"
                src="/assets/images/moviewale.jpg"
                className="rounded-lg transition-all hover:scale-105 hover:opacity-60"
              />
            </div>
          </div>
        </div>

        <div className="my-10 lg:py-14">
          <Highlight />
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
