import React from "react";
import "@/app/globals.css";

export const metadata = {
  title: "Admin Console — Developer Portfolio",
  description: "Secure management console for contact inquiries and portfolio projects.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#18181B] antialiased">
      {children}
    </div>
  );
}
