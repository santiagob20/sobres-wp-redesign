(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.querySelector(".quote-form");
  if (!form || !window.sobrypalData) return;

  var params = new URLSearchParams(window.location.search);
  var preset = params.get("producto");
  if (preset) {
    var select = form.querySelector("[name=producto]");
    if (select) select.value = preset;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var data = new FormData(form);
    var errors = [];
    var name = String(data.get("nombre") || "").trim();
    var phone = String(data.get("telefono") || "").replace(/\D/g, "");
    var email = String(data.get("correo") || "").trim();
    var product = String(data.get("producto") || "");
    if (name.length < 3) errors.push("Escribe tu nombre.");
    if (phone.length < 7) errors.push("Escribe un teléfono o WhatsApp de contacto.");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("El correo no tiene un formato válido.");
    if (!product) errors.push("Elige el tipo de sobre.");
    if (!data.get("autorizacion")) errors.push("Autoriza el uso de los datos para responder la cotización.");

    var box = form.querySelector(".form-errors");
    if (errors.length) {
      box.hidden = false;
      box.textContent = errors.join(" ");
      return;
    }
    box.hidden = true;

    var lines = [
      "Hola SOBRYPAL, quiero cotizar un proyecto.",
      "Nombre: " + name,
      data.get("empresa") ? "Empresa: " + String(data.get("empresa")).trim() : "",
      "WhatsApp: " + String(data.get("telefono")).trim(),
      email ? "Correo: " + email : "",
      data.get("ciudad") ? "Ciudad: " + String(data.get("ciudad")).trim() : "",
      "Producto: " + product,
      data.get("cantidad") ? "Cantidad: " + String(data.get("cantidad")).trim() : "",
      data.get("medida") ? "Medida: " + String(data.get("medida")).trim() : "",
      data.get("mensaje") ? "Detalle: " + String(data.get("mensaje")).trim() : "",
    ].filter(Boolean);

    var message = lines.join("\n");
    var draft = form.querySelector(".draft");
    draft.hidden = false;
    draft.textContent = message;
    window.open(sobrypalData.whatsapp + "?text=" + encodeURIComponent(message), "_blank", "noopener");
  });
})();
