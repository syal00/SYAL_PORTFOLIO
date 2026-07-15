import Link from "next/link";

import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-4 sm:px-6 md:px-8 xl:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-y-3 sm:gap-y-0 py-4 sm:py-6 md:py-8">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <span className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-accent/10 border border-accent text-accent font-bold text-base sm:text-lg shrink-0">
              RS
            </span>
            <span className="text-base sm:text-lg font-semibold tracking-wide">
              Rakesh Syal
            </span>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
