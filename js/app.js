// ═══════════════════════════════════════════════
//  FarmFreshGrains — Main Application Logic
// ═══════════════════════════════════════════════

// ── STATE ────────────────────────────────────────
let currentCurrency = DEFAULT_CURRENCY;
let cart = JSON.parse(localStorage.getItem('ffg_cart') || '[]');
let currentUser = JSON.parse(localStorage.getItem('ffg_user') || 'null');
let activeCategory = 'all';

// ── INIT ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  detectCurrency();
  buildCategoryTabs();
  renderAllProducts();
  updateCartUI();
  updateLoginUI();
  setupSearch();

  // Handle URL params for category filter
  const params = new URLSearchParams(window.location.search);
  if (params.get('cat')) {
    setCategory(params.get('cat'));
  }
  if (params.get('q')) {
    const input = document.getElementById('searchInput');
    if (input) { input.value = params.get('q'); performSearch(params.get('q')); }
  }

  // Footer category links
  document.querySelectorAll('.footer-cat-link').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      setCategory(a.dataset.cat);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});

// ── CURRENCY DETECTION ───────────────────────────
async function detectCurrency() {
  try {
    const res = await fetch('https://ipapi.co/json/');
    const data = await res.json();
    currentCurrency = (data.country_code === 'IN') ? 'INR' : 'USD';
  } catch (e) {
    currentCurrency = DEFAULT_CURRENCY;
  }
  updateCurrencyBadge();
  renderAllProducts();
  updateCartUI();
}

function updateCurrencyBadge() {
  const badge = document.getElementById('currencyBadge');
  const flag = document.getElementById('currencyFlag');
  const label = document.getElementById('currencyLabel');
  if (!badge) return;
  flag.textContent = currentCurrency === 'INR' ? '🇮🇳' : '🇺🇸';
  label.textContent = currentCurrency;
}

function formatPrice(item) {
  const c = CURRENCY[currentCurrency];
  const price = item[c.key];
  if (currentCurrency === 'INR') return `₹${price}`;
  return `$${price.toFixed(2)}`;
}

// ── BUILD CATEGORY TABS ──────────────────────────
function buildCategoryTabs() {
  const nav = document.querySelector('.cat-nav-inner');
  if (!nav) return;
  Object.entries(PRODUCTS).forEach(([key, cat]) => {
    const a = document.createElement('a');
    a.className = 'cat-tab';
    a.dataset.cat = key;
    a.href = '#';
    a.innerHTML = `${cat.icon} ${cat.label}`;
    a.addEventListener('click', e => { e.preventDefault(); setCategory(key); });
    nav.appendChild(a);
  });
}

function setCategory(catKey) {
  activeCategory = catKey;
  document.querySelectorAll('.cat-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === catKey);
  });

  const title = document.getElementById('categoryTitle');
  if (catKey === 'all') {
    if (title) title.textContent = 'All Products';
  } else {
    const cat = PRODUCTS[catKey];
    if (title && cat) title.textContent = `${cat.icon} ${cat.label}`;
  }

  const hero = document.getElementById('heroSection');
  if (hero) hero.style.display = catKey === 'all' ? '' : 'none';

  clearSearch();
  renderProducts(catKey);
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── RENDER PRODUCTS ──────────────────────────────
function renderAllProducts() {
  renderProducts('all');
}

function renderProducts(catKey, items = null) {
  const grid = document.getElementById('productsGrid');
  const empty = document.getElementById('emptyState');
  if (!grid) return;

  let toShow = [];
  if (items) {
    toShow = items;
  } else if (catKey === 'all') {
    Object.values(PRODUCTS).forEach(cat => {
      cat.items.forEach(item => toShow.push({ ...item, _catKey: Object.keys(PRODUCTS).find(k => PRODUCTS[k] === cat) }));
    });
  } else {
    const cat = PRODUCTS[catKey];
    if (cat) cat.items.forEach(item => toShow.push({ ...item, _catKey: catKey }));
  }

  if (toShow.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'flex';
    return;
  }
  if (empty) empty.style.display = 'none';

  grid.innerHTML = toShow.map(item => createProductCard(item)).join('');
}

function createProductCard(item) {
  const soldOut = item.soldOut;
  const catKey = item._catKey || getCatKeyById(item.id);
  return `
    <div class="product-card ${soldOut ? 'sold-out' : ''}" onclick="${soldOut ? '' : `goToProduct('${item.id}','${catKey}')`}" style="cursor:${soldOut ? 'default' : 'pointer'}">
      <div class="product-img-wrap">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://placehold.co/400x300/e8f5e9/2d6a4f?text=FarmFresh'">
        ${soldOut ? '<div class="sold-out-badge">Sold Out</div>' : ''}
        <div class="product-cat-tag">${getCatLabel(catKey)}</div>
      </div>
      <div class="product-info">
        <p class="product-id">Item #${item.id}</p>
        <h3 class="product-name">${item.name}</h3>
        <p class="product-desc-short">${item.description.substring(0, 75)}…</p>
        <div class="product-footer">
          <div class="product-price">
            ${soldOut ? '<span class="price-sold">Sold Out</span>' : `<span class="price-main">${formatPrice(item)}</span><span class="price-unit"> / ${item.unit}</span>`}
          </div>
          ${soldOut ? '' : `<button class="btn-add-card" onclick="event.stopPropagation();quickAddToCart('${item.id}','${catKey}')">+ Add</button>`}
        </div>
      </div>
    </div>`;
}

function getCatKeyById(id) {
  for (const [key, cat] of Object.entries(PRODUCTS)) {
    if (cat.items.find(i => i.id === id)) return key;
  }
  return '';
}

function getCatLabel(catKey) {
  return PRODUCTS[catKey]?.label || '';
}

function getProductById(id) {
  for (const cat of Object.values(PRODUCTS)) {
    const found = cat.items.find(i => i.id === id);
    if (found) return found;
  }
  return null;
}

// ── NAVIGATION ───────────────────────────────────
function goToProduct(id, catKey) {
  window.location.href = `product.html?id=${id}&cat=${catKey}`;
}

// ── CART ─────────────────────────────────────────
function quickAddToCart(id, catKey) {
  const item = getProductById(id);
  if (!item || item.soldOut) return;
  addToCart(id, 1);
  showToast(`✅ ${item.name} added to cart!`);
}

function addToCart(id, qty) {
  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  updateCartUI();
}

function updateCartQty(id, qty) {
  if (qty < 1) { removeFromCart(id); return; }
  const item = cart.find(c => c.id === id);
  if (item) item.qty = qty;
  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem('ffg_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const countEl = document.getElementById('cartCount');
  const totalItems = cart.reduce((s, c) => s + c.qty, 0);

  if (countEl) {
    countEl.textContent = totalItems;
    countEl.style.display = totalItems > 0 ? 'flex' : 'none';
  }

  const cartItemsEl = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartFooter = document.getElementById('cartFooter');
  const cartTotal = document.getElementById('cartTotal');

  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '';
    if (cartEmpty) cartEmpty.style.display = 'flex';
    if (cartFooter) cartFooter.style.display = 'none';
    return;
  }

  if (cartEmpty) cartEmpty.style.display = 'none';
  if (cartFooter) cartFooter.style.display = 'block';

  let total = 0;
  const c = CURRENCY[currentCurrency];
  cartItemsEl.innerHTML = cart.map(ci => {
    const item = getProductById(ci.id);
    if (!item) return '';
    const price = item[c.key] * ci.qty;
    total += price;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/60x60/e8f5e9/2d6a4f?text=FFG'">
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">${formatPrice(item)} / ${item.unit}</p>
          <div class="cart-qty-row">
            <button onclick="updateCartQty('${item.id}', ${ci.qty - 1})">−</button>
            <span>${ci.qty}</span>
            <button onclick="updateCartQty('${item.id}', ${ci.qty + 1})">+</button>
            <button class="cart-remove" onclick="removeFromCart('${item.id}')">🗑</button>
          </div>
        </div>
        <div class="cart-item-total">${currentCurrency === 'INR' ? '₹' : '$'}${currentCurrency === 'INR' ? price : price.toFixed(2)}</div>
      </div>`;
  }).join('');

  if (cartTotal) {
    cartTotal.textContent = currentCurrency === 'INR' ? `₹${total}` : `$${total.toFixed(2)}`;
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('visible');
}

// ── SEARCH ───────────────────────────────────────
function setupSearch() {
  const input = document.getElementById('searchInput');
  const clear = document.getElementById('searchClear');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim();
    clear && (clear.style.display = q ? 'block' : 'none');
    if (q.length >= 2) performSearch(q);
    else if (q.length === 0) clearSearch();
  });

  if (clear) clear.addEventListener('click', clearSearch);
}

function performSearch(q) {
  const lower = q.toLowerCase();
  const results = [];
  Object.entries(PRODUCTS).forEach(([key, cat]) => {
    cat.items.forEach(item => {
      if (item.name.toLowerCase().includes(lower) || item.description.toLowerCase().includes(lower)) {
        results.push({ ...item, _catKey: key });
      }
    });
  });

  const bar = document.getElementById('searchResultsBar');
  const txt = document.getElementById('searchResultsText');
  if (bar) bar.style.display = 'block';
  if (txt) txt.textContent = `${results.length} result${results.length !== 1 ? 's' : ''} for "${q}"`;

  const title = document.getElementById('categoryTitle');
  if (title) title.textContent = `Search: "${q}"`;

  const hero = document.getElementById('heroSection');
  if (hero) hero.style.display = 'none';

  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  renderProducts('search', results);
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  const clear = document.getElementById('searchClear');
  const bar = document.getElementById('searchResultsBar');
  if (input) input.value = '';
  if (clear) clear.style.display = 'none';
  if (bar) bar.style.display = 'none';
  setCategory('all');
  document.querySelector('[data-cat="all"]')?.classList.add('active');
  const hero = document.getElementById('heroSection');
  if (hero) hero.style.display = '';
}

// ── LOGIN / AUTH ──────────────────────────────────
function updateLoginUI() {
  const label = document.getElementById('loginLabel');
  if (!label) return;
  label.textContent = currentUser ? currentUser.name.split(' ')[0] : 'Login';
}

document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const cartBtn = document.getElementById('cartBtn');
  if (loginBtn) loginBtn.addEventListener('click', () => {
    if (currentUser) showUserMenu();
    else openLoginModal();
  });
  if (cartBtn) cartBtn.addEventListener('click', toggleCart);
});

function openLoginModal() {
  document.getElementById('loginModal').style.display = 'flex';
}
function closeLoginModal() {
  document.getElementById('loginModal').style.display = 'none';
}
function switchTab(tab) {
  document.getElementById('loginForm').style.display = tab === 'login' ? 'block' : 'none';
  document.getElementById('registerForm').style.display = tab === 'register' ? 'block' : 'none';
  document.querySelectorAll('.modal-tab').forEach((t, i) => {
    t.classList.toggle('active', (i === 0 && tab === 'login') || (i === 1 && tab === 'register'));
  });
}
function doLogin() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  if (!email || !password) { showToast('Please fill in all fields', 'error'); return; }
  const user = { name: email.split('@')[0], email };
  localStorage.setItem('ffg_user', JSON.stringify(user));
  currentUser = user;
  updateLoginUI();
  closeLoginModal();
  showToast(`Welcome back, ${user.name}! 👋`);
}
function doRegister() {
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  if (!name || !email || !password) { showToast('Please fill in all fields', 'error'); return; }
  const user = { name, email };
  localStorage.setItem('ffg_user', JSON.stringify(user));
  currentUser = user;
  updateLoginUI();
  closeLoginModal();
  showToast(`Welcome, ${name}! Account created 🎉`);
}
function showUserMenu() {
  if (confirm(`Logged in as ${currentUser.name}\n\nClick OK to logout.`)) {
    localStorage.removeItem('ffg_user');
    currentUser = null;
    updateLoginUI();
    showToast('Logged out successfully');
  }
}

// ── TOAST NOTIFICATIONS ──────────────────────────
function showToast(msg, type = 'success') {
  let toast = document.getElementById('ffg-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'ffg-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = `ffg-toast show ${type}`;
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}
