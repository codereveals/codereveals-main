import Button from "@/components/Button";
import Image from "next/image";

const GlobalNotFound = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-[--primaryColor] dark:bg-gray-900 mt-16">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 relative">
          <Image
            src="/assets/images/circle-img.svg"
            width={300}
            height={300}
            alt="Circle Image"
            className="absolute bottom-0 left-0"
          />
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-[--secondaryColor] md:text-4xl dark:text-white">
              Something`s missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Sorry, we can not find that page. <br /> You will find lots to
              explore on the home page.{" "}
            </p>
            <Button
              title="Go back to Home"
              bgColor="#2CEE91"
              hoverText="#343651"
              icon="#fff"
              btnLink="/"
            />
          </div>
          <Image
            src="/assets/images/circle-img.svg"
            width={300}
            height={300}
            alt="Circle Image"
            className="absolute top-0 right-0"
          />
        </div>
      </section>
    </div>
  );
};

export default GlobalNotFound;
