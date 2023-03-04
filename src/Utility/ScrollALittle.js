import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollALittle() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 200);
  }, [pathname]);

  return null;
}
