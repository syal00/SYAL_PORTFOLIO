import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiPhoto,
  HiAcademicCap,
  HiPencilSquare,
  HiDocumentText,
  HiEnvelope,
} from "react-icons/hi2";

export const navData = [
  { name: "home", path: "/", Icon: HiHome },
  { name: "about", path: "/about", Icon: HiUser },
  { name: "skills", path: "/skills", Icon: HiRectangleGroup },
  { name: "work", path: "/work", Icon: HiViewColumns },
  { name: "gallery", path: "/gallery", Icon: HiPhoto },
  { name: "certificates", path: "/certificates", Icon: HiAcademicCap },
  { name: "blog", path: "/blog", Icon: HiPencilSquare },
  { name: "resume", path: "/resume", Icon: HiDocumentText },
  { name: "contact", path: "/contact", Icon: HiEnvelope },
];

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 left-0 right-0 xl:left-auto xl:right-[2%] z-[70] top-auto xl:top-0 w-full xl:w-16 xl:max-w-md xl:h-screen pb-[env(safe-area-inset-bottom)]">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-x-2 sm:gap-x-4 xl:gap-y-6 overflow-x-auto scrollbar-none px-3 sm:px-6 md:px-12 xl:px-0 h-[62px] sm:h-[70px] xl:h-max py-4 sm:py-6 bg-white/10 backdrop-blur-sm text-xl sm:text-2xl xl:text-lg xl:rounded-full">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center group hover:text-accent transition-all duration-300 shrink-0 p-1`}
            href={link.path}
            key={i}
            aria-label={link.name}
          >
            <div
              role="tooltip"
              className="absolute pr-14 right-0 hidden xl:group-hover:flex"
            >
              <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize whitespace-nowrap">
                  {link.name}
                </div>
                <div
                  className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"
                  aria-hidden
                />
              </div>
            </div>
            <div>
              <link.Icon aria-hidden />
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
