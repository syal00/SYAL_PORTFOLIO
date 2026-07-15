import Link from "next/link";
import {
  RiGithubLine,
  RiLinkedinLine,
  RiMailLine,
  RiWhatsappLine,
  RiInstagramLine,
} from "react-icons/ri";

export const socialData = [
  { name: "GitHub", link: "https://github.com/syal00", Icon: RiGithubLine },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rakesh-syal-974b61362/",
    Icon: RiLinkedinLine,
  },
  { name: "Email", link: "mailto:syal0005@algonquinlive.com", Icon: RiMailLine },
  { name: "WhatsApp", link: "https://wa.me/3686454733", Icon: RiWhatsappLine },
  {
    name: "Instagram",
    link: "https://www.instagram.com/syal_pb07?igsh=N28zcmRvaXlreGx1&utm_source=qr",
    Icon: RiInstagramLine,
  },
];

const Socials = () => {
  return (
    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-1 sm:gap-2 text-lg sm:text-xl">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "GitHub"
              ? "bg-accent rounded-full text-primary hover:text-white"
              : "hover:text-accent"
          } inline-flex items-center justify-center min-w-11 min-h-11 transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
