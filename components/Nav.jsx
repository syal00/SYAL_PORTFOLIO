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
      <div className="flex w-full xl:flex-col items-center justify-start sm:justify-between xl:justify-center gap-x-1 sm:gap-x-3 xl:gap-y-5 overflow-x-auto overscroll-x-contain scrollbar-none snap-x snap-mandatory px-2 sm:px-4 md:px-8 xl:px-0 min-h-[64px] sm:min-h-[70px] xl:h-max py-2 sm:py-4 bg-white/10 backdrop-blur-md text-xl sm:text-2xl xl:text-lg xl:rounded-full border-t border-white/10 xl:border-0">
        {navData.map((link, i) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative flex items-center justify-center group hover:text-accent transition-all duration-300 shrink-0 snap-center min-w-11 min-h-11 sm:min-w-12 sm:min-h-12`}
            href={link.path}
            key={i}
            aria-label={link.name}
            aria-current={link.path === pathname ? "page" : undefined}
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
            <link.Icon aria-hidden className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
