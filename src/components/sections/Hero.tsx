import Intro from "../Intro";
import Wrapper from "../Wrapper";

interface IHero {
  id: string;
}

export default function Hero({ id }: IHero) {
  return (
    <section id={id} className="h-[920px]">
      <div className="relative h-full">
        <div
          className="z-0 absolute top-0 left-0 right-0 h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-img.jpeg')" }}
        ></div>
        <div
          style={{
            background:
              "linear-gradient(255.34deg, rgba(7, 8, 115, 0) -4.68%, rgba(7, 8, 115, 0.704679) 60.65%, rgba(7, 8, 115, 0.768846) 66.6%, rgba(7, 8, 115, 0.827739) 72.06%, rgba(7, 8, 115, 0.881887) 77.08%, rgba(7, 8, 115, 0.939129) 82.39%, #070873 88.04%)",
          }}
          className="z-20 h-full absolute top-0 left-0 right-0"
        >
          <Wrapper>
            <div className="flex mt-7 flex-col h-full justify-center items-start">
              <Intro text="Hi, Lets Build Your Project" />
              <h1 className="font-bold mt-12 text-6xl text-white">
                Global management
                <br />& consulting experts
              </h1>
              <p className="text-xl text-[#EFEEEEE5] font-medium mt-6">
                Helping you build brand awareness, credibility and
                <br />
                connect with your customers & stakeholders.
              </p>

              <div className="space-x-[30px] mt-9">
                <button className="py-4 px-8 bg-white text-[#302E2E] text-lg font-bold rounded-lg">
                  Book a session
                </button>
                <button className="py-4 px-8 border-2 text-white text-lg font-bold rounded-lg">
                  Talk to a consultant
                </button>
              </div>

              <div className="min-h-1 w-full mt-16 mb-8 bg-[#C1C2D208] max-w-[640px]"></div>

              <div className="max-w-[640px] w-full flex items-center justify-between">
                <div className="">
                  <p className="text-4xl font-bold text-white">97.2 <span className="text-[#F40000]">%</span></p>
                  <p className="font-medium text-[#EFEEEEE5] text-base">Successful Project</p>
                </div>
                <div className="h-full w-1 bg-[#C1C2D20D]"></div>
                <div className="">
                  <p className="text-4xl font-bold text-white">200 <span className="text-[#F40000]">K</span></p>
                  <p className="font-medium text-[#EFEEEEE5] text-base">Joining Companies</p>
                </div>
                <div className="h-full w-1 bg-[#C1C2D20D]"></div>
                <div className="">
                  <p className="text-4xl font-bold text-white">20,500 <span className="text-[#F40000]">+</span></p>
                  <p className="font-medium text-[#EFEEEEE5] text-base">Registered Customers</p>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </section>
  );
}
