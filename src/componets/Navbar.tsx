import { useEffect, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Drawer, IconButton, Stack } from "@mui/material";
import navLogo from "../assets/logos/nav_logo.png";

const NAV_ITEMS = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{ width: scrolled ? "92%" : "100%" }}
        className={`
          fixed left-1/2 -translate-x-1/2 z-50
          flex items-center justify-between
          bg-(--kakashi_jumpsuit) text-(--itachi_cloud_border)
          transition-all duration-500 ease-in-out
          ${scrolled
            ? "top-3 px-5 py-2 rounded-full shadow-2xl"
            : "top-0 px-5 md:px-8 py-3 rounded-none shadow-none"
          }
        `}
      >
        {/* ── Logo ── */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <img
            src={navLogo}
            alt="logo"
            className={`transition-all duration-500 ${scrolled ? "h-8" : "h-10 md:h-14"}`}
          />
        </div>

        {/* ── Center Title (desktop only) ── */}
        <h3
          className={`
            hidden md:block m-0 font-njnaruto text-center text-(--naruto_jumpsuit)
            transition-all duration-500
            ${scrolled ? "text-base" : "text-xl"}
          `}
        >
          Vishnu's View
        </h3>

        {/* ── Desktop Nav Links ── */}
        <ul className="hidden md:flex items-center justify-end gap-4 list-none m-0 p-0 font-the-last-shuriken">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`
                  block cursor-pointer transition-all duration-300 px-2 py-1
                  hover:text-(--naruto_jumpsuit) text-inherit no-underline
                  ${scrolled ? "text-sm" : "text-base"}
                `}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3 border-l border-(--naruto_jumpsuit) pl-4 text-(--naruto_jumpsuit)">
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

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden flex items-center justify-center cursor-pointer bg-transparent border-none p-2"
          aria-label="Open navigation menu"
          style={{ color: "var(--naruto_jumpsuit)" }}
        >
          <MenuIcon fontSize="medium" />
        </button>
      </nav>

      {/* ── Mobile Full-Screen Drawer ── */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          display: { md: "none" },
          "& .MuiDrawer-paper": {
            width: "100vw",
            height: "100dvh",
            backgroundColor: "#0D1625",
            backgroundImage:
              "radial-gradient(rgba(246,108,45,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        {/* Close button */}
        <Box sx={{ position: "absolute", top: 20, right: 20 }}>
          <IconButton
            onClick={() => setMobileOpen(false)}
            sx={{ color: "var(--naruto_jumpsuit)" }}
            aria-label="Close menu"
          >
            <CloseIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Box>

        {/* Brand mark */}
        <Box
          sx={{
            fontFamily: "var(--font-njnaruto)",
            fontSize: "1rem",
            color: "rgba(246,108,45,0.4)",
            letterSpacing: "4px",
            mb: 6,
            textTransform: "uppercase",
          }}
        >
          Vishnu's View
        </Box>

        {/* Nav items */}
        <Stack spacing={3} alignItems="center">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-the-last-shuriken)",
                fontSize: "2.4rem",
                color: "#fff",
                textDecoration: "none",
                letterSpacing: "5px",
                transition: "color 0.25s",
                display: "block",
                lineHeight: 1.1,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--naruto_jumpsuit)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              {item.name.toUpperCase()}
            </a>
          ))}
        </Stack>

        {/* Social icons */}
        <Stack direction="row" spacing={3} sx={{ mt: 8 }}>
          <a
            href="https://www.linkedin.com/in/vishnu654/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--naruto_jumpsuit)",
              display: "flex",
              transition: "opacity 0.25s",
            }}
          >
            <LinkedInIcon sx={{ fontSize: 40 }} />
          </a>
          <a
            href="https://github.com/vishnusairam654"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--naruto_jumpsuit)",
              display: "flex",
              transition: "opacity 0.25s",
            }}
          >
            <GitHubIcon sx={{ fontSize: 40 }} />
          </a>
        </Stack>
      </Drawer>
    </>
  );
};

export default Navbar;
