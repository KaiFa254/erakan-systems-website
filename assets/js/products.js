/* ============================================================
   ERAKAN SYSTEMS LTD — products.js  (loaded on products.html only)
   ------------------------------------------------------------
   THIS IS YOUR SHOP'S "DATABASE". Every product is one object
   in the PRODUCTS list below. To:
     • change a price   → edit the price number
     • add a product    → copy any block, paste, edit values
     • remove a product → delete its block (keep commas valid!)
     • add a photo      → save a .jpg in assets/img/products/
                          and put its filename in "img"
   The page then builds all cards automatically — you never
   edit products.html by hand.
   ============================================================ */

/* Your WhatsApp business number in INTERNATIONAL format:
   0735 038 835  →  254735038835  (drop the 0, add 254). */
const WHATSAPP_NUMBER = '254735038835';

/* Categories must match the data-filter values of the buttons
   in products.html: cctv | alarm | network | power | access   */

const PRODUCTS = [

  /* ---------------- CCTV & SURVEILLANCE ---------------- */
  {
    name: 'Hikvision 2MP Turbo HD Bullet Camera',
    model: 'DS-2CE16D0T-IRF',
    category: 'cctv',
    price: 3500,
    desc: '1080p outdoor bullet, 20 m infrared night vision, weatherproof IP66 body. The workhorse of home and shop CCTV.',
    img: 'hikvision-bullet-2mp.jpg'
  },
  {
    name: 'Hikvision 2MP Turbo HD Dome Camera',
    model: 'DS-2CE76D0T-ITPF',
    category: 'cctv',
    price: 3400,
    desc: 'Discreet 1080p indoor dome with smart IR. Ideal for offices, receptions and retail interiors.',
    img: 'hikvision-dome-2mp.jpg'
  },
  {
    name: 'Hikvision 4MP IP Bullet Camera',
    model: 'DS-2CD1043G0-I',
    category: 'cctv',
    price: 8500,
    desc: 'Network camera with sharp 4MP detail, H.265+ compression and 30 m EXIR night range. PoE powered — one cable does it all.',
    img: 'hikvision-ip-4mp.jpg'
  },
  {
    name: 'Hikvision 6MP ColorVu Bullet Camera',
    model: 'DS-2CD1067G2H-LIU',
    category: 'cctv',
    price: 10500,
    desc: 'Full-colour video even at night, built-in mic, human & vehicle detection. Premium choice for gates and parking.',
    img: 'hikvision-colorvu-6mp.jpg'
  },
  {
    name: 'Hikvision 8-Channel Turbo HD DVR',
    model: 'iDS-7208HQHI-M1/S',
    category: 'cctv',
    price: 11500,
    desc: 'Records up to 8 analogue cameras with AcuSense human/vehicle filtering. Supports 1 hard disk up to 10TB.',
    img: 'hikvision-dvr-8ch.jpg'
  },
  {
    name: 'Hikvision 8-Channel PoE NVR',
    model: 'DS-7608NI-K1/8P',
    category: 'cctv',
    price: 22000,
    desc: '4K network video recorder with 8 built-in PoE ports — plug IP cameras straight in, no separate power supplies.',
    img: 'hikvision-nvr-8ch.jpg'
  },
  {
    name: '4-Camera Full HD CCTV Kit (Installed)',
    model: 'Hikvision 1080p bundle',
    category: 'cctv',
    price: 35000,
    desc: 'Complete package: 4× 2MP cameras, 8ch DVR, 1TB surveillance HDD, power supply, cabling and professional installation within Nairobi.',
    img: 'kit-4-camera.jpg'
  },
  {
    name: '8-Camera Full HD CCTV Kit (Installed)',
    model: 'Hikvision 1080p bundle',
    category: 'cctv',
    price: 62000,
    desc: 'For larger homes and business premises: 8× 2MP cameras, 8ch DVR, 2TB HDD, PSU, cabling and installation. Remote phone viewing configured free.',
    img: 'kit-8-camera.jpg'
  },
  {
    name: 'WD Purple 1TB Surveillance Hard Disk',
    model: 'WD10PURZ',
    category: 'cctv',
    price: 6500,
    desc: 'Purpose-built for 24/7 CCTV recording — roughly 2–3 weeks of footage from a 4-camera 1080p system.',
    img: 'wd-purple-1tb.jpg'
  },

  /* ---------------- ALARMS & PERIMETER ---------------- */
  {
    name: 'Wireless GSM/WiFi Intruder Alarm Kit',
    model: 'App + SMS alerts',
    category: 'alarm',
    price: 13500,
    desc: 'Control panel, PIR motion sensors, door contacts, remotes and siren. Calls/SMS you the moment a zone is triggered; arm and disarm from your phone.',
    img: 'alarm-gsm-kit.jpg'
  },
  {
    name: 'PIR Motion Detector',
    model: 'Wired, pet-immune option',
    category: 'alarm',
    price: 1800,
    desc: 'Detects body-heat movement across a room. Add extra zones to any existing alarm panel.',
    img: 'pir-detector.jpg'
  },
  {
    name: 'Outdoor Siren & Strobe Kit',
    model: 'Cover + horn + strobe',
    category: 'alarm',
    price: 2900,
    desc: 'Loud audible siren with flashing strobe — a visible deterrent that alerts the whole neighbourhood.',
    img: 'siren-strobe.jpg'
  },
  {
    name: 'Magnetic Door/Window Contact',
    model: 'Surface mount',
    category: 'alarm',
    price: 650,
    desc: 'Triggers the alarm the instant a protected door or window is opened. Sold per piece.',
    img: 'door-contact.jpg'
  },
  {
    name: 'Electric Fence Energizer (Single Zone)',
    model: 'Wall-top / free-standing',
    category: 'alarm',
    price: 26500,
    desc: 'High-voltage pulse energizer with tamper alarm output, battery backup and warning signage. Installation quoted per metre after site survey.',
    img: 'fence-energizer.jpg'
  },
  {
    name: 'Razor Wire 730mm (Per Roll)',
    model: 'Galvanised, 10 m coverage',
    category: 'alarm',
    price: 3200,
    desc: 'Concertina razor wire for wall-tops and perimeters. Frequently combined with electric fencing for layered security.',
    img: 'razor-wire.jpg'
  },

  /* ---------------- NETWORKING & CABLING ---------------- */
  {
    name: 'Cat6 UTP Cable — 305m Box',
    model: 'Giganet / pure copper',
    category: 'network',
    price: 11500,
    desc: 'Gigabit-rated structured cabling for offices, CCTV IP systems and access points. Full 305-metre pull box.',
    img: 'cat6-box.jpg'
  },
  {
    name: '24-Port Gigabit Rackmount Switch',
    model: 'TP-Link TL-SG1024',
    category: 'network',
    price: 13500,
    desc: 'Plug-and-play gigabit switching for office networks and server cabinets. Steel chassis, fanless quiet operation.',
    img: 'switch-24port.jpg'
  },
  {
    name: 'Ceiling Wireless Access Point',
    model: 'TP-Link EAP series',
    category: 'network',
    price: 8500,
    desc: 'Business-grade WiFi coverage for offices, hotels and apartments. Multiple units roam seamlessly on one network name.',
    img: 'access-point.jpg'
  },
  {
    name: 'Yealink IP Desk Phone',
    model: 'SIP-T31G',
    category: 'network',
    price: 8900,
    desc: 'Crystal-clear VoIP desk phone with 2 line keys and PoE. We supply, configure and link to your PBX.',
    img: 'ip-phone.jpg'
  },
  {
    name: '9U Wall-Mount Network Cabinet',
    model: '600×450mm, glass door',
    category: 'network',
    price: 9500,
    desc: 'Houses your switch, patch panel, DVR/NVR and power neatly and securely. Includes fan tray and lockable door.',
    img: 'cabinet-9u.jpg'
  },

  /* ---------------- POWER SOLUTIONS ---------------- */
  {
    name: '1kVA Line-Interactive UPS',
    model: 'Mecer / APC class',
    category: 'power',
    price: 9500,
    desc: 'Keeps your router, DVR and PC running through blackouts and protects electronics from surges.',
    img: 'ups-1kva.jpg'
  },
  {
    name: '3kVA Hybrid Solar Inverter',
    model: 'Must / Growatt class',
    category: 'power',
    price: 45000,
    desc: 'Runs your home essentials from solar + battery with automatic mains switching. Core of any backup power system.',
    img: 'inverter-3kva.jpg'
  },
  {
    name: '450W Monocrystalline Solar Panel',
    model: 'Tier-1 cells',
    category: 'power',
    price: 13500,
    desc: 'High-efficiency panel for home and institutional solar arrays. 25-year output warranty from manufacturer.',
    img: 'solar-panel-450w.jpg'
  },
  {
    name: '200Ah Gel Deep-Cycle Battery',
    model: '12V maintenance-free',
    category: 'power',
    price: 32000,
    desc: 'Stores solar energy for night-time use. Gel chemistry handles Kenyan heat better than flooded batteries.',
    img: 'battery-200ah.jpg'
  },

  /* ---------------- ACCESS CONTROL & ATTENDANCE ---------------- */
  {
    name: 'ZKTeco Biometric Time & Attendance',
    model: 'K40',
    category: 'access',
    price: 13500,
    desc: 'Fingerprint + card + PIN clock-in terminal with built-in battery. Exports staff attendance reports to Excel.',
    img: 'zkteco-k40.jpg'
  },
  {
    name: 'Standalone RFID Access Keypad',
    model: 'Metal, waterproof',
    category: 'access',
    price: 4500,
    desc: 'Controls a single door with cards, fobs or PIN codes. Pairs with a magnetic lock and exit button.',
    img: 'rfid-keypad.jpg'
  },
  {
    name: 'Magnetic Door Lock 280kg + Bracket',
    model: 'Fail-safe',
    category: 'access',
    price: 5500,
    desc: 'Electromagnetic lock holding force of 280kg — releases instantly on exit button, card or power cut for fire safety.',
    img: 'maglock-280.jpg'
  },
  {
    name: 'Video Doorbell / Intercom Kit',
    model: '7" colour monitor',
    category: 'access',
    price: 12500,
    desc: 'See and speak to visitors at the gate before letting them in. Unlock option available with compatible locks.',
    img: 'video-intercom.jpg'
  }

]; /* ← end of PRODUCTS list. Add new products ABOVE this line. */


/* ============================================================
   RENDERING LOGIC — you normally never need to edit below here
   ============================================================ */

/* Format 35000 → "KSh 35,000" using the browser's built-in
   number formatter (handles the commas for us). */
function formatPrice(amount) {
  return 'KSh ' + amount.toLocaleString('en-KE');
}

/* Build the WhatsApp "click to chat" link for one product.
   encodeURIComponent() converts spaces & symbols so the text
   survives inside a URL. */
function whatsappLink(product) {
  const message =
    'Hello Erakan Systems, I would like to buy: ' +
    product.name + ' (' + product.model + ') — ' + formatPrice(product.price) +
    '. Please advise on availability and installation.';
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
}

/* A simple placeholder icon per category (inline SVG strings).
   Shown behind the photo — visible only if the photo is missing. */
const CATEGORY_ICONS = {
  cctv:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 8l13-4 2 5-13 4z"/><path d="M15 9l4 1v4h-4"/><path d="M6 13v5h4"/><circle cx="13" cy="7.5" r="1.2"/></svg>',
  alarm:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3a6 6 0 016 6v4l2 3H4l2-3V9a6 6 0 016-6z"/><path d="M10 19a2 2 0 004 0"/></svg>',
  network: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-2h12v2"/></svg>',
  power:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>',
  access:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 018 0v3"/><circle cx="12" cy="15" r="1.6"/></svg>'
};

/* Human-readable category labels for the little badge on cards */
const CATEGORY_LABELS = {
  cctv: 'CCTV', alarm: 'Alarms & Fencing', network: 'Networking',
  power: 'Power', access: 'Access Control'
};

/* Draw product cards into the page.
   filter = 'all' shows everything; otherwise only that category. */
function renderProducts(filter) {
  const grid = document.getElementById('product-grid');
  if (!grid) return;                     // not on products page → do nothing

  /* 1) Choose which products to show */
  const visible = (filter === 'all')
    ? PRODUCTS
    : PRODUCTS.filter(function (p) { return p.category === filter; });

  /* 2) Build one HTML string of all the cards.
        Template literals (backticks ``) let us mix HTML + variables. */
  grid.innerHTML = visible.map(function (p) {
    return `
      <article class="product reveal is-visible">
        <div class="product-media">
          <span class="product-tag">${CATEGORY_LABELS[p.category]}</span>
          ${CATEGORY_ICONS[p.category]}
          <!-- onerror removes the <img> if the photo file is missing,
               revealing the icon placeholder behind it -->
          <img src="assets/img/products/${p.img}"
               alt="${p.name}"
               loading="lazy"
               onerror="this.remove()">
        </div>
        <div class="product-body">
          <h3>${p.name}</h3>
          <div class="product-model">${p.model}</div>
          <p>${p.desc}</p>
          <div class="product-foot">
            <div class="price">${formatPrice(p.price)}<small>excl. VAT · indicative</small></div>
            <a class="btn btn--wa" href="${whatsappLink(p)}" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5.1-1.3A10 10 0 1012 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.3-.4 0-.6.1-.8l.4-.5c.1-.2.1-.3 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2.2-.2 3.8a11.6 11.6 0 004.5 4.2c1.7.8 2.4.9 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z"/></svg>
              Buy Now
            </a>
          </div>
        </div>
      </article>`;
  }).join('');
}

/* Wire up the filter buttons once the page has loaded */
document.addEventListener('DOMContentLoaded', function () {

  renderProducts('all');                 // show everything on first load

  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      /* Move the highlighted "active" state to the clicked button */
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      /* Re-draw the grid using the button's data-filter attribute
         (e.g. <button data-filter="cctv">) */
      renderProducts(btn.dataset.filter);
    });
  });
});
