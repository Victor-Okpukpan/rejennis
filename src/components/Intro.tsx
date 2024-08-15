interface IIntro {
  text: string;
  style?: string;
}

export default function Intro({ text, style }: IIntro) {
  return (
    <div className="relative">
      <div className="-translate-x-2 translate-y-4 z-0 w-4 h-4 rounded-full bg-[#F40000]"></div>
      <p className={`capitalize font-semibold relative z-20 text-lg text-white ${style}`}>
        {text}
      </p>
    </div>
  );
}
