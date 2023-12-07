"use client";

import useGetBusinessName from "@/hooks/useGetBusinessName";
import React from "react";

const AssistantChatHeader = () => {
  const businessName = useGetBusinessName();
  return (
    <div className="h-[60px] flex items-center justify-between px-6 border-b">
      <h2 className="font-semibold text-lg">
        Hacer un pedido {businessName?.toLowerCase()}
      </h2>
      <a href="#">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          Menú
        </button>
      </a>
    </div>
  );
};

export default AssistantChatHeader;
