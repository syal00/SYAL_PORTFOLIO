import Image from "next/image";

const TopLeftImg = () => (
  <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[120px] sm:w-[180px] md:w-[240px] xl:w-[400px] opacity-40 sm:opacity-50 pointer-events-none select-none">
    <Image
      src="/top-left-img.png"
      alt=""
      width={400}
      height={400}
      className="w-full h-auto"
      aria-hidden
    />
  </div>
);

export default TopLeftImg;
