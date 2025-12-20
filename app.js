const flowers = [
    {
        name: "Lale",
        image: "images/lale.jpg",
        meaning: "Zarafetin, sessiz sevginin ve inceliğin simgesidir.",
        facts: [
            "Osmanlı’da Lale Devri’ne adını vermiştir",
            "Rengine göre anlamı değişir",
            "Gece kapanıp sabah açar"
        ]
    },
    {
        name: "Gül",
        image: "images/gül.jpg",
        meaning: "Aşkı, tutkuyu ve derin duyguları temsil eder.",
        facts: [
            "Antik çağlardan beri sembol olarak kullanılır",
            "Renklerine göre farklı anlamlar taşır",
            "Kokusu terapi amaçlı kullanılır"
        ]
    },
    {
        name: "Papatya",
        image: "images/papatya.jpg",
        meaning: "Masumiyetin ve saf mutluluğun çiçeğidir.",
        facts: [
            "Stresi azaltıcı etkisi vardır",
            "Çayı yüzyıllardır tüketilir",
            "Sadeliğiyle güçlü anlamlar taşır"
        ]
    },
    {
        name: "Şakayık",
        image: "images/sakayik.jpg",
        meaning: "Bolluk, mutluluk ve zarafeti temsil eder.",
        facts: [
            "Doğu kültürlerinde zenginliğin sembolüdür",
            "Çok büyük ve gösterişli çiçeklere sahiptir",
            "Uzun ömürlü bir bitkidir"
        ]
    },
    {
        name: "Lilyum",
        image: "images/lilyum.jpg",
        meaning: "Saflık ve asaletin sembolüdür.",
        facts: [
            "Yoğun kokusuyla bilinir",
            "Düğünlerde sık tercih edilir",
            "Bazı türleri zehirli olabilir"
        ]
    },
    {
        name: "Lavanta",
        image: "images/lavanta.jpg",
        meaning: "Huzur, dinginlik ve sadeliği temsil eder.",
        facts: [
            "Rahatlatıcı etkisi vardır",
            "Yağı aromaterapide kullanılır",
            "Akdeniz iklimini sever"
        ]
    },
    {
        name: "Orkide",
        image: "images/orkide.jpg",
        meaning: "Zarafet, güç ve lüksü simgeler.",
        facts: [
            "Dünyada 25.000’den fazla türü vardır",
            "Bakımı sabır ister",
            "Uzun süre çiçekli kalabilir"
        ]
    },
    {
        name: "Küpeli Çiçeği",
        image: "images/kupeli.jpg",
        meaning: "Zarafet, incelik ve içten sevgiyi simgeler.",
        facts: [
            "Sarkan ve küpeyi andıran çiçek yapısına sahiptir",
            "Yarı gölge alanları sever",
            "Yaz aylarında uzun süre çiçekli kalır"
        ]
    },
    {
        name: "Manolya",
        image: "images/manolya.jpg",
        meaning: "Asalet ve doğanın gücünü temsil eder.",
        facts: [
            "Tarihi milyonlarca yıl öncesine dayanır",
            "Büyük ve kokulu çiçekleri vardır",
            "Ilıman iklimleri sever"
        ]
    },
    {
        name: "Ayçiçeği",
        image: "images/aycicegi.jpg",
        meaning: "Neşenin, umudun ve pozitif enerjinin simgesidir.",
        facts: [
            "Güneşe doğru yönelme özelliğiyle bilinir",
            "Mutluluk ve sadakatle ilişkilendirilir",
            "Tohumları besin değeri açısından zengindir"
        ]
    },
    {
        name: "Sakura",
        image: "images/sakura.jpg",
        meaning: "Geçiciliğin, yenilenmenin ve zarafetin sembolüdür.",
        facts: [
            "Japon kültüründe çok özel bir yere sahiptir",
            "Kısa sürede açıp dökülmesi hayatın geçiciliğini temsil eder",
            "Baharın gelişini simgeler"
        ]
    },
    {
        name: "Nergis",
        image: "images/nergis.jpg",
        meaning: "Yeniden doğuşun, umudun ve tazeliğin çiçeğidir.",
        facts: [
            "İlkbaharın müjdecisi olarak bilinir",
            "Hoş ve ferah bir kokuya sahiptir",
            "Soğanlı bitkiler grubundadır"
        ]
    },
    {
        name: "Sümbül",
        image: "images/sumbul.jpg",
        meaning: "Bağlılık, içtenlik ve samimi duyguları simgeler.",
        facts: [
            "Yoğun ve kalıcı kokusuyla tanınır",
            "Renklerine göre anlamları değişebilir",
            "Bahar aylarında çiçek açar"
        ]
    },
    {
        name: "Kasımpatı",
        image: "images/kasimpati.jpg",
        meaning: "Sadakat, uzun ömür ve içten sevgiyi temsil eder.",
        facts: [
            "Sonbahar aylarında çiçeklenir",
            "Soğuğa dayanıklı bir bitkidir",
            "Farklı renk ve türleri bulunur"
        ]
    },
    {
        name: "Begonya",
        image: "images/begonya.jpg",
        meaning: "Zarif düşünceler ve içtenliği simgeler.",
        facts: [
            "Hem iç mekânda hem dış mekânda yetiştirilebilir",
            "Gösterişli yaprak ve çiçeklere sahiptir",
            "Düzenli sulama ister"
        ]
    },


];


const grid = document.getElementById("flowerGrid");

flowers.forEach((flower, index) => {
    const card = document.createElement("div");
    card.className = "flower-card";
    card.innerHTML = `
    <img src="${flower.image}">
    <h3>${flower.name}</h3>
  `;
    card.onclick = () => openModal(index);
    grid.appendChild(card);
});

function openModal(index) {
    const f = flowers[index];
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImage").src = f.image;
    document.getElementById("modalName").innerText = f.name;
    document.getElementById("modalMeaning").innerText = f.meaning;

    const facts = document.getElementById("modalFacts");
    facts.innerHTML = "";
    f.facts.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        facts.appendChild(li);
    });
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
