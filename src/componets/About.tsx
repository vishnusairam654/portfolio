import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Box,
  Typography,
  Grid,
  Fade,
  Slide,
  Grow,
  Chip,
  Stack,
  Paper,
} from "@mui/material";

import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer,
  SiThreedotjs, SiJavascript, SiPython, SiCplusplus, SiHtml5, SiCss,
  SiNodedotjs, SiAppwrite, SiPostgresql, SiRedis, SiJsonwebtokens,
  SiNumpy, SiPandas, SiVercel, SiFigma, SiGit,
} from "react-icons/si";
import { FaDatabase, FaBrain, FaRobot, FaEye } from "react-icons/fa";

import image9 from "../assets/images/image_9.png";
import image10 from "../assets/images/image_10.png";
import image11 from "../assets/images/image_11.png";
import image12 from "../assets/images/image_12.png";
import image13 from "../assets/images/image_13.png";
import image14 from "../assets/images/image_14.png";
import imageMaster3 from "../assets/images/image_master3.png";

/* ── Intersection observer hook ── */
const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, options);
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, options]);
  return [ref, isVisible] as const;
};

/* ── Shared data ── */
const certifications = [
  { name: "Google UI/UX",        color: "var(--naruto_jumpsuit)", bg: "#FFF5F0" },
  { name: "Microsoft AI",        color: "var(--sasuke_susanoo)",  bg: "#F8F5FA" },
  { name: "NxtWave Python",      color: "var(--naruto_collar)",   bg: "#F0F4FA" },
  { name: "NxtWave Full Stack",  color: "var(--zoro_bandana)",    bg: "#F0FAF4" },
];

const stats = [
  { label: "Missions Completed", value: "10+", color: "var(--naruto_jumpsuit)" },
  { label: "Jutsu Mastered",     value: "20+", color: "var(--zoro_bandana)" },
  { label: "Chakra Capacity",    value: "100%", color: "var(--nami_log_pose)" },
];

const aboutCollageImages = [
  { src: image9,       w: "220px", h: "330px", top: "5%",  left: "0%",  rotate: -8, z: 1,  delay: "0s",   dur: "6s" },
  { src: image10,      w: "440px", h: "280px", top: "45%", right: "1%", rotate: 5,  z: 8,  delay: "0.5s", dur: "7s" },
  { src: image11,      w: "240px", h: "330px", top: "5%",  right: "0%", rotate: 6,  z: 3,  delay: "1s",   dur: "5.5s" },
  { src: image12,      w: "440px", h: "200px", bottom: "30%", left: "5%",  rotate: 20, z: 9, delay: "1.5s", dur: "6.5s" },
  { src: imageMaster3, w: "280px", h: "440px", top: "1%",  left: "32%", rotate: 2,  z: 5,  delay: "0.8s", dur: "6s", shadow: "0 10px 30px rgba(0,0,0,0.3) !important" },
  { src: image13,      w: "260px", h: "400px", top: "60%", left: "10%", rotate: 12, z: 9,  delay: "0.3s", dur: "6.2s" },
  { src: image14,      w: "320px", h: "260px", top: "80%", right: "15%", rotate: 8, z: 10, delay: "1.8s", dur: "5.8s", noFrame: true },
];

const chakraNatures = [
  {
    title: "🔥 FIRE", subtitle: "FRONTEND", color: "var(--naruto_jumpsuit)",
    skills: [
      { name: "React.js",          icon: <SiReact /> },
      { name: "Next.js",           icon: <SiNextdotjs /> },
      { name: "TypeScript",        icon: <SiTypescript /> },
      { name: "TailwindCSS",       icon: <SiTailwindcss /> },
      { name: "Framer Motion",     icon: <SiFramer /> },
      { name: "Three.js",          icon: <SiThreedotjs /> },
      { name: "WebGL",             icon: <FaEye /> },
      { name: "ShadCN UI",         icon: <Box component="span" sx={{ fontWeight: "bold" }}>ui</Box> },
      { name: "Styled-Components", icon: <SiCss /> },
      { name: "React Router DOM",  icon: <SiReact /> },
    ],
  },
  {
    title: "⚡ LIGHTNING", subtitle: "LANGUAGES", color: "var(--sanji_hair)",
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "TypeScript",        icon: <SiTypescript /> },
      { name: "Python",            icon: <SiPython /> },
      { name: "C++",               icon: <SiCplusplus /> },
      { name: "HTML5",             icon: <SiHtml5 /> },
      { name: "CSS3",              icon: <SiCss /> },
    ],
  },
  {
    title: "🌊 WATER", subtitle: "BACKEND", color: "var(--nami_log_pose)",
    skills: [
      { name: "Node.js",    icon: <SiNodedotjs /> },
      { name: "Appwrite",   icon: <SiAppwrite /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "PostGIS",    icon: <FaDatabase /> },
      { name: "Redis",      icon: <SiRedis /> },
      { name: "REST APIs",  icon: <FaDatabase /> },
      { name: "JWT",        icon: <SiJsonwebtokens /> },
      { name: "NoSQL",      icon: <FaDatabase /> },
    ],
  },
  {
    title: "🌿 WOOD", subtitle: "AI / ML & TOOLS", color: "var(--zoro_bandana)",
    skills: [
      { name: "NumPy",              icon: <SiNumpy /> },
      { name: "Pandas",             icon: <SiPandas /> },
      { name: "NLP",                icon: <FaBrain /> },
      { name: "Computer Vision",    icon: <FaEye /> },
      { name: "LLM APIs",           icon: <FaRobot /> },
      { name: "Prompt Engineering", icon: <FaBrain /> },
      { name: "Git",                icon: <SiGit /> },
      { name: "Vercel",             icon: <SiVercel /> },
      { name: "Figma",              icon: <SiFigma /> },
    ],
  },
];

/* ── Shared Chakra Natures section (used by both layouts) ── */
const ChakraNaturesSection = ({ isVisible }: { isVisible: boolean }) => (
  <Box
    sx={{
      position: "relative",
      width: "100vw",
      backgroundColor: "#FDF8F5",
      backgroundImage: `
        radial-gradient(#e2d5c4 1px, transparent 1px),
        linear-gradient(135deg, var(--naruto_jumpsuit) 0%, var(--sanji_hair) 33%, var(--nami_log_pose) 66%, var(--zoro_bandana) 100%)
      `,
      backgroundSize: "20px 20px, 100% 100%",
      py: { xs: 8, md: 10 },
      px: { xs: 3, md: 8, lg: 12 },
      "&::before": {
        content: '""', position: "absolute", top: -1, left: 0, right: 0, height: "200px",
        background: "linear-gradient(to bottom, #FDF8F5, transparent)", pointerEvents: "none", zIndex: 0,
      },
      "&::after": {
        content: '""', position: "absolute", bottom: -1, left: 0, right: 0, height: "200px",
        background: "linear-gradient(to bottom, transparent, var(--hinata_jacket))", pointerEvents: "none", zIndex: 0,
      },
    }}
  >
    <Slide direction="up" in={isVisible} timeout={1200}>
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            fontFamily: "var(--font-the-last-shuriken)",
            mb: 6,
            color: "#1A202C",
            letterSpacing: "2px",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          CHAKRA NATURES
        </Typography>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {chakraNatures.map((nature) => (
            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={nature.title}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  height: "100%",
                  backgroundColor: "rgba(255,255,255,0.6)",
                  borderTop: `4px solid ${nature.color}`,
                  backdropFilter: "blur(10px)",
                  borderRadius: "8px",
                  transition: "var(--transition)",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    backgroundColor: "#fff",
                    boxShadow: `0 10px 25px ${nature.color}20`,
                  },
                }}
              >
                <Typography sx={{ fontFamily: "var(--font-oswald)", fontWeight: "bold", fontSize: "1.1rem", color: nature.color, mb: 0.5 }}>
                  {nature.title}
                </Typography>
                <Typography sx={{ fontFamily: "var(--font-midorima)", fontSize: "0.75rem", color: "#718096", letterSpacing: "1px", mb: 2 }}>
                  {nature.subtitle}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {nature.skills.map((skill) => (
                    <Chip
                      key={skill.name}
                      icon={skill.icon}
                      label={skill.name}
                      size="small"
                      sx={{
                        fontFamily: "var(--font-oswald)",
                        backgroundColor: "#F7FAFC",
                        border: "1px solid #E2E8F0",
                        color: "#4A5568",
                        py: 1.5,
                        "& .MuiChip-icon": { color: nature.color },
                        "&:hover": { backgroundColor: nature.color, color: "#fff", "& .MuiChip-icon": { color: "#fff" } },
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Slide>
  </Box>
);

/* ══════════════════════════════════════════════
   MOBILE LAYOUT
═══════════════════════════════════════════════ */
const MobileAboutLayout = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.08 });

  return (
    <>
      {/* Spacer = Hero height so About starts after the hero */}
      <div style={{ height: "100vh", width: "100%", pointerEvents: "none" }} />

      {/* About content — normal flow on mobile */}
      <Box
        id="about"
        ref={ref}
        sx={{
          width: "100vw",
          backgroundColor: "#FDF8F5",
          backgroundImage: "radial-gradient(#e2d5c4 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          color: "#1A202C",
          pt: 8,
          pb: 6,
          px: 3,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "160px",
            background: "linear-gradient(to bottom, var(--naruto_jumpsuit), transparent)",
            pointerEvents: "none",
          },
        }}
      >
        <Fade in={isVisible} timeout={1000}>
          <Box>
            {/* Section label */}
            <Typography
              sx={{
                fontFamily: "var(--font-oswald)",
                color: "var(--naruto_collar)",
                letterSpacing: "3px",
                mb: 1,
                fontWeight: "bold",
                fontSize: "0.8rem",
              }}
            >
              — WHO AM I
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--font-the-last-shuriken)",
                fontSize: "2.2rem",
                lineHeight: 1.1,
                mb: 4,
                color: "var(--itachi_cloak)",
              }}
            >
              THE SHINOBI{" "}
              <span style={{ color: "var(--naruto_jumpsuit)" }}>
                BEHIND THE SCREEN
              </span>
            </Typography>

            {/* Single hero photo — polaroid style */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: 4,
              }}
            >
              <Box
                sx={{
                  background: "#fff",
                  padding: "8px 8px 28px 8px",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.22), 0 2px 6px rgba(0,0,0,0.12)",
                  borderRadius: "2px",
                  transform: "rotate(-2deg)",
                  width: "220px",
                  flexShrink: 0,
                }}
              >
                <img
                  src={imageMaster3}
                  alt="Vishnu Sai Ram"
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "2px",
                    height: "280px",
                  }}
                />
              </Box>
            </Box>

            {/* Bio */}
            <Typography
              sx={{
                fontFamily: "var(--font-midorima)",
                fontSize: "1rem",
                mb: 4,
                lineHeight: 1.8,
                color: "#4A5568",
              }}
            >
              I'm a Frontend Developer and UI/UX enthusiast. Not just a
              developer, but a shinobi of the web, trained through real
              missions, failed builds, and late-night debugging sessions.
            </Typography>

            {/* Certifications */}
            <Box sx={{ mb: 4 }}>
              <Typography
                sx={{
                  fontFamily: "var(--font-the-last-shuriken)",
                  mb: 2,
                  fontSize: "1.3rem",
                  color: "#1A202C",
                }}
              >
                CERTIFIED SCROLLS
              </Typography>
              <Stack direction="row" flexWrap="wrap" gap={1.5}>
                {certifications.map((cert, index) => (
                  <Grow in={isVisible} timeout={800 + index * 200} key={cert.name}>
                    <Chip
                      label={cert.name}
                      sx={{
                        fontFamily: "var(--font-oswald)",
                        fontWeight: 600,
                        backgroundColor: cert.bg,
                        border: `2px solid ${cert.color}`,
                        color: cert.color,
                        borderRadius: "8px",
                        px: 0.5,
                        py: 2,
                        fontSize: "0.75rem",
                        "&:hover": { backgroundColor: cert.color, color: "#fff" },
                      }}
                    />
                  </Grow>
                ))}
              </Stack>
            </Box>

            {/* Stats */}
            <Grid container spacing={2}>
              {stats.map((stat) => (
                <Grid size={{ xs: 4 }} key={stat.label}>
                  <Box
                    sx={{
                      p: 1.5,
                      backgroundColor: "#fff",
                      border: `2px solid ${stat.color}`,
                      borderRadius: "10px",
                      textAlign: "center",
                      boxShadow: `4px 4px 0px ${stat.color}`,
                    }}
                  >
                    <Typography sx={{ fontFamily: "var(--font-the-last-shuriken)", fontSize: "1.6rem", color: stat.color, lineHeight: 1.2 }}>
                      {stat.value}
                    </Typography>
                    <Typography sx={{ fontFamily: "var(--font-oswald)", fontSize: "0.55rem", color: "#4A5568", textTransform: "uppercase", fontWeight: "bold", letterSpacing: "0.5px" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>
      </Box>

      <ChakraNaturesSection isVisible={isVisible} />
    </>
  );
};

/* ══════════════════════════════════════════════
   DESKTOP LAYOUT  (original layout, preserved)
═══════════════════════════════════════════════ */
const DesktopAboutLayout = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });

  return (
    <>
      <div style={{ height: "200vh", width: "100%", pointerEvents: "none" }} />

      <Box
        id="about"
        ref={ref}
        sx={{
          position: "absolute",
          top: "100vh",
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#FDF8F5",
          backgroundImage: "radial-gradient(#e2d5c4 1px, transparent 1px)",
          backgroundSize: "20px 20px",
          color: "#1A202C",
          overflow: "visible",
          "&::before": {
            content: '""',
            position: "absolute",
            top: -1,
            left: 0,
            right: 0,
            height: "250px",
            background: "linear-gradient(to bottom, var(--naruto_jumpsuit), transparent)",
            pointerEvents: "none",
            zIndex: 0,
          },
        }}
      >
        {/* ── Text Section (Right) ── */}
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: "50vw",
            height: "40vh",
            padding: "0 4% 0 2%",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ mt: "40px", ml: "18%" }}>
              <Typography
                variant="h6"
                sx={{ fontFamily: "var(--font-oswald)", color: "var(--naruto_collar)", letterSpacing: "3px", mb: 1, fontWeight: "bold" }}
              >
                — WHO AM I
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontFamily: "var(--font-the-last-shuriken)", fontSize: { xs: "3rem", md: "4.5rem" }, lineHeight: 1.1, mb: 4, color: "var(--itachi_cloak)" }}
              >
                THE SHINOBI <br />
                <span style={{ color: "var(--naruto_jumpsuit)" }}>BEHIND THE SCREEN</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "var(--font-midorima)", fontSize: "1.1rem", mb: 3, lineHeight: 1.8, color: "#4A5568" }}
              >
                I'm a Frontend Developer and UI/UX enthusiast. Not just a
                developer, but a shinobi of the web, trained through real
                missions, failed builds, and late-night debugging sessions.
              </Typography>

              <Box sx={{ mb: 6 }}>
                <Typography sx={{ fontFamily: "var(--font-the-last-shuriken)", mb: 2, fontSize: "1.5rem", color: "#1A202C" }}>
                  CERTIFIED SCROLLS
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1.5}>
                  {certifications.map((cert, index) => (
                    <Grow in={isVisible} timeout={1000 + index * 300} key={cert.name}>
                      <Chip
                        label={cert.name}
                        sx={{
                          fontFamily: "var(--font-oswald)",
                          fontWeight: 600,
                          backgroundColor: cert.bg,
                          border: `2px solid ${cert.color}`,
                          color: cert.color,
                          borderRadius: "8px",
                          px: 1,
                          py: 2.5,
                          transition: "var(--transition)",
                          "&:hover": { backgroundColor: cert.color, color: "#fff", transform: "scale(1.05)" },
                        }}
                      />
                    </Grow>
                  ))}
                </Stack>
              </Box>

              <Grid container spacing={3}>
                {stats.map((stat, index) => (
                  <Grid size={{ xs: 12, sm: 4 }} key={stat.label}>
                    <Slide direction="up" in={isVisible} timeout={800 + index * 200}>
                      <Box
                        sx={{
                          p: 2,
                          backgroundColor: "#fff",
                          border: `2px solid ${stat.color}`,
                          borderRadius: "12px",
                          textAlign: "center",
                          boxShadow: `5px 5px 0px ${stat.color}`,
                          transition: "var(--transition)",
                          "&:hover": { transform: "translate(-4px, -4px)", boxShadow: `8px 8px 0px ${stat.color}` },
                        }}
                      >
                        <Typography sx={{ fontFamily: "var(--font-the-last-shuriken)", fontSize: "2.2rem", color: stat.color }}>{stat.value}</Typography>
                        <Typography sx={{ fontFamily: "var(--font-oswald)", fontSize: "0.85rem", color: "#4A5568", textTransform: "uppercase", fontWeight: "bold" }}>{stat.label}</Typography>
                      </Box>
                    </Slide>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Fade>
        </Box>

        {/* ── Image Collage Section (Left, bleed out) ── */}
        <Box
          sx={{
            position: "absolute",
            left: "8%",
            top: "-80px",
            width: "50vw",
            height: "90vh",
            zIndex: 15,
            overflow: "visible",
          }}
        >
          <Fade in={isVisible} timeout={1500}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                width: "100%",
                "& .polaroid-card": {
                  position: "absolute",
                  background: "#fff",
                  padding: "8px 8px 24px 8px",
                  borderRadius: "2px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.2), 0 2px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  "& img": { width: "100%", height: "100%", objectFit: "cover", borderRadius: "2px", display: "block" },
                },
              }}
            >
              {aboutCollageImages.map((img, i) => (
                <Box
                  key={i}
                  className="polaroid-card"
                  sx={{
                    width: img.w,
                    height: img.h,
                    top: img.top,
                    left: (img as any).left,
                    right: (img as any).right,
                    bottom: (img as any).bottom,
                    zIndex: img.z,
                    transform: `rotate(${img.rotate}deg)`,
                    boxShadow: (img as any).noFrame ? "none !important" : (img as any).shadow,
                    background: (img as any).noFrame ? "transparent !important" : undefined,
                    padding: (img as any).noFrame ? "0 !important" : undefined,
                    "& img": (img as any).noFrame ? { objectFit: "contain !important" } : {},
                  }}
                >
                  <img src={img.src} alt={`Gallery ${i + 9}`} />
                </Box>
              ))}
            </Box>
          </Fade>
        </Box>
      </Box>

      <ChakraNaturesSection isVisible={isVisible} />
    </>
  );
};

/* ══════════════════════════════════════════════
   ROOT EXPORT
═══════════════════════════════════════════════ */
const AboutMe = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");
  return isMobile ? <MobileAboutLayout /> : <DesktopAboutLayout />;
};

export default AboutMe;
