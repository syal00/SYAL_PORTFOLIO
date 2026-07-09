import Image from "next/image";
const Circles = () => (
  <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 pointer-events-none select-none hidden md:block">
    <Image src="/circles.png" alt="circles" width={260} height={200} className="w-full h-full" />
  </div>
);
export default Circles;
