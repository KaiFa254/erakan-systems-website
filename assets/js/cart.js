/* ============================================================
   ERAKAN SYSTEMS LTD — cart.js  (loaded on EVERY page)
   ------------------------------------------------------------
   This file adds the SHOPPING CART to the website:

     1. CONFIG            → your WhatsApp number + Google Sheet link
     2. STORAGE           → saving/loading the cart in the browser
     3. CART ACTIONS      → add / remove / change quantity
     4. DRAWER UI         → the slide-out cart panel (built by JS)
     5. CHECKOUT          → customer details → log order to your
                            Google Sheet → open WhatsApp with the
                            full order pre-written

   HOW THE CART "REMEMBERS":
   The cart lives in localStorage — a small notepad every browser
   gives each website. It survives page refreshes and closing the
   browser, but it is per-device (a phone cart won't appear on a
   laptop). Perfect for a shop like this.
   ============================================================ */


/* ============================================================
   1. CONFIG — the only part you ever need to edit
   ============================================================ */
window.ERAKAN_CONFIG = {

  /* WhatsApp number in INTERNATIONAL format:
     0735 038 834  →  254735038834  (drop the 0, add 254) */
  WHATSAPP_NUMBER: '254735038834',

  /* Your Google Apps Script "web app" URL.
     ▸ Leave as '' (empty) and the site still works fully:
       products come from the built-in list in products.js and
       orders simply are not logged to the Sheet.
     ▸ Once you deploy the script (see ECOMMERCE-SETUP-GUIDE),
       paste the long URL between the quotes, e.g.:
       'https://script.google.com/macros/s/AKfycb.../exec'     */
  SHEET_API_URL: 'https://script.google.com/macros/s/AKfycbwufIGyNUNd8J-ECgprI9n116WaCaiBMbolQMtaPH1usRsgcH4mAk6cEe4bTGDQDLE/exec'
};


/* ============================================================
   2. STORAGE — read & write the cart in localStorage
   ------------------------------------------------------------
   localStorage can only store TEXT, so we convert:
     save: JavaScript array → JSON text   (JSON.stringify)
     load: JSON text → JavaScript array   (JSON.parse)
   ============================================================ */
const CART_KEY = 'erakan_cart';          /* the notepad label   */

function cartLoad() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch (e) {
    return [];                            /* corrupted? start fresh */
  }
}

function cartSave(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  cartRefreshUI();                        /* keep badge & drawer in sync */
}


/* ============================================================
   3. CART ACTIONS — the public API used by products.js
   ------------------------------------------------------------
   Each cart line looks like:
     { name, model, price, qty }
   We expose everything on window.Cart so other scripts
   (products.js) can call Cart.add(product).
   ============================================================ */
window.Cart = {

  /* Add one unit of a product (or +1 if already in the cart) */
  add: function (product) {
    const items = cartLoad();
    /* .find() looks for an existing line with the same model no. */
    const line = items.find(function (i) { return i.model === product.model; });
    if (line) {
      line.qty += 1;
    } else {
      items.push({
        name: product.name,
        model: product.model,
        price: product.price,
        qty: 1
      });
    }
    cartSave(items);
    cartToast(product.name + ' added to cart');
  },

  /* Change quantity by +1 / -1; removing the line at zero */
  changeQty: function (model, delta) {
    let items = cartLoad();
    const line = items.find(function (i) { return i.model === model; });
    if (!line) return;
    line.qty += delta;
    if (line.qty <= 0) {
      items = items.filter(function (i) { return i.model !== model; });
    }
    cartSave(items);
  },

  /* Remove a line completely */
  remove: function (model) {
    cartSave(cartLoad().filter(function (i) { return i.model !== model; }));
  },

  /* Empty the whole cart (after a successful checkout) */
  clear: function () { cartSave([]); },

  /* Totals used by the badge and the drawer */
  count: function () {
    return cartLoad().reduce(function (n, i) { return n + i.qty; }, 0);
  },
  total: function () {
    return cartLoad().reduce(function (n, i) { return n + i.price * i.qty; }, 0);
  }
};

/* Format 35000 → "KSh 35,000" (same helper as products.js —
   repeated here so cart.js works on pages without products.js) */
function cartMoney(amount) {
  return 'KSh ' + amount.toLocaleString('en-KE');
}


/* ============================================================
   4. DRAWER UI — built by JavaScript on every page
   ------------------------------------------------------------
   Instead of pasting the same big block of HTML into all five
   pages, this function INJECTS it once when the page loads.
   One place to edit = five pages updated.
   ============================================================ */
function cartBuildUI() {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <!-- Dark see-through layer behind the drawer -->
    <div class="cart-overlay" id="cart-overlay"></div>

    <!-- The slide-out cart panel -->
    <aside class="cart-drawer" id="cart-drawer" aria-label="Shopping cart">
      <div class="cart-head">
        <h3>Your Cart</h3>
        <button class="cart-close" id="cart-close" aria-label="Close cart">&times;</button>
      </div>

      <div class="cart-items" id="cart-items"><!-- lines drawn by JS --></div>

      <div class="cart-foot">
        <div class="cart-total-row">
          <span>Total</span><strong id="cart-total">KSh 0</strong>
        </div>
        <p class="cart-note">Prices indicative, excl. VAT. Delivery &amp;
           installation confirmed on WhatsApp.</p>
        <button class="btn btn--primary btn--block" id="cart-checkout">
          Checkout on WhatsApp
        </button>
      </div>
    </aside>

    <!-- Checkout pop-up: we collect the basics BEFORE WhatsApp
         so the order can be logged to your Google Sheet too -->
    <div class="checkout-modal" id="checkout-modal">
      <div class="checkout-box">
        <h3>Almost done!</h3>
        <p>Confirm your details — your order will open in WhatsApp.</p>
        <label for="co-name">Your Name</label>
        <input id="co-name" type="text" placeholder="e.g. Jane Wanjiku">
        <label for="co-phone">Phone Number</label>
        <input id="co-phone" type="tel" placeholder="07XX XXX XXX">
        <label for="co-location">Delivery Location (optional)</label>
        <input id="co-location" type="text" placeholder="e.g. Westlands, Nairobi">
        <div class="checkout-actions">
          <button class="btn btn--ghost-dark" id="co-cancel">Back</button>
          <button class="btn btn--primary" id="co-send">Send Order</button>
        </div>
      </div>
    </div>

    <!-- Small "added to cart" confirmation bubble -->
    <div class="toast" id="cart-toast"></div>`;
  document.body.appendChild(wrap);
}

/* Open / close helpers — CSS classes do the animation */
function cartOpen()  { document.body.classList.add('cart-is-open'); cartRefreshUI(); }
function cartClose() { document.body.classList.remove('cart-is-open'); }

/* Small confirmation bubble, disappears after 2 seconds */
let toastTimer;
function cartToast(msg) {
  const t = document.getElementById('cart-toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove('is-visible'); }, 2000);
}

/* Redraw the badge and the drawer lines from localStorage */
function cartRefreshUI() {
  const items = cartLoad();

  /* --- header badge --- */
  const badge = document.getElementById('cart-count');
  if (badge) {
    const n = window.Cart.count();
    badge.textContent = n;
    badge.hidden = (n === 0);             /* hide the red dot at zero */
  }

  /* --- drawer lines --- */
  const box = document.getElementById('cart-items');
  if (!box) return;

  if (items.length === 0) {
    box.innerHTML = '<p class="cart-empty">Your cart is empty.<br>' +
      'Browse the <a href="products.html">products</a> to get started.</p>';
  } else {
    box.innerHTML = items.map(function (i) {
      return `
        <div class="cart-line">
          <div class="cart-line-info">
            <strong>${i.name}</strong>
            <span class="cart-line-model">${i.model}</span>
            <span class="cart-line-price">${cartMoney(i.price)} each</span>
          </div>
          <div class="cart-line-controls">
            <button class="qty-btn" onclick="Cart.changeQty('${i.model}', -1)" aria-label="Decrease">−</button>
            <span class="qty-num">${i.qty}</span>
            <button class="qty-btn" onclick="Cart.changeQty('${i.model}', 1)" aria-label="Increase">+</button>
            <button class="line-remove" onclick="Cart.remove('${i.model}')" aria-label="Remove">&times;</button>
          </div>
        </div>`;
    }).join('');
  }

  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = cartMoney(window.Cart.total());
}


/* ============================================================
   5. CHECKOUT — Sheet logging + WhatsApp handover
   ============================================================ */

/* Build the human-readable order message for WhatsApp */
function cartWhatsAppMessage(name, phone, location) {
  const items = cartLoad();
  let msg = 'Hello Erakan Systems, I would like to order:\n\n';
  items.forEach(function (i, idx) {
    msg += (idx + 1) + '. ' + i.name + ' (' + i.model + ') x' + i.qty +
           ' — ' + cartMoney(i.price * i.qty) + '\n';
  });
  msg += '\nTOTAL: ' + cartMoney(window.Cart.total());
  if (name)     msg += '\nName: ' + name;
  if (phone)    msg += '\nPhone: ' + phone;
  if (location) msg += '\nLocation: ' + location;
  msg += '\n\nPlease confirm availability, delivery and payment details.';
  return msg;
}

/* Quietly send a copy of the order to your Google Sheet.
   mode:'no-cors' means "fire and forget" — the browser cannot
   read Google's reply, which is fine: we only need the row saved.
   If SHEET_API_URL is empty or offline, this silently does
   nothing and the WhatsApp checkout still works. */
function cartLogOrder(name, phone, location) {
  const url = window.ERAKAN_CONFIG.SHEET_API_URL;
  if (!url) return;                       /* Sheet not set up yet */
  try {
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        name: name, phone: phone, location: location,
        items: cartLoad(), total: window.Cart.total()
      })
    });
  } catch (e) { /* never block checkout because of logging */ }
}

/* The full checkout sequence, wired to the "Send Order" button */
function cartCheckout() {
  const name     = document.getElementById('co-name').value.trim();
  const phone    = document.getElementById('co-phone').value.trim();
  const location = document.getElementById('co-location').value.trim();

  cartLogOrder(name, phone, location);    /* 1) row into Orders tab  */

  const msg = cartWhatsAppMessage(name, phone, location);
  const wa  = 'https://wa.me/' + window.ERAKAN_CONFIG.WHATSAPP_NUMBER +
              '?text=' + encodeURIComponent(msg);
  window.open(wa, '_blank');              /* 2) open WhatsApp        */

  window.Cart.clear();                    /* 3) empty the cart       */
  document.getElementById('checkout-modal').classList.remove('is-open');
  cartClose();
  cartToast('Order sent — check WhatsApp!');
}


/* ============================================================
   WIRING — connect buttons once the page has loaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', function () {
  cartBuildUI();                          /* inject drawer + modal   */
  cartRefreshUI();                        /* draw badge from storage */

  /* header cart icon */
  const openBtn = document.getElementById('cart-open');
  if (openBtn) openBtn.addEventListener('click', cartOpen);

  /* close: X button or clicking the dark overlay */
  document.getElementById('cart-close').addEventListener('click', cartClose);
  document.getElementById('cart-overlay').addEventListener('click', cartClose);

  /* checkout: only open the details pop-up if the cart has items */
  document.getElementById('cart-checkout').addEventListener('click', function () {
    if (window.Cart.count() === 0) { cartToast('Your cart is empty'); return; }
    document.getElementById('checkout-modal').classList.add('is-open');
  });
  document.getElementById('co-cancel').addEventListener('click', function () {
    document.getElementById('checkout-modal').classList.remove('is-open');
  });
  document.getElementById('co-send').addEventListener('click', cartCheckout);
});
