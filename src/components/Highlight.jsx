import Button from "./Button";

const Highlight = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full md:w-[59%] rounded-lg bg-[--darkBlueColor] p-8">
          <div className="p-0 lg:p-3">
            <p className="text-[--secondaryColor] font-semibold">
              Got a project in Mind?
            </p>
            <h2 className="text-[40px] md:text-[80px] font-bold leading-[1.1] py-3">
              Let’s Discuss <br /> The details
            </h2>
            <p className="text-sm mb-8">
              So we don`t sacrifice quality and can provide full attention and
              best results to our clients.
            </p>
            <Button
              title="Free Consultantion"
              bgColor="#2CEE91"
              hoverText="#343651"
              icon="#fff"
            />
          </div>
        </div>
        <div className="w-full md:w-[40%] rounded-lg bg-[--doplyColor] p-8">
          <div>
            <div className="w-[120px] h-[120px] rounded-full bg-[--primaryColor] "></div>
            <h2 className="py-4 text-[--primaryColor] font-bold text-lg">
              Let`s Grow on a free call
            </h2>
            <p className="py-2 text-[--primaryColor]">
              We understand your business deserves the best, so you`re cautious
              about your choice. We would be too.
            </p>
            <div className="mt-10">
              <Button
                title="Schedule A Call"
                bgColor="#fff"
                hoverText="#343651"
                icon="#2CEE91"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Highlight;
