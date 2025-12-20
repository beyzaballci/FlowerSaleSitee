const flowers = [
    {
        name: "Lale",
        image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
        meaning: "Zarafetin, sessiz sevginin ve inceliğin simgesidir.",
        facts: [
            "Osmanlı’da Lale Devri’ne adını vermiştir",
            "Rengine göre anlamı değişir",
            "Gece kapanıp sabah açar"
        ]
    },
    {
        name: "Gül",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        meaning: "Aşkı, tutkuyu ve derin duyguları temsil eder.",
        facts: [
            "Renklerine göre farklı mesajlar taşır",
            "Antik çağlardan beri sembol olarak kullanılır",
            "Kokusu terapi amaçlı kullanılır"
        ]
    },
    {
        name: "Papatya",
        image: "https://images.unsplash.com/photo-1498842812179-c81beecf902c",
        meaning: "Masumiyetin ve saf mutluluğun çiçeğidir.",
        facts: [
            "Stresi azaltıcı etkisi vardır",
            "Çayı yüzyıllardır tüketilir",
            "En sade ama en güçlü anlamlara sahiptir"
        ]
    }
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
