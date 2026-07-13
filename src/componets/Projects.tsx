import { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Fade,
  Slide,
  Grow,
  Chip,
  Stack,
} from "@mui/material";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* ── Project Images ── */
import storeItImg from "../assets/project_images/store_it.png";
import creativeHeavenImg from "../assets/project_images/creative_heaven.png";
import wanderWayImg from "../assets/project_images/wander_way.png";
import voiceOfWordsImg from "../assets/project_images/voiceOfWords.png";
import cinemetricsImg from "../assets/project_images/cinemaetrics.png";
import nxtWatchImg from "../assets/project_images/nxtwatch.png";
import ebankImg from "../assets/project_images/ebank.png";
import stockPulseImg from "../assets/project_images/stockpulse.png";

const projectImages: Record<string, string> = {
  StoreIt: storeItImg,
  "Creative Haven": creativeHeavenImg,
  WanderWay: wanderWayImg,
  "Voice of Words": voiceOfWordsImg,
  CineMetrics: cinemetricsImg,
  "Nxt Watch": nxtWatchImg,
  EBank: ebankImg,
  StockPulse: stockPulseImg,
};

/* ── Hook ── */
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

/* ── Types ── */
type Rank = "S" | "A" | "B";
type FilterKey = "ALL" | Rank;

interface Project {
  rank: Rank;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  status: "complete" | "in-progress";
}

/* ── Rank Config ── */
const RC: Record<
  Rank,
  {
    color: string;
    bg: string;
    shadow: string;
    solidShadow: string;
    tierLabel: string;
  }
> = {
  S: {
    color: "var(--naruto_sage_red)",
    bg: "rgba(155,34,48,0.07)",
    shadow: "rgba(155,34,48,0.22)",
    solidShadow: "rgba(155,34,48,0.38)",
    tierLabel: "KAGE-LEVEL",
  },
  A: {
    color: "var(--sasuke_sharingan)",
    bg: "rgba(175,19,19,0.06)",
    shadow: "rgba(175,19,19,0.18)",
    solidShadow: "rgba(175,19,19,0.32)",
    tierLabel: "JOUNIN-LEVEL",
  },
  B: {
    color: "var(--naruto_collar)",
    bg: "rgba(8,44,140,0.06)",
    shadow: "rgba(8,44,140,0.18)",
    solidShadow: "rgba(8,44,140,0.32)",
    tierLabel: "CHUNIN-LEVEL",
  },
};

/* ── Projects Data ── */
const projects: Project[] = [
  {
    rank: "S",
    emoji: "🏦",
    title: "Vault Wire",
    subtitle: "Enterprise Fintech Ecosystem (Under Development)",
    description:
      "A comprehensive UX/UI design vision and architectural case study for a simulated centralized banking economy. Encompasses over 250 screens across Consumer, Bank Operations, and Central Authority altitudes, demonstrating complex information architecture, real-time data visualization, and absolute design restraint.",
    tech: [
      "Figma",
      "Information Architecture",
      "Data Visualization",
      "Design Systems",
      "FinTech UX",
    ],
    github: "#in-progress",
    live: "#in-progress",
    status: "in-progress",
  },
  {
    rank: "S",
    emoji: "✈️",
    title: "WanderWay",
    subtitle: "AI-Powered Travel & Route Architecture",
    description:
      "A highly scalable travel planning engine bridging LLM orchestration with structured relational data. Enforces strict JSON schema compliance from AI models, utilizes PostgreSQL B-Tree indexing for rapid routing, and layers Redis caching to drop redundant API latencies by 60%.",
    tech: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "LLM APIs",
      "TailwindCSS",
    ],
    github: "https://github.com/vishnusairam654/WanderWay.git",
    live: "https://wander-way-weld.vercel.app/",
    status: "complete",
  },
  {
    rank: "S",
    emoji: "🎙️",
    title: "Voice of Words",
    subtitle: "Conversational AI Document Engine",
    description:
      "Production-grade RAG platform engineered for high-concurrency ingestion. Enables users to hold real-time WebRTC voice/text conversations with uploaded documents. Mitigates server timeouts by offloading PDF/DOCX parsing entirely to browser-side web workers.",
    tech: [
      "Next.js",
      "React 19",
      "TypeScript",
      "MongoDB",
      "Clerk",
      "Vapi AI",
      "TailwindCSS",
    ],
    github: "https://github.com/vishnusairam654/voiceOfWords",
    live: "https://voice-of-words.vercel.app/",
    status: "complete",
  },
  {
    rank: "A",
    emoji: "🚀",
    title: "StoreIt",
    subtitle: "Cloud Asset Storage Engine",
    description:
      "Secure cloud storage platform designed to operate within strict container memory constraints. Handles concurrent, high-volume binary uploads using chunked segmentation pipelines and database-level ownership controls.",
    tech: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Appwrite",
      "TailwindCSS",
      "ShadCN UI",
    ],
    github: "https://github.com/vishnusairam654/StoreIt.git",
    live: "https://store-it-now.vercel.app/",
    status: "complete",
  },
  {
    rank: "B",
    emoji: "🎬",
    title: "CineMetrics",
    subtitle: "Movie Analytics Dashboard",
    description:
      "Data-driven media discovery platform that visualizes trends, ratings, and comparisons through clean, interactive React dashboards.",
    tech: ["React.js", "Node.js", "REST APIs", "Data Visualization"],
    github: "https://github.com/vishnusairam654/movie_app.git",
    live: "https://cinemetrics-flax.vercel.app/",
    status: "complete",
  },
  {
    rank: "B",
    emoji: "📺",
    title: "Nxt Watch",
    subtitle: "Video Streaming Architecture",
    description:
      "Full-featured media application with JWT authentication, protected routing, state management, and video playback functionality.",
    tech: [
      "React.js",
      "Styled-Components",
      "React Router",
      "Context API",
      "JWT",
    ],
    github: "https://github.com/vishnusairam654/NxtWatch_new.git",
    live: "https://nxtwatch-qzyh.vercel.app/",
    status: "complete",
  },
];

/* ── Project Image ── */
const ProjectImage = ({
  title,
  emoji,
  color,
}: {
  title: string;
  emoji: string;
  color: string;
}) => {
  const imgSrc = projectImages[title];
  return imgSrc ? (
    <Box
      component="img"
      src={imgSrc}
      alt={title}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "1px",
      }}
    />
  ) : (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        background: "#f5f0eb",
      }}
    >
      <Typography sx={{ fontSize: "2.5rem", lineHeight: 1 }}>
        {emoji}
      </Typography>
      <Typography
        sx={{
          fontFamily: "var(--font-oswald)",
          fontSize: "0.6rem",
          letterSpacing: "2px",
          color,
          opacity: 0.5,
        }}
      >
        SCREENSHOT INCOMING
      </Typography>
    </Box>
  );
};

/* ── Rank Section Header ── */
const RankHeader = ({ rank, color }: { rank: Rank; color: string }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      gap: { xs: 1.5, md: 2 },
      mb: 4,
      flexWrap: "wrap",
    }}
  >
    <Box
      sx={{
        width: 4,
        height: 36,
        backgroundColor: color,
        borderRadius: "2px",
        flexShrink: 0,
      }}
    />
    <Typography
      sx={{
        fontFamily: "var(--font-the-last-shuriken)",
        fontSize: { xs: "1.1rem", md: "1.4rem" },
        color,
        letterSpacing: { xs: "1px", md: "3px" },
        whiteSpace: "nowrap",
      }}
    >
      {rank}-RANK MISSIONS
    </Typography>
    <Box
      sx={{
        flex: 1,
        height: "1px",
        backgroundColor: color,
        opacity: 0.2,
        minWidth: "20px",
      }}
    />
    <Box
      sx={{
        px: 1.5,
        py: 0.4,
        border: `1px solid ${color}`,
        borderRadius: "4px",
        fontFamily: "var(--font-oswald)",
        fontSize: "0.65rem",
        color,
        letterSpacing: "2px",
        fontWeight: "bold",
        flexShrink: 0,
      }}
    >
      {RC[rank].tierLabel}
    </Box>
  </Box>
);

/* ── S-Rank Featured Card ── */
const SRankCard = ({
  proj,
  isVisible,
  delay,
}: {
  proj: Project;
  isVisible: boolean;
  delay: number;
}) => {
  const cfg = RC["S"];
  const isComplete = proj.status === "complete";
  return (
    <Slide direction="up" in={isVisible} timeout={900 + delay}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          background: "#ffffff",
          border: `2px solid ${cfg.color}`,
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: `8px 8px 0px ${cfg.shadow}`,
          transition: "var(--transition)",
          "&:hover": {
            transform: "translate(-4px, -4px)",
            boxShadow: `14px 14px 0px ${cfg.solidShadow}`,
          },
        }}
      >
        {/* Image area */}
        <Box
          sx={{
            width: { xs: "100%", md: "44%" },
            minHeight: { xs: 200, md: 360 },
            flexShrink: 0,
            position: "relative",
            background: "#f8f4f0",
            p: { xs: 1.5, md: 2 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 12,
              left: 12,
              px: 1.5,
              py: 0.5,
              backgroundColor: cfg.color,
              borderRadius: "4px",
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-oswald)",
                fontSize: "0.7rem",
                fontWeight: "bold",
                color: "#fff",
                letterSpacing: "1px",
              }}
            >
              ★★★ S-RANK
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              px: 1.5,
              py: 0.4,
              backgroundColor: isComplete ? "#F0FAF4" : "#FFFBEB",
              border: `1px solid ${isComplete ? "var(--zoro_bandana)" : "var(--nami_hair)"}`,
              borderRadius: "4px",
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-oswald)",
                fontSize: "0.6rem",
                fontWeight: "bold",
                color: isComplete ? "var(--zoro_bandana)" : "var(--nami_hair)",
              }}
            >
              {isComplete ? "✓ DONE" : "⌛ WIP"}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "88%",
              height: { xs: 160, md: 290 },
              background: "#fff",
              padding: { xs: "4px 4px 20px 4px", md: "6px 6px 28px 6px" },
              boxShadow:
                "0 4px 18px rgba(0,0,0,0.18), 0 2px 6px rgba(0,0,0,0.1)",
              borderRadius: "2px",
            }}
          >
            <ProjectImage
              title={proj.title}
              emoji={proj.emoji}
              color={cfg.color}
            />
          </Box>
        </Box>

        {/* Details */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 3, md: 5 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-oswald)",
              fontSize: "0.72rem",
              color: cfg.color,
              letterSpacing: "4px",
              fontWeight: "bold",
              mb: 0.75,
            }}
          >
            CLASSIFIED MISSION
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-the-last-shuriken)",
              fontSize: { xs: "2rem", md: "3rem" },
              lineHeight: 1,
              color: "var(--itachi_cloak)",
              mb: 0.5,
            }}
          >
            {proj.emoji} {proj.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-midorima)",
              fontSize: "0.95rem",
              color: "#718096",
              letterSpacing: "1px",
              mb: 3,
            }}
          >
            {proj.subtitle}
          </Typography>
          <Box sx={{ mb: 3, pl: 2.5, borderLeft: `3px solid ${cfg.color}` }}>
            <Typography
              sx={{
                fontFamily: "var(--font-midorima)",
                fontSize: "0.9rem",
                color: "#4A5568",
                lineHeight: 1.85,
              }}
            >
              {proj.description}
            </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "var(--font-oswald)",
              fontSize: "0.7rem",
              letterSpacing: "2px",
              color: "#A0AEC0",
              mb: 1.5,
              fontWeight: "bold",
            }}
          >
            JUTSU USED
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={1} mb={4}>
            {proj.tech.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  fontFamily: "var(--font-oswald)",
                  backgroundColor: cfg.bg,
                  border: `1px solid ${cfg.color}`,
                  color: "#4A5568",
                  fontSize: "0.72rem",
                  transition: "var(--transition)",
                  "&:hover": { backgroundColor: cfg.color, color: "#fff" },
                }}
              />
            ))}
          </Stack>
          <Stack direction="row" gap={2} flexWrap="wrap">
            <Box
              component={proj.github !== "#" ? "a" : "div"}
              href={proj.github !== "#" ? proj.github : undefined}
              target={proj.github !== "#" ? "_blank" : undefined}
              rel={proj.github !== "#" ? "noopener noreferrer" : undefined}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 3,
                py: 1.5,
                backgroundColor: cfg.color,
                color: "#fff",
                fontFamily: "var(--font-the-last-shuriken)",
                fontSize: "0.82rem",
                letterSpacing: "1px",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "var(--transition)",
                opacity: proj.github === "#" ? 0.5 : 1,
                pointerEvents: proj.github === "#" ? "none" : "auto",
                "&:hover": {
                  transform: proj.github !== "#" ? "scale(1.05)" : "none",
                },
              }}
            >
              <FaGithub size={14} />{" "}
              {proj.github !== "#" ? "SCROLL REPOSITORY" : "LOCKED"}
            </Box>
            {proj.live !== "#" && (
              <Box
                component="a"
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 3,
                  py: 1.5,
                  border: `2px solid ${cfg.color}`,
                  color: cfg.color,
                  fontFamily: "var(--font-the-last-shuriken)",
                  fontSize: "0.82rem",
                  letterSpacing: "1px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  transition: "var(--transition)",
                  "&:hover": { backgroundColor: cfg.color, color: "#fff" },
                }}
              >
                <FaExternalLinkAlt size={12} /> LIVE MISSION
              </Box>
            )}
          </Stack>
        </Box>
      </Box>
    </Slide>
  );
};

/* ── A/B Rank Project Card ── */
const ProjectCard = ({
  proj,
  isVisible,
  delay,
}: {
  proj: Project;
  isVisible: boolean;
  delay: number;
}) => {
  const cfg = RC[proj.rank];
  const isComplete = proj.status === "complete";
  return (
    <Grow in={isVisible} timeout={800 + delay}>
      <Box
        sx={{
          background: "#ffffff",
          border: `2px solid ${cfg.color}`,
          borderRadius: "12px",
          overflow: "hidden",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: `5px 5px 0px ${cfg.shadow}`,
          transition: "var(--transition)",
          "&:hover": {
            transform: "translate(-3px, -3px)",
            boxShadow: `9px 9px 0px ${cfg.solidShadow}`,
          },
        }}
      >
        {/* Image */}
        <Box
          sx={{
            position: "relative",
            height: proj.rank === "A" ? 150 : 130,
            background: "#f8f4f0",
            p: 1,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              px: 1.25,
              py: 0.35,
              backgroundColor: cfg.color,
              borderRadius: "4px",
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-oswald)",
                fontSize: "0.62rem",
                fontWeight: "bold",
                color: "#fff",
                letterSpacing: "1px",
              }}
            >
              {proj.rank === "A" ? "★★ A-RANK" : "★ B-RANK"}
            </Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              px: 1,
              py: 0.25,
              backgroundColor: isComplete ? "#F0FAF4" : "#FFFBEB",
              border: `1px solid ${isComplete ? "var(--zoro_bandana)" : "var(--nami_hair)"}`,
              borderRadius: "4px",
              zIndex: 2,
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-oswald)",
                fontSize: "0.58rem",
                fontWeight: "bold",
                color: isComplete ? "var(--zoro_bandana)" : "var(--nami_hair)",
              }}
            >
              {isComplete ? "✓ DONE" : "⌛ WIP"}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "92%",
              height: proj.rank === "A" ? 120 : 104,
              background: "#fff",
              padding: "4px 4px 18px 4px",
              boxShadow: "0 3px 10px rgba(0,0,0,0.12)",
              borderRadius: "2px",
            }}
          >
            <ProjectImage
              title={proj.title}
              emoji={proj.emoji}
              color={cfg.color}
            />
          </Box>
        </Box>

        {/* Body */}
        <Box
          sx={{
            p: { xs: 2, md: 2.5 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-the-last-shuriken)",
              fontSize: { xs: "1.4rem", md: "1.6rem" },
              color: "var(--itachi_cloak)",
              lineHeight: 1.1,
              mb: 0.5,
            }}
          >
            {proj.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-midorima)",
              fontSize: "0.75rem",
              color: cfg.color,
              letterSpacing: "1px",
              mb: 1.5,
            }}
          >
            {proj.subtitle}
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-midorima)",
              fontSize: "0.83rem",
              color: "#4A5568",
              lineHeight: 1.75,
              mb: 2,
              flex: 1,
            }}
          >
            {proj.description}
          </Typography>
          <Stack direction="row" flexWrap="wrap" gap={0.75} mb={2.5}>
            {proj.tech.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  fontFamily: "var(--font-oswald)",
                  backgroundColor: cfg.bg,
                  border: `1px solid ${cfg.color}`,
                  color: "#4A5568",
                  fontSize: "0.66rem",
                  height: "22px",
                  transition: "var(--transition)",
                  "&:hover": { backgroundColor: cfg.color, color: "#fff" },
                }}
              />
            ))}
          </Stack>
          <Stack direction="row" gap={1.5}>
            <Box
              component={proj.github !== "#" ? "a" : "div"}
              href={proj.github !== "#" ? proj.github : undefined}
              target={proj.github !== "#" ? "_blank" : undefined}
              rel={proj.github !== "#" ? "noopener noreferrer" : undefined}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.75,
                px: 2,
                py: 0.75,
                backgroundColor: cfg.color,
                color: "#fff",
                fontFamily: "var(--font-oswald)",
                fontSize: "0.73rem",
                letterSpacing: "1px",
                fontWeight: "bold",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "var(--transition)",
                opacity: proj.github === "#" ? 0.5 : 1,
                pointerEvents: proj.github === "#" ? "none" : "auto",
                "&:hover": {
                  transform: proj.github !== "#" ? "scale(1.05)" : "none",
                },
              }}
            >
              <FaGithub size={12} /> {proj.github !== "#" ? "CODE" : "LOCKED"}
            </Box>
            {proj.live !== "#" && (
              <Box
                component="a"
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.75,
                  px: 2,
                  py: 0.75,
                  border: `2px solid ${cfg.color}`,
                  color: cfg.color,
                  fontFamily: "var(--font-oswald)",
                  fontSize: "0.73rem",
                  letterSpacing: "1px",
                  fontWeight: "bold",
                  borderRadius: "999px",
                  textDecoration: "none",
                  transition: "var(--transition)",
                  "&:hover": { backgroundColor: cfg.color, color: "#fff" },
                }}
              >
                <FaExternalLinkAlt size={11} /> LIVE
              </Box>
            )}
          </Stack>
        </Box>
      </Box>
    </Grow>
  );
};

/* ── Main Projects Component ── */
const Projects = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState<FilterKey>("ALL");

  const visible =
    activeFilter === "ALL"
      ? projects
      : projects.filter((p) => p.rank === activeFilter);
  const sRank = visible.filter((p) => p.rank === "S");
  const aRank = visible.filter((p) => p.rank === "A");
  const bRank = visible.filter((p) => p.rank === "B");

  const filters: { key: FilterKey; label: string; color: string }[] = [
    { key: "ALL", label: "ALL", color: "var(--naruto_jumpsuit)" },
    { key: "S", label: "★★★ S", color: "var(--naruto_sage_red)" },
    { key: "A", label: "★★ A", color: "var(--sasuke_sharingan)" },
    { key: "B", label: "★ B", color: "var(--naruto_collar)" },
  ];

  return (
    <Box
      id="projects"
      ref={ref}
      sx={{
        position: "relative",
        width: "100vw",
        backgroundColor: "var(--hinata_jacket)",
        backgroundImage: "radial-gradient(#e2d5c4 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        color: "#1A202C",
        overflow: "hidden",
        pb: { xs: 10, md: 14 },
      }}
    >
      {/* ── Section Header ── */}
      <Box
        sx={{
          textAlign: "center",
          pt: { xs: 8, md: 10 },
          pb: { xs: 5, md: 8 },
          px: 3,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Fade in={isVisible} timeout={800}>
          <Box>
            <Typography
              sx={{
                fontFamily: "var(--font-oswald)",
                color: "var(--naruto_collar)",
                letterSpacing: "4px",
                mb: 1.5,
                fontWeight: "bold",
                fontSize: { xs: "0.75rem", md: "0.9rem" },
              }}
            >
              — MISSION BRIEFINGS —
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--font-the-last-shuriken)",
                fontSize: { xs: "2rem", md: "5rem" },
                lineHeight: 1.1,
                color: "var(--itachi_cloak)",
                mb: 1,
              }}
            >
              THE GRAND LINE{" "}
              <span style={{ color: "var(--naruto_jumpsuit)" }}>ROUTES</span>
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--font-midorima)",
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: "#718096",
                mb: 5,
                letterSpacing: "0.5px",
              }}
            >
              Every mission logged. Every jutsu deployed.
            </Typography>

            {/* Filter Tabs */}
            <Stack
              direction="row"
              justifyContent="center"
              flexWrap="wrap"
              gap={1.5}
            >
              {filters.map(({ key, label, color }) => (
                <Box
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  sx={{
                    px: { xs: 2, md: 3 },
                    py: { xs: 0.75, md: 1 },
                    cursor: "pointer",
                    fontFamily: "var(--font-oswald)",
                    fontWeight: "bold",
                    fontSize: { xs: "0.78rem", md: "0.85rem" },
                    letterSpacing: "2px",
                    borderRadius: "999px",
                    border: `2px solid ${color}`,
                    backgroundColor:
                      activeFilter === key ? color : "transparent",
                    color: activeFilter === key ? "#fff" : color,
                    transition: "var(--transition)",
                    userSelect: "none",
                    "&:hover": { transform: "scale(1.05)" },
                  }}
                >
                  {label}
                </Box>
              ))}
            </Stack>
          </Box>
        </Fade>
      </Box>

      {/* ── S-Rank ── */}
      {sRank.length > 0 && (
        <Box
          sx={{
            px: { xs: 3, md: 8, lg: 10 },
            mb: { xs: 7, md: 10 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <RankHeader rank="S" color="var(--naruto_sage_red)" />
          <Stack spacing={4}>
            {sRank.map((proj, i) => (
              <SRankCard
                key={proj.title}
                proj={proj}
                isVisible={isVisible}
                delay={i * 200}
              />
            ))}
          </Stack>
        </Box>
      )}

      {/* ── A-Rank ── */}
      {aRank.length > 0 && (
        <Box
          sx={{
            px: { xs: 3, md: 8, lg: 10 },
            mb: { xs: 7, md: 10 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <RankHeader rank="A" color="var(--sasuke_sharingan)" />
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {aRank.map((proj, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={proj.title}>
                <ProjectCard
                  proj={proj}
                  isVisible={isVisible}
                  delay={i * 150}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* ── B-Rank ── */}
      {bRank.length > 0 && (
        <Box
          sx={{
            px: { xs: 3, md: 8, lg: 10 },
            mb: { xs: 7, md: 10 },
            position: "relative",
            zIndex: 1,
          }}
        >
          <RankHeader rank="B" color="var(--naruto_collar)" />
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {bRank.map((proj, i) => (
              <Grid size={{ xs: 12, sm: 6 }} key={proj.title}>
                <ProjectCard
                  proj={proj}
                  isVisible={isVisible}
                  delay={i * 150}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {/* ── Footer CTA ── */}
      <Box sx={{ textAlign: "center", pt: 4, position: "relative", zIndex: 1 }}>
        <Fade in={isVisible} timeout={1600}>
          <Box>
            <Typography
              sx={{
                fontFamily: "var(--font-the-last-shuriken)",
                fontSize: { xs: "0.85rem", md: "1.1rem" },
                color: "#A0AEC0",
                mb: 3,
                letterSpacing: "2px",
              }}
            >
              MORE MISSIONS IN THE SCROLLS
            </Typography>
            <Box
              component="a"
              href="https://github.com/vishnusairam654"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: { xs: 4, md: 5 },
                py: { xs: 1.5, md: 1.75 },
                backgroundColor: "var(--naruto_jumpsuit)",
                color: "#fff",
                fontFamily: "var(--font-the-last-shuriken)",
                fontSize: { xs: "0.85rem", md: "1rem" },
                letterSpacing: "2px",
                borderRadius: "999px",
                textDecoration: "none",
                boxShadow: "0 4px 22px rgba(246,108,45,0.35)",
                transition: "var(--transition)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 6px 32px rgba(246,108,45,0.5)",
                },
              }}
            >
              <FaGithub size={18} /> VIEW ALL MISSIONS
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default Projects;
