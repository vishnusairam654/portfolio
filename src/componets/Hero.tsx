import { useEffect, useState } from "react";
import { Box, Typography, Stack, Fade, Slide, Grow } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const roles = [
  "Full-Stack Engineer",
  "UX/UI Architect",
  "AI Systems Builder",
];

const marqueeItems = [
  "React", "TypeScript", "Node.js", "Next.js", "MongoDB",
  "Tailwind", "MUI", "Figma", "Git", "Firebase"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  /* ── Typewriter effect ── */
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentRole.substring(0, displayText.length - 1)
              : currentRole.substring(0, displayText.length + 1)
          );
        },
        isDeleting ? 50 : 100
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <Box
      id="home"
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#FDF8F5",
        backgroundImage: `
          radial-gradient(#e2d5c4 1px, transparent 1px),
          linear-gradient(135deg, rgba(246,108,45,0.12) 0%, rgba(244,208,63,0.12) 25%, rgba(91,200,232,0.12) 50%, rgba(106,55,119,0.12) 75%, rgba(26,107,60,0.12) 100%)
        `,
        backgroundSize: "20px 20px, 100% 100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 16 }, // Space for navbar
        pb: { xs: 12, md: 10 },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "150px",
          background: "linear-gradient(to bottom, transparent, rgba(253,248,245, 1))",
          pointerEvents: "none",
          zIndex: 5,
        },
      }}
    >
       <Box sx={{
         flex: 1,
         display: "flex",
         flexDirection: { xs: "column", md: "row" },
         alignItems: "center",
         justifyContent: "center",
         maxWidth: "1400px",
         margin: "0 auto",
         px: { xs: 3, md: "6%" },
         gap: { xs: 6, md: 4 },
         width: "100%",
         zIndex: 1,
       }}>
         {/* ── Left Text Col ── */}
         <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "680px" }, textAlign: { xs: "center", md: "left" } }}>
           <Fade in={isVisible} timeout={800}>
             <Typography sx={{ fontFamily: "var(--font-oswald)", color: "var(--naruto_collar)", letterSpacing: "3px", mb: 2, fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, gap: 2 }}>
               <Box component="span" sx={{ width: 40, height: 2, backgroundColor: "var(--naruto_sage_red)" }} />
               HELLO, I'M
             </Typography>
           </Fade>

           <Slide direction="up" in={isVisible} timeout={1000}>
             <Box>
               <Typography variant="h1" sx={{ fontFamily: "var(--font-midorima)", fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem", lg: "6.5rem" }, lineHeight: 1, color: "var(--itachi_cloak)", mb: -1 }}>
                 VISHNU
               </Typography>
               <Typography variant="h1" sx={{ fontFamily: "var(--font-midorima)", fontSize: { xs: "3rem", sm: "4.5rem", md: "5.5rem", lg: "6.5rem" }, lineHeight: 1, color: "var(--naruto_jumpsuit)" }}>
                 SAI RAM<Box component="span" sx={{ color: "var(--naruto_sage_red)" }}>.</Box>
               </Typography>
             </Box>
           </Slide>

           <Fade in={isVisible} timeout={1400}>
             <Typography sx={{ fontFamily: "var(--font-the-last-shuriken)", fontSize: { xs: "1.2rem", md: "1.6rem" }, color: "var(--itachi_cloak)", mt: 3, mb: 2, display: "flex", alignItems: "center", justifyContent: { xs: "center", md: "flex-start" }, gap: 1.5 }}>
               <Box component="span" sx={{ width: 30, height: 2, backgroundColor: "var(--itachi_cloak)", flexShrink: 0, display: { xs: 'none', sm: 'block' } }} />
               {displayText}
               <Box component="span" sx={{ width: 2, height: "1.1em", backgroundColor: "var(--naruto_jumpsuit)", ml: 0.5, animation: "cursorBlink 0.8s step-end infinite", '@keyframes cursorBlink': { '0%, 100%': { opacity: 1 }, '50%': { opacity: 0 } } }} />
             </Typography>
           </Fade>

           <Fade in={isVisible} timeout={1600}>
             <Typography sx={{ fontFamily: "var(--font-midorima)", fontSize: { xs: "0.95rem", md: "1.1rem" }, color: "#4A5568", lineHeight: 1.8, maxWidth: "480px", mx: { xs: "auto", md: 0 }, mb: 4 }}>
               I build data-intensive backend systems, resilient AI pipelines, and intuitive interfaces. Bridging the gap between deterministic databases and non-deterministic AI through deliberate engineering.
             </Typography>
           </Fade>

           <Grow in={isVisible} timeout={1800}>
             <Stack direction="row" spacing={2} justifyContent={{ xs: "center", md: "flex-start" }} flexWrap="wrap" useFlexGap sx={{ gap: 2 }}>
                <Box
                  component="a"
                  href="#contact"
                  sx={{
                    display: "inline-flex", alignItems: "center", gap: 1, px: 4, py: 1.5,
                    backgroundColor: "var(--naruto_sage_red)", color: "#fff", border: "2px solid var(--naruto_sage_red)",
                    fontFamily: "var(--font-the-last-shuriken)", fontSize: "0.9rem", letterSpacing: "1.5px", textTransform: "uppercase",
                    borderRadius: "999px", textDecoration: "none", boxShadow: "4px 4px 0px var(--itachi_cloak)",
                    transition: "var(--transition)",
                    "&:hover": { transform: "translate(-2px, -2px)", boxShadow: "6px 6px 0px var(--itachi_cloak)", backgroundColor: "#c0233a" }
                  }}
                >
                  GET IN TOUCH <ArrowForwardIcon fontSize="small" />
                </Box>
                <Box
                  component="a"
                  href="#projects"
                  sx={{
                    display: "inline-flex", alignItems: "center", gap: 1, px: 4, py: 1.5,
                    backgroundColor: "#fff", color: "var(--itachi_cloak)", border: "2px solid var(--itachi_cloak)",
                    fontFamily: "var(--font-the-last-shuriken)", fontSize: "0.9rem", letterSpacing: "1.5px", textTransform: "uppercase",
                    borderRadius: "999px", textDecoration: "none", boxShadow: "4px 4px 0px var(--itachi_cloak)",
                    transition: "var(--transition)",
                    "&:hover": { transform: "translate(-2px, -2px)", boxShadow: "6px 6px 0px var(--itachi_cloak)", backgroundColor: "var(--itachi_cloak)", color: "#fff" }
                  }}
                >
                  VIEW WORK
                </Box>
             </Stack>
           </Grow>
         </Box>

         {/* ── Right Monogram / Graphic ── */}
         <Grow in={isVisible} timeout={1200}>
           <Box sx={{ flex: "0 0 auto", position: "relative", width: { xs: 260, md: 380 }, height: { xs: 260, md: 380 }, display: "flex", alignItems: "center", justifyContent: "center" }}>
             
             {/* Orbit Rings matching new theme */}
             <Box sx={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", border: "1.5px solid rgba(26,32,44,0.1)", animation: "ringRotate 20s linear infinite", '@keyframes ringRotate': { 'from': { transform: 'rotate(0deg)' }, 'to': { transform: 'rotate(360deg)' } } }} />
             <Box sx={{ position: "absolute", width: "80%", height: "80%", borderRadius: "50%", border: "1.5px dashed rgba(246,108,45,0.2)", animation: "ringRotate 15s linear infinite reverse" }} />
             
             {/* Monogram Box matching Bento aesthetic */}
             <Box sx={{
               width: { xs: 130, md: 170 }, height: { xs: 130, md: 170 },
               backgroundColor: "#fff", border: "4px solid var(--itachi_cloak)", borderRadius: "24px",
               display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
               boxShadow: "10px 10px 0px var(--naruto_jumpsuit)",
               transform: "rotate(-5deg)", transition: "var(--transition)",
               "&:hover": { transform: "rotate(0deg) scale(1.05)", boxShadow: "14px 14px 0px var(--naruto_jumpsuit)" },
               zIndex: 5,
             }}>
               <Typography sx={{ fontFamily: "var(--font-njnaruto)", fontSize: { xs: "2.4rem", md: "3.2rem" }, color: "var(--itachi_cloak)", lineHeight: 1 }}>
                 RAM.
               </Typography>
               <Typography sx={{ fontFamily: "var(--font-oswald)", fontSize: { xs: "0.55rem", md: "0.7rem" }, color: "var(--naruto_jumpsuit)", letterSpacing: "3px", fontWeight: "bold", mt: 1 }}>
                 ENGINEER & DESIGNER
               </Typography>
             </Box>

             {/* Floating Badges */}
             <Box sx={{ position: "absolute", top: "8%", right: "2%", px: 2, py: 1, backgroundColor: "#fff", border: "2px solid var(--itachi_cloak)", borderRadius: "999px", boxShadow: "4px 4px 0px var(--itachi_cloak)", fontFamily: "var(--font-oswald)", fontSize: "0.7rem", fontWeight: "bold", color: "var(--itachi_cloak)", zIndex: 6, animation: "badgeFloat 4s ease-in-out infinite alternate", '@keyframes badgeFloat': { '0%': { transform: 'translateY(0)' }, '100%': { transform: 'translateY(-12px)' } } }}>
               REACT + TS
             </Box>
             <Box sx={{ position: "absolute", bottom: "12%", left: "-2%", px: 2, py: 1, backgroundColor: "var(--naruto_jumpsuit)", border: "2px solid var(--itachi_cloak)", borderRadius: "999px", boxShadow: "4px 4px 0px var(--itachi_cloak)", fontFamily: "var(--font-oswald)", fontSize: "0.7rem", fontWeight: "bold", color: "#fff", zIndex: 6, animation: "badgeFloat 4s ease-in-out infinite alternate 1.5s" }}>
               UI FIRST
             </Box>
           </Box>
         </Grow>
       </Box>

       {/* ── Marquee matching new theme ── */}
       <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%", overflow: "hidden", backgroundColor: "#fff", borderTop: "2px solid var(--itachi_cloak)", py: 2, zIndex: 10 }}>
         <Box sx={{ display: "flex", whiteSpace: "nowrap", animation: "marqueeScroll 30s linear infinite", width: "max-content", '@keyframes marqueeScroll': { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-33.333%)' } } }}>
           {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
             <Typography key={i} sx={{ display: "inline-flex", alignItems: "center", fontFamily: "var(--font-oswald)", fontSize: "0.85rem", letterSpacing: "3px", fontWeight: "bold", color: "var(--itachi_cloak)", px: 4 }}>
               {item} <Box component="span" sx={{ color: "var(--naruto_jumpsuit)", ml: 8, fontSize: "0.6rem" }}>◆</Box>
             </Typography>
           ))}
         </Box>
       </Box>
    </Box>
  );
};

export default Hero;
