import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 lg:pt-14 lg:pb-10 border-b-[15px] border-[--secondaryColor] relative overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-4 gap-10 py-7">
          <div className=" flex gap-3 flex-col">
            <Image
              src="/assets/images/code-reveals-logo.svg"
              width={200}
              height={100}
              alt="Logo"
            />

            <p className="text-md text-white py-5">
              Code Reveals, we cater to learners at every stage, providing
              meticulously crafted content that seamlessly guides you from
              foundational principles to advanced techniques.
            </p>
          </div>
          <div className="flex gap-3 flex-col px-7">
            <h2 className="mb-4 font-semibold uppercase text-xl">Products</h2>

            <ul className="flex gap-2 flex-col">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  UI/UX Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  Mobile App Development
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 flex-col px-7">
            <h2 className="mb-4 font-semibold uppercase text-xl">Company</h2>

            <ul className="flex gap-2 flex-col">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  Refund
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-3 flex-col px-7">
            <h2 className="mb-4 font-semibold uppercase text-xl">
              Social Media
            </h2>

            <ul className="flex gap-2 flex-col">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-sm text-white hover:text-[--secondaryColor]"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-lg p-8 bg-[--darkBlueColor]">
          <p className="text-sm text-center">
            Copyright © 2024 {" "}
            <strong className="text-[--secondaryColor]">codereveals.com</strong>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
