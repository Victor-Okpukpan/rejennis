import Image from "next/image";
import Wrapper from "./Wrapper";

interface INavbar {
  aboutRef: any;
  servicesRef: any;
  processRef: any;
}

export default function Navbar({ aboutRef, servicesRef, processRef }: INavbar) {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 backdrop-blur-lg">
      <Wrapper>
        <div className="flex items-center justify-between py-6">
          <div className=" flex items-center space-x-32">
            <div className="bg-transparent">
              <Image src="/logo.svg" alt="Logo" width={33} height={40} />
            </div>
            <div className="flex space-x-12 bg-transparent">
              <button
                onClick={() => {
                  aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white text-base font-bold"
              >
                Who We Are
              </button>
              <button
                onClick={() => {
                  servicesRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white text-base font-bold"
              >
                What We Do
              </button>
              <button
                onClick={() => {
                  processRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-white text-base font-bold"
              >
                Our Thinking
              </button>
              <button className="text-white text-base font-bold">
                Our World
              </button>
            </div>
          </div>
          <div className="bg-transparent">
            <button className="py-[10px] px-8 rounded-lg bg-white text-[#302E2E] text-lg font-bold capitalize">
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </Wrapper>
    </nav>
  );
}
