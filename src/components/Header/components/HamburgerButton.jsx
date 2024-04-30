import { useStore } from "@nanostores/react";
import { isMobileMenuOpen } from "../headerStore";
import "./HamburgerButton.css";
export default function HamburgerButton() {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);

  const toggleMenu = () => {
    isMobileMenuOpen.set(!$isMobileMenuOpen);
    document.body.classList.toggle("menu-open", !$isMobileMenuOpen);
  };

  return (
    <div
      onClick={toggleMenu}
      className={`hamburger_menu ${$isMobileMenuOpen ? "open" : ""}`}
    >
      <div className="hamburger_bar"></div>
    </div>
  );
}
