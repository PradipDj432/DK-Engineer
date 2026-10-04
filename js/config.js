// Business details. Change a value here and it updates on every page
// (header, footer, contact page, call/email buttons and the Google listing data).

const BUSINESS = {
  name: "DK ENGINEER'S",
  tagline: "Industrial hardware supplier in Vapi, Gujarat",

  // Phone numbers: "number" is for the call link (with +91), "display" is what people see.
  // The first one is used for the "Call now" buttons.
  phones: [
    { number: "+917096907413", display: "+91 70969 07413" },
    { number: "+918849861164", display: "+91 88498 61164" },
  ],

  email: "dkengineers6@gmail.com",

  // WhatsApp number: country code + number, no "+" or spaces, for example "917096907413".
  // Leave it empty ("") to hide all WhatsApp buttons.
  whatsappNumber: "917096907413",

  address: {
    lines: ["Shop No. 08, Arihant Complex", "Nr. Vishal Mega Mart, G.I.D.C."],
    city: "Vapi",
    pin: "396195",
    state: "Gujarat",
  },

  // Google Maps: the link opens the shop's Google listing, the embed shows the map on the contact page.
  mapLink:
    "https://www.google.com/maps/place/DK+ENGINEER'S/@20.3687117,72.9058486,15z/data=!3m1!4b1!4m6!3m5!1s0x3be0cfaa9d16867f:0xcd7aa57fc58c925b!8m2!3d20.3686926!4d72.9243027!16s%2Fg%2F11khmv3jxh",
  mapEmbed: "https://maps.google.com/maps?q=20.3686926,72.9243027&z=16&output=embed",
  geo: { latitude: 20.3686926, longitude: 72.9243027 },
};
