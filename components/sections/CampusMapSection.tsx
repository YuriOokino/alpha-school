"use client";
import dynamic from "next/dynamic";

const CampusMap = dynamic(() => import("@/components/features/CampusMap"), { ssr: false });

export default function CampusMapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">CHOOSE YOUR CAMPUS</h2>
      <div className="max-w-5xl mx-auto">
        <CampusMap />
      </div>
    </section>
  );
} 