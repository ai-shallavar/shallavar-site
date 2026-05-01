"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface LogoProps {
  variant?: "horizontal" | "vertical" | "icon-only" | "header";
  size?: "sm" | "md" | "lg";
  className?: string;
  animated?: boolean;
}

export default function Logo({
  variant = "horizontal",
  size = "md",
  className = "",
  animated = true,
}: LogoProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const sizeClasses = {
    sm: "h-10",
    md: "h-14",
    lg: "h-20",
  };

  // Handle entrance animation
  useEffect(() => {
    const timer = setTimeout(() => setHasEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Track mouse position for parallax effect on header logo
  useEffect(() => {
    if (variant !== "icon-only" || !animated) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setMousePos({
        x: (e.clientX - centerX) / rect.width,
        y: (e.clientY - centerY) / rect.height,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [variant, animated]);

  // For header variant, render butterfly icon + brand name text horizontally
  if (variant === "header") {
    return (
      <div
        ref={containerRef}
        className={`relative inline-flex items-center gap-1.5 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated butterfly icon on the left */}
        <div
          className="relative inline-flex items-center justify-center flex-shrink-0 aspect-square"
          style={{
            width: size === "lg" ? "48px" : size === "sm" ? "28px" : "36px",
            height: size === "lg" ? "48px" : size === "sm" ? "28px" : "36px",
          }}
        >
          {/* Orbiting sparkle particles for header variant */}
          {animated && (
            <>
              <div
                className="absolute w-1.5 h-1.5 rounded-full bg-[#4192D9] pointer-events-none"
                style={{
                  top: "50%",
                  left: "50%",
                  opacity: isHovered ? 0.9 : 0,
                  transform: `translate(-50%, -50%) rotate(${hasEntered ? 360 : 0}deg) translateX(${isHovered ? 24 : 18}px)`,
                  transition: "opacity 0.5s ease, transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  boxShadow: "0 0 8px rgba(65,146,217,0.6)",
                }}
              />
              <div
                className="absolute w-1 h-1 rounded-full bg-white pointer-events-none"
                style={{
                  top: "50%",
                  left: "50%",
                  opacity: isHovered ? 0.8 : 0,
                  transform: `translate(-50%, -50%) rotate(${hasEntered ? 180 : 0}deg) translateX(${isHovered ? 28 : 20}px)`,
                  transition: "opacity 0.5s ease 0.2s, transform 2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
                  boxShadow: "0 0 10px rgba(255,255,255,0.8)",
                }}
              />
            </>
          )}

          {/* Entrance + hover animation wrapper for butterfly */}
          <div
            className="relative w-full h-full"
            style={{
              transform: hasEntered 
                ? `translate(${isHovered ? mousePos.x * 6 : mousePos.x * 3}px, ${isHovered ? mousePos.y * 6 : mousePos.y * 3}px)`
                : "translateY(20px) scale(0.8)",
              opacity: hasEntered ? 1 : 0,
              transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease",
            }}
          >
            <ButterflyIcon animated={animated} isHovered={isHovered} />
          </div>
        </div>

        {/* Brand name text with animation */}
        <div className="flex flex-col justify-center overflow-hidden">
          <span 
            className="font-headline font-bold tracking-tight transition-all duration-500 ease-out"
            style={{
              fontSize: size === "lg" ? "20px" : size === "sm" ? "14px" : "17px",
              color: "#1C1B1F",
              lineHeight: 1.2,
              transform: animated && isHovered ? "translateX(4px)" : "translateX(0)",
              textShadow: animated && isHovered ? "drop-shadow(0 0 8px rgba(65,146,217,0.3))" : "none",
              transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), text-shadow 0.5s ease-out",
            }}
          >
            Shallavar
          </span>
          <span 
            className="font-label font-medium tracking-[0.25em] uppercase transition-all duration-500 ease-out"
            style={{
              fontSize: size === "lg" ? "10px" : size === "sm" ? "9px" : "10px",
              color: isHovered ? "#4192D9" : "#505F60",
              lineHeight: 1.2,
              transform: animated && isHovered ? "translateX(4px)" : "translateX(0)",
              letterSpacing: isHovered ? "0.35em" : "0.25em",
              transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), color 0.5s ease-out, letter-spacing 0.5s ease-out",
            }}
          >
            Technologies
          </span>
        </div>
      </div>
    );
  }

  // For icon-only variant, render the animated butterfly SVG inline
  if (variant === "icon-only") {
    return (
      <div
        ref={containerRef}
        className={`relative inline-flex items-center justify-center ${
          variant === "icon-only" ? "aspect-square " + sizeClasses[size] : sizeClasses[size]
        } ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Orbiting sparkle particles */}
        {animated && (
          <>
            <div
              className="absolute w-1.5 h-1.5 rounded-full bg-[#4192D9] pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                opacity: isHovered ? 0.9 : 0,
                transform: `translate(-50%, -50%) rotate(${hasEntered ? 360 : 0}deg) translateX(${isHovered ? 32 : 24}px)`,
                transition: "opacity 0.5s ease, transform 1.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
                boxShadow: "0 0 8px rgba(65,146,217,0.6)",
              }}
            />
            <div
              className="absolute w-1 h-1 rounded-full bg-[#16325B] pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                opacity: isHovered ? 0.7 : 0,
                transform: `translate(-50%, -50%) rotate(${hasEntered ? -360 : 0}deg) translateX(${isHovered ? 28 : 20}px)`,
                transition: "opacity 0.5s ease 0.1s, transform 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
                boxShadow: "0 0 6px rgba(22,50,91,0.5)",
              }}
            />
            <div
              className="absolute w-1 h-1 rounded-full bg-white pointer-events-none"
              style={{
                top: "50%",
                left: "50%",
                opacity: isHovered ? 0.8 : 0,
                transform: `translate(-50%, -50%) rotate(${hasEntered ? 180 : 0}deg) translateX(${isHovered ? 36 : 26}px)`,
                transition: "opacity 0.5s ease 0.2s, transform 2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
                boxShadow: "0 0 10px rgba(255,255,255,0.8)",
              }}
            />
          </>
        )}

        {/* Entrance + hover animation wrapper */}
        <div
          className="relative w-full h-full"
          style={{
            transform: hasEntered 
              ? `translate(${isHovered ? mousePos.x * 6 : mousePos.x * 3}px, ${isHovered ? mousePos.y * 6 : mousePos.y * 3}px)`
              : "translateY(20px) scale(0.8)",
            opacity: hasEntered ? 1 : 0,
            transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease",
          }}
        >
          <ButterflyIcon animated={animated} isHovered={isHovered} />
        </div>
      </div>
    );
  }

  // For horizontal/vertical, use the full logo image with elegant hover effects
  const logoSrc =
    variant === "vertical"
      ? "/Shallavar_logos/verticalLogowithTagOnly.svg"
      : "/Shallavar_logos/logoWithTagOnly.svg";

  return (
    <div
      className={`relative inline-flex items-center ${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating particles on hover */}
      {animated && (
        <>
          {/* Particle 1 - top left */}
          <div
            className="absolute w-1 h-1 rounded-full bg-[#4192D9] transition-all duration-700 ease-out"
            style={{
              top: isHovered ? "-4px" : "20%",
              left: isHovered ? "-8px" : "10%",
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scale(1.5)" : "scale(0.5)",
            }}
          />
          {/* Particle 2 - top right */}
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-[#16325B] transition-all duration-700 ease-out delay-75"
            style={{
              top: isHovered ? "-2px" : "15%",
              right: isHovered ? "-6px" : "10%",
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scale(1.3)" : "scale(0.3)",
            }}
          />
          {/* Particle 3 - bottom */}
          <div
            className="absolute w-0.5 h-1 rounded-full bg-[#4192D9] transition-all duration-700 ease-out delay-150"
            style={{
              bottom: isHovered ? "2px" : "30%",
              left: isHovered ? "4px" : "50%",
              opacity: isHovered ? 0.8 : 0,
            }}
          />
        </>
      )}

      {/* Logo image with subtle float effect */}
      <Image
        src={logoSrc}
        alt="Shallavar Technologies"
        width={0}
        height={0}
        className={`relative h-full w-auto object-contain transition-all duration-500 ease-out`}
        style={{
          transform: animated && isHovered ? "translateY(-2px)" : "translateY(0)",
          filter: animated && isHovered ? "drop-shadow(0 4px 12px rgba(65,146,217,0.25))" : "drop-shadow(0 1px 2px rgba(0,0,0,0.05))",
          transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), filter 0.5s ease-out",
        }}
        sizes="100vw"
      />
    </div>
  );
}

/**
 * Inline SVG butterfly icon - WHOLE butterfly moves as ONE cohesive unit.
 * The entire SVG group bobs up/down and tilts slightly like a real butterfly flying.
 * No individual wing animation - the butterfly stays together as one piece.
 * Colors: #16325B (dark blue), #4192D9 (bright blue)
 */
function ButterflyIcon({ animated, isHovered }: { animated: boolean; isHovered: boolean }) {
  const [time, setTime] = useState(0);

  // Continuous animation loop for flight bob
  useEffect(() => {
    if (!animated) return;

    let animationId: number;
    const startTime = Date.now();

    const animate = () => {
      setTime((Date.now() - startTime) / 1000);
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [animated]);

  // WHOLE butterfly flying motion - the ENTIRE SVG moves as one unit
  const flyY = animated ? Math.sin(time * (isHovered ? 3.5 : 2)) * (isHovered ? 4 : 2.5) : 0;
  const flyTilt = animated ? Math.sin(time * (isHovered ? 3 : 1.8)) * (isHovered ? 6 : 4) : 0;
  const flyX = animated && isHovered ? Math.sin(time * 2.5) * 2 : animated ? Math.sin(time * 1.2) * 0.5 : 0;
  const flyScale = animated ? 1 + Math.sin(time * (isHovered ? 4 : 2.5)) * (isHovered ? 0.03 : 0.015) : 1;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Ambient glow behind the butterfly */}
      {animated && (
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: isHovered
              ? `radial-gradient(circle, rgba(65,146,217,${0.2 + Math.sin(time * 3) * 0.08}) 0%, transparent 70%)`
              : `radial-gradient(circle, rgba(65,146,217,${0.08 + Math.sin(time * 2) * 0.04}) 0%, transparent 70%)`,
            transform: `scale(${1 + Math.sin(time * 2) * 0.08})`,
          }}
        />
      )}

      {/* Shadow beneath butterfly - shrinks when butterfly "flies up" */}
      {animated && (
        <div
          className="absolute left-1/2 bottom-0 rounded-full pointer-events-none"
          style={{
            width: "70%",
            height: "5px",
            transform: `translateX(-50%) scaleX(${1 - Math.abs(flyY) * 0.02})`,
            opacity: isHovered ? 0.08 + Math.sin(time * 3) * 0.04 : 0.12,
            background: "radial-gradient(ellipse, rgba(22,50,91,0.3) 0%, transparent 70%)",
          }}
        />
      )}

      {/* WHOLE butterfly container - applies transform to entire SVG as one unit */}
      <div
        className="w-full h-full"
        style={{
          transform: `translate(${flyX}px, ${flyY}px) rotate(${flyTilt}deg) scale(${flyScale})`,
          transition: "none", // No CSS transition - we control animation via requestAnimationFrame
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4000 4000"
          className="w-full h-full"
          style={{ overflow: "visible" }}
        >
          {/* Left upper wing - STATIC, no individual animation */}
          <g style={{ transformOrigin: "2500px 2000px" }}>
            <path fill="#16325B" d="M2232.56 2731.96c-81.99,-74.39 -310.94,-286.11 -363.35,-353.82 -103.94,-123.43 -140.32,-171.29 -217.14,-310.39 -30.21,-57.1 -44.29,-139.52 -58.35,-190.49 -16.53,-59.87 -15.37,-124.26 -8.54,-190.33 3.68,-35.64 14.09,-72.53 39.11,-103.2 90.3,-110.71 269.23,94.53 322.14,153.17 197.2,256.3 258.01,423.79 345.16,715.4 30.93,103.47 31.63,226.56 60.68,339.07 8.01,30.15 6.56,7.67 13.21,47.12 60,-65 98.34,-293.65 107.36,-382.02 32.18,-315.02 -47.73,-705.07 -162.38,-999.75 -26.33,-67.66 -81.3,-192.83 -116.91,-255.58 -9.66,-17.01 -8.73,-20.22 -16.42,-36.65 -20.63,-44.08 -55.49,-95.15 -81.2,-138.9 -102.99,-175.32 -277.99,-389.78 -473.86,-486.48 -330.41,-163.11 -290.34,330.17 -311.1,537.98 -7.19,72.06 -19.49,128.49 -57.19,189.95 -62,101.09 -145.81,218.16 -167.23,369.68 -17.71,125.38 -1.5,249.33 45.64,340.8 8.17,15.87 11.53,19.59 18.13,35.8 6.6,16.24 7.13,19.14 19.7,35.02 62.95,79.52 56.33,95.18 163.64,187.55 23,19.8 41.93,38.62 66.55,56.55 26.11,19 51.64,33.53 78.28,50.72 252.29,162.83 560.8,325.05 826.29,488.88 -14.93,-35.31 -44.4,-69.43 -72.22,-100.08z" />
          </g>

          {/* Right upper wing - STATIC, no individual animation */}
          <g style={{ transformOrigin: "1500px 2000px" }}>
            <path fill="#4192D9" d="M602.18 3387.38c79.52,34.4 356.76,79 440.1,85.95 236.13,19.72 523.03,-23.63 724.02,-124.21 218.84,-109.51 398.62,-236.7 531.86,-451.02 -27.98,6.59 -24.04,9.38 -51.38,23.26l-332.07 136.09c-175.5,59.9 -391.23,107.21 -612.35,46.71 -263.5,-72.09 -124.34,-209.21 70.12,-268.05 185.24,-56.05 382.07,-51.67 580.16,-18.47l252.46 51.28c38.73,5.25 56.61,21.99 79.48,6.06 -28.78,-10.33 -108.89,-70.75 -137.18,-91.17 -43.42,-31.32 -99.98,-64.2 -148.55,-90.49 -257.9,-139.53 -699.34,-291.63 -992.56,-166.45l-63.04 31.12c-82.67,47.07 -144.47,124.49 -167.84,240.42 -12.57,62.32 -7.71,151.73 9.26,214.48 53.97,199.32 -524.42,255.38 -182.49,374.49z" />
          </g>

          {/* Left lower wing - STATIC, no individual animation */}
          <g style={{ transformOrigin: "2000px 2600px" }}>
            <path fill="#16325B" d="M1674.83 3504.65c51.35,-4.14 154.25,-27.5 202.14,-43.53 98.41,-32.93 184.56,-63.62 278.02,-117.35 72.45,-41.65 140.26,-89.14 204.56,-140.84l115.57 -98.54c133.5,-130.84 242.62,-257.81 331.61,-422.74 28.69,-53.19 38.42,-59.18 60.61,-127.45 25.89,-79.63 -56.07,-150.27 -143.65,-142.93 -100.06,8.39 -110.72,79.27 -158,173.98 -20.27,40.62 -37.29,84.85 -54.64,119.17 -21.32,42.2 -39.62,81.03 -60.84,117.85 -40.49,70.26 -91.87,143.45 -141.62,201.78 -269.07,315.47 -924.87,503.98 -633.76,480.6z" />
          </g>

          {/* Right lower wing - STATIC, no individual animation */}
          <g style={{ transformOrigin: "2000px 2600px" }}>
            <path fill="#16325B" d="M2787.85 1699.7c54.19,250.18 -15.49,480.56 -94.7,724.21 63.64,105.43 160.19,-518.85 161.96,-558.47 3.32,-74.01 5.71,-288.04 -82.95,-312.29 -49.96,-13.67 -207,65.93 15.69,146.55z" />
            <path fill="#16325B" d="M2800.87 2455.63c18.66,9.78 6.62,7.15 25.29,16.93 41.55,-118.16 361.28,-409.93 510.31,-452.37 28.07,14.71 53.63,42.23 107.49,26.03 50.12,-15.08 60.68,-65.43 38.23,-93.47 -35.52,-44.39 -111.03,-32.34 -143.63,-2.79 -23.16,20.98 -7.97,16.32 -40.57,32.45l-90.28 49.32c-151.27,85.87 -358.11,285.33 -406.84,423.9z" />
          </g>

          {/* Wing vein highlights - subtle shimmer */}
          {animated && (
            <g style={{ opacity: isHovered ? 0.15 + Math.sin(time * 3) * 0.05 : 0.05 }}>
              <path fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" d="M2500 2000 Q2300 1800 2200 1500" />
              <path fill="none" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" d="M1500 2000 Q1700 1800 1800 1500" />
            </g>
          )}
        </svg>
      </div>

      {/* Flying trail particles on hover */}
      {animated && isHovered && (
        <>
          <div
            className="absolute w-0.5 h-0.5 rounded-full bg-[#4192D9] pointer-events-none"
            style={{
              top: "60%",
              left: "45%",
              opacity: 0,
              transform: `translate(${Math.sin(time * 5) * 20}px, ${10 + time * 15}px)`,
              animation: "butterflyTrail 1.5s ease-out infinite",
            }}
          />
          <div
            className="absolute w-0.5 h-0.5 rounded-full bg-[#16325B] pointer-events-none"
            style={{
              top: "55%",
              left: "55%",
              opacity: 0,
              transform: `translate(${Math.sin(time * 5 + 1) * 15}px, ${10 + time * 12}px)`,
              animation: "butterflyTrail2 1.8s ease-out infinite 0.3s",
            }}
          />
        </>
      )}
    </div>
  );
}
