(function () {
  "use strict";

  var doc = document;
  var root = doc.documentElement;
  var revealSelector = "[data-reveal], [data-reveal-stagger] > *";
  var sectionSelector = "[data-section-reveal]";
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  root.classList.add("reveal-js-ready");

  function revealElement(el) {
    el.classList.add("is-revealed");
  }

  function revealAll() {
    doc.querySelectorAll(revealSelector).forEach(function (el) {
      revealElement(el);
      el.style.transitionDelay = "0ms";
    });

    doc.querySelectorAll(sectionSelector).forEach(revealElement);
  }

  function sectionTriggerDepth(el) {
    var raw = parseFloat(el.getAttribute("data-section-trigger") || "0.2");

    if (Number.isNaN(raw)) {
      return 0.2;
    }

    return Math.min(Math.max(raw, 0), 0.9);
  }

  function directionFor(parent, index) {
    var mode = parent.getAttribute("data-reveal-direction") || "rise";

    if (mode === "alternate") {
      return index % 2 === 0 ? "left" : "right";
    }

    return mode;
  }

  function prepareStaggers() {
    doc.querySelectorAll("[data-reveal-stagger]").forEach(function (parent) {
      var step = parseInt(parent.getAttribute("data-reveal-stagger") || "90", 10);

      Array.prototype.forEach.call(parent.children, function (child, index) {
        if (!child.hasAttribute("data-reveal")) {
          child.setAttribute("data-reveal", directionFor(parent, index));
        }

        if (!child.hasAttribute("data-delay")) {
          child.setAttribute("data-delay", String(index * step));
        }
      });
    });
  }

  function init() {
    prepareStaggers();

    if (!("IntersectionObserver" in window) || reduceMotion) {
      revealAll();
      return;
    }

    var sectionObservers = {};

    doc.querySelectorAll(sectionSelector).forEach(function (el) {
      var depth = sectionTriggerDepth(el);
      var key = depth.toFixed(2);

      if (!sectionObservers[key]) {
        sectionObservers[key] = new IntersectionObserver(
          function (entries) {
            entries.forEach(function (entry) {
              if (!entry.isIntersecting) {
                return;
              }

              revealElement(entry.target);
              sectionObservers[key].unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -" + depth * 100 + "% 0px", threshold: 0 },
        );
      }

      sectionObservers[key].observe(el);
    });

    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) {
            return;
          }

          var delay = parseInt(entry.target.getAttribute("data-delay") || "0", 10);

          window.setTimeout(function () {
            revealElement(entry.target);
          }, delay);

          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    doc.querySelectorAll(revealSelector).forEach(function (el) {
      io.observe(el);
    });

    window.setTimeout(function () {
      doc.querySelectorAll(revealSelector).forEach(function (el) {
        var rect = el.getBoundingClientRect();

        if (rect.top < (window.innerHeight || doc.documentElement.clientHeight)) {
          revealElement(el);
        }
      });
    }, 100);
  }

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
