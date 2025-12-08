// Ürün listesi
const products = [
    {
        id: 1,
        name: "Pembe Gül Buketi",
        price: "199 ₺",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba"
    },
    {
        id: 2,
        name: "Kırmızı Aşk Buketi",
        price: "249 ₺",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
    },
    {
        id: 3,
        name: "Beyaz Saflık Çiçeği",
        price: "179 ₺",
        image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc"
    },
    {
        id: 4,
        name: "Mor Orkide",
        price: "299 ₺",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
    }
];

// FAVORİLERİ YÜKLE (Local Storage'dan)
function getFavorites() {
    return JSON.parse(localStorage.getItem("favorites")) || [];
}

// FAVORİ KAYDET
function saveFavorite(productId) {
    const favorites = getFavorites();

    // Aynı ürün zaten varsa ekleme
    if (favorites.includes(productId)) return;

    favorites.push(productId);
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

// ÜRÜNLERİ SAYFAYA EKLEME
function loadProducts() {
    const container = document.getElementById("product-list");
    container.innerHTML = "";

    const favorites = getFavorites();

    products.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        // Ürün HTML'i
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        // Favori butonu
        const favBtn = document.createElement("button");
        favBtn.classList.add("favorite-btn");

        if (favorites.includes(product.id)) {
            favBtn.textContent = "❤️ Favorilerde";
            favBtn.style.background = "#999";
        } else {
            favBtn.textContent = "Favorilere Ekle ❤️";
        }

        // Tıklayınca favoriye ekle
        favBtn.addEventListener("click", () => {
            saveFavorite(product.id);
            loadProducts(); // sayfayı güncelle
        });

        card.appendChild(favBtn);
        container.appendChild(card);
    });
}

// Sayfa yüklendiğinde
loadProducts();
