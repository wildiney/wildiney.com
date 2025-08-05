import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToAnchor () {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }
    if (lastHash.current) {
      const el = document.getElementById(lastHash.current);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          lastHash.current = "";
        }, 100);
      }
    }
  }, [location]);

  return null;
}