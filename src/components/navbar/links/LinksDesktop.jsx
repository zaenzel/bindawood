import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinksDesktop = ({ links }) => {
  const asPath = usePathname();
 
  return (
    <nav className="flex gap-5">
      {links.map((e, i) => (
        <Link
          key={i}
          href={e.link}
          className={`relative group py-1 px-3 rounded-full ${
            asPath === e.link
              ? "bg-tersier text-white font-semibold"
              : "text-tersier"
          }`}
        >
          {e.name}

          {asPath !== e.link && (
            <span
              className={`w-0 h-[1px] inline-block bg-tersier
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            `}
            >
              &nbsp;
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default LinksDesktop;
