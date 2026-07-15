import { motion } from "framer-motion";
import {
  Code2,
  Layers,
  Database,
  Globe,
  Wrench,
  Network,
  Palette,
} from "lucide-react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const skillCategories = [
  {
    Icon: Code2,
    title: "Programming Languages",
    items: [
      "Python",
      "C",
      "C++",
      "C#",
      "JavaScript",
      "PHP",
      "HTML",
      "CSS",
      "SQL",
      "XML/JSON",
    ],
  },
  {
    Icon: Layers,
    title: "Frameworks",
    items: [
      ".NET",
      "React",
      "ASP.NET Core MVC",
      "REST API",
      ".NET Razor",
      "Laravel",
      "Bootstrap",
    ],
  },
  {
    Icon: Database,
    title: "Databases",
    items: [
      "MySQL",
      "SQLite",
      "SQL Server",
      "Database Design & Administration",
    ],
  },
  {
    Icon: Globe,
    title: "APIs & Web",
    items: [
      "REST API",
      "Content Management Systems (CMS)",
      "Web Security",
    ],
  },
  {
    Icon: Wrench,
    title: "Tools & Version Control",
    items: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Debugging Tools",
      "Docker",
    ],
  },
  {
    Icon: Network,
    title: "Systems & Networking",
    items: [
      "Raspberry Pi",
      "Network Operating Systems",
      "Networking Concepts",
    ],
  },
  {
    Icon: Palette,
    title: "Design Tools",
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    centerOnDesktop: true,
  },
];

const CategoryCard = ({ item, index = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    className={`glass-card h-full min-h-[220px] sm:min-h-[240px] px-5 sm:px-6 py-6 sm:py-8 flex flex-col group cursor-default
      ${item.centerOnDesktop ? "lg:col-start-2" : ""}`}
  >
    <div className="text-3xl sm:text-4xl text-accent mb-3 sm:mb-4 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-6">
      <item.Icon aria-hidden />
    </div>
    <div className="mb-3 text-base sm:text-lg font-semibold transition-colors duration-300 group-hover:text-white">
      {item.title}
    </div>
    <div className="flex flex-wrap gap-2">
      {item.items.map((s) => (
        <span key={s} className="skill-pill">
          {s}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillSlider = () => (
  <>
    {/* Phones: swipeable carousel */}
    <div className="md:hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        autoHeight
        className="pb-10"
      >
        {skillCategories.map((item, i) => (
          <SwiperSlide key={i} className="!h-auto">
            <CategoryCard item={item} index={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    {/* Tablets: 2-column grid */}
    <div className="hidden md:grid lg:hidden grid-cols-2 gap-4">
      {skillCategories.map((item, i) => (
        <CategoryCard key={item.title} item={item} index={i} />
      ))}
    </div>

    {/* Desktop: 3-column grid; Design Tools centered on last row */}
    <div className="hidden lg:grid lg:grid-cols-3 gap-4 xl:gap-5">
      {skillCategories.map((item, i) => (
        <CategoryCard key={item.title} item={item} index={i} />
      ))}
    </div>
  </>
);

export default SkillSlider;
