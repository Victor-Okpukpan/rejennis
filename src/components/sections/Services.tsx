import Image from "next/image";
import Intro from "../Intro";
import Wrapper from "../Wrapper";

interface IServices {
  id: string;
}

export default function Services({ id }: IServices) {
  return (
    <section id={id} className="relative h-full">
      <Wrapper>
        <div className="mt-28">
          <div className="mx-auto w-max">
            <Intro text="Our Services" style="text-[#302E2E]" />
          </div>
          <h1 className="font-semibold text-center mt-9 text-[#302E2E] text-6xl">
            We Provide Useful Solution
            <br />
            For Your Business
          </h1>
          <p className="text-[#302E2E] mt-3 text-xl font-semibold text-center">
            Explore three recent client engagements that exemplify our broader
            purpose: unlocking
            <br />
            the potential of those who.
          </p>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Grid */}
            <div className="h-[273px] border-2 border-[#B2B3F740] rounded-tl-[30px] rounded-tr-[120px] rounded-b-[30px] shadow-lg">
              <div className="py-8 px-5 space-x-3 border-b-[1.5px] border-[#00000017] flex items-center">
                <div className="">
                  <Image
                    src="/adm.svg"
                    alt="Advance Development Management"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="">
                  <p className="font-semibold text-sm text-black">
                    Advance Development
                    <br />
                    Management
                  </p>
                </div>
              </div>
              <div className="px-5">
                <p className="text-sm my-5 text-black">
                  Lorem ipsum dolor sit amet, seddoiyiofeeper m doconsectetur
                  adipiscing elit, sed do eiuiuy tempor incididunt ut labore et
                  dolore ma
                </p>

                <button className="outline-none text-sm font-medium text-[#2F2F2F]">
                  Learn More
                </button>
              </div>
            </div>
            {/* Grid */}
            <div className="h-[273px] border-2 border-[#B2B3F740] rounded-tl-[30px] rounded-tr-[120px] rounded-b-[30px] shadow-lg">
              <div className="py-8 px-5 space-x-3 border-b-[1.5px] border-[#00000017] flex items-center">
                <div className="">
                  <Image
                    src="/bet.svg"
                    alt="Business engagement and transformation"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="">
                  <p className="font-semibold text-sm text-black">
                    Business Engagement &<br />
                    Transformation
                  </p>
                </div>
              </div>
              <div className="px-5">
                <p className="text-sm my-5 text-black">
                  Lorem ipsum dolor sit amet, seddoiyiofeeper m doconsectetur
                  adipiscing elit, sed do eiuiuy tempor incididunt ut labore et
                  dolore ma
                </p>

                <button className="outline-none text-sm font-medium text-[#2F2F2F]">
                  Learn More
                </button>
              </div>
            </div>
            {/* Grid */}
            <div className="h-[273px] border-2 border-[#B2B3F740] rounded-tl-[30px] rounded-tr-[120px] rounded-b-[30px] shadow-lg">
              <div className="py-8 px-5 space-x-3 border-b-[1.5px] border-[#00000017] flex items-center">
                <div className="">
                  <Image
                    src="/adm.svg"
                    alt="Advance Development Management"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="">
                  <p className="font-semibold text-sm text-black">
                    Market Research &<br />
                    Analysis
                  </p>
                </div>
              </div>
              <div className="px-5">
                <p className="text-sm my-5 text-black">
                  Lorem ipsum dolor sit amet, seddoiyiofeeper m doconsectetur
                  adipiscing elit, sed do eiuiuy tempor incididunt ut labore et
                  dolore ma
                </p>

                <button className="outline-none text-sm font-medium text-[#2F2F2F]">
                  Learn More
                </button>
              </div>
            </div>
            {/* Grid */}
            <div className="h-[273px] border-2 border-[#B2B3F740] rounded-tl-[30px] rounded-tr-[120px] rounded-b-[30px] shadow-lg">
              <div className="py-8 px-5 space-x-3 border-b-[1.5px] border-[#00000017] flex items-center">
                <div className="">
                  <Image
                    src="/adm.svg"
                    alt="Advance Development Management"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="">
                  <p className="font-semibold text-sm text-black">
                    Digital Marketing
                  </p>
                </div>
              </div>
              <div className="px-5">
                <p className="text-sm my-5 text-black">
                  Lorem ipsum dolor sit amet, seddoiyiofeeper m doconsectetur
                  adipiscing elit, sed do eiuiuy tempor incididunt ut labore et
                  dolore ma
                </p>

                <button className="outline-none text-sm font-medium text-[#2F2F2F]">
                  Learn More
                </button>
              </div>
            </div>
            {/* Grid */}
            <div className="h-[273px] border-2 border-[#B2B3F740] rounded-tl-[30px] rounded-tr-[120px] rounded-b-[30px] shadow-lg">
              <div className="py-8 px-5 space-x-3 border-b-[1.5px] border-[#00000017] flex items-center">
                <div className="">
                  <Image
                    src="/adm.svg"
                    alt="Advance Development Management"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="">
                  <p className="font-semibold text-sm text-black">
                    Branding PR & strategy
                  </p>
                </div>
              </div>
              <div className="px-5">
                <p className="text-sm my-5 text-black">
                  Lorem ipsum dolor sit amet, seddoiyiofeeper m doconsectetur
                  adipiscing elit, sed do eiuiuy tempor incididunt ut labore et
                  dolore ma
                </p>

                <button className="outline-none text-sm font-medium text-[#2F2F2F]">
                  Learn More
                </button>
              </div>
            </div>
            {/* Grid */}
            <div className="h-[273px] border-2 border-[#B2B3F740] rounded-tl-[30px] rounded-tr-[120px] rounded-b-[30px] shadow-lg">
              <div className="py-8 px-5 space-x-3 border-b-[1.5px] border-[#00000017] flex items-center">
                <div className="">
                  <Image
                    src="/adm.svg"
                    alt="Advance Development Management"
                    width={46}
                    height={46}
                  />
                </div>
                <div className="">
                  <p className="font-semibold text-sm text-black">
                    Content Creation
                  </p>
                </div>
              </div>
              <div className="px-5">
                <p className="text-sm my-5 text-black">
                  Lorem ipsum dolor sit amet, seddoiyiofeeper m doconsectetur
                  adipiscing elit, sed do eiuiuy tempor incididunt ut labore et
                  dolore ma
                </p>

                <button className="outline-none text-sm font-medium text-[#2F2F2F]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
