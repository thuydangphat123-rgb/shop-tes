const EMOJIS = ['🎮','⚔️','🏆','💎','🌊','🔥','⚡','🎯','🛡️','🌸','🦊','🐉','👑','💫','🎪','🌈','🦋','🎭','🚀','💥'];

function randEmoji() {
  return EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
}
function randBg() {
  const p = [
    ['#1a0533','#6b21a8'],['#0c1445','#1e40af'],['#0f2d0f','#15803d'],
    ['#2d0c00','#b45309'],['#1a0a2e','#7c3aed'],['#001a2d','#0369a1'],
    ['#2d1515','#dc2626'],['#0a2020','#0f766e'],
  ];
  const c = p[Math.floor(Math.random() * p.length)];
  return `linear-gradient(135deg, ${c[0]}, ${c[1]})`;
}

const services = [
  { name: 'ROBUX 120h Gamepass', sold: '0', price: '29.000đ', desc: 'Robux qua gamepass 120h, an toàn uy tín, giao tự động' },
  { name: 'Robux VNG Auto', sold: '0', price: '35.000đ', desc: 'Robux VNG chính hãng, hệ thống tự động 100%' },
  { name: 'Dịch vụ Grow a Garden', sold: '0', price: '15.000đ', desc: 'Cày thuê Grow a Garden nhanh chóng, uy tín' },
  { name: 'Gamepass Blox Fruits', sold: '0', price: '49.000đ', desc: 'Mua gamepass Blox Fruits giá rẻ nhất VN' },
  { name: 'Cày Thuê Blox Fruit', sold: '0', price: '59.000đ', desc: 'Đội cày thuê chuyên nghiệp, cam kết an toàn' },
  { name: 'Dịch vụ Blue Lock Rivals', sold: '0', price: '25.000đ', desc: 'Gamepass và dịch vụ Blue Lock Rivals' },
  { name: 'Dịch vụ Steal A Brainrot', sold: '0', price: '19.000đ', desc: 'Dịch vụ Steal A Brainrot nhanh, uy tín' },
  { name: 'Bán Trái Ác Quỷ Rương', sold: '0', price: '12.000đ', desc: 'Trái ác quỷ rương Blox Fruit giá rẻ nhất' },
];

const accounts = [
  { name: 'RANDOM LEVEL 1000-1500 (CỰC HOT)', sold: '0', price: '19.000đ', old: '38.000đ', tag: 'bloxfruit', stock: 0 },
  { name: 'Túi Mù 19k', sold: '0', price: '19.000đ', old: '20.000đ', tag: 'tuimu', stock: 0 },
  { name: 'Blox Fruits Level Max - Godhuman', sold: '0', price: '80.000đ', old: '91.000đ', tag: 'bloxfruit', stock: 0 },
  { name: 'Túi Mù 49k', sold: '0', price: '49.000đ', old: '52.000đ', tag: 'tuimu', stock: 0 },
  { name: 'ACC GOD HUMAN - Song Kiếm Oden', sold: '0', price: '100.000đ', old: '129.000đ', tag: 'bloxfruit', stock: 0 },
  { name: 'Túi Mù 99k', sold: '0', price: '99.000đ', old: '104.000đ', tag: 'tuimu', stock: 0 },
  { name: 'Acc Full Gear V4', sold: '0', price: '194.000đ', old: '387.000đ', tag: 'bloxfruit', stock: 0 },
  { name: 'ACC TỘC SHARK V4 FULL GEAR', sold: '0', price: '199.000đ', old: '258.000đ', tag: 'bloxfruit', stock: 0 },
  { name: 'Blox Fruits Trái Kitsune', sold: '0', price: '199.000đ', old: '258.000đ', tag: 'bloxfruit', stock: 0 },
  { name: 'Blox Fruit Trái Gas', sold: '0', price: '65.000đ', old: '129.000đ', tag: 'bloxfruit', stock: 0 },
  { name: 'Nick Free Fire', sold: '0', price: 'Liên hệ', old: '', tag: 'game-khac', stock: 0 },
  { name: 'Nick Liên Quân', sold: '0', price: 'Liên hệ', old: '', tag: 'game-khac', stock: 0 },
  { name: 'Túi Mù Free Fire', sold: '0', price: '100.000đ', old: '129.000đ', tag: 'game-khac', stock: 0 },
  { name: 'Túi Mù Skin SS Liên Quân', sold: '0', price: '46.000đ', old: '64.000đ', tag: 'game-khac', stock: 0 },
  { name: 'Túi Mù Skin SS Liên Quân', sold: '0', price: '46.000đ', old: '64.000đ', tag: 'game-khac', stock: 0 },
  { name: 'Blox Fruit Trái T-Rex', sold: '0', price: '99.000đ', old: '129.000đ', tag: 'bloxfruit', stock: 0 },
  { name: 'Blox Fruits Trái Yeti', sold: '0', price: '100.000đ', old: '258.000đ', tag: 'bloxfruit', stock: 0 },
];

const topNap = [
  { rank: 1, name: 'ADMIN', amount: '99999999đ', prize: '30.000 ROBUX + 500K' },
  { rank: 2, name: 'develop', amount: '99999999đ', prize: '10.000 ROBUX + 300K' },

];

// ===== RENDER =====
function renderServices() {
  document.getElementById('services-grid').innerHTML = services.map((s, i) =>
    `<div class="product-card" onclick="openProductModal('service',${i})">
      <div class="card-img" style="background:${randBg()}">${randEmoji()}
        <div class="card-badge">-70%</div>
      </div>
      <div class="card-body">
        <h3>${s.name}</h3>
        <div class="card-sold">Đã bán: ${s.sold}</div>
        <div class="card-price"><span class="price-new">${s.price}</span></div>
        <button class="card-btn">MUA NGAY</button>
      </div>
    </div>`
  ).join('');
}

function renderAccounts(filter = 'all') {
  const data = filter === 'all' ? accounts : accounts.filter(a => a.tag === filter);
  document.getElementById('accounts-grid').innerHTML = data.map((a) => {
    const i = accounts.indexOf(a);
    return `<div class="product-card" onclick="openProductModal('account',${i})">
      <div class="card-img" style="background:${randBg()}">${randEmoji()}
        <div class="card-badge">-70%</div>
      </div>
      <div class="card-body">
        <h3>${a.name}</h3>
        <div class="card-sold">Tài khoản có: ${a.stock.toLocaleString()}</div>
        <div class="card-price">
          ${a.old ? `<span class="price-old">${a.old}</span>` : ''}
          <span class="price-new">${a.price}</span>
        </div>
        <button class="card-btn">MUA NGAY</button>
      </div>
    </div>`;
  }).join('');
}

function filterAcc(btn, tag) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAccounts(tag);
}

function renderTop() {
  document.getElementById('top-list').innerHTML = topNap.map(t =>
    `<div class="top-item">
      <div class="top-rank rank-${t.rank}">#${t.rank}</div>
      <div class="top-info">
        <div class="name">${t.name}</div>
        <div class="amount">Đã nạp: ${t.amount}</div>
      </div>
      <div class="top-prize">🎁 ${t.prize}</div>
    </div>`
  ).join('');
}

// ===== MODAL AUTH =====
function openModal(type) {
  document.getElementById('modal-overlay').classList.add('active');
  document.getElementById('modal-login').style.display = type === 'login' ? 'block' : 'none';
  document.getElementById('modal-register').style.display = type === 'register' ? 'block' : 'none';
}
function closeModal() {
  document.getElementById('modal-overlay').classList.remove('active');
}
function switchModal(type) {
  document.getElementById('modal-login').style.display = type === 'login' ? 'block' : 'none';
  document.getElementById('modal-register').style.display = type === 'register' ? 'block' : 'none';
}

// ===== MODAL SẢN PHẨM =====
function openProductModal(type, idx) {
  const item = type === 'service' ? services[idx] : accounts[idx];
  const content = document.getElementById('product-modal-content');
  if (type === 'service') {
    content.innerHTML = `
      <div class="product-modal-img" style="background:${randBg()}">${randEmoji()}</div>
      <h2>${item.name}</h2>
      <div style="margin:12px 0"><span class="big-price">${item.price}</span></div>
      <p>✅ ${item.desc}</p>
      <p>✅ Giao dịch tự động 100%</p>
      <p>✅ Hỗ trợ 24/7</p>
      <p>✅ Đã bán: <strong>${item.sold}</strong> lần</p>
      <button class="btn-main" style="width:100%;margin-top:16px" onclick="alert('Vui lòng đăng nhập để mua!')">🛒 MUA NGAY</button>`;
  } else {
    content.innerHTML = `
      <div class="product-modal-img" style="background:${randBg()}">${randEmoji()}</div>
      <h2>${item.name}</h2>
      <div style="margin:12px 0">
        ${item.old ? `<span class="old-price">${item.old}</span>` : ''}
        <span class="big-price">${item.price}</span>
      </div>
      <p class="stock">📦 Còn lại: ${item.stock.toLocaleString()} tài khoản</p>
      <p>✅ Tài khoản đã kiểm tra kỹ lưỡng</p>
      <p>✅ Giao tài khoản tự động</p>
      <p>✅ Bảo hành theo chính sách shop</p>
      <button class="btn-main" style="width:100%;margin-top:16px" onclick="alert('Vui lòng đăng nhập để mua!')">🛒 MUA NGAY</button>`;
  }
  document.getElementById('product-modal-overlay').classList.add('active');
}
function closeProductModal() {
  document.getElementById('product-modal-overlay').classList.remove('active');
}

// ===== CHẠY =====
renderServices();
renderAccounts();
renderTop();