/**
 * SAPTAM DECOR - LUXURY ARCHITECTURAL SCROLL-MOTION ENGINE
 */

import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Smooth Scroll (Lenis) with GSAP ScrollTrigger synchronization
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);

  // Recompute pin offsets once fonts/images have settled layout
  window.addEventListener("load", () => ScrollTrigger.refresh());

  // Smooth anchor navigation with Lenis
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId && targetId !== "#") {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, { offset: -70 });
        }
      }
    });
  });

  // 2. HARDWARE-ACCELERATED HERO SCROLL ENGINE
  const heroVideo = document.getElementById("hero-video");
  const bgVideo = document.getElementById("hero-bg-video");
  const hudVideoTime = document.getElementById("hudVideoTime");
  const videoRoomText = document.getElementById("videoRoomText");

  // Material Radar Elements
  const radarCode = document.getElementById("radarCode");
  const radarName = document.getElementById("radarName");
  const radarDesc = document.getElementById("radarDesc");
  const radarCore = document.getElementById("radarCore");
  const radarFinish = document.getElementById("radarFinish");
  const radarProtect = document.getElementById("radarProtect");

  const heroContainer = document.getElementById("hero-scroll");
  const chapters = [
    document.getElementById("chapter-1"),
    document.getElementById("chapter-2"),
    document.getElementById("chapter-3"),
    document.getElementById("chapter-4"),
  ];
  const sceneNumEl = document.getElementById("currentSceneNum");
  const hudBarFill = document.getElementById("hudBarFill");

  if (heroContainer && heroVideo) {
    let videoDuration = 41.2;
    if (heroVideo.duration && !isNaN(heroVideo.duration)) {
      videoDuration = heroVideo.duration;
    }
    heroVideo.addEventListener("loadedmetadata", () => {
      if (heroVideo.duration && !isNaN(heroVideo.duration)) {
        videoDuration = heroVideo.duration;
      }
    });

    // Mobile decoder unlock on initial interaction
    const unlockVideo = () => {
      if (heroVideo.paused) {
        heroVideo.play().then(() => {
          heroVideo.pause();
        }).catch(() => {});
      }
    };
    window.addEventListener("touchstart", unlockVideo, { once: true, passive: true });
    window.addEventListener("click", unlockVideo, { once: true, passive: true });

    // High-performance video seek queue (eliminates decoder lag and frame drops)
    let isSeeking = false;
    let pendingTime = null;

    const requestVideoSeek = (targetSec) => {
      if (!heroVideo) return;
      if (isSeeking) {
        pendingTime = targetSec;
        return;
      }
      if (Math.abs(heroVideo.currentTime - targetSec) > 0.04) {
        isSeeking = true;
        heroVideo.currentTime = targetSec;
      }
    };

    heroVideo.addEventListener("seeked", () => {
      isSeeking = false;
      if (pendingTime !== null) {
        const nextTime = pendingTime;
        pendingTime = null;
        requestVideoSeek(nextTime);
      }
    });

    // Desktop background video seek (throttled, disabled on mobile to conserve GPU)
    let bgSeeking = false;
    const requestBgSeek = (targetSec) => {
      if (!bgVideo || window.innerWidth <= 1024 || bgSeeking) return;
      if (Math.abs(bgVideo.currentTime - targetSec) > 0.25) {
        bgSeeking = true;
        bgVideo.currentTime = targetSec;
      }
    };
    if (bgVideo) {
      bgVideo.addEventListener("seeked", () => {
        bgSeeking = false;
      });
    }

    // Zone Data Definitions
    const zones = [
      {
        range: [0.0, 0.28],
        chapterIndex: 0,
        scene: "01",
        room: "Living Salon • Fluted Oak",
        code: "5020 • NAIGRA OAK DARK",
        name: "Fluted Wall Panelling & Credenza",
        desc: "Deep synchronized grain channels with acoustic backing. Resists warping and ambient humidity.",
        core: "Advanced MDF / SDHDMR",
        finish: "Synchronized Matte Suede",
        protect: "Anti-Scratch Melamine Overlay",
      },
      {
        range: [0.28, 0.54],
        chapterIndex: 1,
        scene: "02",
        room: "Architectural Bath • Waterproof",
        code: "BWP 1000 • SD BOILO",
        name: "Fluted Moisture-Shield Louvers",
        desc: "Boiling waterproof density (>1000 kg/m³) designed for wet environments and direct steam contact.",
        core: "High-Density SD Boilo",
        finish: "Stone Texture & Dark Timber",
        protect: "100% Waterproof Resin Seal",
      },
      {
        range: [0.54, 0.78],
        chapterIndex: 2,
        scene: "03",
        room: "Master Suite • Modular Joinery",
        code: "4018 • CROWN WALNUT",
        name: "Full-Height Walk-In Wardrobes",
        desc: "Heavy-load bearing vertical panels with anti-borer and termite immunity. Precision calibrated core.",
        core: "SDHDMR Super Density",
        finish: "Velvet Soft Suede",
        protect: "Zero-Emission E0 Certified",
      },
      {
        range: [0.78, 1.0],
        chapterIndex: 3,
        scene: "04",
        room: "Culinary Atelier • Heat Proof",
        code: "1008 • OXFORD SLATE & BOILO",
        name: "Kitchen Cabinetry & Island Base",
        desc: "Extreme heat and steam tolerance. Engineered to support heavy quartz countertops with zero sag.",
        core: "SD Boilo Heavy Density",
        finish: "Anti-Fingerprint Matte Solid",
        protect: "Flame & Thermal Barrier",
      },
    ];

    let currentZoneIndex = -1;

    // Pin distance: 3000px on desktop, 2200px on mobile
    const getPinDistance = () => (window.innerWidth <= 768 ? 2200 : 3000);

    // Height of the sticky ticker + header stack the hero sits beneath
    const getNavOffset = () => {
      const ticker = document.querySelector(".top-ticker");
      const header = document.getElementById("header");
      return (ticker ? ticker.offsetHeight : 0) + (header ? header.offsetHeight : 0);
    };

    ScrollTrigger.create({
      trigger: heroContainer,
      start: () => `top top+=${getNavOffset()}`,
      end: () => `+=${getPinDistance()}`,
      pin: true,
      pinSpacing: true,
      scrub: 0.1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const progress = self.progress; // 0.0 to 1.0
        // Clamp to prevent video 'ended' black flash
        const targetTime = Math.min(
          videoDuration - 0.06,
          Math.max(0, progress * videoDuration)
        );

        requestVideoSeek(targetTime);
        requestBgSeek(targetTime);

        // Time HUD
        if (hudVideoTime) {
          const sec = Math.floor(targetTime);
          hudVideoTime.textContent = `00:${String(sec).padStart(2, "0")} / 00:41`;
        }

        // HUD bar progress
        if (hudBarFill) {
          hudBarFill.style.height = `${Math.max(10, progress * 100)}%`;
        }

        // Determine active zone
        const zoneIdx = zones.findIndex(
          (z) => progress >= z.range[0] && progress <= z.range[1]
        );
        const activeZone =
          zoneIdx !== -1
            ? zones[zoneIdx]
            : progress > 0.5
            ? zones[zones.length - 1]
            : zones[0];

        if (zoneIdx !== currentZoneIndex && activeZone) {
          currentZoneIndex = zoneIdx;

          // Update Room Tag
          if (videoRoomText) videoRoomText.textContent = activeZone.room;

          // Update Material Radar
          if (radarCode) radarCode.textContent = activeZone.code;
          if (radarName) radarName.textContent = activeZone.name;
          if (radarDesc) radarDesc.textContent = activeZone.desc;
          if (radarCore) radarCore.textContent = activeZone.core;
          if (radarFinish) radarFinish.textContent = activeZone.finish;
          if (radarProtect) radarProtect.textContent = activeZone.protect;

          // Update Chapters
          chapters.forEach((chap, idx) => {
            if (chap) {
              chap.classList.toggle("active", idx === activeZone.chapterIndex);
            }
          });

          if (sceneNumEl) sceneNumEl.textContent = activeZone.scene;
        }
      },
    });
  }



  // 3. INTERACTIVE 3D ANATOMY HOTSPOTS & LAYERS
  const layerCards = [
    document.getElementById("layer-card-1"),
    document.getElementById("layer-card-2"),
    document.getElementById("layer-card-3"),
    document.getElementById("layer-card-4"),
  ];
  const layerBtns = document.querySelectorAll(".layer-btn");
  const hotspots = document.querySelectorAll(".hotspot");

  function switchLayer(layerNum) {
    layerCards.forEach((card, idx) => {
      if (card) {
        card.classList.toggle("active", idx === layerNum - 1);
      }
    });

    layerBtns.forEach((btn) => {
      btn.classList.toggle(
        "active",
        parseInt(btn.getAttribute("data-target")) === layerNum
      );
    });
  }

  layerBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = parseInt(btn.getAttribute("data-target"));
      switchLayer(target);
    });
  });

  hotspots.forEach((pin) => {
    pin.addEventListener("click", () => {
      const layer = parseInt(pin.getAttribute("data-layer"));
      switchLayer(layer);
    });
  });

  // 4. DIGITAL SHADE STUDIO FILTERING
  const filterTabs = document.querySelectorAll(".filter-tab");
  const swatchCards = document.querySelectorAll(".swatch-card");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.getAttribute("data-filter");

      swatchCards.forEach((card) => {
        const cardCat = card.getAttribute("data-category");
        if (category === "all" || cardCat === category) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 50);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 200);
        }
      });
    });
  });

  // 5. MODALS & FORMS
  const quoteModal = document.getElementById("quoteModal");
  const openQuoteBtns = document.querySelectorAll(
    "#openQuoteModal, #drawerQuoteBtn, #heroQuoteBtn, .openQuoteBtn"
  );
  const closeQuoteBtn = document.getElementById("closeQuoteModal");
  const quoteForm = document.getElementById("quoteForm");
  const contactForm = document.getElementById("contactForm");
  const toast = document.getElementById("toastNotification");
  const toastMessage = document.getElementById("toastMessage");

  function showToast(msg) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 4500);
  }

  openQuoteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (quoteModal) {
        quoteModal.classList.add("open");
        const prod = btn.getAttribute("data-product");
        if (prod && quoteForm) {
          const select = quoteForm.querySelector('select[name="product"]');
          if (select) {
            for (let opt of select.options) {
              if (opt.value.toLowerCase().includes(prod.toLowerCase())) {
                select.value = opt.value;
                break;
              }
            }
          }
        }
      }
    });
  });

  if (closeQuoteBtn && quoteModal) {
    closeQuoteBtn.addEventListener("click", () => {
      quoteModal.classList.remove("open");
    });
  }

  window.addEventListener("click", (e) => {
    if (quoteModal && e.target === quoteModal) {
      quoteModal.classList.remove("open");
    }
  });

  // Target WhatsApp Number for Saptam Decor
  const SAPTAM_WHATSAPP_NUMBER = "919557276598";

  const openWhatsAppInquiry = (formattedText) => {
    const encoded = encodeURIComponent(formattedText.trim());
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${SAPTAM_WHATSAPP_NUMBER}&text=${encoded}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  // Form Submissions -> Formatted WhatsApp Redirect (Clean, 100% WhatsApp-compatible ASCII formatting)
  if (quoteForm) {
    quoteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(quoteForm);
      const name = (fd.get("name") || "").toString().trim();
      const phone = (fd.get("phone") || "").toString().trim();
      const city = (fd.get("city") || "").toString().trim();
      const product = (fd.get("product") || "").toString().trim();
      const details = (fd.get("details") || "").toString().trim();

      const lines = [
        `*NEW QUOTE REQUEST | SAPTAM DECOR*`,
        `----------------------------------------`,
        name ? `*Name / Firm:* ${name}` : null,
        phone ? `*Phone / WhatsApp:* ${phone}` : null,
        product ? `*Product:* ${product}` : null,
        city ? `*City / State:* ${city}` : null,
        details ? `*Requirement:* ${details}` : null,
        `----------------------------------------`,
        `_Source: Saptam Decor Official Portal_`
      ].filter(Boolean);

      openWhatsAppInquiry(lines.join("\n"));

      if (quoteModal) quoteModal.classList.remove("open");
      quoteForm.reset();
      showToast("Opening WhatsApp to send your quote request...");
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(contactForm);
      const name = (fd.get("name") || "").toString().trim();
      const phone = (fd.get("phone") || "").toString().trim();
      const product = (fd.get("product") || fd.get("interest") || "").toString().trim();
      const message = (fd.get("message") || "").toString().trim();

      const lines = [
        `*NEW INQUIRY | SAPTAM DECOR*`,
        `----------------------------------------`,
        name ? `*Name:* ${name}` : null,
        phone ? `*Phone / WhatsApp:* ${phone}` : null,
        product ? `*Product / Interest:* ${product}` : null,
        message ? `*Requirement / Query:* ${message}` : null,
        `----------------------------------------`,
        `_Source: Saptam Decor Official Portal_`
      ].filter(Boolean);

      openWhatsAppInquiry(lines.join("\n"));

      contactForm.reset();
      showToast("Opening WhatsApp to send your inquiry...");
    });
  }

  const dealerForm = document.getElementById("dealerForm");
  if (dealerForm) {
    dealerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(dealerForm);
      const firm = (fd.get("firm") || "").toString().trim();
      const name = (fd.get("name") || "").toString().trim();
      const phone = (fd.get("phone") || "").toString().trim();
      const city = (fd.get("city") || "").toString().trim();
      const product = (fd.get("product") || "").toString().trim();
      const message = (fd.get("message") || "").toString().trim();

      const lines = [
        `*DEALERSHIP APPLICATION | SAPTAM DECOR*`,
        `----------------------------------------`,
        firm ? `*Firm Name:* ${firm}` : null,
        name ? `*Contact Person:* ${name}` : null,
        phone ? `*Phone / WhatsApp:* ${phone}` : null,
        city ? `*City & State:* ${city}` : null,
        product ? `*Primary Interest:* ${product}` : null,
        message ? `*Business Details:* ${message}` : null,
        `----------------------------------------`,
        `_Source: Saptam Decor Dealership Network_`
      ].filter(Boolean);

      openWhatsAppInquiry(lines.join("\n"));

      dealerForm.reset();
      showToast("Opening WhatsApp to submit your dealership request...");
    });
  }

  // 6. MOBILE DRAWER NAVIGATION & PRODUCT DROPDOWNS
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerQuoteBtn = document.getElementById("drawerQuoteBtn");

  // Mobile drawer accordion toggle
  const drawerDropdownToggles = document.querySelectorAll(".drawer-dropdown-toggle");
  drawerDropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parent = toggle.closest(".drawer-dropdown");
      if (parent) {
        parent.classList.toggle("open");
      }
    });
  });

  // Desktop dropdown hover & click support
  const desktopDropdowns = document.querySelectorAll(".nav-item-dropdown");
  desktopDropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    let hoverTimeout = null;

    // Hover to open
    dropdown.addEventListener("mouseenter", () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }
      dropdown.classList.add("open");
      if (toggle) toggle.setAttribute("aria-expanded", "true");
    });

    // Graceful hover out
    dropdown.addEventListener("mouseleave", () => {
      hoverTimeout = setTimeout(() => {
        dropdown.classList.remove("open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
      }, 180);
    });

    // Click toggle for touch / direct click
    if (toggle) {
      toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = dropdown.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });
    }
  });

  document.addEventListener("click", (e) => {
    document.querySelectorAll(".nav-item-dropdown.open").forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
        dropdown.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
      }
    });
  });

  if (mobileMenuBtn && mobileDrawer) {
    const closeDrawer = () => {
      mobileDrawer.classList.remove("open");
      mobileMenuBtn.classList.remove("active");
      document.body.classList.remove("menu-open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
    };

    const toggleDrawer = () => {
      const isOpen = mobileDrawer.classList.toggle("open");
      mobileMenuBtn.classList.toggle("active", isOpen);
      document.body.classList.toggle("menu-open", isOpen);
      mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
    };

    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleDrawer();
    });

    const drawerNavLinks = mobileDrawer.querySelectorAll("a");
    drawerNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        closeDrawer();
      });
    });

    if (drawerQuoteBtn) {
      drawerQuoteBtn.addEventListener("click", () => {
        closeDrawer();
      });
    }

    document.addEventListener("click", (e) => {
      if (
        mobileDrawer.classList.contains("open") &&
        !mobileDrawer.contains(e.target) &&
        !mobileMenuBtn.contains(e.target)
      ) {
        closeDrawer();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileDrawer.classList.contains("open")) {
        closeDrawer();
      }
    });
  }

  // 7. MULTI-PAGE ACTIVE NAV STATE
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const navLinks = document.querySelectorAll(".nav-item, .drawer-item");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const cleanHref = href.replace(/^\.\//, "").replace(/^\//, "");
    const cleanPath = currentPath.replace(/^\//, "");
    
    if (
      (cleanPath === "" && (cleanHref === "index.html" || cleanHref === "" || cleanHref === "#")) ||
      (cleanPath !== "" && cleanHref.includes(cleanPath))
    ) {
      link.classList.add("active");
    }
  });
});
