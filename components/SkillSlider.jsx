import { Code2, Layers, Database, GitBranch, Palette, Network, Users } from "lucide-react";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export const skillCategories = [
  { Icon: Code2, title: "Programming Languages", items: ["Python", "C", "C++", "C#", "JavaScript", "PHP", "HTML", "CSS", "Razor"] },
  { Icon: Layers, title: "Frameworks", items: [".NET", "React", "ASP.NET Core MVC", "REST API"] },
  { Icon: Database, title: "Databases", items: ["MySQL", "SQLite", "SQL Server"] },
  { Icon: GitBranch, title: "DevOps & Tools", items: ["Git", "GitHub", "Docker"] },
  { Icon: Palette, title: "UX Design", items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Usability Testing"] },
  { Icon: Network, title: "Networking & Systems", items: ["Routing", "Switching", "Firewalls", "Linux", "Windows", "Raspberry Pi"] },
  { Icon: Users, title: "Soft Skills", items: ["Teamwork", "Problem Solving", "Communication", "Agile"] },
];

const SkillSlider = () => (
  <Swiper
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 12 },
      640: { slidesPerView: 2, spaceBetween: 15 },
      960: { slidesPerView: 2, spaceBetween: 15 },
      1200: { slidesPerView: 3, spaceBetween: 15 },
    }}
    pagination={{ clickable: true }}
    modules={[FreeMode, Pagination]}
    freeMode
    className="h-[260px] sm:h-[280px] md:h-[300px] pb-10"
  >
    {skillCategories.map((item, i) => (
      <SwiperSlide key={i}>
        <div className="glass-card h-full px-6 py-8 flex flex-col group cursor-default hover:bg-white/10 transition-all duration-300">
          <div className="text-4xl text-accent mb-4"><item.Icon aria-hidden /></div>
          <div className="mb-3 text-lg font-semibold">{item.title}</div>
          <div className="flex flex-wrap gap-2">
            {item.items.map((s) => (
              <span key={s} className="text-[12px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/70">{s}</span>
            ))}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);
export default SkillSlider;
