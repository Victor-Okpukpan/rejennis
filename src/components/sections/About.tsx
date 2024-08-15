import { LegacyRef } from "react";
import Wrapper from "../Wrapper";
import Intro from "../Intro";

interface IAbout {
  id?: string;
  ref?: LegacyRef<HTMLElement> | undefined;
}

export default function About({ id, ref }: IAbout) {
  return (
    <section id={id} ref={ref} className="">
      <div className="mt-28">
        <Wrapper>
          <div className="mx-auto w-max">
            <Intro text="About Us" style="text-[#302E2E]" />
          </div>
          <h1 className="font-semibold text-center mt-9 text-[#302E2E] text-6xl">
            At Rejennis Global, we
            <br />
            value innovative business
            <br />
            growth
          </h1>

          <div className="mt-9 flex items-start">
            <div className="flex-1">
              <p className="text-[#302E2E] text-4xl ">
                Each of our
                <br />
                projects represents a<br />
                new opportunity to
                <br />
                accelerate business
                <br />
                growth
              </p>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-xl text-[#302E2E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi{" "}
              </p>
              <p className="mt-8 font-semibold text-xl text-[#302E2E]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo nisi ut aliquip ex ea commodo{" "}
              </p>

              <button className="py-[10px] px-[22px] border-2 border-[#F40000] text-[#2F2F2F] text-lg font-bold mt-12 rounded-lg">
                Learn more
              </button>
            </div>
          </div>
        </Wrapper>

        <div className="relative mt-28 h-[775px]">
          <div
            className="z-0 absolute top-0 left-0 right-0 h-full bg-cover bg-center"
            style={{ backgroundImage: "url('/solution.jpg')" }}
          ></div>
          <div
            style={{
              background:
                "linear-gradient(258.83deg, rgba(1, 2, 86, 0.0354) 28.45%, rgba(7, 8, 115, 0.1298) 42.08%, rgba(7, 8, 115, 0.5015) 73.62%, rgba(7, 8, 115, 0.59) 75.75%, rgba(7, 8, 115, 0.59) 77.98%, rgba(7, 8, 115, 0.5074) 80.76%, rgba(7, 8, 115, 0.59) 83.54%)",
            }}
            className="z-20 h-full absolute top-0 left-0 right-0"
          >
            <Wrapper>
              <div className="mt-32">
                <Intro text="Our Solution" />
                <h1 className="my-6 text-5xl font-bold text-white">Business planning &<br />strategy ensures success</h1>
                <p className="text-xl text-white font-semibold">Lorem ipsum dolor sit ametyuoipm<br />consectetur adipiscing elit, sed  eiusmod t</p>
                <button className="bg-[#FF0000] rounded-lg py-[10px] px-[22px] text-white mt-6 text-l  font-bold">Learn more</button>
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
