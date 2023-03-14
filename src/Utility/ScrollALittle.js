import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollALittle() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 300);
  }, [pathname]);

  return null;
}
