import { useState } from "react";
import { Box, Typography, Stack, Grid, Fade, Collapse, Grow } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiNinjaStar } from "react-icons/gi";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "MISSIONS", href: "#projects" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "#050D1A",
        // Soft dot grid to match the tactical theme
        backgroundImage:
          "radial-gradient(rgba(246, 108, 45, 0.08) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        color: "#FDF8F5",
        pt: 12,
        pb: 6,
        px: { xs: 4, md: 10 },
        overflow: "hidden",
        borderTop: "6px solid var(--naruto_jumpsuit)",
      }}
    >
      {/* ── CTA / SUMMONING SECTION ── */}
      <Box sx={{ textAlign: "center", mb: 10 }}>
        <Typography
          sx={{
            fontFamily: "var(--font-oswald)",
            color: "var(--naruto_jumpsuit)",
            letterSpacing: "4px",
            fontSize: "1rem",
            fontWeight: "bold",
            mb: 2,
          }}
        >
          — INITIATE CONTACT —
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "var(--font-the-last-shuriken)",
            fontSize: { xs: "3rem", md: "5rem" },
            color: "#fff",
            lineHeight: 1,
            mb: 5,
          }}
        >
          READY FOR A <br />
          <span style={{ color: "var(--sanji_hair)" }}>NEW MISSION?</span>
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="a"
            href="mailto:vishnusairam654@gmail.com"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              navigator.clipboard.writeText("vishnusairam654@gmail.com");
              setCopied(true);
              setShowLinks(true);
              setTimeout(() => setCopied(false), 3000);
            }}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1.5,
              cursor: "pointer",
              px: { xs: 4, md: 5 },
              py: 2,
              backgroundColor: copied ? "var(--zoro_bandana)" : "var(--naruto_jumpsuit)",
              color: "#fff",
              fontFamily: "var(--font-the-last-shuriken)",
              fontSize: "1.2rem",
              letterSpacing: "2px",
              textDecoration: "none",
              borderRadius: "4px",
              // slight skew for scroll / dynamic feel
              clipPath:
                "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
              transition: "var(--transition)",
              boxShadow: copied ? "0 10px 30px rgba(26,107,60,0.4)" : "0 10px 30px rgba(246,108,45,0.4)",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: copied ? "0 15px 40px rgba(26,107,60,0.6)" : "0 15px 40px rgba(246,108,45,0.6)",
              },
            }}
          >
            <GiNinjaStar size={20} /> {copied ? "COPIED!" : "SUMMON ME"}
          </Box>
        </Box>

        {/* Confirmation Text & Hidden Links */}
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ height: "24px", mb: 2 }}>
            <Fade in={copied}>
              <Typography
                sx={{
                  fontFamily: "var(--font-oswald)",
                  color: "var(--zoro_bandana)",
                  fontSize: "0.85rem",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                }}
              >
                EMAIL COPIED TO CLIPBOARD
              </Typography>
            </Fade>
          </Box>

          <Collapse in={showLinks}>
            <Stack direction="row" spacing={3} justifyContent="center" alignItems="center">
              <Box
                component="a"
                href="https://github.com/vishnusairam654"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: "48px", md: "54px" },
                  height: { xs: "48px", md: "54px" },
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "#A0AEC0",
                  transition: "var(--transition)",
                  "&:hover": { backgroundColor: "var(--naruto_jumpsuit)", color: "#fff", transform: "scale(1.1)" }
                }}
              >
                <FaGithub size={24} />
              </Box>
    
              <Box
                component="a"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: { xs: "48px", md: "54px" },
                  height: { xs: "48px", md: "54px" },
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "#A0AEC0",
                  transition: "var(--transition)",
                  "&:hover": { backgroundColor: "#0077b5", color: "#fff", transform: "scale(1.1)" }
                }}
              >
                <FaLinkedin size={24} />
              </Box>
            </Stack>
          </Collapse>
        </Box>
      </Box>

      {/* ── THEMATIC DIVIDER ── */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 10 }}>
        <Box
          sx={{
            flex: 1,
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.15))",
          }}
        />
        <GiNinjaStar
          size={32}
          color="var(--naruto_jumpsuit)"
          style={{ opacity: 0.8 }}
        />
        <Box
          sx={{
            flex: 1,
            height: "1px",
            background:
              "linear-gradient(to left, transparent, rgba(255,255,255,0.15))",
          }}
        />
      </Box>

      {/* ── 3-COLUMN INFO ── */}
      <Grid container spacing={6} sx={{ mb: 10 }}>
        {/* BRANDING */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            sx={{
              fontFamily: "var(--font-the-last-shuriken)",
              fontSize: "2.5rem",
              letterSpacing: "3px",
              color: "var(--naruto_jumpsuit)",
              lineHeight: 1,
              mb: 2.5,
            }}
          >
            VISHNU'S VIEW
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-midorima)",
              fontSize: "0.95rem",
              color: "#A0AEC0",
              lineHeight: 1.8,
              maxWidth: "350px",
            }}
          >
            Crafting high-level jutsu for the modern web. I engineer seamless,
            performant, and incredibly aesthetic digital experiences from the
            shadows of my IDE.
          </Typography>
        </Grid>

        {/* QUICK NAVIGATION */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Typography
            sx={{
              fontFamily: "var(--font-oswald)",
              fontSize: "1.15rem",
              color: "#fff",
              letterSpacing: "2px",
              mb: 3,
            }}
          >
            QUICK TRAVEL
          </Typography>
          <Stack spacing={1.5}>
            {navLinks.map((link) => (
              <Box
                key={link.name}
                component="a"
                href={link.href}
                sx={{
                  fontFamily: "var(--font-oswald)",
                  fontSize: "0.95rem",
                  color: "#A0AEC0",
                  textDecoration: "none",
                  letterSpacing: "1px",
                  width: "fit-content",
                  transition: "var(--transition)",
                  "&:hover": { color: "var(--sanji_hair)", paddingLeft: "6px" },
                }}
              >
                {link.name}
              </Box>
            ))}
          </Stack>
        </Grid>

        {/* SOCIAL COMS */}
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <Typography
            sx={{
              fontFamily: "var(--font-oswald)",
              fontSize: "1.15rem",
              color: "#fff",
              letterSpacing: "2px",
              mb: 3,
            }}
          >
            COMMUNICATION
          </Typography>
          <Stack spacing={2.5}>
            {/* GITHUB */}
            <Box
              component="a"
              href="https://github.com/vishnusairam654"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "#A0AEC0",
                textDecoration: "none",
                transition: "var(--transition)",
                "&:hover": { color: "#fff" },
              }}
            >
              <Box
                sx={{
                  p: 1.5,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderRadius: "8px",
                  transition: "var(--transition)",
                  "&:hover": { backgroundColor: "var(--naruto_jumpsuit)" },
                }}
              >
                <FaGithub size={22} />
              </Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-oswald)",
                  letterSpacing: "1px",
                  fontSize: "1rem",
                }}
              >
                @vishnusairam654
              </Typography>
            </Box>

            {/* LINKEDIN */}
            <Box
              component="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: "#A0AEC0",
                textDecoration: "none",
                transition: "var(--transition)",
                "&:hover": { color: "#0077b5" }, // LinkedIn blue
              }}
            >
              <Box
                sx={{
                  p: 1.5,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderRadius: "8px",
                  transition: "var(--transition)",
                  "&:hover": { backgroundColor: "#0077b5", color: "#fff" },
                }}
              >
                <FaLinkedin size={22} />
              </Box>
              <Typography
                sx={{
                  fontFamily: "var(--font-oswald)",
                  letterSpacing: "1px",
                  fontSize: "1rem",
                }}
              >
                Connect on LinkedIn
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>

      {/* ── COPYRIGHT BAR ── */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "var(--font-midorima)",
            fontSize: "0.85rem",
            color: "#718096",
            letterSpacing: "1px",
          }}
        >
          © {new Date().getFullYear()} VISHNU SAI RAM. ALL JUTSU MASTERED.
        </Typography>
        <Typography
          sx={{
            fontFamily: "var(--font-oswald)",
            fontSize: "0.8rem",
            color: "#4A5568",
            letterSpacing: "2px",
          }}
        >
          BUILT WITH CHAKRA & REACT
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
