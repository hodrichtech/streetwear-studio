/**
 * KULTURA — MOTOR DE E-COMMERCE STREETWEAR (VANILLA JS ES6+)
 * Layout inspirado na referência editorial WSTABLISHED / KULTURA
 */

(function () {
  'use strict';

  const I18N = {
    'pt-PT': {
      ann_text: 'ENVIO GRÁTIS ACIMA DE 100 € // EXPEDIÇÃO 24/48H EUROPA',
      nav_home: 'HOME',
      nav_shop: 'LOJA',
      nav_collections: 'COLEÇÕES',
      nav_about: 'SOBRE',
      hero_kicker: 'STREETWEAR / CULTURA / TU',
      hero_manifesto: 'Mais do que vestuário — é uma mentalidade. A Kultura foi criada para os sonhadores, os criadores e aqueles que permanecem autênticos no asfalto.',
      hero_cta_label: 'SHOP NOW',
      shop_now_small: 'Comprar',
      cat_tshirts: 'T-SHIRTS',
      cat_collections: 'COLEÇÕES',
      cat_caps: 'BONÉS',
      cat_new: 'NOVIDADES',
      fresh_kicker: 'NOVOS LANÇAMENTOS',
      fresh_desc: 'As peças mais recentes da Kultura. Stock limitado em algodão pesado 320-500 GSM. Não percas.',
      view_all_btn: 'VER TUDO',
      trust_1_title: 'ENVIO RÁPIDO',
      trust_1_desc: 'Entrega Internacional 24/48h',
      trust_2_title: 'PAGAMENTO SEGURO',
      trust_2_desc: 'Compre com Total Confiança',
      trust_3_title: 'DEVOLUÇÕES FÁCEIS',
      trust_3_desc: 'Trocas Simples até 30 Dias',
      trust_4_title: 'QUALIDADE PREMIUM',
      trust_4_desc: 'Feito para Durar',
      shop_title: 'PRODUTOS EM DESTAQUE',
      filter_search_ph: 'PESQUISAR POR NOME...',
      opt_all_cats: 'CATEGORIA: TODAS',
      opt_all_sizes: 'TAMANHO: TODOS',
      opt_all_prices: 'PREÇO: TODOS (€)',
      sort_featured: 'ORDEM: DESTAQUES',
      sort_asc: 'PREÇO: MENOR → MAIOR',
      sort_desc: 'PREÇO: MAIOR → MENOR',
      badge_new: 'NOVO',
      badge_soldout: 'ESGOTADO',
      modal_size_label: 'SELECIONAR TAMANHO',
      modal_color_label: 'SELECIONAR COR',
      modal_add_btn: 'ADICIONAR AO CARRINHO',
      modal_soldout_btn: 'ESGOTADO',
      cart_title: 'CARRINHO',
      cart_empty: 'O SEU CARRINHO ESTÁ VAZIO.',
      cart_total_label: 'TOTAL (EUR)',
      cart_checkout_btn: 'FINALIZAR ENCOMENDA',
      checkout_alert: 'Ambiente de Demonstração: O ponto de integração de pagamento (Stripe / MB WAY / Shopify) está pronto em assets/js/app.js.'
    },
    'pt-BR': {
      ann_text: 'FRETE GRÁTIS ACIMA DE 100 € // ENVIO EXPRESSO INTERNACIONAL',
      nav_home: 'HOME',
      nav_shop: 'LOJA',
      nav_collections: 'COLEÇÕES',
      nav_about: 'SOBRE',
      hero_kicker: 'STREETWEAR / CULTURA / VOCÊ',
      hero_manifesto: 'Mais do que roupa — é uma mentalidade. A Kultura é feita para os sonhadores, os realizadores e aqueles que permanecem reais nas ruas.',
      hero_cta_label: 'SHOP NOW',
      shop_now_small: 'Comprar',
      cat_tshirts: 'CAMISETAS',
      cat_collections: 'COLEÇÕES',
      cat_caps: 'BONÉS',
      cat_new: 'NOVIDADES',
      fresh_kicker: 'NOVOS LANÇAMENTOS',
      fresh_desc: 'Os lançamentos mais recentes da Kultura. Estoque limitado em algodão 320-500 GSM. Não perca.',
      view_all_btn: 'VER TUDO',
      trust_1_title: 'ENVIO RÁPIDO',
      trust_1_desc: 'Entrega Internacional 24/48h',
      trust_2_title: 'PAGAMENTO SEGURO',
      trust_2_desc: 'Compre com Total Confiança',
      trust_3_title: 'TROCAS FÁCEIS',
      trust_3_desc: 'Devolução Simples em 30 Dias',
      trust_4_title: 'QUALIDADE PREMIUM',
      trust_4_desc: 'Feito para Durar',
      shop_title: 'PRODUTOS EM DESTAQUE',
      filter_search_ph: 'BUSCAR POR NOME...',
      opt_all_cats: 'CATEGORIA: TODAS',
      opt_all_sizes: 'TAMANHO: TODOS',
      opt_all_prices: 'PREÇO: TODOS (€)',
      sort_featured: 'ORDEM: DESTAQUES',
      sort_asc: 'PREÇO: MENOR → MAIOR',
      sort_desc: 'PREÇO: MAIOR → MENOR',
      badge_new: 'NOVO',
      badge_soldout: 'ESGOTADO',
      modal_size_label: 'SELECIONAR TAMANHO',
      modal_color_label: 'SELECIONAR COR',
      modal_add_btn: 'ADICIONAR AO CARRINHO',
      modal_soldout_btn: 'ESGOTADO',
      cart_title: 'CARRINHO',
      cart_empty: 'SEU CARRINHO ESTÁ VAZIO.',
      cart_total_label: 'TOTAL (EUR)',
      cart_checkout_btn: 'FINALIZAR COMPRA',
      checkout_alert: 'Ambiente de Demonstração: O ponto de integração de checkout está pronto em assets/js/app.js.'
    },
    'en': {
      ann_text: 'FREE SHIPPING ON ORDERS OVER 100 € // WORLDWIDE EXPRESS DELIVERY',
      nav_home: 'HOME',
      nav_shop: 'SHOP',
      nav_collections: 'COLLECTIONS',
      nav_about: 'ABOUT',
      hero_kicker: 'STREETWEAR / CULTURE / YOU',
      hero_manifesto: 'More than clothing — it’s a mindset. Kultura is for the dreamers, the doers, and the ones who stay solid.',
      hero_cta_label: 'SHOP NOW',
      shop_now_small: 'Shop Now',
      cat_tshirts: 'T-SHIRTS',
      cat_collections: 'COLLECTIONS',
      cat_caps: 'CAPS',
      cat_new: 'NEW ARRIVALS',
      fresh_kicker: 'NEW ARRIVALS',
      fresh_desc: 'The latest pieces from Kultura. Limited stock. Don’t miss out.',
      view_all_btn: 'VIEW ALL',
      trust_1_title: 'FAST SHIPPING',
      trust_1_desc: 'Worldwide Delivery',
      trust_2_title: 'SECURE PAYMENTS',
      trust_2_desc: 'Shop with Confidence',
      trust_3_title: 'EASY RETURNS',
      trust_3_desc: 'Hassle-Free Returns',
      trust_4_title: 'PREMIUM QUALITY',
      trust_4_desc: 'Built to Last',
      shop_title: 'FEATURED PRODUCTS',
      filter_search_ph: 'SEARCH BY NAME...',
      opt_all_cats: 'CATEGORY: ALL',
      opt_all_sizes: 'SIZE: ALL',
      opt_all_prices: 'PRICE: ALL (€)',
      sort_featured: 'SORT: FEATURED',
      sort_asc: 'PRICE: LOW → HIGH',
      sort_desc: 'PRICE: HIGH → LOW',
      badge_new: 'NEW',
      badge_soldout: 'SOLD OUT',
      modal_size_label: 'SELECT SIZE',
      modal_color_label: 'SELECT COLOR',
      modal_add_btn: 'ADD TO CART',
      modal_soldout_btn: 'SOLD OUT',
      cart_title: 'CART',
      cart_empty: 'YOUR CART IS CURRENTLY EMPTY.',
      cart_total_label: 'TOTAL (EUR)',
      cart_checkout_btn: 'PROCEED TO CHECKOUT',
      checkout_alert: 'Staging Environment: Payment gateway hook (Stripe / Shopify / Adyen) is documented in assets/js/app.js.'
    }
  };

  const state = {
    lang: localStorage.getItem('kultura_lang_v2') || 'pt-PT',
    products: [],
    filtered: [],
    filters: {
      search: '',
      category: 'all',
      size: 'all',
      maxPrice: 999,
      sort: 'featured'
    },
    activeProduct: null,
    selectedSize: null,
    selectedColor: null,
    cart: JSON.parse(localStorage.getItem('kultura_cart_v2') || '[]')
  };

  function t(key) {
    const dict = I18N[state.lang] || I18N['pt-PT'];
    return dict[key] || I18N['pt-PT'][key] || key;
  }

  function tField(val) {
    if (!val) return '';
    if (typeof val === 'string') return val;
    return val[state.lang] || val['pt-PT'] || val['en'] || Object.values(val)[0] || '';
  }

  function formatEUR(amount) {
    const locale = state.lang === 'en' ? 'en-IE' : 'pt-PT';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'EUR'
    }).format(Number(amount) || 0) + ' EUR';
  }

  const dom = {
    grid: document.getElementById('products-grid'),
    resultsCounter: document.getElementById('results-counter'),
    resetFiltersLink: document.getElementById('reset-filters-link'),
    searchInput: document.getElementById('search-input'),
    headerSearchInput: document.getElementById('header-search-input'),
    headerSearchBar: document.getElementById('header-search-bar'),
    toggleSearchBtn: document.getElementById('toggle-search-btn'),
    closeSearchBtn: document.getElementById('close-search-btn'),
    filterCategory: document.getElementById('filter-category'),
    filterSize: document.getElementById('filter-size'),
    filterPrice: document.getElementById('filter-price'),
    sortSelect: document.getElementById('sort-select'),
    mobileMenuBtn: document.getElementById('mobile-menu-btn'),
    mobileNavDrawer: document.getElementById('mobile-nav-drawer'),

    modalBackdrop: document.getElementById('modal-backdrop'),
    productModal: document.getElementById('product-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalMainImg: document.getElementById('modal-main-img'),
    modalThumbs: document.getElementById('modal-thumbs'),
    modalSku: document.getElementById('modal-sku'),
    modalTitle: document.getElementById('modal-product-title'),
    modalPrice: document.getElementById('modal-product-price'),
    modalDesc: document.getElementById('modal-product-desc'),
    modalSizes: document.getElementById('modal-sizes'),
    modalColors: document.getElementById('modal-colors'),
    modalAddBtn: document.getElementById('modal-add-btn'),

    openCartBtn: document.getElementById('open-cart-btn'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    drawerBackdrop: document.getElementById('drawer-backdrop'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartTotalPrice: document.getElementById('cart-total-price'),
    cartCount: document.getElementById('cart-count'),
    checkoutBtn: document.getElementById('checkout-btn')
  };

  async function init() {
    bindEvents();
    updateCartUI();

    try {
      const res = await fetch('data/products.json?v=2026112202', { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      state.products = data.products || [];
      injectSchemaOrgJSONLD(state.products);
      applyLanguage(state.lang);
    } catch (err) {
      console.error('Erro ao carregar data/products.json:', err);
    }
  }

  function injectSchemaOrgJSONLD(products) {
    const schemaEl = document.getElementById('schema-jsonld');
    if (!schemaEl) return;

    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'KULTURA Streetwear Catalog',
      'itemListElement': products.map((p, idx) => ({
        '@type': 'ListItem',
        'position': idx + 1,
        'item': {
          '@type': 'Product',
          'name': tField(p.name),
          'sku': p.sku,
          'image': p.images && p.images[0] ? p.images[0] : '',
          'description': tField(p.description),
          'offers': {
            '@type': 'Offer',
            'priceCurrency': 'EUR',
            'price': p.price,
            'availability': p.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
          }
        }
      }))
    };

    schemaEl.textContent = JSON.stringify(itemList);
  }

  function applyLanguage(lang) {
    if (!I18N[lang]) lang = 'pt-PT';
    state.lang = lang;
    localStorage.setItem('kultura_lang_v2', lang);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key === 'fresh_motto') return;
      el.textContent = t(key);
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    applyFilters();
    updateCartUI();
  }

  function applyFilters() {
    const q = state.filters.search.toLowerCase().trim();

    state.filtered = state.products.filter(p => {
      const nameStr = tField(p.name).toLowerCase();
      const matchSearch = !q || nameStr.includes(q) || p.sku.toLowerCase().includes(q);
      const matchCat = state.filters.category === 'all' || p.category === state.filters.category;
      const matchSize = state.filters.size === 'all' || (p.sizes && p.sizes.includes(state.filters.size));
      const matchPrice = p.price <= state.filters.maxPrice;
      return matchSearch && matchCat && matchSize && matchPrice;
    });

    if (state.filters.sort === 'price-asc') {
      state.filtered.sort((a, b) => a.price - b.price);
    } else if (state.filters.sort === 'price-desc') {
      state.filtered.sort((a, b) => b.price - a.price);
    } else {
      state.filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    renderProductsGrid();
  }

  function renderProductsGrid() {
    if (dom.resultsCounter) {
      dom.resultsCounter.textContent = state.filtered.length;
    }

    if (!state.filtered.length) {
      dom.grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px 20px; text-align: center; background: #EBE9E4;">
          <p style="font-family: var(--font-condensed); letter-spacing: 0.14em; text-transform: uppercase;">
            NENHUMA PEÇA ENCONTRADA COM ESTES FILTROS.
          </p>
        </div>
      `;
      return;
    }

    dom.grid.innerHTML = state.filtered.map(p => {
      const title = tField(p.name);
      const isSoldOut = p.stock <= 0 || p.badge === 'esgotado';
      const badgeHTML = isSoldOut
        ? `<span class="product-badge">${t('badge_soldout')}</span>`
        : '';

      return `
        <article class="product-card" data-product-id="${p.id}" tabindex="0" role="button" aria-label="${title}">
          <div class="product-card-media">
            ${badgeHTML}
            <img src="${p.images[0]}" alt="${title}" class="product-card-img" loading="lazy" width="500" height="500">
          </div>
          <div class="product-card-info">
            <div>
              <h3 class="product-card-title">${title}</h3>
              <p class="product-card-price">${formatEUR(p.price)}</p>
            </div>
            <span class="product-card-arrow" aria-hidden="true">→</span>
          </div>
        </article>
      `;
    }).join('');

    dom.grid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.productId));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card.dataset.productId);
        }
      });
    });
  }

  function openModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    state.activeProduct = product;
    state.selectedSize = product.sizes && product.sizes[0] ? product.sizes[0] : 'M';
    state.selectedColor = product.colors && product.colors[0] ? product.colors[0] : { name: 'Black', hex: '#111111' };

    dom.modalSku.textContent = `${tField(product.categoryLabel)} // ${product.sku}`;
    dom.modalTitle.textContent = tField(product.name);
    dom.modalPrice.textContent = formatEUR(product.price);
    dom.modalDesc.textContent = tField(product.description);
    dom.modalMainImg.src = product.images[0];
    dom.modalMainImg.alt = tField(product.name);

    dom.modalThumbs.innerHTML = (product.images || []).map((imgUrl, idx) => `
      <button type="button" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" data-img="${imgUrl}">
        <img src="${imgUrl}" alt="Foto ${idx + 1}">
      </button>
    `).join('');

    dom.modalThumbs.querySelectorAll('.modal-thumb-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        dom.modalThumbs.querySelectorAll('.modal-thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        dom.modalMainImg.src = btn.dataset.img;
      });
    });

    renderModalSelectors();

    const isSoldOut = product.stock <= 0 || product.badge === 'esgotado';
    dom.modalAddBtn.disabled = isSoldOut;
    dom.modalAddBtn.querySelector('span').textContent = isSoldOut ? t('modal_soldout_btn') : t('modal_add_btn');

    dom.modalBackdrop.classList.add('active');
    dom.productModal.classList.add('active');
    dom.productModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  function renderModalSelectors() {
    const p = state.activeProduct;
    if (!p) return;

    dom.modalSizes.innerHTML = (p.sizes || []).map(sz => `
      <button type="button" class="size-btn ${state.selectedSize === sz ? 'active' : ''}" data-size="${sz}">
        ${sz}
      </button>
    `).join('');

    dom.modalSizes.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedSize = btn.dataset.size;
        renderModalSelectors();
      });
    });

    dom.modalColors.innerHTML = (p.colors || []).map((c, idx) => `
      <button type="button" class="color-btn ${state.selectedColor && state.selectedColor.hex === c.hex ? 'active' : ''}" data-idx="${idx}">
        <span class="color-swatch" style="background-color: ${c.hex};"></span>
        <span>${c.name}</span>
      </button>
    `).join('');

    dom.modalColors.querySelectorAll('.color-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedColor = p.colors[parseInt(btn.dataset.idx, 10)];
        renderModalSelectors();
      });
    });
  }

  function closeModal() {
    dom.modalBackdrop.classList.remove('active');
    dom.productModal.classList.remove('active');
    dom.productModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    state.activeProduct = null;
  }

  function addToCart() {
    const p = state.activeProduct;
    if (!p || p.stock <= 0) return;

    const key = `${p.id}__${state.selectedSize}__${state.selectedColor.hex}`;
    const existing = state.cart.find(item => item.key === key);

    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({
        key,
        id: p.id,
        sku: p.sku,
        name: p.name,
        price: p.price,
        image: p.images[0],
        size: state.selectedSize,
        colorName: state.selectedColor.name,
        qty: 1
      });
    }

    saveCart();
    closeModal();
    openCart();
  }

  function updateCartQty(key, delta) {
    const idx = state.cart.findIndex(i => i.key === key);
    if (idx === -1) return;

    state.cart[idx].qty += delta;
    if (state.cart[idx].qty <= 0) {
      state.cart.splice(idx, 1);
    }
    saveCart();
  }

  function saveCart() {
    localStorage.setItem('kultura_cart_v2', JSON.stringify(state.cart));
    updateCartUI();
  }

  function updateCartUI() {
    const count = state.cart.reduce((acc, item) => acc + item.qty, 0);
    dom.cartCount.textContent = count;

    if (!state.cart.length) {
      dom.cartItemsList.innerHTML = `<p style="color: var(--text-dark-muted); font-family: var(--font-condensed); letter-spacing: 0.14em;">${t('cart_empty')}</p>`;
      dom.cartTotalPrice.textContent = formatEUR(0);
      return;
    }

    let total = 0;
    dom.cartItemsList.innerHTML = state.cart.map(item => {
      total += item.price * item.qty;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${tField(item.name)}" class="cart-item-img">
          <div>
            <p class="cart-item-title">${tField(item.name)}</p>
            <p class="cart-item-meta">${item.size} // ${item.colorName}</p>
            <div class="cart-qty-row">
              <button type="button" class="qty-btn" data-key="${item.key}" data-delta="-1">−</button>
              <span class="qty-val">${item.qty}</span>
              <button type="button" class="qty-btn" data-key="${item.key}" data-delta="1">+</button>
            </div>
          </div>
          <div style="font-family: var(--font-condensed); font-weight: 700; font-size: 0.85rem;">
            ${formatEUR(item.price * item.qty)}
          </div>
        </div>
      `;
    }).join('');

    dom.cartTotalPrice.textContent = formatEUR(total);

    dom.cartItemsList.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        updateCartQty(btn.dataset.key, parseInt(btn.dataset.delta, 10));
      });
    });
  }

  function openCart() {
    dom.drawerBackdrop.classList.add('active');
    dom.cartDrawer.classList.add('active');
    dom.cartDrawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
  }

  function closeCart() {
    dom.drawerBackdrop.classList.remove('active');
    dom.cartDrawer.classList.remove('active');
    dom.cartDrawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
  }

  function bindEvents() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    dom.searchInput.addEventListener('input', (e) => {
      state.filters.search = e.target.value;
      dom.headerSearchInput.value = e.target.value;
      applyFilters();
    });

    dom.headerSearchInput.addEventListener('input', (e) => {
      state.filters.search = e.target.value;
      dom.searchInput.value = e.target.value;
      applyFilters();
    });

    dom.toggleSearchBtn.addEventListener('click', () => {
      dom.headerSearchBar.classList.toggle('open');
      if (dom.headerSearchBar.classList.contains('open')) {
        dom.headerSearchInput.focus();
      }
    });

    dom.closeSearchBtn.addEventListener('click', () => {
      dom.headerSearchBar.classList.remove('open');
    });

    dom.filterCategory.addEventListener('change', (e) => {
      state.filters.category = e.target.value;
      applyFilters();
    });

    dom.filterSize.addEventListener('change', (e) => {
      state.filters.size = e.target.value;
      applyFilters();
    });

    dom.filterPrice.addEventListener('change', (e) => {
      state.filters.maxPrice = Number(e.target.value) || 999;
      applyFilters();
    });

    dom.sortSelect.addEventListener('change', (e) => {
      state.filters.sort = e.target.value;
      applyFilters();
    });

    if (dom.resetFiltersLink) {
      dom.resetFiltersLink.addEventListener('click', (e) => {
        e.preventDefault();
        state.filters = { search: '', category: 'all', size: 'all', maxPrice: 999, sort: 'featured' };
        dom.searchInput.value = '';
        dom.filterCategory.value = 'all';
        dom.filterSize.value = 'all';
        dom.filterPrice.value = '999';
        dom.sortSelect.value = 'featured';
        applyFilters();
      });
    }

    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.dataset.filterCat;
        state.filters.category = cat;
        dom.filterCategory.value = cat;
        applyFilters();
        document.getElementById('loja').scrollIntoView({ behavior: 'smooth' });
      });
    });

    dom.mobileMenuBtn.addEventListener('click', () => {
      const isOpen = dom.mobileNavDrawer.classList.toggle('open');
      dom.mobileMenuBtn.setAttribute('aria-expanded', isOpen);
    });

    dom.mobileNavDrawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        dom.mobileNavDrawer.classList.remove('open');
        dom.mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    dom.modalCloseBtn.addEventListener('click', closeModal);
    dom.modalBackdrop.addEventListener('click', closeModal);
    dom.modalAddBtn.addEventListener('click', addToCart);

    dom.openCartBtn.addEventListener('click', openCart);
    dom.closeCartBtn.addEventListener('click', closeCart);
    dom.drawerBackdrop.addEventListener('click', closeCart);

    dom.checkoutBtn.addEventListener('click', () => {
      /*
       * [PONTO DE INTEGRAÇÃO DE PAGAMENTO REAL — STRIPE / MB WAY / SHOPIFY]
       */
      alert(t('checkout_alert'));
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        closeCart();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
