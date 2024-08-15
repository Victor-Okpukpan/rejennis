export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1100px] h-full mx-auto px-3 md:px-0">{children}</div>;
}
