/**
 * KULTURA // 01 — MOTOR DE E-COMMERCE STREETWEAR (VANILLA JS ES6+)
 * Funcionalidades:
 * - Consumo dinâmico de /data/products.json
 * - Filtros combinados (pesquisa instantânea, categoria, tamanho, preço máximo e ordenação)
 * - Suporte Multilíngue (PT-PT, PT-BR, EN) com valores em Euros (€)
 * - Modal de produto com galeria, seleção de tamanho e cor
 * - Carrinho lateral (drawer) persistido em localStorage com ponto de integração de pagamento
 * - Injeção automática de Schema.org Product JSON-LD para SEO
 */

(function () {
  'use strict';

  // Dicionário de Traduções (PT-PT | PT-BR | EN)
  const I18N = {
    'pt-PT': {
      ann_text: 'ENVIO GRÁTIS ACIMA DE 100 € // EXPEDIÇÃO 24/48H EUROPA',
      nav_home: 'Home',
      nav_shop: 'Loja',
      nav_collections: 'Coleções',
      nav_about: 'Sobre',
      hero_manifesto: 'Silhuetas arquitetónicas em algodão de alta gramagem (320—500 GSM). Sem excessos, sem logótipos gritantes — apenas construção brutalista feita para durar nas ruas.',
      hero_cta: 'SHOP NOW →',
      cat_section_title: 'CATEGORIAS',
      cat_tshirts: 'T-SHIRTS',
      cat_collections: 'COLEÇÕES',
      cat_caps: 'BONÉS',
      cat_new: 'NOVIDADES',
      fresh_sub: 'NOVIDADES',
      fresh_desc: 'Lotes numerados tingidos a frio em tons de betão, asfalto e café expresso. Corte amplo estruturado pensado para o movimento urbano diário.',
      fresh_quote: '"NÃO SEGUIMOS ESTAÇÕES. CONSTRUÍMOS UNIFORMES ATEMPORAIS PARA QUEM CRIA A PRÓPRIA CULTURA NO ASFALTO."',
      trust_1_title: 'ENVIO RÁPIDO',
      trust_1_desc: 'Expedição rastreada em 24/48h. Grátis acima de 100 €.',
      trust_2_title: 'PAGAMENTO SEGURO',
      trust_2_desc: 'Encriptação SSL 256-bit (MB WAY, Cartão, Apple Pay).',
      trust_3_title: 'DEVOLUÇÕES FÁCEIS',
      trust_3_desc: 'Troca de tamanho ou devolução simples até 30 dias.',
      trust_4_title: 'QUALIDADE PREMIUM',
      trust_4_desc: 'Algodão orgânico 320-500 GSM e costuras reforçadas.',
      shop_title: 'PRODUTOS EM DESTAQUE',
      filter_search_label: 'PESQUISA INSTANTÂNEA',
      filter_search_ph: 'PESQUISAR POR NOME...',
      filter_cat_label: 'CATEGORIA',
      filter_size_label: 'TAMANHO',
      filter_price_label: 'PREÇO MÁXIMO',
      filter_sort_label: 'ORDENAR POR',
      opt_all_cats: 'TODAS',
      opt_all_sizes: 'TODOS',
      opt_all_prices: 'SEM LIMITE (€)',
      sort_featured: 'DESTAQUES',
      sort_asc: 'PREÇO: MENOR → MAIOR',
      sort_desc: 'PREÇO: MAIOR → MENOR',
      badge_new: 'NOVO',
      badge_soldout: 'ESGOTADO',
      modal_size_label: 'SELECIONAR TAMANHO',
      modal_color_label: 'SELECIONAR COR',
      modal_add_btn: 'ADICIONAR AO CARRINHO →',
      modal_soldout_btn: 'ESGOTADO // SOLD OUT',
      cart_title: 'CARRINHO',
      cart_empty: 'O SEU CARRINHO ESTÁ VAZIO.',
      cart_total_label: 'TOTAL (EUR)',
      cart_checkout_btn: 'FINALIZAR ENCOMENDA →',
      footer_nav: 'DIRETÓRIO',
      checkout_alert: 'Ambiente de Demonstração: O ponto de integração de pagamento (Stripe / MB WAY / Adyen) está pronto em assets/js/app.js.'
    },
    'pt-BR': {
      ann_text: 'FRETE GRÁTIS ACIMA DE 100 € // ENVIO EXPRESSO INTERNACIONAL',
      nav_home: 'Home',
      nav_shop: 'Loja',
      nav_collections: 'Coleções',
      nav_about: 'Sobre',
      hero_manifesto: 'Modelagens arquitetônicas em algodão pesado (320—500 GSM). Sem excessos, sem logos gritantes — apenas construção brutalista feita para durar nas ruas.',
      hero_cta: 'SHOP NOW →',
      cat_section_title: 'CATEGORIAS',
      cat_tshirts: 'CAMISETAS',
      cat_collections: 'COLEÇÕES',
      cat_caps: 'BONÉS',
      cat_new: 'NOVIDADES',
      fresh_sub: 'NOVIDADES',
      fresh_desc: 'Drops numerados tingidos a frio em tons de concreto, asfalto e café expresso. Modelagem boxy estruturada para o movimento urbano.',
      fresh_quote: '"NÃO SEGUIMOS ESTAÇÕES. CONSTRUÍMOS UNIFORMES ATEMPORAIS PARA QUEM CRIA A PRÓPRIA CULTURA NO ASFALTO."',
      trust_1_title: 'ENVIO RÁPIDO',
      trust_1_desc: 'Despacho rastreado em 24/48h. Grátis acima de 100 €.',
      trust_2_title: 'PAGAMENTO SEGURO',
      trust_2_desc: 'Criptografia SSL 256-bit (Cartão Internacional, Apple Pay).',
      trust_3_title: 'TROCAS FÁCEIS',
      trust_3_desc: 'Troca de tamanho ou devolução simples em até 30 dias.',
      trust_4_title: 'QUALIDADE PREMIUM',
      trust_4_desc: 'Algodão orgânico 320-500 GSM e costuras reforçadas.',
      shop_title: 'PRODUTOS EM DESTAQUE',
      filter_search_label: 'BUSCA INSTANTÂNEA',
      filter_search_ph: 'BUSCAR POR NOME...',
      filter_cat_label: 'CATEGORIA',
      filter_size_label: 'TAMANHO',
      filter_price_label: 'PREÇO MÁXIMO',
      filter_sort_label: 'ORDENAR POR',
      opt_all_cats: 'TODAS',
      opt_all_sizes: 'TODOS',
      opt_all_prices: 'SEM LIMITE (€)',
      sort_featured: 'DESTAQUES',
      sort_asc: 'PREÇO: MENOR → MAIOR',
      sort_desc: 'PREÇO: MAIOR → MENOR',
      badge_new: 'NOVO',
      badge_soldout: 'ESGOTADO',
      modal_size_label: 'SELECIONAR TAMANHO',
      modal_color_label: 'SELECIONAR COR',
      modal_add_btn: 'ADICIONAR AO CARRINHO →',
      modal_soldout_btn: 'ESGOTADO // SOLD OUT',
      cart_title: 'CARRINHO',
      cart_empty: 'SEU CARRINHO ESTÁ VAZIO.',
      cart_total_label: 'TOTAL (EUR)',
      cart_checkout_btn: 'FINALIZAR COMPRA →',
      footer_nav: 'DIRETÓRIO',
      checkout_alert: 'Ambiente de Teste: O ponto de integração de checkout real está documentado em assets/js/app.js.'
    },
    'en': {
      ann_text: 'FREE SHIPPING ON ORDERS OVER 100 € // WORLDWIDE EXPRESS DISPATCH',
      nav_home: 'Home',
      nav_shop: 'Shop',
      nav_collections: 'Collections',
      nav_about: 'About',
      hero_manifesto: 'Architectural silhouettes crafted from heavyweight 320—500 GSM organic cotton. No fluff, no loud logos — just brutalist construction built for the streets.',
      hero_cta: 'SHOP NOW →',
      cat_section_title: 'CATEGORIES',
      cat_tshirts: 'T-SHIRTS',
      cat_collections: 'COLLECTIONS',
      cat_caps: 'HEADWEAR',
      cat_new: 'FRESH DROPS',
      fresh_sub: 'ARCHIVE DROPS',
      fresh_desc: 'Numbered small-batch garments cold-dyed in concrete, asphalt, and espresso tones. Boxy architectural cuts engineered for daily movement.',
      fresh_quote: '"WE DO NOT FOLLOW SEASONS. WE ENGINEER TIMELESS UNIFORMS FOR THOSE BUILDING CULTURE ON CONCRETE."',
      trust_1_title: 'FAST DISPATCH',
      trust_1_desc: 'Tracked 24/48h shipping. Free on orders over 100 €.',
      trust_2_title: 'SECURE CHECKOUT',
      trust_2_desc: '256-bit SSL encrypted checkout (Cards, Apple Pay, Klarna).',
      trust_3_title: 'EASY RETURNS',
      trust_3_desc: 'Hassle-free size exchange or return within 30 days.',
      trust_4_title: 'HEAVYWEIGHT QUALITY',
      trust_4_desc: '320-500 GSM combed organic cotton & reinforced seams.',
      shop_title: 'FEATURED PRODUCTS',
      filter_search_label: 'INSTANT SEARCH',
      filter_search_ph: 'SEARCH BY NAME...',
      filter_cat_label: 'CATEGORY',
      filter_size_label: 'SIZE',
      filter_price_label: 'MAX PRICE',
      filter_sort_label: 'SORT BY',
      opt_all_cats: 'ALL',
      opt_all_sizes: 'ALL',
      opt_all_prices: 'NO LIMIT (€)',
      sort_featured: 'FEATURED',
      sort_asc: 'PRICE: LOW → HIGH',
      sort_desc: 'PRICE: HIGH → LOW',
      badge_new: 'NEW DROP',
      badge_soldout: 'SOLD OUT',
      modal_size_label: 'SELECT SIZE',
      modal_color_label: 'SELECT COLOR',
      modal_add_btn: 'ADD TO CART →',
      modal_soldout_btn: 'SOLD OUT',
      cart_title: 'CART',
      cart_empty: 'YOUR CART IS CURRENTLY EMPTY.',
      cart_total_label: 'TOTAL (EUR)',
      cart_checkout_btn: 'PROCEED TO CHECKOUT →',
      footer_nav: 'DIRECTORY',
      checkout_alert: 'Staging Environment: Payment gateway integration hook (Stripe / Shopify / Adyen) is ready in assets/js/app.js.'
    }
  };

  // Estado Global
  const state = {
    lang: localStorage.getItem('kultura_lang_v1') || 'pt-PT',
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
    cart: JSON.parse(localStorage.getItem('kultura_cart_v1') || '[]')
  };

  // Utilitários de Tradução e Moeda (EUR €)
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
    }).format(Number(amount) || 0);
  }

  // Referências DOM
  const dom = {
    grid: document.getElementById('products-grid'),
    resultsCounter: document.getElementById('results-counter'),
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

    // Modal
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

    // Carrinho
    openCartBtn: document.getElementById('open-cart-btn'),
    closeCartBtn: document.getElementById('close-cart-btn'),
    drawerBackdrop: document.getElementById('drawer-backdrop'),
    cartDrawer: document.getElementById('cart-drawer'),
    cartItemsList: document.getElementById('cart-items-list'),
    cartTotalPrice: document.getElementById('cart-total-price'),
    cartCount: document.getElementById('cart-count'),
    checkoutBtn: document.getElementById('checkout-btn')
  };

  // 1. Inicialização e Carregamento do JSON
  async function init() {
    bindEvents();
    updateCartUI();

    try {
      const res = await fetch('data/products.json?v=2026112201', { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      state.products = data.products || [];
      injectSchemaOrgJSONLD(state.products);
      applyLanguage(state.lang);
    } catch (err) {
      console.error('Erro ao carregar data/products.json:', err);
      dom.grid.innerHTML = `<p style="padding: 40px; color: var(--color-offwhite-muted);">Erro ao carregar catálogo de produtos.</p>`;
    }
  }

  // 2. Injeção de Schema.org Product em JSON-LD para SEO
  function injectSchemaOrgJSONLD(products) {
    const schemaEl = document.getElementById('schema-jsonld');
    if (!schemaEl) return;

    const itemList = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'KULTURA // 01 Streetwear Catalog',
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

  // 3. Aplicação de Idioma
  function applyLanguage(lang) {
    if (!I18N[lang]) lang = 'pt-PT';
    state.lang = lang;
    localStorage.setItem('kultura_lang_v1', lang);
    document.documentElement.setAttribute('lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    applyFilters();
    updateCartUI();
  }

  // 4. Aplicação de Filtros e Ordenação
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

  // 5. Renderização da Grelha de Produtos
  function renderProductsGrid() {
    dom.resultsCounter.textContent = `${state.filtered.length} ITEMS`;

    if (!state.filtered.length) {
      dom.grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 64px 20px; text-align: center; border: 1px solid var(--color-border);">
          <p style="font-family: var(--font-condensed); letter-spacing: 0.14em; text-transform: uppercase; color: var(--color-offwhite-muted);">
            NENHUMA PEÇA CORRESPONDE AOS FILTROS SELECIONADOS.
          </p>
        </div>
      `;
      return;
    }

    dom.grid.innerHTML = state.filtered.map(p => {
      const title = tField(p.name);
      const catLabel = tField(p.categoryLabel);
      const isSoldOut = p.stock <= 0 || p.badge === 'esgotado';
      const badgeHTML = isSoldOut
        ? `<span class="product-badge badge-esgotado">${t('badge_soldout')}</span>`
        : (p.badge === 'novo' ? `<span class="product-badge badge-novo">${t('badge_new')}</span>` : '');

      return `
        <article class="product-card" data-product-id="${p.id}" tabindex="0" role="button" aria-label="${title} - ${formatEUR(p.price)}">
          <div class="product-card-media">
            ${badgeHTML}
            <img src="${p.images[0]}" alt="${title}" class="product-card-img" loading="lazy" width="600" height="800">
          </div>
          <div class="product-card-body">
            <span class="product-card-category">${catLabel} // ${p.sku}</span>
            <h3 class="product-card-title">${title}</h3>
            <div class="product-card-footer">
              <span class="product-card-price">${formatEUR(p.price)}</span>
              <span class="product-card-arrow" aria-hidden="true">→</span>
            </div>
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

  // 6. Modal de Detalhe do Produto
  function openModal(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;

    state.activeProduct = product;
    state.selectedSize = product.sizes && product.sizes[0] ? product.sizes[0] : 'M';
    state.selectedColor = product.colors && product.colors[0] ? product.colors[0] : { name: 'Black', hex: '#0B0B0B' };

    dom.modalSku.textContent = `// ${product.sku}`;
    dom.modalTitle.textContent = tField(product.name);
    dom.modalPrice.textContent = formatEUR(product.price);
    dom.modalDesc.textContent = tField(product.description);
    dom.modalMainImg.src = product.images[0];
    dom.modalMainImg.alt = tField(product.name);

    // Miniaturas da galeria
    dom.modalThumbs.innerHTML = (product.images || []).map((imgUrl, idx) => `
      <button type="button" class="modal-thumb-btn ${idx === 0 ? 'active' : ''}" data-img="${imgUrl}" aria-label="Ver foto ${idx + 1}">
        <img src="${imgUrl}" alt="Miniatura ${idx + 1}">
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
    dom.modalAddBtn.style.opacity = isSoldOut ? '0.45' : '1';

    dom.modalBackdrop.classList.add('active');
    dom.productModal.classList.add('active');
    dom.productModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
    dom.modalCloseBtn.focus();
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

  // 7. Gestão do Carrinho (Drawer + localStorage)
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
    localStorage.setItem('kultura_cart_v1', JSON.stringify(state.cart));
    updateCartUI();
  }

  function updateCartUI() {
    const count = state.cart.reduce((acc, item) => acc + item.qty, 0);
    dom.cartCount.textContent = count;

    if (!state.cart.length) {
      dom.cartItemsList.innerHTML = `<p style="color: var(--color-offwhite-muted); font-family: var(--font-condensed); letter-spacing: 0.14em;">${t('cart_empty')}</p>`;
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
              <button type="button" class="qty-btn" data-key="${item.key}" data-delta="-1" aria-label="Diminuir quantidade">−</button>
              <span class="qty-val">${item.qty}</span>
              <button type="button" class="qty-btn" data-key="${item.key}" data-delta="1" aria-label="Aumentar quantidade">+</button>
            </div>
          </div>
          <div style="font-family: var(--font-condensed); font-weight: 700;">
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

  // 8. Eventos de Interface
  function bindEvents() {
    // Seletor de Idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
    });

    // Pesquisa Instantânea (Toolbar + Header)
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

    // Seletores de Filtro
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

    // Clique nos 4 Cards de Categoria
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', () => {
        const cat = card.dataset.filterCat;
        state.filters.category = cat;
        dom.filterCategory.value = cat;
        applyFilters();
        document.getElementById('loja').scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Menu Hambúrguer Mobile
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

    // Modal
    dom.modalCloseBtn.addEventListener('click', closeModal);
    dom.modalBackdrop.addEventListener('click', closeModal);
    dom.modalAddBtn.addEventListener('click', addToCart);

    // Carrinho
    dom.openCartBtn.addEventListener('click', openCart);
    dom.closeCartBtn.addEventListener('click', closeCart);
    dom.drawerBackdrop.addEventListener('click', closeCart);

    // Checkout (Ponto de Integração Comentado)
    dom.checkoutBtn.addEventListener('click', () => {
      /*
       * ======================================================================
       * [PONTO DE INTEGRAÇÃO DE PAGAMENTO REAL — STRIPE / MB WAY / SHOPIFY]
       * Para ativar o checkout em produção, envie `state.cart` para o seu endpoint:
       *
       * const response = await fetch('/api/checkout/create-session', {
       *   method: 'POST',
       *   headers: { 'Content-Type': 'application/json' },
       *   body: JSON.stringify({ items: state.cart, currency: 'EUR', locale: state.lang })
       * });
       * const { checkoutUrl } = await response.json();
       * window.location.href = checkoutUrl;
       * ======================================================================
       */
      alert(t('checkout_alert'));
    });

    // Fechar com tecla ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        closeCart();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
