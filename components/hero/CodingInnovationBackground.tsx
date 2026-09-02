"use client";

import React, { useRef, useEffect } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  symbol?: string;
  pulsePhase: number;
}

const CODE_SYMBOLS = [
  "</>",
  "{ }",
  "=>",
  "fn()",
  "[ ]",
  "//",
  "&&",
  "01",
  "AI",
  "SQL",
  "API",
  "TS",
  "git",
];

export const CodingInnovationBackground: React.FC<{ opacity?: number }> = ({
  opacity = 0.85,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    // Mouse tracker
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Generate network nodes
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 55);
    const nodes: Node[] = [];

    const colors = [
      "rgba(197, 155, 39, 0.75)",   // Gold
      "rgba(217, 119, 6, 0.7)",     // Amber
      "rgba(16, 185, 129, 0.65)",   // Emerald
      "rgba(14, 165, 233, 0.65)",   // Sky Cyan
      "rgba(139, 92, 246, 0.65)",   // Purple
    ];

    for (let i = 0; i < nodeCount; i++) {
      const hasSymbol = i % 2 === 0;
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: hasSymbol ? 14 : Math.random() * 2.5 + 2,
        color: colors[i % colors.length],
        symbol: hasSymbol ? CODE_SYMBOLS[i % CODE_SYMBOLS.length] : undefined,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Innovation Hexagonal Grid Coordinates
    let hexTime = 0;

    const render = () => {
      hexTime += 0.015;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle innovation hexagonal geometric wireframes in background
      const hexRadius = 55;
      const hexCols = Math.ceil(width / (hexRadius * 3)) + 1;
      const hexRows = Math.ceil(height / (hexRadius * 0.86)) + 1;

      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(197, 155, 39, 0.06)";

      for (let r = 0; r < hexRows; r++) {
        for (let c = 0; c < hexCols; c++) {
          const cx = c * (hexRadius * 3) + ((r % 2) * (hexRadius * 1.5));
          const cy = r * (hexRadius * 0.86);

          // Distance to mouse for interactive highlight
          const dx = cx - mouse.x;
          const dy = cy - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius * 1.2) {
            const glow = (1 - dist / (mouse.radius * 1.2)) * 0.18;
            ctx.strokeStyle = `rgba(197, 155, 39, ${0.06 + glow})`;
          } else {
            ctx.strokeStyle = "rgba(197, 155, 39, 0.05)";
          }

          ctx.beginPath();
          for (let a = 0; a < 6; a++) {
            const angle = (Math.PI / 3) * a + (r % 2 === 0 ? 0 : Math.PI / 6);
            const x = cx + hexRadius * 0.45 * Math.cos(angle);
            const y = cy + hexRadius * 0.45 * Math.sin(angle);
            if (a === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }

      // 2. Update & Draw Connection Lines between Nodes
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];

        // Movement
        nodeA.x += nodeA.vx;
        nodeA.y += nodeA.vy;

        // Bounce from walls
        if (nodeA.x < 0 || nodeA.x > width) nodeA.vx *= -1;
        if (nodeA.y < 0 || nodeA.y > height) nodeA.vy *= -1;

        // Mouse interaction (gentle repulsion & connection)
        const mdx = nodeA.x - mouse.x;
        const mdy = nodeA.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mdist < mouse.radius) {
          const force = (1 - mdist / mouse.radius) * 1.5;
          nodeA.x += (mdx / mdist) * force;
          nodeA.y += (mdy / mdist) * force;

          // Interactive connection ray to cursor
          ctx.beginPath();
          ctx.moveTo(nodeA.x, nodeA.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(217, 119, 6, ${0.25 * (1 - mdist / mouse.radius)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Connect nodeA with neighbors
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxConnectionDist = 135;

          if (dist < maxConnectionDist) {
            const alpha = (1 - dist / maxConnectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.strokeStyle = `rgba(197, 155, 39, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // 3. Draw Nodes and Floating Code Glyphs
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.pulsePhase += 0.03;
        const pulse = Math.sin(node.pulsePhase) * 1.5;

        if (node.symbol) {
          // Floating Code Symbol Pill
          ctx.font = "bold 10px JetBrains Mono, monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";

          // Pill Background
          const textWidth = ctx.measureText(node.symbol).width;
          const pillWidth = textWidth + 14;
          const pillHeight = 18;

          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.strokeStyle = "rgba(217, 119, 6, 0.35)";
          ctx.lineWidth = 1;

          ctx.beginPath();
          ctx.roundRect(
            node.x - pillWidth / 2,
            node.y - pillHeight / 2,
            pillWidth,
            pillHeight,
            6
          );
          ctx.fill();
          ctx.stroke();

          // Symbol Text
          ctx.fillStyle = "#92400E"; // Warm amber/gold font
          ctx.fillText(node.symbol, node.x, node.y);
        } else {
          // Glowing geometric particle
          ctx.beginPath();
          ctx.arc(node.x, node.y, Math.max(node.radius + pulse * 0.5, 1.5), 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.fill();

          // Outer halo
          ctx.beginPath();
          ctx.arc(node.x, node.y, (node.radius + pulse) * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(197, 155, 39, 0.06)";
          ctx.fill();
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
  }, []);

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      style={{ opacity }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
