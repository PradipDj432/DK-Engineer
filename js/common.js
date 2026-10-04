// Shared code for every page: header, footer, contact details and the Google listing data.

const ICONS = {
  phone:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  pin:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  menu:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  close:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  whatsapp:
    '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/><path d="M16.6 14.2c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.6-.3z"/></svg>',
};

const PAGES = [
  { href: "index.html", label: "Home", name: "home" },
  { href: "products.html", label: "Products", name: "products" },
  { href: "services.html", label: "Services", name: "services" },
  { href: "about.html", label: "About", name: "about" },
  { href: "contact.html", label: "Contact", name: "contact" },
];

function escapeHtml(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function primaryPhone() {
  return BUSINESS.phones[0];
}

function phoneLink(phone) {
  return `<a href="tel:${escapeHtml(phone.number)}">${escapeHtml(phone.display)}</a>`;
}

function whatsappLink(message) {
  const base = "https://wa.me/" + BUSINESS.whatsappNumber;
  return message ? base + "?text=" + encodeURIComponent(message) : base;
}

function addressHtml() {
  const a = BUSINESS.address;
  return [...a.lines, `${a.city} - ${a.pin}, ${a.state}`].map(escapeHtml).join("<br>");
}

function renderHeader(page) {
  const links = PAGES.map(
    (p) => `<a href="${p.href}"${page === p.name ? ' aria-current="page"' : ""}>${p.label}</a>`
  ).join("");
  const phone = primaryPhone();
  document.getElementById("site-header").innerHTML = `
    <div class="topbar">
      <div class="container topbar-inner">
        <span class="topbar-note">${escapeHtml(BUSINESS.tagline)}</span>
        <span class="topbar-links">
          <a href="tel:${escapeHtml(phone.number)}">${ICONS.phone}${escapeHtml(phone.display)}</a>
          <a href="mailto:${escapeHtml(BUSINESS.email)}">${ICONS.mail}${escapeHtml(BUSINESS.email)}</a>
        </span>
      </div>
    </div>
    <div class="container header-inner">
      <a class="brand" href="index.html">
        <img src="images/logo.png" alt="" width="44" height="44">
        <span class="brand-text">
          <span class="brand-name">${escapeHtml(BUSINESS.name)}</span>
          <span class="brand-sub">Industrial hardware</span>
        </span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">${ICONS.menu}</button>
      <nav class="nav" id="site-nav" aria-label="Main">
        ${links}
        <a class="button button-small nav-cta" href="contact.html#inquiry">Get a quote</a>
      </nav>
    </div>`;

  const header = document.getElementById("site-header");
  const toggle = header.querySelector(".nav-toggle");
  const setOpen = (open) => {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.innerHTML = open ? ICONS.close : ICONS.menu;
  };
  toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && header.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
}

function renderFooter() {
  const links = PAGES.map((p) => `<li><a href="${p.href}">${p.label}</a></li>`).join("");
  const phones = BUSINESS.phones.map((p) => `<li>${phoneLink(p)}</li>`).join("");
  document.getElementById("site-footer").innerHTML = `
    <div class="container footer-inner">
      <div class="footer-brand">
        <a class="brand brand-light" href="index.html">
          <img src="images/logo.png" alt="" width="44" height="44">
          <span class="brand-text">
            <span class="brand-name">${escapeHtml(BUSINESS.name)}</span>
            <span class="brand-sub">Industrial hardware</span>
          </span>
        </a>
        <p>Your trusted source for top-quality industrial hardware across diverse industries.</p>
      </div>
      <div>
        <p class="footer-heading">Pages</p>
        <ul>${links}</ul>
      </div>
      <div>
        <p class="footer-heading">Visit us</p>
        <p>${addressHtml()}</p>
        <p><a href="${escapeHtml(BUSINESS.mapLink)}" target="_blank" rel="noopener">Open in Google Maps</a></p>
      </div>
      <div>
        <p class="footer-heading">Call or email</p>
        <ul>
          ${phones}
          <li><a href="mailto:${escapeHtml(BUSINESS.email)}">${escapeHtml(BUSINESS.email)}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© ${new Date().getFullYear()} ${escapeHtml(BUSINESS.name)}, ${escapeHtml(BUSINESS.address.city)}. All rights reserved.</p>
      </div>
    </div>`;
}

// Fills elements marked with data-* attributes from BUSINESS, so contact details live in one place:
//   data-call        call link to the first phone (text filled in if the element is empty)
//   data-phones      every phone number as a call link
//   data-email       email link (text filled in if the element is empty)
//   data-address     the full address
//   data-map-link    link to the Google Maps listing
//   data-map-embed   iframe that shows the map
//   data-whatsapp    WhatsApp link with the attribute's value as the message; hidden if no number is set
function fillContactDetails() {
  const phone = primaryPhone();
  document.querySelectorAll("[data-call]").forEach((el) => {
    el.href = "tel:" + phone.number;
    if (!el.textContent.trim()) el.textContent = phone.display;
  });
  document.querySelectorAll("[data-phones]").forEach((el) => {
    el.innerHTML = BUSINESS.phones.map(phoneLink).join("<br>");
  });
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.href = "mailto:" + BUSINESS.email;
    if (!el.textContent.trim()) el.textContent = BUSINESS.email;
  });
  document.querySelectorAll("[data-address]").forEach((el) => {
    el.innerHTML = addressHtml();
  });
  document.querySelectorAll("[data-map-link]").forEach((el) => {
    el.href = BUSINESS.mapLink;
  });
  document.querySelectorAll("[data-map-embed]").forEach((el) => {
    el.src = BUSINESS.mapEmbed;
  });
  document.querySelectorAll("[data-whatsapp]").forEach((el) => {
    if (BUSINESS.whatsappNumber) el.href = whatsappLink(el.dataset.whatsapp);
    else el.hidden = true;
  });
}

// Floating button on phones: WhatsApp if a number is set, otherwise a call button.
function renderFloatingButton() {
  const button = document.createElement("a");
  button.className = "floating-button";
  if (BUSINESS.whatsappNumber) {
    button.href = whatsappLink("Hi " + BUSINESS.name + ", I have an inquiry.");
    button.setAttribute("aria-label", "Chat on WhatsApp");
    button.classList.add("is-whatsapp");
    button.innerHTML = ICONS.whatsapp;
  } else {
    button.href = "tel:" + primaryPhone().number;
    button.setAttribute("aria-label", "Call " + primaryPhone().display);
    button.innerHTML = ICONS.phone;
  }
  document.body.appendChild(button);
}

// Business details for Google search results (schema.org), added on the home page only.
function addBusinessData() {
  const a = BUSINESS.address;
  const site = new URL(".", location.href).href;
  const data = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: BUSINESS.name,
    description: "Industrial hardware supplier: pipes and fittings, valves, fasteners, tools, seals, safety equipment and more.",
    url: site,
    logo: new URL("images/logo.png", site).href,
    image: new URL("images/valves.png", site).href,
    telephone: BUSINESS.phones.map((p) => p.number),
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.lines.join(", "),
      addressLocality: a.city,
      postalCode: a.pin,
      addressRegion: a.state,
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", ...BUSINESS.geo },
    hasMap: BUSINESS.mapLink,
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  renderHeader(page);
  renderFooter();
  fillContactDetails();
  renderFloatingButton();
  if (page === "home") addBusinessData();
});
