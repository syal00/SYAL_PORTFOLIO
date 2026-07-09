import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto lg:mx-0">
      <Link
        href="/work"
        className="relative w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[160px] md:h-[160px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          alt="View my projects"
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[100px] sm:max-w-[115px] md:max-w-[120px] max-h-[105px] sm:max-h-[120px] md:max-h-[126px] pointer-events-none select-none opacity-80"
        />
        <HiArrowRight
          className="absolute text-2xl sm:text-3xl group-hover:translate-x-2 transition-all duration-300"
          aria-hidden
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
