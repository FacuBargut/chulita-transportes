import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, j as renderSlot, h as addAttribute, k as renderHead } from '../astro_DI1EfNXI.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */
import { $ as $$Image } from './generic_uIo2qa1U.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useStore } from '@nanostores/react';
import { atom } from 'nanostores';
import 'react';

const $$Astro$a = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Title;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="title" data-astro-cid-zfufvvig> <h2 data-astro-cid-zfufvvig>${title}</h2> <p data-astro-cid-zfufvvig>${subtitle}</p> </div> `;
}, "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/Title.astro", void 0);

const $$Astro$9 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section id="about" class="about" data-astro-cid-v2cbyr3p> ${renderComponent($$result, "Title", $$Title, { "title": "Nosotros", "data-astro-cid-v2cbyr3p": true })} <h4 data-astro-cid-v2cbyr3p>
La Chula Transportes es una empresa familiar en la localidad de Granadero Baigorria. Nos define el compromiso y la calidad de nuestro trabajo.
</h4> </section> `;
}, "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/About.astro", void 0);

const truck1 = new Proxy({"src":"/_astro/truck-1.DX0Tq-eE.png","width":1600,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/carousel/truck-1.png";
							}
							
							return target[name];
						}
					});

const truck2 = new Proxy({"src":"/_astro/truck-2.DePOrx-y.png","width":1600,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/carousel/truck-2.png";
							}
							
							return target[name];
						}
					});

const truck3 = new Proxy({"src":"/_astro/truck-3.BC8mV6H4.png","width":960,"height":1280,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/carousel/truck-3.png";
							}
							
							return target[name];
						}
					});

const $$Astro$8 = createAstro();
const $$Carousel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Carousel;
  return renderTemplate`<!-- Slider main container -->${maybeRenderHead()}<div class="swiper" data-astro-cid-wfe7xcno> <!-- Additional required wrapper --> <div class="swiper-wrapper" data-astro-cid-wfe7xcno> <!-- Slides --> <div class="swiper-slide" data-astro-cid-wfe7xcno> ${renderComponent($$result, "Image", $$Image, { "src": truck1, "alt": "Camion", "data-astro-cid-wfe7xcno": true })} </div> <div class="swiper-slide" data-astro-cid-wfe7xcno> ${renderComponent($$result, "Image", $$Image, { "src": truck2, "alt": "Camion", "data-astro-cid-wfe7xcno": true })} </div> <div class="swiper-slide" data-astro-cid-wfe7xcno> ${renderComponent($$result, "Image", $$Image, { "src": truck3, "alt": "Camion", "data-astro-cid-wfe7xcno": true })} </div> </div> <!-- If we need pagination --> <div class="swiper-pagination" data-astro-cid-wfe7xcno></div> <!-- If we need navigation buttons --> <div class="swiper-button-prev" data-astro-cid-wfe7xcno></div> <div class="swiper-button-next" data-astro-cid-wfe7xcno></div> <!-- If we need scrollbar --> <div class="swiper-scrollbar" data-astro-cid-wfe7xcno></div> </div>  `;
}, "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/Carousel.astro", void 0);

const $$Astro$7 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="contact" data-astro-cid-xmivup5a> ${renderComponent($$result, "Title", $$Title, { "title": "Contacto", "subtitle": "Envianos tu consulta y te responderemos a la brevedad", "data-astro-cid-xmivup5a": true })} <form data-astro-cid-xmivup5a> <div class="form-control" data-astro-cid-xmivup5a> <input placeholder="Nombre" type="text" data-astro-cid-xmivup5a> <input placeholder="Apellido" type="text" data-astro-cid-xmivup5a> </div> <input placeholder="E-mail" type="text" data-astro-cid-xmivup5a> <textarea rows="15" placeholder="Consulta" data-astro-cid-xmivup5a></textarea> </form> </section> `;
}, "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/Contact.astro", void 0);

const $$Astro$6 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <ul data-astro-cid-sz7xmlte> <li data-astro-cid-sz7xmlte>Inicio</li> <li class="services" data-astro-cid-sz7xmlte>Servicios</li> <li class="about" data-astro-cid-sz7xmlte>Quienes somos</li> <li class="units" data-astro-cid-sz7xmlte>Unidades</li> <li class="contact" data-astro-cid-sz7xmlte>Contacto</li> </ul> </footer>  `;
}, "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/Footer.astro", void 0);

const logo = new Proxy({"src":"/_astro/logo.DnOKmpyc.png","width":1114,"height":739,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/logo.png";
							}
							
							return target[name];
						}
					});

const isMobileMenuOpen = atom(false);

function HamburgerButton() {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);
  const toggleMenu = () => {
    isMobileMenuOpen.set(!$isMobileMenuOpen);
    document.body.classList.toggle("menu-open", !$isMobileMenuOpen);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick: toggleMenu,
      className: `hamburger_menu ${$isMobileMenuOpen ? "open" : ""}`,
      children: /* @__PURE__ */ jsx("div", { className: "hamburger_bar" })
    }
  );
}

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-2w66rqv5> ${renderComponent($$result, "Image", $$Image, { "class": "header__logo", "loading": "lazy", "src": logo, "width": 100, "height": 75, "alt": "Logo de la empresa", "data-astro-cid-2w66rqv5": true })} <nav class="header__nav-links" data-astro-cid-2w66rqv5> <li class="home" data-astro-cid-2w66rqv5>Inicio</li> <li class="services" data-astro-cid-2w66rqv5>Servicios</li> <li class="about" data-astro-cid-2w66rqv5>Quienes somos</li> <li class="units" data-astro-cid-2w66rqv5>Unidades</li> <li class="contact" data-astro-cid-2w66rqv5>Contacto</li> </nav> ${renderComponent($$result, "HamburgerButton", HamburgerButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/Header/components/HamburgerButton", "client:component-export": "default", "data-astro-cid-2w66rqv5": true })} </header>  `;
}, "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/Header/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$MainLayout;
  return renderTemplate`${maybeRenderHead()}<main data-astro-cid-fhdt7an5> ${renderSlot($$result, $$slots["services"])} ${renderSlot($$result, $$slots["about"])} ${renderSlot($$result, $$slots["units"])} ${renderSlot($$result, $$slots["contact"])} </main> `;
}, "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/MainLayout.astro", void 0);

function MobileMenu() {
  const $isMobileMenuOpen = useStore(isMobileMenuOpen);
  const scrollTo = (target) => {
    isMobileMenuOpen.set(false);
    document.body.classList.toggle("menu-open", false);
    const targetId = document.getElementById(target);
    targetId.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx("section", { className: `mobile-menu ${$isMobileMenuOpen ? "open" : ""}`, children: /* @__PURE__ */ jsxs("ul", { className: "mobile-menu__options", children: [
    /* @__PURE__ */ jsx("li", { children: "Inicio" }),
    /* @__PURE__ */ jsx("li", { onClick: () => {
      scrollTo("services");
    }, children: "Servicios" }),
    /* @__PURE__ */ jsx("li", { onClick: () => {
      scrollTo("about");
    }, children: "Quienes somos" }),
    /* @__PURE__ */ jsx("li", { onClick: () => {
      scrollTo("units");
    }, children: "Unidades" }),
    /* @__PURE__ */ jsx("li", { onClick: () => {
      scrollTo("contact");
    }, children: "Contacto" })
  ] }) });
}

const $$Astro$3 = createAstro();
const $$ServiceCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ServiceCard;
  const { name, description, icon } = Astro2.props;
  console.log(name);
  return renderTemplate`${maybeRenderHead()}<div class="card-service" data-astro-cid-uhzbvkqe> <div class="card-service__icon-container" data-astro-cid-uhzbvkqe> ${renderComponent($$result, "Image", $$Image, { "src": icon, "alt": "Logo de la empresa", "data-astro-cid-uhzbvkqe": true })} </div> <div class="card-service__data" data-astro-cid-uhzbvkqe> <h3 data-astro-cid-uhzbvkqe> ${name} </h3> <p data-astro-cid-uhzbvkqe> ${description} </p> </div> </div> `;
}, "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/ServiceCard.astro", void 0);

const ice = new Proxy({"src":"/_astro/ice.Dtq-dqAF.png","width":79,"height":79,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/services/ice.png";
							}
							
							return target[name];
						}
					});

const truck = new Proxy({"src":"/_astro/truck.CvXEYRtU.png","width":93,"height":79,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/services/truck.png";
							}
							
							return target[name];
						}
					});

const shield = new Proxy({"src":"/_astro/shield.CCScyg79.png","width":79,"height":79,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/services/shield.png";
							}
							
							return target[name];
						}
					});

const satelite = new Proxy({"src":"/_astro/satelite.D9LrKp0A.png","width":80,"height":80,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/services/satelite.png";
							}
							
							return target[name];
						}
					});

const contract = new Proxy({"src":"/_astro/contract.CZrTcch6.png","width":80,"height":80,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/services/contract.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Services;
  const services = [
    {
      name: "Unidades t\xE9rmicas",
      description: "Balanc\xEDn con equipos refrigerados con ganchera",
      icon: ice
    },
    {
      name: "Transporte",
      description: "Encomienda, paqueter\xEDa y mercader\xEDa desde Granadero Baigorria",
      icon: truck
    },
    {
      name: "Mercader\xEDa asegurada",
      description: "Tu mercader\xEDa cuenta con seguro de carga",
      icon: shield
    },
    {
      name: "Servicio satelital",
      description: "Trackeo de unidad en tiempo real",
      icon: satelite
    },
    {
      name: "Habilitaciones",
      description: "Contamos con habilitaciones correspondientes",
      icon: contract
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="services" class="services" data-astro-cid-g5jplrhu> ${renderComponent($$result, "Title", $$Title, { "title": "Servicios", "data-astro-cid-g5jplrhu": true })} <div class="services__container" data-astro-cid-g5jplrhu> ${services.map((service) => renderTemplate`${renderComponent($$result, "ServiceCard", $$ServiceCard, { "name": service.name, "description": service.description, "icon": service.icon, "data-astro-cid-g5jplrhu": true })}`)} </div> </section> `;
}, "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/Services.astro", void 0);

const unit1 = new Proxy({"src":"/_astro/unit-1.CbjstDVd.png","width":617,"height":387,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/units/unit-1.png";
							}
							
							return target[name];
						}
					});

const unit2 = new Proxy({"src":"/_astro/unit-2.BaLmNvij.png","width":574,"height":387,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/units/unit-2.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Units = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Units;
  return renderTemplate`${maybeRenderHead()}<section class="units" id="units" data-astro-cid-apva56rv> ${renderComponent($$result, "Title", $$Title, { "title": "Unidades", "data-astro-cid-apva56rv": true })} <div class="pswp-gallery pswp-gallery--single-column" id="gallery--getting-started" data-astro-cid-apva56rv> <a${addAttribute(`/src/assets/units/unit-1.png`, "href")} data-astro-cid-apva56rv> ${renderComponent($$result, "Image", $$Image, { "src": unit1, "alt": "Unidad 1", "data-astro-cid-apva56rv": true })} </a> <a${addAttribute(`/src/assets/units/unit-2.png`, "href")} data-astro-cid-apva56rv> ${renderComponent($$result, "Image", $$Image, { "src": unit2, "alt": "Unidad 1", "data-astro-cid-apva56rv": true })} </a> </div> </section>  `;
}, "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/Units.astro", void 0);

const wspLogo = new Proxy({"src":"/_astro/whatsapp.CTqXmdM2.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/facundobargut/Documents/Projects/chulita-transportes/src/assets/whatsapp.png";
							}
							
							return target[name];
						}
					});

function WhatsappButton() {
  const phoneNumber = "3413213046";
  const message = "Hola, me gustaría saber mas información sobre viajes...🚚 ";
  return /* @__PURE__ */ jsx(
    "a",
    {
      target: "_blank",
      href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      className: "whatsapp-button",
      children: /* @__PURE__ */ jsx("img", { src: wspLogo.src, className: "whatsapp-logo" })
    }
  );
}

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Astro</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Carousel", $$Carousel, {})} ${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "about": ($$result2) => renderTemplate`${renderComponent($$result2, "About", $$About, { "slot": "about" })}`, "contact": ($$result2) => renderTemplate`${renderComponent($$result2, "Contact", $$Contact, { "slot": "contact" })}`, "services": ($$result2) => renderTemplate`${renderComponent($$result2, "Services", $$Services, { "slot": "services" })}`, "units": ($$result2) => renderTemplate`${renderComponent($$result2, "Units", $$Units, { "slot": "units" })}` })} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "MobileMenu", MobileMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/facundobargut/Documents/Projects/chulita-transportes/src/components/MobileMenu/MobileMenu", "client:component-export": "default" })} ${renderComponent($$result, "WhatsappButton", WhatsappButton, {})}</body></html>`;
}, "/Users/facundobargut/Documents/Projects/chulita-transportes/src/pages/index.astro", void 0);

const $$file = "/Users/facundobargut/Documents/Projects/chulita-transportes/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
