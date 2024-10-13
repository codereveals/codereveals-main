import CallToAction from "@/components/CallToAction";
import Card from "@/components/Card";
import Clients from "@/components/Clients";
import ClientTestimonial from "@/components/ClientTestimonial";
import HeroBanner from "@/components/HeroBanner";
import Highlight from "@/components/Highlight";
import Innovative from "@/components/Innovative";
import Silder from "@/components/Silder";
import { companyData, portfolioSlider, clientTestimonial } from "@/utils/data"


export default function Home() {
  console.log(companyData)
  console.log(portfolioSlider)

  return (
    <main className="">
      <HeroBanner />
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="text-center">
            <p className="text-sm text-[--secondaryColor] 2xl:text-[28px] font-medium">Our Value</p>
            <h2 className="font-bold text-[36px] leading-2 my-8">Transforming Information <br /> into Actionable Insights</h2>

            <div className="grid grid-cols-3 gap-4">

              {companyData.map((card, index) => (
                <Card key={index} props={card} />
              ))}
            </div>
          </div>


        </div>

      </section>
      <section className="">
        <div className="container text-center">
          <CallToAction />
        </div>
      </section>
      <section>
        <div className="container">
          <Innovative />

        </div>
      </section>
      <section className="mt-14">
        <div className="container">
          <div className="text-center py-10">
            <p className="text-sm text-[--secondaryColor] text-2 2xl:text-[20px] font-medium">Portfolio</p>
            <h2 className="font-bold text-[36px] leading-2 mt-2">Recent Product</h2>
          </div>
          <div className="py-9">
            <Silder />
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container">
          <Highlight />
        </div>
      </section>
      <section className="py-10">
        <div className="container">
          <div className="text-center py-10">
            <p className="text-sm text-[--secondaryColor] text-2 2xl:text-[20px] font-medium">Client Satisfactions</p>
            <h2 className="font-bold text-[36px] leading-2 mt-2">Testimonials</h2>
          </div>
          <ClientTestimonial />
        </div>
      </section>

      <section className="my-10">
        <div className="container">

          <Clients />
        </div>
      </section>

    </main>
  );
}
