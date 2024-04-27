import React from "react";
import './WhatsAppButton.css'
import wspLogo from '../../assets/whatsapp.png'

export default function WhatsappButton() {
  const phoneNumber = "3413213046";
  const message = 'Hola, me gustaría saber mas información sobre viajes...🚚 '
  return (
    <a
      target="_blank"
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="whatsapp-button"
    >
      <img src={wspLogo.src} className="whatsapp-logo" />
    </a>
  );
}


