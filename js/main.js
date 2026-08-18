(function () {
  var toggle = document.querySelector(".nav-toggle");
  var panel = document.querySelector(".nav-panel");
  var lightbox = document.querySelector(".lightbox");
  var lightboxImg = lightbox ? lightbox.querySelector("img") : null;

  function setNav(open) {
    if (!toggle || !panel) return;
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    panel.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  }

  if (toggle && panel) {
    toggle.addEventListener("click", function () {
      setNav(toggle.getAttribute("aria-expanded") !== "true");
    });

    panel.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNav(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setNav(false);
    });
  }

  document.querySelectorAll(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      if (!lightbox || !lightboxImg) return;
      var img = item.querySelector("img");
      lightboxImg.src = img.getAttribute("src");
      lightboxImg.alt = img.getAttribute("alt") || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox || event.target.classList.contains("lightbox-close")) {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
      }
    });
  }

  document.querySelectorAll("[data-auth-tab]").forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-auth-tab");
      document.querySelectorAll("[data-auth-tab]").forEach(function (t) {
        t.classList.toggle("is-active", t === tab);
      });
      document.querySelectorAll(".auth-form").forEach(function (form) {
        form.classList.toggle("is-active", form.id === target);
      });
    });
  });

  document.querySelectorAll(".auth-form").forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var message = form.querySelector(".form-message");
      if (message) {
        message.classList.add("is-visible");
        message.focus();
      }
    });
  });

  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });
})();
