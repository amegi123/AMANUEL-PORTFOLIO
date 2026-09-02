"use client";

import React, { useRef, useEffect } from "react";

interface TibebPatternProps {
  className?: string;
  opacity?: number;
  interactive?: boolean;
}

export const TibebPattern: React.FC<TibebPatternProps> = ({
  className = "",
  opacity = 0.12,
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!interactive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Cloth mesh configuration
    const cols = 28;
    const rows = 18;
    const spacingX = width / (cols - 1);
    const spacingY = height / (rows - 1);

    interface Point {
      x: number;
      y: number;
      ox: number;
      oy: number;
      vx: number;
      vy: number;
      z: number;
    }

    const points: Point[] = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * spacingX;
        const y = r * spacingY;
        points.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
          z: 0,
        });
      }
    }

    // Mouse state
    const mouse = {
      x: -1000,
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      speed: 0,
      isHovering: false,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      const dx = currentX - mouse.x;
      const dy = currentY - mouse.y;
      mouse.speed = Math.min(Math.sqrt(dx * dx + dy * dy), 40);

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = currentX;
      mouse.y = currentY;
      mouse.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovering = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      const newSpacingX = width / (cols - 1);
      const newSpacingY = height / (rows - 1);

      let idx = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (points[idx]) {
            points[idx].ox = c * newSpacingX;
            points[idx].oy = r * newSpacingY;
            points[idx].x = points[idx].ox;
            points[idx].y = points[idx].oy;
          }
          idx++;
        }
      }
    };

    window.addEventListener("resize", handleResize);

    let time = 0;

    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, width, height);

      // Update point physics (fabric spring & tension)
      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Ambient gentle silk drape breeze
        const ambientWave =
          Math.sin(time + p.ox * 0.005 + p.oy * 0.003) * 3 +
          Math.cos(time * 0.7 + p.ox * 0.004) * 2;

        // Mouse hover interaction (cloth displacement wave)
        if (mouse.isHovering) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 180;

          if (dist < maxDist && dist > 0) {
            const force = ((maxDist - dist) / maxDist) * (mouse.speed * 0.6 + 6);
            const angle = Math.atan2(dy, dx);
            p.vx += Math.cos(angle) * force * 0.18;
            p.vy += Math.sin(angle) * force * 0.18;
            p.z = Math.sin((dist / maxDist) * Math.PI) * force * 1.5;
          }
        }

        // Spring tension toward resting position
        const fx = (p.ox - p.x) * 0.08;
        const fy = (p.oy + ambientWave - p.y) * 0.08;

        p.vx = (p.vx + fx) * 0.88; // damping
        p.vy = (p.vy + fy) * 0.88; // damping

        p.x += p.vx;
        p.y += p.vy;
      }

      // Draw authentic Ethiopian Tibeb woven cloth mesh
      ctx.lineWidth = 0.85;

      for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < cols - 1; c++) {
          const p1 = points[r * cols + c];
          const p2 = points[r * cols + (c + 1)];
          const p3 = points[(r + 1) * cols + (c + 1)];
          const p4 = points[(r + 1) * cols + c];

          // Center coordinate of current quad
          const cx = (p1.x + p2.x + p3.x + p4.x) / 4;
          const cy = (p1.y + p2.y + p3.y + p4.y) / 4;

          // Diagonal Diamond Weave Grid (Tibeb Textile Pattern)
          ctx.strokeStyle = "rgba(180, 83, 9, 0.4)";
          ctx.beginPath();
          ctx.moveTo((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
          ctx.lineTo((p2.x + p3.x) / 2, (p2.y + p3.y) / 2);
          ctx.lineTo((p3.x + p4.x) / 2, (p3.y + p4.y) / 2);
          ctx.lineTo((p4.x + p1.x) / 2, (p4.y + p1.y) / 2);
          ctx.closePath();
          ctx.stroke();

          // Core Golden Motif / Cross in alternating diamond cells
          if ((r + c) % 2 === 0) {
            ctx.strokeStyle = "rgba(217, 119, 6, 0.65)";
            ctx.fillStyle = "rgba(245, 158, 11, 0.15)";
            ctx.beginPath();
            ctx.arc(cx, cy, 2.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Cultural mini-cross thread
            ctx.beginPath();
            ctx.moveTo(cx - 3.5, cy);
            ctx.lineTo(cx + 3.5, cy);
            ctx.moveTo(cx, cy - 3.5);
            ctx.lineTo(cx, cy + 3.5);
            ctx.stroke();
          }

          // Subtle Warp and Weft Thread Lines
          ctx.strokeStyle = "rgba(197, 155, 39, 0.2)";
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p4.x, p4.y);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, [interactive]);

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {interactive ? (
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ willChange: "transform" }}
        />
      ) : (
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="ethiopian-tibeb-weave-static"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0 L80 40 L40 80 L0 40 Z"
                fill="none"
                stroke="#C59B27"
                strokeWidth="1"
              />
              <path
                d="M40 12 L68 40 L40 68 L12 40 Z"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.75"
                strokeDasharray="2,2"
              />
              <path
                d="M40 24 L40 56 M24 40 L56 40"
                stroke="#C59B27"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <circle cx="40" cy="40" r="3" fill="#C59B27" />
              <path
                d="M0 0 L15 15 L0 30 M80 0 L65 15 L80 30 M0 80 L15 65 L0 50 M80 80 L65 65 L80 50"
                fill="none"
                stroke="#B38728"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ethiopian-tibeb-weave-static)" />
        </svg>
      )}
    </div>
  );
};
