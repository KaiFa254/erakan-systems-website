/* ============================================================
   ERAKAN SYSTEMS LTD — main.js
   ------------------------------------------------------------
   Shared behaviour for EVERY page:
     1. Mobile hamburger menu (open/close)
     2. Sticky header shadow when scrolling
     3. Scroll-reveal animations (fade elements in as you scroll)
     4. Auto-update the copyright year in the footer

   Product-catalogue logic lives separately in products.js so
   you can edit prices without touching this file.
   ============================================================ */

/* Wait until the HTML is fully parsed before running any code,
   otherwise document.querySelector() might find nothing. */
document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     1. MOBILE HAMBURGER MENU
     ----------------------------------------------------------
     Clicking the ☰ button toggles two CSS classes:
       .is-open on the menu  → CSS slides it down (max-height)
       .is-open on the button → CSS morphs bars into an X
  ---------------------------------------------------------- */
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {              // safety check: elements exist
    toggleBtn.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      toggleBtn.classList.toggle('is-open');

      /* Accessibility: tell screen readers whether menu is open */
      const isOpen = navLinks.classList.contains('is-open');
      toggleBtn.setAttribute('aria-expanded', isOpen);
    });

    /* Close the menu automatically after tapping a link,
       so the user isn't left staring at an open menu. */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        toggleBtn.classList.remove('is-open');
      });
    });
  }


  /* ----------------------------------------------------------
     2. STICKY HEADER SHADOW
     ----------------------------------------------------------
     The header is always sticky (CSS). Here we just add a
     drop-shadow class once the user scrolls down a little,
     so the bar visually "lifts" off the page.
  ---------------------------------------------------------- */
  const header = document.querySelector('.header');

  if (header) {
    window.addEventListener('scroll', function () {
      /* window.scrollY = how many pixels the page has scrolled */
      if (window.scrollY > 10) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }, { passive: true }); // passive = smoother scrolling performance
  }


  /* ----------------------------------------------------------
     3. SCROLL-REVEAL ANIMATIONS
     ----------------------------------------------------------
     IntersectionObserver is a built-in browser feature that
     tells us when an element enters the screen. When a .reveal
     element becomes ~15% visible we add .is-visible, and the
     CSS transition fades it up. We then stop observing it so
     the animation runs only once.
  ---------------------------------------------------------- */
  const revealItems = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealItems.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {                 // element is on screen
          entry.target.classList.add('is-visible'); // trigger CSS animation
          observer.unobserve(entry.target);         // animate once only
        }
      });
    }, { threshold: 0.15 });   // fire when 15% of the element is visible

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    /* Very old browser fallback: just show everything immediately */
    revealItems.forEach(function (item) {
      item.classList.add('is-visible');
    });
  }


  /* ----------------------------------------------------------
     4. FOOTER COPYRIGHT YEAR
     ----------------------------------------------------------
     Any element with id="year" gets the current year inserted,
     so you never have to update "© 2026" manually.
  ---------------------------------------------------------- */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
