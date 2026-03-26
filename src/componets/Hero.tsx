import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import img1 from "../assets/images/image_1.png";
import img2 from "../assets/images/image_2.png";
import img3 from "../assets/images/image_3.png";
import img4 from "../assets/images/image_4.png";
import img5 from "../assets/images/image_5.png";
import img6 from "../assets/images/image_6.png";
import img7 from "../assets/images/image_7.png";
import img8 from "../assets/images/image_8.png";
import imgMaster from "../assets/images/image_master.png";
import imgMaster2 from "../assets/images/image_master2.png";

const roles = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Open Source Contributor",
];

const collageImages = [
  { src: img1, w: 200, h: 250, top: "1%", left: "2%", rotate: -10, z: 3 },
  { src: img2, w: 180, h: 220, top: "5%", left: "55%", rotate: 7, z: 5 },
  { src: imgMaster, w: 300, h: 360, top: "22%", left: "25%", rotate: 0, z: 10 },
  { src: img3, w: 210, h: 160, top: "35%", left: "62%", rotate: -6, z: 6 },
  { src: img4, w: 180, h: 210, top: "40%", left: "5%", rotate: 12, z: 4 },
  { src: img5, w: 200, h: 200, top: "70%", left: "55%", rotate: -8, z: 1 },
  { src: img6, w: 175, h: 170, top: "50%", left: "20%", rotate: 10, z: 10 },
  { src: img7, w: 200, h: 250, top: "80%", left: "75%", rotate: -14, z: 7 },
  { src: img8, w: 190, h: 180, top: "1%", left: "32%", rotate: 5, z: 8 },
  { src: imgMaster2, w: 450, h: 300, top: "75%", left: "10%", rotate: 0, z: 11 },
];

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
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
    <section
      id="home"
      className="absolute top-0 left-0 w-screen h-screen bg-(--naruto_jumpsuit) overflow-hidden"
    >
      {/* ── Decorative background elements ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, var(--naruto_hair) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-[15%] -left-[5%] w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, var(--naruto_sage_red) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--naruto_hair) 1px, transparent 1px),
                              linear-gradient(90deg, var(--naruto_hair) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-(--naruto_hair) opacity-20"
            style={{
              top: `${15 + i * 18}%`,
              right: `${5 + i * 7}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* ── Image Collage — desktop only ── */}
      {!isMobile && (
        <div
          className="absolute top-[50%] right-0 -translate-y-1/2 w-[60vw] h-[60vh] z-5 pointer-events-auto overflow-visible"
          style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
        >
          {collageImages.map((img, i) => (
            <div
              key={i}
              className="polaroid-card"
              style={{
                width: img.w,
                height: img.h + 24,
                top: img.top,
                left: img.left,
                transform: `rotate(${img.rotate}deg)`,
                zIndex: img.z,
                animation: `fadeInUp 0.6s ease-out ${0.5 + i * 0.12}s both`,
              }}
            >
              <img src={img.src} alt={`Project ${i + 1}`} />
            </div>
          ))}
        </div>
      )}

      {/* ── Main text content ── */}
      <div
        className={`
          absolute left-0 top-[50%] -translate-y-1/2
          w-screen z-10 flex flex-col justify-center
          pointer-events-none
          ${isMobile ? "px-6 py-4" : "pl-[8%]"}
        `}
        style={{ height: isMobile ? "auto" : "45vh" }}
      >
        <div className="flex flex-col" style={{ gap: isMobile ? "14px" : "20px" }}>
          {/* Greeting */}
          <p
            className="font-the-last-shuriken text-(--naruto_sage_red) tracking-widest uppercase"
            style={{
              fontSize: isMobile ? "1rem" : "1.5rem",
              animation: "fadeInUp 0.6s ease-out both",
            }}
          >
            I'm
          </p>

          {/* Name */}
          <div
            className="hero-name-wrapper font-midorima leading-[0.9] whitespace-nowrap"
            style={{
              fontSize: isMobile
                ? "clamp(38px, 9vw, 58px)"
                : "clamp(80px, 12vw, 170px)",
              animation: "fadeInUp 0.6s ease-out 0.15s both",
            }}
          >
            {isMobile ? (
              /* Mobile: simple solid name, no dual-layer clip trick */
              <span style={{ color: "var(--naruto_hair)" }}>
                Vishnu Sai Ram
                <span style={{ color: "var(--naruto_sage_red)" }}>.</span>
              </span>
            ) : (
              /* Desktop: dual-layer stroke + solid clip */
              <>
                <span className="hero-name-stroke">Vishnu Sai Ram</span>
                <span className="hero-name-solid" aria-hidden="true">
                  Vishnu{" "}
                  <span
                    className="text-transparent"
                    style={{ color: "transparent" }}
                  >
                    Sai
                  </span>{" "}
                  Ram
                </span>
                <span className="text-(--naruto_sage_red)">.</span>
              </>
            )}

            {/* Handwritten underline */}
            <svg
              viewBox="0 0 300 12"
              className="block mt-2"
              style={{
                width: isMobile ? "min(100%, 260px)" : "clamp(300px, 60vw, 650px)",
                height: "16px",
                marginLeft: isMobile ? "0" : "auto",
              }}
              preserveAspectRatio="none"
            >
              <path
                d="M5 8 Q30 2, 55 7 T105 6 T155 8 T205 5 T255 7 T295 5"
                fill="none"
                stroke="var(--sasuke_belt)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hero-underline"
              />
            </svg>
          </div>

          {/* Typewriter role */}
          <div
            className="flex items-center gap-2"
            style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}
          >
            <span
              className="inline-block bg-(--naruto_hair)"
              style={{ width: isMobile ? "28px" : "40px", height: "2px" }}
            />
            <span
              className="font-the-last-shuriken text-white/90 tracking-wide"
              style={{ fontSize: isMobile ? "0.95rem" : "1.25rem" }}
            >
              {displayText}
              <span className="inline-block w-[2px] h-4 bg-(--naruto_hair) ml-1 align-middle animate-pulse" />
            </span>
          </div>

          {/* Short bio */}
          <p
            className="text-base leading-relaxed font-the-last-shuriken"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: isMobile ? "0.85rem" : "0.95rem",
              maxWidth: isMobile ? "100%" : "550px",
              animation: "fadeInUp 0.6s ease-out 0.45s both",
            }}
          >
            Building modern web experiences with clean code and creative design.
            Turning ideas into pixel-perfect, performant applications.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex items-center flex-wrap pointer-events-auto"
            style={{
              gap: isMobile ? "12px" : "16px",
              marginTop: isMobile ? "8px" : "24px",
              animation: "fadeInUp 0.6s ease-out 0.6s both",
            }}
          >
            <a
              href="#contact"
              className="no-underline cursor-pointer transition-transform duration-300 hover:scale-105"
              style={{
                padding: isMobile ? "10px 24px" : "12px 32px",
                backgroundColor: "var(--naruto_sage_red)",
                color: "#fff",
                fontFamily: "var(--font-the-last-shuriken)",
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                borderRadius: "999px",
                boxShadow: "0 4px 20px rgba(155,34,48,0.4)",
              }}
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="no-underline cursor-pointer transition-all duration-300"
              style={{
                padding: isMobile ? "10px 24px" : "12px 32px",
                border: "2px solid var(--naruto_hair)",
                color: "var(--naruto_hair)",
                fontFamily: "var(--font-the-last-shuriken)",
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                borderRadius: "999px",
              }}
            >
              View Work
            </a>
          </div>
        </div>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          from { transform: translateY(0); }
          to   { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
