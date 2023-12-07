import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const useGetBusinessName = () => {
  const [chatPath, setChatPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const regex = /\/chat\/([^/]+)/;
    const match = pathname.match(regex);

    if (match && match[1]) {
      setChatPath(match[1].toUpperCase());
    } else {
      setChatPath(null);
    }
  }, [pathname]);

  return chatPath;
};

export default useGetBusinessName;
