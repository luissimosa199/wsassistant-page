import React from "react";

const AsideMenuHeader = () => {
  return (
    <div className="h-[60px] flex items-center justify-between px-6 border-b">
      <h2 className="font-semibold text-lg">Chat</h2>
      <a
        href="#"
        rel="ugc"
      >
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          Contactos
        </button>
      </a>
    </div>
  );
};

export default AsideMenuHeader;
