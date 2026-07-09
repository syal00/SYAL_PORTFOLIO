import { useEffect } from "react";
import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

import "../styles/globals.css";

const useCardTilt = () => {
  useEffect(() => {
    let activeCard = null;
    let raf = null;

    const resetCard = (card) => {
      card.style.transform = "";
    };

    const handleMove = (e) => {
      const card = e.target.closest(".glass-card");

      if (!card) {
        if (activeCard) {
          resetCard(activeCard);
          activeCard = null;
        }
        return;
      }

      activeCard = card;

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        const rotateX = (0.5 - py) * 8;
        const rotateY = (px - 0.5) * 8;

        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`;
        card.style.setProperty("--mx", `${px * 100}%`);
        card.style.setProperty("--my", `${py * 100}%`);
      });
    };

    const handleLeaveWindow = () => {
      if (activeCard) {
        resetCard(activeCard);
        activeCard = null;
      }
    };

    document.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseleave", handleLeaveWindow);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeaveWindow);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useCardTilt();

  return (
    <Layout>
      <div key={router.asPath} className="w-full">
        <Transition />
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
