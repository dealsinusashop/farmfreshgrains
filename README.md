# 🌾 FarmFreshGrains Website

A complete farm-to-doorstep e-commerce website built for GitHub Pages hosting.

---

## 🚀 How to Deploy on GitHub Pages (Step by Step)

### Step 1 — Create a GitHub Account
If you don't have one: https://github.com/signup

### Step 2 — Create a New Repository
1. Go to https://github.com/new
2. Repository name: `farmfreshgrains` (or any name you like)
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload the Files
**Option A — GitHub Web Interface (Easiest):**
1. Open your new repository
2. Click **"uploading an existing file"** link
3. Drag and drop ALL these files and folders:
   - `index.html`
   - `product.html`
   - `about.html`
   - `contact.html`
   - `store-locator.html`
   - `css/` folder (with `style.css`)
   - `js/` folder (with `products.js`, `app.js`, `product-detail.js`)
4. Scroll down → Click **"Commit changes"**

**Option B — GitHub Desktop App:**
1. Download GitHub Desktop: https://desktop.github.com
2. Clone your repository
3. Copy all files into the folder
4. Commit and Push

### Step 4 — Enable GitHub Pages
1. Go to your repository → **Settings** tab
2. Scroll to **"Pages"** in the left sidebar
3. Under **Source**, select **"Deploy from a branch"**
4. Branch: **main** | Folder: **/ (root)**
5. Click **Save**
6. Wait 1–2 minutes, then your site will be live at:
   `https://YOUR-USERNAME.github.io/farmfreshgrains/`

---

## 📋 How to Maintain Your Products (Easy!)

**All product data lives in ONE file: `js/products.js`**

### ✅ Change a Price
```js
inr: 85,   // Change this number for India price
usd: 3.50, // Change this number for USA price
```

### ✅ Mark an Item as Sold Out
```js
soldOut: true,  // Change false → true
```

### ✅ Change a Product Image
```js
image: "https://your-image-url.jpg",
```
> **Tip**: Upload your own photo to https://imgbb.com or https://postimages.org and paste the direct link here.

### ✅ Add a New Product (e.g., a new rice variety)
Copy any existing item block and add it to the `items` array:
```js
{
  id: "R009",          // Unique ID (increment from last)
  name: "New Rice",
  inr: 100,
  usd: 4.00,
  unit: "kg",
  soldOut: false,
  image: "https://your-image-link.jpg",
  description: "Your description here.",
  uses: "How to use it."
}
```

### ✅ Add a New Category (e.g., Sweets)
In `js/products.js`, add a new section:
```js
sweets: {
  label: "Sweets",
  icon: "🍬",
  items: [
    {
      id: "S001",
      name: "Mysore Pak",
      inr: 300,
      usd: 12.00,
      unit: "250g",
      soldOut: false,
      image: "https://...",
      description: "...",
      uses: "..."
    }
  ]
}
```

### ✅ Remove a Product
Simply delete the entire `{ id: "...", ... }` block from the items array.

---

## 📁 File Structure
```
farmfreshgrains/
├── index.html          → Homepage with all products
├── product.html        → Individual product detail page
├── about.html          → About Us page
├── contact.html        → Contact Us page
├── store-locator.html  → Store Locator page
├── css/
│   └── style.css       → All styling
└── js/
    ├── products.js     ← ⭐ EDIT THIS FILE to manage products
    ├── app.js          → Cart, login, search, currency logic
    └── product-detail.js → Product page logic
```

---

## 🌍 Currency Detection
- Visitors from **India** automatically see prices in **₹ INR**
- All other visitors see prices in **$ USD**
- Detected via IP geolocation (ipapi.co — free service)

---

## 💡 Tips for Product Images
1. Use Google Images → right-click an image → "Copy image address"
2. Or use free stock photos from: https://unsplash.com
3. Or upload your own farm photos to https://imgbb.com

---

## 🔮 Future: Adding Sweets Tab
When ready, just add the `sweets` category to `js/products.js` as shown above. The tab will automatically appear in the navigation!
