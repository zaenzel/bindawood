import Link from "next/link";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const LinkMobile = ({ links, isOpen, isOpenSet }) => {
  const asPath = usePathname();

  return (
    <>
      <motion.div
        className="absolute sm:hidden right-0 top-14 z-30
        bg-white py-5 px-5
        h-[calc(100vh-56px)]"
        key="animate-sidebar"
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ type: "tween" }}
      >
        <div className="flex flex-col gap-3 ">
          {links.map((e, i) => (
            <Link
              key={i}
              href={e.link}
              className={`py-1 px-3 rounded-full ${
                asPath === e.link
                  ? "bg-tersier text-white font-semibold"
                  : "text-tersier"
              }`}
              onClick={() => isOpenSet(false)}
            >
              {e.name}
            </Link>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={() => isOpenSet(false)}
            key="activity-sidebar-overlay"
            className="absolute top-14 left-0 bg-black w-full h-[calc(100vh-56px)] z-10"
            initial={{ x: 0, opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.1 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default LinkMobile;
