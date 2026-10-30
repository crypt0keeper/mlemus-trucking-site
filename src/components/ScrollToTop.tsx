import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// On every page change: jump to the #section if the link has one, otherwise to the top.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash.replace("#", "");
    const go = () => {
      const el = id ? document.getElementById(id) : null;
      if (el) el.scrollIntoView({ block: "start" });
      else window.scrollTo(0, 0);
    };
    go();
    const t = window.setTimeout(go, 50); // once the page has rendered
    return () => window.clearTimeout(t);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
