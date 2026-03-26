import { useState } from "react";
import { Box, Typography, Stack, Grid, Fade, Collapse } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiNinjaStar } from "react-icons/gi";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const navLinks = [
    { name: "HOME",     href: "#" },
    { name: "ABOUT",    href: "#about" },
    { name: "MISSIONS", href: "#projects" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "#050D1A",
        backgroundImage: "radial-gradient(rgba(246,108,45,0.08) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        color: "#FDF8F5",
        pt: { xs: 8, md: 12 },
        pb: 6,
        px: { xs: 4, md: 10 },
        overflow: "hidden",
        borderTop: "6px solid var(--naruto_jumpsuit)",
      }}
    >
      {/* ── CTA / Summoning ── */}
      <Box sx={{ textAlign: "center", mb: { xs: 7, md: 10 } }}>
        <Typography
          sx={{
            fontFamily: "var(--font-oswald)",
            color: "var(--naruto_jumpsuit)",
            letterSpacing: "4px",
            fontSize: { xs: "0.75rem", md: "1rem" },
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
            fontSize: { xs: "2.2rem", sm: "3rem", md: "5rem" },
            color: "#fff",
            lineHeight: 1.1,
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
              px: { xs: 3, md: 5 },
              py: { xs: 1.5, md: 2 },
              backgroundColor: copied ? "var(--zoro_bandana)" : "var(--naruto_jumpsuit)",
              color: "#fff",
              fontFamily: "var(--font-the-last-shuriken)",
              fontSize: { xs: "0.95rem", md: "1.2rem" },
              letterSpacing: "2px",
              textDecoration: "none",
              borderRadius: "4px",
              clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
              transition: "var(--transition)",
              boxShadow: copied
                ? "0 10px 30px rgba(26,107,60,0.4)"
                : "0 10px 30px rgba(246,108,45,0.4)",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: copied
                  ? "0 15px 40px rgba(26,107,60,0.6)"
                  : "0 15px 40px rgba(246,108,45,0.6)",
              },
            }}
          >
            <GiNinjaStar size={18} />
            {copied ? "COPIED!" : "SUMMON ME"}
          </Box>
        </Box>

        {/* Confirmation + links */}
        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Box sx={{ height: "24px", mb: 2 }}>
            <Fade in={copied}>
              <Typography
                sx={{
                  fontFamily: "var(--font-oswald)",
                  color: "var(--zoro_bandana)",
                  fontSize: "0.82rem",
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
              {[
                { href: "https://github.com/vishnusairam654", Icon: FaGithub, hoverBg: "var(--naruto_jumpsuit)" },
                { href: "#", Icon: FaLinkedin, hoverBg: "#0077b5" },
              ].map(({ href, Icon, hoverBg }) => (
                <Box
                  key={href}
                  component="a"
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  sx={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 50, height: 50, borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "#A0AEC0",
                    transition: "var(--transition)",
                    "&:hover": { backgroundColor: hoverBg, color: "#fff", transform: "scale(1.1)" },
                  }}
                >
                  <Icon size={22} />
                </Box>
              ))}
            </Stack>
          </Collapse>
        </Box>
      </Box>

      {/* ── Divider ── */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: { xs: 7, md: 10 } }}>
        <Box sx={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15))" }} />
        <GiNinjaStar size={28} color="var(--naruto_jumpsuit)" style={{ opacity: 0.8 }} />
        <Box sx={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(255,255,255,0.15))" }} />
      </Box>

      {/* ── 3-Column Info ── */}
      <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: { xs: 7, md: 10 } }}>
        {/* Branding */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Typography
            sx={{
              fontFamily: "var(--font-the-last-shuriken)",
              fontSize: { xs: "2rem", md: "2.5rem" },
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
              fontSize: { xs: "0.88rem", md: "0.95rem" },
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

        {/* Quick Nav */}
        <Grid size={{ xs: 6, sm: 6, md: 3 }}>
          <Typography sx={{ fontFamily: "var(--font-oswald)", fontSize: { xs: "1rem", md: "1.15rem" }, color: "#fff", letterSpacing: "2px", mb: 3 }}>
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
                  fontSize: { xs: "0.88rem", md: "0.95rem" },
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

        {/* Communication */}
        <Grid size={{ xs: 6, sm: 6, md: 4 }}>
          <Typography sx={{ fontFamily: "var(--font-oswald)", fontSize: { xs: "1rem", md: "1.15rem" }, color: "#fff", letterSpacing: "2px", mb: 3 }}>
            CONTACT
          </Typography>
          <Stack spacing={2.5}>
            {[
              { href: "https://github.com/vishnusairam654", Icon: FaGithub, label: "@vishnusairam654", hoverBg: "var(--naruto_jumpsuit)" },
              { href: "#", Icon: FaLinkedin, label: "LinkedIn", hoverBg: "#0077b5" },
            ].map(({ href, Icon, label, hoverBg }) => (
              <Box
                key={label}
                component="a"
                href={href}
                target={href !== "#" ? "_blank" : undefined}
                rel={href !== "#" ? "noopener noreferrer" : undefined}
                sx={{
                  display: "flex", alignItems: "center", gap: 1.5,
                  color: "#A0AEC0", textDecoration: "none",
                  transition: "var(--transition)",
                  "&:hover": { color: "#fff" },
                }}
              >
                <Box
                  sx={{
                    p: 1.25,
                    backgroundColor: "rgba(255,255,255,0.04)",
                    borderRadius: "8px",
                    transition: "var(--transition)",
                    flexShrink: 0,
                    "&:hover": { backgroundColor: hoverBg },
                  }}
                >
                  <Icon size={20} />
                </Box>
                <Typography sx={{ fontFamily: "var(--font-oswald)", letterSpacing: "1px", fontSize: { xs: "0.82rem", md: "1rem" } }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* ── Copyright ── */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography sx={{ fontFamily: "var(--font-midorima)", fontSize: { xs: "0.75rem", md: "0.85rem" }, color: "#718096", letterSpacing: "1px" }}>
          © {new Date().getFullYear()} VISHNU SAI RAM. ALL JUTSU MASTERED.
        </Typography>
        <Typography sx={{ fontFamily: "var(--font-oswald)", fontSize: { xs: "0.7rem", md: "0.8rem" }, color: "#4A5568", letterSpacing: "2px" }}>
          BUILT WITH CHAKRA & REACT
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
