ERAKAN SYSTEMS LTD — WEBSITE (Phase 1 MVP)
===========================================
Domain: erakansystems.co.ke   |   WhatsApp orders: 0735 038 835
Email: info@erakansystems.co.ke

FOLDER STRUCTURE
----------------
index.html            Homepage
about.html            About / mission / vision / values
services.html         Detailed services + process
products.html         Shop with filters + price list table
contact.html          Contact cards + enquiry form + FAQ
assets/css/style.css  ALL styling (colours, layout, mobile rules)
assets/js/main.js     Menu, sticky header, animations, footer year
assets/js/products.js YOUR PRODUCT DATABASE + Buy Now logic
assets/img/logo.png   Company logo
assets/img/products/  Drop real product photos here (see README inside)

MOST COMMON EDITS
-----------------
Change a price............ assets/js/products.js  → edit the number
Add/remove a product...... assets/js/products.js  → copy/delete a block
Change brand colours...... assets/css/style.css   → the :root section at top
Change phone/email........ search-and-replace "254735038835" /
                           "0735 038 835" / "info@erakansystems.co.ke"
Edit price list table..... products.html → the <table class="price-table">

VIEW LOCALLY
------------
Just double-click index.html — it opens in your browser.
(For a nicer workflow, open the folder in VS Code and use the
"Live Server" extension → right-click index.html → Open with Live Server.)

UPLOAD TO TRUEHOST (SUMMARY)
----------------------------
1. Buy a hosting package at truehost.co.ke (domain already registered).
2. Log in to cPanel → File Manager → open public_html.
3. Upload the ZIP of this folder's CONTENTS (index.html must end up
   directly inside public_html, NOT inside a subfolder).
4. Extract the zip in cPanel, delete the zip file.
5. In cPanel → SSL/TLS Status → Run AutoSSL (free https padlock).
6. Visit https://erakansystems.co.ke — done.
7. Create the mailbox info@erakansystems.co.ke under
   cPanel → Email Accounts.
