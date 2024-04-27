import React from "react";
import { isMobileMenuOpen } from "../Header/headerStore";
import { useStore } from "@nanostores/react";
import './MobileMenu.css';
export default function MobileMenu() {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);

  const scrollTo = (target) => {
    isMobileMenuOpen.set(false);
    document.body.classList.toggle('menu-open', false)
    const targetId = document.getElementById(target);
    targetId.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <section className={`mobile-menu ${$isMobileMenuOpen ? "open" : ""}`}>
      <ul className="mobile-menu__options">
        <li>Inicio</li>
        <li onClick={()=>{scrollTo('services')}}>Servicios</li>
        <li onClick={()=>{scrollTo('about')}}>Quienes somos</li>
        <li onClick={()=>{scrollTo('units')}}>Unidades</li>
        <li onClick={()=>{scrollTo('contact')}}>Contacto</li>
      </ul>
    </section>
  );
}


