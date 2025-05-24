"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface BackLinkProps {
  icon: React.ReactNode;
  text: string;
}

const BackLink: React.FC<BackLinkProps> = ({ icon, text }) => {
  const router = useRouter();

  return (
    <button className="flex justify-between w-full text-xl">
      <i
        className="text-3xl transition-all cursor-pointer hover:text-yellow-500"
        onClick={() => router.back()}
      >
        {icon}
      </i>
      <span className="flex-1">{text}</span>
    </button>
  );
};

export default BackLink;
