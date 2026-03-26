import { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import navLogo from "../assets/logos/nav_logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{ width: scrolled ? "70%" : "100%" }}
      className={`
    fixed top-0 left-1/2 -translate-x-1/2 z-50
    grid grid-cols-3 items-center
    bg-(--kakashi_jumpsuit) text-(--itachi_cloud_border)
    transition-all duration-500 ease-in-out
    ${
      scrolled
        ? "top-4 px-6 py-2 rounded-full shadow-2xl"
        : "top-0 px-8 py-4 rounded-none shadow-none"
    }
  `}
    >
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <img
          src={navLogo}
          alt="logo"
          className={`transition-all duration-500 ${scrolled ? "h-10" : "h-14"}`}
        />
      </div>

      {/* Center: Title */}
      <h3
        className={`
        m-0 font-njnaruto text-center text-(--naruto_jumpsuit)
        transition-all duration-500
        ${scrolled ? "text-base" : "text-xl"}
      `}
      >
        Vishnu's View
      </h3>

      {/* Right: Nav Links */}
      <ul className="flex items-center justify-end gap-4 list-none m-0 p-0 font-the-last-shuriken">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={`
                block cursor-pointer transition-all duration-300 px-2 py-1
                hover:text-(--naruto_jumpsuit) text-inherit no-underline
                ${scrolled ? "text-sm" : "text-base"}
              `}
            >
              {item}
            </a>
          </li>
        ))}

        <li className="flex items-center gap-3 border-l border-(--naruto_jumpsuit) pl-6 text-(--naruto_jumpsuit)">
          <a
            href="https://www.linkedin.com/in/vishnu654/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-inherit transition-colors duration-300 hover:text-gray-400"
          >
            <LinkedInIcon fontSize={scrolled ? "small" : "medium"} />
          </a>
          <a
            href="https://github.com/vishnusairam654"
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-inherit transition-colors duration-300 hover:text-gray-400"
          >
            <GitHubIcon fontSize={scrolled ? "small" : "medium"} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
