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
  SiReact, SiNextdotjs, SiTypescript, SiRedux, SiTailwindcss, SiHtml5,
  SiJavascript, SiPython, SiCplusplus, SiFastapi, SiNodedotjs, SiExpress,
  SiWebrtc, SiPostgresql, SiRedis, SiMongodb, SiAppwrite, SiDocker,
  SiVercel, SiGit, SiGithub, SiGithubactions, SiLinux, SiPostman, SiFigma, SiFramer
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";



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
  { name: "Google UX Design Professional", color: "var(--naruto_jumpsuit)", bg: "#FFF5F0" },
  { name: "Microsoft AI Fundamentals",     color: "var(--sasuke_susanoo)",  bg: "#F8F5FA" },
  { name: "NxtWave Advanced Python",       color: "var(--naruto_collar)",   bg: "#F0F4FA" },
  { name: "NxtWave Full-Stack Development",color: "var(--zoro_bandana)",    bg: "#F0FAF4" },
];

const stats = [
  { label: "Production Apps Deployed", value: "5+", color: "var(--naruto_jumpsuit)" },
  { label: "Open Source Contributions", value: "Active", color: "var(--zoro_bandana)" },
  { label: "Engineering Focus", value: "AI & Systems", color: "var(--nami_log_pose)" },
];

export const portfolioSkills = {
  frontendArchitecture: [
    { name: "Next.js (App Router)", icon: "nextjs" },
    { name: "React.js 19", icon: "react" },
    { name: "Redux Toolkit", icon: "redux" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Framer Motion", icon: "framer" },
    { name: "ShadCN UI", icon: "react" }
  ],
  backendAndApiDesign: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express.js", icon: "express" },
    { name: "FastAPI (Python)", icon: "fastapi" },
    { name: "REST APIs", icon: "api" },
    { name: "WebRTC Voice Sockets", icon: "webrtc" }
  ],
  databasesAndCaching: [
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB (Mongoose)", icon: "mongodb" },
    { name: "Redis", icon: "redis" },
    { name: "Appwrite Engine", icon: "appwrite" }
  ],
  aiAndTooling: [
    { name: "LLM Orchestration (LangChain/Groq)", icon: "python" },
    { name: "RAG Pipelines", icon: "python" },
    { name: "Git & GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "Postman", icon: "postman" },
    { name: "Vercel", icon: "vercel" }
  ],
  uxUiDesign: [
    { name: "Figma", icon: "figma" },
    { name: "Information Architecture (IA)", icon: "figma" },
    { name: "Enterprise Design Systems", icon: "figma" },
    { name: "Data Visualization", icon: "react" }
  ]
};

const getIconElement = (iconName: string) => {
  switch (iconName) {
    case "typescript": return <SiTypescript />;
    case "python": return <SiPython />;
    case "sql": return <FaDatabase />;
    case "cpp": return <SiCplusplus />;
    case "javascript": return <SiJavascript />;
    case "nextjs": return <SiNextdotjs />;
    case "react": return <SiReact />;
    case "redux": return <SiRedux />;
    case "tailwindcss": return <SiTailwindcss />;
    case "htmlcss": return <SiHtml5 />;
    case "fastapi": return <SiFastapi />;
    case "nodejs": return <SiNodedotjs />;
    case "express": return <SiExpress />;
    case "webrtc": return <SiWebrtc />;
    case "api": return <FaDatabase />;
    case "postgresql": return <SiPostgresql />;
    case "redis": return <SiRedis />;
    case "mongodb": return <SiMongodb />;
    case "appwrite": return <SiAppwrite />;
    case "docker": return <SiDocker />;
    case "vercel": return <SiVercel />;
    case "github": return <SiGithub />;
    case "githubactions": return <SiGithubactions />;
    case "linux": return <SiLinux />;
    case "postman": return <SiPostman />;
    case "figma": return <SiFigma />;
    case "framer": return <SiFramer />;
    default: return <FaDatabase />;
  }
};

const chakraNatures = [
  {
    title: "🔥 FIRE",
    subtitle: "FRONTEND ARCHITECTURE",
    color: "var(--naruto_jumpsuit)",
    skills: portfolioSkills.frontendArchitecture.map(skill => ({
      name: skill.name,
      icon: getIconElement(skill.icon)
    }))
  },
  {
    title: "⚡ LIGHTNING",
    subtitle: "BACKEND & API DESIGN",
    color: "var(--sanji_hair)",
    skills: portfolioSkills.backendAndApiDesign.map(skill => ({
      name: skill.name,
      icon: getIconElement(skill.icon)
    }))
  },
  {
    title: "🌊 WATER",
    subtitle: "DATABASES & CACHING",
    color: "var(--nami_log_pose)",
    skills: portfolioSkills.databasesAndCaching.map(skill => ({
      name: skill.name,
      icon: getIconElement(skill.icon)
    }))
  },
  {
    title: "🪨 EARTH",
    subtitle: "AI & TOOLING",
    color: "var(--sasuke_susanoo)",
    skills: portfolioSkills.aiAndTooling.map(skill => ({
      name: skill.name,
      icon: getIconElement(skill.icon)
    }))
  },
  {
    title: "🌪️ WIND",
    subtitle: "UX/UI DESIGN",
    color: "var(--zoro_bandana)",
    skills: portfolioSkills.uxUiDesign.map(skill => ({
      name: skill.name,
      icon: getIconElement(skill.icon)
    }))
  }
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
        linear-gradient(135deg, var(--naruto_jumpsuit) 0%, var(--sanji_hair) 25%, var(--nami_log_pose) 50%, var(--sasuke_susanoo) 75%, var(--zoro_bandana) 100%)
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
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {chakraNatures.map((nature) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={nature.title}>
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
      {/* About content — normal flow on mobile */}
      <Box
        id="about"
        ref={ref}
        sx={{
          width: "100vw",
          backgroundColor: "#FDF8F5",
          backgroundImage: `
            radial-gradient(#e2d5c4 1px, transparent 1px),
            linear-gradient(135deg, rgba(246,108,45,0.12) 0%, rgba(244,208,63,0.12) 25%, rgba(91,200,232,0.12) 50%, rgba(106,55,119,0.12) 75%, rgba(26,107,60,0.12) 100%)
          `,
          backgroundSize: "20px 20px, 100% 100%",
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
              ENGINEERING COMPLEXITY.{" "}
              <span style={{ color: "var(--naruto_jumpsuit)" }}>
                DESIGNING CLARITY.
              </span>
            </Typography>


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
              I am a Full-Stack Software Engineer and UX Architect specializing in high-concurrency systems and enterprise-grade interfaces. I focus on enforcing strict data schemas, managing application state under tight constraints, and designing financial/data interfaces where every pixel serves a functional purpose.
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
      <Box
        id="about"
        ref={ref}
        sx={{
          position: "relative",
          width: "100vw",
          minHeight: "100vh",
          backgroundColor: "#FDF8F5",
          backgroundImage: `
            radial-gradient(#e2d5c4 1px, transparent 1px),
            linear-gradient(135deg, rgba(246,108,45,0.12) 0%, rgba(244,208,63,0.12) 25%, rgba(91,200,232,0.12) 50%, rgba(106,55,119,0.12) 75%, rgba(26,107,60,0.12) 100%)
          `,
          backgroundSize: "20px 20px, 100% 100%",
          color: "#1A202C",
          overflow: "visible",
          display: "flex",
          alignItems: "center",
          py: 12,
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
        {/* ── Text Section (Centered) ── */}
        <Box
          sx={{
            position: "relative",
            width: "84vw",
            maxWidth: "1400px",
            margin: "0 auto",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Fade in={isVisible} timeout={1000}>
            <Box sx={{ mt: "40px" }}>
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
                ENGINEERING COMPLEXITY. <br />
                <span style={{ color: "var(--naruto_jumpsuit)" }}>DESIGNING CLARITY.</span>
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontFamily: "var(--font-midorima)", fontSize: "1.1rem", mb: 3, lineHeight: 1.8, color: "#4A5568" }}
              >
                I am a Full-Stack Software Engineer and UX Architect specializing in high-concurrency systems and enterprise-grade interfaces. I focus on enforcing strict data schemas, managing application state under tight constraints, and designing financial/data interfaces where every pixel serves a functional purpose.
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
