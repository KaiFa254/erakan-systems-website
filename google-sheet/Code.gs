/* ============================================================
   ERAKAN SYSTEMS LTD — Google Apps Script (Code.gs)
   ------------------------------------------------------------
   PASTE THIS ENTIRE FILE into your Google Sheet's script editor:
     Open your Sheet → Extensions → Apps Script → delete whatever
     is there → paste this → save (💾) → Deploy → New deployment.

   This tiny program is your free "mini-server". It does TWO jobs:

     doGet()  → when the website asks, it reads the "Products"
                tab and replies with the product list (as JSON).

     doPost() → when a customer checks out, it writes one new
                row into the "Orders" tab.

   Because the script is ATTACHED to your spreadsheet, it can
   read/write it directly — no passwords or keys in the website.
   ============================================================ */


/* ============================================================
   JOB 1 — SERVE THE PRODUCT LIST
   ------------------------------------------------------------
   The website calls your script URL with a normal GET request
   (the same kind your browser makes when you visit any page).
   Google runs this function and returns whatever we build here.
   ============================================================ */
function doGet() {

  /* Open the "Products" tab of THIS spreadsheet */
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Products');

  /* getDataRange() = every used cell; getValues() = as a 2-D list:
       data[0] is the header row  → ['name','model','category',...]
       data[1] onwards are products, one row each                   */
  const data = sheet.getDataRange().getValues();
  const headers = data[0];

  /* Convert each row into an object like:
       { name:'...', model:'...', category:'cctv', price:3500, ... }
     — the exact shape products.js already understands. */
  const products = [];
  for (let r = 1; r < data.length; r++) {
    const row = data[r];
    if (!row[0]) continue;               // skip blank rows

    const product = {};
    for (let c = 0; c < headers.length; c++) {
      /* header text (lower-cased) becomes the key */
      product[String(headers[c]).toLowerCase().trim()] = row[c];
    }
    /* Make sure price is a NUMBER, even if the cell was text */
    product.price = Number(product.price) || 0;
    products.push(product);
  }

  /* Send the list back as JSON text */
  return ContentService
    .createTextOutput(JSON.stringify(products))
    .setMimeType(ContentService.MimeType.JSON);
}


/* ============================================================
   JOB 2 — LOG A NEW ORDER
   ------------------------------------------------------------
   The website's checkout sends the cart here as a POST request.
   e.postData.contents is the raw text the site sent; we JSON-
   parse it back into an object and append one row to "Orders".
   ============================================================ */
function doPost(e) {
  try {
    const order = JSON.parse(e.postData.contents);

    /* Turn the items list into one readable cell, e.g.
       "2 x Hikvision 2MP Bullet (DS-2CE16D0T-IRF); 1 x 8ch DVR (...)" */
    const itemsText = (order.items || []).map(function (i) {
      return i.qty + ' x ' + i.name + ' (' + i.model + ')';
    }).join('; ');

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Orders');

    /* appendRow adds one row at the bottom. Column order must
       match the headers you created in the Orders tab:
       Timestamp | Name | Phone | Location | Items | Total | Status */
    sheet.appendRow([
      new Date(),                        // Timestamp (Kenyan time — see note)
      order.name     || '',
      order.phone    || '',
      order.location || '',
      itemsText,
      order.total    || 0,
      'NEW'                              // you update this column yourself
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    /* Never crash — reply with the error so it can be diagnosed */
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/* ============================================================
   NOTES
   ------------------------------------------------------------
   • Timezone: File → Settings (in Apps Script) → set the script
     timezone to (GMT+03:00) Nairobi so order timestamps are local.
   • After ANY edit to this code you must re-deploy:
     Deploy → Manage deployments → ✏️ edit → Version: New → Deploy.
     The URL stays the same.
   • The script can only do the two things above. Even though the
     URL is public, nobody can read your Orders tab or edit your
     products through it.
   ============================================================ */
