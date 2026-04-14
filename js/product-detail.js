// ═══════════════════════════════════════════════
//  FarmFreshGrains — Product Detail Page Logic
// ═══════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const catKey = params.get('cat');

  if (!id) { window.location.href = 'index.html'; return; }

  // Find product
  const item = getProductById(id);
  if (!item) { window.location.href = 'index.html'; return; }

  // Update page title
  document.title = `${item.name} — FarmFreshGrains`;

  // Update breadcrumb
  const catEl = document.getElementById('breadcrumbCat');
  const prodEl = document.getElementById('breadcrumbProduct');
  if (catEl && catKey && PRODUCTS[catKey]) {
    catEl.textContent = PRODUCTS[catKey].label;
    catEl.href = `index.html?cat=${catKey}`;
  }
  if (prodEl) prodEl.textContent = item.name;

  // Render detail
  renderProductDetail(item, catKey);
  renderRelated(item, catKey);
});

function renderProductDetail(item, catKey) {
  const grid = document.getElementById('productDetailGrid');
  if (!grid) return;

  const soldOut = item.soldOut;
  const cat = PRODUCTS[catKey];

  grid.innerHTML = `
    <div class="detail-image-col">
      <div class="detail-img-wrap ${soldOut ? 'sold-out' : ''}">
        <img src="${item.image}" alt="${item.name}" id="detailMainImg"
          onerror="this.src='https://placehold.co/600x500/e8f5e9/2d6a4f?text=FarmFreshGrains'">
        ${soldOut ? '<div class="sold-out-overlay">SOLD OUT</div>' : ''}
      </div>
      <div class="detail-badges">
        <span class="badge badge-green">🌿 100% Natural</span>
        <span class="badge badge-amber">🚜 Farm Direct</span>
        <span class="badge badge-brown">🧪 No Preservatives</span>
      </div>
    </div>

    <div class="detail-info-col">
      <p class="detail-item-id">Item #${item.id} · ${cat ? cat.label : ''}</p>
      <h1 class="detail-name">${item.name}</h1>

      <div class="detail-price-row">
        ${soldOut
          ? '<div class="detail-price sold-out-price">Sold Out</div>'
          : `<div class="detail-price" id="detailPrice">${formatPrice(item)}</div>
             <div class="detail-unit">per ${item.unit}</div>`
        }
      </div>

      <div class="detail-description">
        <h3>Description</h3>
        <p>${item.description}</p>
      </div>

      <div class="detail-uses">
        <h3>Uses & Benefits</h3>
        <p>${item.uses}</p>
      </div>

      ${soldOut ? `
        <div class="sold-out-notice">
          <span>⚠️ This item is currently out of stock.</span>
          <p>Please check back later or explore our other products.</p>
          <a href="index.html" class="btn-primary">Browse All Products</a>
        </div>
      ` : `
        <div class="detail-add-cart">
          <div class="qty-selector">
            <button class="qty-btn" onclick="changeQty(-1)" id="qtyMinus">−</button>
            <input type="number" id="qtyInput" value="1" min="1" max="99" onchange="validateQty()">
            <button class="qty-btn" onclick="changeQty(1)">+</button>
          </div>
          <div class="detail-total-row">
            <span>Subtotal:</span>
            <strong id="detailSubtotal">${formatPrice(item)}</strong>
          </div>
          <button class="btn-add-to-cart" onclick="detailAddToCart('${item.id}')">
            🛒 Add to Cart
          </button>
          <button class="btn-buy-now" onclick="detailBuyNow('${item.id}')">
            ⚡ Buy Now
          </button>
        </div>
      `}

      <div class="detail-delivery-info">
        <div class="delivery-chip">🚚 Free delivery above ₹500 / $25</div>
        <div class="delivery-chip">🔄 Easy returns</div>
        <div class="delivery-chip">🌱 Farm certified</div>
      </div>
    </div>
  `;

  // Setup quantity update to recalculate subtotal
  if (!soldOut) {
    updateSubtotal(item);
    document.getElementById('qtyInput')?.addEventListener('input', () => updateSubtotal(item));
  }
}

function changeQty(delta) {
  const input = document.getElementById('qtyInput');
  if (!input) return;
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 99) val = 99;
  input.value = val;
  const params = new URLSearchParams(window.location.search);
  const item = getProductById(params.get('id'));
  if (item) updateSubtotal(item);
}

function validateQty() {
  const input = document.getElementById('qtyInput');
  if (!input) return;
  let val = parseInt(input.value);
  if (isNaN(val) || val < 1) val = 1;
  if (val > 99) val = 99;
  input.value = val;
  const params = new URLSearchParams(window.location.search);
  const item = getProductById(params.get('id'));
  if (item) updateSubtotal(item);
}

function updateSubtotal(item) {
  const qty = parseInt(document.getElementById('qtyInput')?.value) || 1;
  const c = CURRENCY[currentCurrency];
  const price = item[c.key] * qty;
  const el = document.getElementById('detailSubtotal');
  if (el) el.textContent = currentCurrency === 'INR' ? `₹${price}` : `$${price.toFixed(2)}`;
}

function detailAddToCart(id) {
  const qty = parseInt(document.getElementById('qtyInput')?.value) || 1;
  addToCart(id, qty);
  const item = getProductById(id);
  showToast(`✅ ${qty}× ${item.name} added to cart!`);
  toggleCart();
}

function detailBuyNow(id) {
  const qty = parseInt(document.getElementById('qtyInput')?.value) || 1;
  addToCart(id, qty);
  showToast('Proceeding to checkout…');
  // In future: redirect to checkout page
}

function renderRelated(item, catKey) {
  const grid = document.getElementById('relatedGrid');
  if (!grid || !catKey || !PRODUCTS[catKey]) return;
  const related = PRODUCTS[catKey].items
    .filter(i => i.id !== item.id)
    .slice(0, 4)
    .map(i => ({ ...i, _catKey: catKey }));
  if (related.length === 0) { document.querySelector('.related-products')?.remove(); return; }
  grid.innerHTML = related.map(i => createProductCard(i)).join('');
}
