ERAKAN SYSTEMS LTD — WEBSITE (Phase 1 MVP)
===========================================
Domain: erakansystems.co.ke   |   WhatsApp orders: 0735 038 834
Email: info@erakansystems.co.ke

FOLDER STRUCTURE
----------------
index.html            Homepage
about.html            About / mission / vision / values
services.html         Detailed services + process
products.html         Shop with filters + price list table
contact.html          Contact cards + enquiry form + FAQ
assets/css/style.css  ALL styling (now incl. cart & socials, section 14)
assets/js/cart.js     NEW - cart, checkout, CONFIG (WhatsApp no. + Sheet URL)
assets/js/main.js     Menu, sticky header, animations, footer year
assets/js/products.js Built-in product catalogue + live Sheet fetch
assets/img/logo.png   Company logo
assets/img/products/  Drop real product photos here (see README inside)
google-sheet/         NEW - Code.gs, products-template.csv, SETUP-GUIDE.txt
                      (reference files; NOT uploaded to the server)

MOST COMMON EDITS
-----------------
Change a price............ Google Sheet "Products" tab (once connected)
                           or assets/js/products.js fallback list
Add/remove a product...... add/delete a ROW in the Products tab
Hide a product............ set its instock cell to NO
View orders............... Google Sheet "Orders" tab
Share one product......... tap the share icon on its card - link copied
Change brand colours...... assets/css/style.css -> the :root section at top
Change phone number....... assets/js/cart.js CONFIG + search-and-replace
                           "254735038834" / "0735 038 834" in the HTML pages
Social media links........ search "socials" in any page footer, edit hrefs
Sheet connection.......... assets/js/cart.js -> SHEET_API_URL
Edit price list table..... products.html -> the <table class="price-table">

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
