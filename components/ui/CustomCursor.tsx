"use client";

import React, { useEffect, useState } from "react";

export const CustomCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    // Only enable on non-touch devices
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.classList.contains("cursor-pointer");

        setIsHovered(isClickable);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mounted, isVisible]);

  // Smooth trailing effect
  useEffect(() => {
    if (!mounted) return;
    let animationFrameId: number;
    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.2,
        y: prev.y + (position.y - prev.y) * 0.2,
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };
    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mounted, position]);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Outer Golden Trailing Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-transform duration-100 ease-out hidden md:block"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 0.8 : isHovered ? 1.8 : 1
          })`,
          width: "36px",
          height: "36px",
          border: "1.5px solid #C59B27",
          backgroundColor: isHovered ? "rgba(197, 155, 39, 0.12)" : "transparent",
          boxShadow: isHovered
            ? "0 0 20px rgba(197, 155, 39, 0.35)"
            : "0 0 10px rgba(197, 155, 39, 0.15)",
        }}
      />
      {/* Inner Precision Gold Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block transition-transform duration-75"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${
            isClicking ? 1.4 : isHovered ? 0.5 : 1
          })`,
          width: "7px",
          height: "7px",
          backgroundColor: "#C59B27",
          boxShadow: "0 0 8px #D4AF37",
        }}
      />
    </>
  );
};
