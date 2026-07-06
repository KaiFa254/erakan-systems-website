HOW TO ADD REAL PRODUCT PHOTOS
==============================

The website works WITHOUT photos (each product card shows a clean
category icon placeholder). To upgrade a card to a real photo:

1. Get the photo:
   - Best source: the official manufacturer page, e.g. hikvision.com
     (search the model number like "DS-2CE16D0T-IRF", open the product
     page, save the product image), or photograph your own stock —
     your own photos build the most trust with customers.
   - Ideal size: about 800 x 600 pixels, JPG format, under 150 KB
     (compress free at tinypng.com so the page loads fast).

2. Name the file EXACTLY as listed in assets/js/products.js
   in each product's "img" field. Examples:
      hikvision-bullet-2mp.jpg
      hikvision-dome-2mp.jpg
      alarm-gsm-kit.jpg
      cat6-box.jpg
      ups-1kva.jpg
   (Open products.js to see the full list — one filename per product.)

3. Drop the file into THIS folder (assets/img/products/).

4. Refresh the products page — the photo appears automatically.
   If a filename doesn't match, the icon placeholder stays. No errors.

TIP: When adding a brand-new product in products.js, choose any
filename you like (lowercase, hyphens, .jpg) and save the matching
photo here.
