// Contact page: turns the inquiry form into a ready-to-send email (or WhatsApp message).
// The site has no server, so nothing is sent from the website itself (see decisions.md D-006).

function inquiryText(form) {
  const field = (name) => form.elements[name].value.trim();
  const lines = [
    "Hi " + BUSINESS.name + ",",
    "",
    field("message"),
    "",
    "Name: " + field("name"),
  ];
  if (field("company")) lines.push("Company: " + field("company"));
  lines.push("Phone: " + field("phone"));
  return lines.join("\n");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("inquiry-form");
  if (!form) return;
  let channel = "email";

  form.querySelectorAll("button[data-channel]").forEach((button) => {
    button.addEventListener("click", () => {
      channel = button.dataset.channel;
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = inquiryText(form);
    if (channel === "whatsapp" && BUSINESS.whatsappNumber) {
      window.open(whatsappLink(text), "_blank", "noopener");
      return;
    }
    const subject = "Inquiry from website: " + form.elements.name.value.trim();
    window.location.href =
      "mailto:" + BUSINESS.email +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(text.replace(/\n/g, "\r\n"));
  });
});
