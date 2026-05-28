"use client";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useRouter } from "next/navigation";

interface SwipeCardProps {
  route?: string;
  cardIndex: number;
  children: React.ReactNode;
}

export default function SwipeCard({ route, cardIndex, children }: SwipeCardProps) {
  const router = useRouter();
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 220], [-13, 13]);

  // label opacities driven by drag position
  const enterOpacity = useTransform(x, [20, 110], [0, 1], { clamp: true });
  const nextOpacity = useTransform(x, [-110, -20], [1, 0], { clamp: true });

  const scrollToNext = () => {
    const shell = document.querySelector<HTMLElement>(".site-shell");
    if (shell) shell.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  const handleDragEnd = (
    _: unknown,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const { offset, velocity } = info;
    const swipeRight = offset.x > 80 || velocity.x > 600;
    const swipeLeft = offset.x < -80 || velocity.x < -600;

    if (swipeRight) {
      animate(x, window.innerWidth + 200, { duration: 0.22, ease: "easeIn" });
      if (route) {
        setTimeout(() => router.push(route), 240);
      } else {
        setTimeout(
          () => animate(x, 0, { type: "spring", stiffness: 380, damping: 28 }),
          260
        );
      }
    } else if (swipeLeft) {
      animate(x, -(window.innerWidth + 200), {
        duration: 0.22,
        ease: "easeIn",
      });
      setTimeout(() => {
        scrollToNext();
        setTimeout(() => x.set(0), 420);
      }, 220);
    } else {
      animate(x, 0, { type: "spring", stiffness: 380, damping: 28 });
    }
  };

  return (
    <motion.div
      className="swipe-card-wrapper"
      style={{
        x,
        rotate,
        width: "100%",
        position: "relative",
        touchAction: "pan-y",
        userSelect: "none",
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.18}
      dragTransition={{ bounceStiffness: 380, bounceDamping: 28 }}
      dragMomentum={false}
      onDragEnd={handleDragEnd}
    >
      {/* ENTER label — appears on right swipe */}
      <motion.span
        className="swipe-label swipe-enter"
        style={{ opacity: enterOpacity }}
        aria-hidden="true"
      >
        ENTER
      </motion.span>

      {/* NEXT label — appears on left swipe */}
      <motion.span
        className="swipe-label swipe-next"
        style={{ opacity: nextOpacity }}
        aria-hidden="true"
      >
        NEXT
      </motion.span>

      {children}
    </motion.div>
  );
}
