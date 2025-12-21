/* =====================
   API KEY
   ===================== */
const API_KEY = "2d48ca006bf4ab3a9949c859e98ff831";



/* =====================
   FLOWERS
   ===================== */
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
        image: "images/gul.jpg",
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
            "Akdeniz iklimini sever",
            "Lavanta sivrisinekleri uzaklaştırır"
        ]
    },
    {
        name: "Orkide",
        image: "images/orkide.jpg",
        meaning: "Zarafet, güç ve lüksü simgeler.",
        facts: [
            "Dünyada 25.000’den fazla türü vardır",
            "Bakımı sabır ister",
            "Uzun süre çiçekli kalabilir",
            "Kışın içtiğimiz salebin kökeni orkidelere dayanır"
        ]
    },
    {
        name: "Küpeli",
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
            "Baharın gelişini simgeler",
            "Japon kültüründe sakura, hayatın kırılganlığını temsil eder. Bu yüzden sakura festivalleri aynı zamanda kaybedilenleri anma geleneğiyle ilişkilidir."
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
    }
];

/* =====================
   PLANTS
   ===================== */
const plants = [
    { name: "Kaktüs", image: "images/kaktus.jpg" },
    { name: "Sukulent", image: "images/sukulent.jpg" },
    { name: "Paşa Kılıcı", image: "images/pasakilici.jpg" },
    { name: "Zamioculcas", image: "images/zamioculcas.jpg" },
    { name: "Monstera", image: "images/monstera.jpg" }
];



/* =====================
   WEATHER PREFERENCE
   ===================== */
const weatherPreference = {
    sunny: {
        choice: "plant",
        reasons: {
            "Kaktüs": "Sıcağı ve güneşi sever, az su ister.",
            "Sukulent": "Su depoladığı için güneşte dayanıklıdır."
        }
    },
    rainy: {
        choice: "plant",
        reasons: {
            "Paşa Kılıcı": "Nemli ortamlarda kolay bakım ister.",
            "Zamioculcas": "Düşük ışık ve nemli havalarda sağlıklı kalır."
        }
    },
    cold: {
        choice: "plant",
        reasons: {
            "Zamioculcas": "Soğuk ve düşük ışık koşullarına dayanıklıdır.",
            "Monstera": "Serin ortamlarda yavaş ama sağlıklı büyür."
        }
    },
    mild: {
        choice: "flower",
        reasons: {
            "Papatya": "Ilıman havalarda bol çiçek açar.",
            "Sakura": "Serin ve ılıman bahar havalarında çiçeklenir."
        }
    }
};





/* =====================
   FLOWER GRID
   ===================== */
const grid = document.getElementById("flowerGrid");

flowers.forEach((flower, index) => {
    const card = document.createElement("div");
    card.className = "flower-card";
    card.innerHTML = `
        <img src="${flower.image}">
        <h3>${flower.name}</h3>
    `;
    card.onclick = () => openFlowerModal(index);
    grid.appendChild(card);
});

/* =====================
   FLOWER MODAL
   ===================== */
function openFlowerModal(index) {
    const f = flowers[index];
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modalImage").style.display = "block";
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

/* =====================
   WEATHER MODAL
   ===================== */
function openWeatherModal() {
    document.getElementById("weatherModal").style.display = "flex";
}

function closeWeatherModal() {
    document.getElementById("weatherModal").style.display = "none";
    document.getElementById("weatherResultText").innerText = "";
    document.getElementById("weatherList").innerHTML = "";
}

//choose modal
function openChooseModal() {
    document.getElementById("chooseModal").style.display = "flex";
}

function closeChooseModal() {
    document.getElementById("chooseModal").style.display = "none";
}


/* =====================
   WEATHER LOGIC
   ===================== */
async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=tr&appid=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Şehir bulunamadı");
    return res.json();
}

function mapWeatherToCategory(data) {
    const temp = data.main.temp;
    const main = data.weather[0].main;

    if (main === "Rain") return "rainy";
    if (main === "Clear" && temp > 15) return "sunny";
    if (temp < 10) return "cold";
    return "mild";
}

function getWeatherIcon(category) {
    return category === "sunny" ? "☀️" :
        category === "rainy" ? "🌧️" :
            category === "cold" ? "❄️" : "🌤️";


}


const chooseRules = {
    self: {
        peace: ["Lavanta", "Orkide"],
        happy: ["Papatya", "Ayçiçeği"],
        love: ["Gül", "Sakura"]
    },
    gift: {
        peace: ["Lavanta", "Manolya"],
        happy: ["Papatya", "Begonya"],
        love: ["Gül", "Şakayık"]
    }
};


const faqs = [
    {
        question: "Bitkiler neden sararır?",
        answer: "En yaygın sebep fazla sulamadır. Işık yetersizliği ve besin eksikliği de sararmaya neden olabilir."
    },
    {
        question: "Her bitkiyi aynı sıklıkta sulamak doğru mu?",
        answer: "Hayır. Kaktüs ve sukulentler seyrek, orkide gibi bitkiler düzenli ama az sulama ister."
    },
    {
        question: "Saksı değişimi ne zaman yapılmalı?",
        answer: "Genellikle ilkbahar ayları en uygunudur. Bitki aktif büyümeye geçer."
    },
    {
        question: "Bitkiler gece oksijen üretir mi?",
        answer: "Çoğu bitki gece oksijen üretmez; paşa kılıcı gibi bazı türler istisnadır."
    },
    {
        question: "Orkide kaç günde bir sulanmalı?",
        answer: "Genelde haftada 1 kez yeterlidir. Köklerin kuruması beklenmelidir."
    }
];

/* =====================
   WEATHER BUTTON
   ===================== */
document.getElementById("weatherCheckBtn").onclick = async () => {
    const city = document.getElementById("weatherCityInput").value.trim();
    if (!city) return;

    try {
        const data = await getWeather(city);
        const category = mapWeatherToCategory(data);
        const pref = weatherPreference[category];
        const source = pref.choice === "plant" ? plants : flowers;
        const icon = getWeatherIcon(category);

        document.getElementById("weatherResultText").innerText =
            `${city} için hava: ${data.weather[0].description} (${Math.round(data.main.temp)}°C ${icon}).
Bu koşullarda ${pref.choice === "plant" ? "bitki" : "çiçek"} tercih etmek daha mantıklı `;

        const list = document.getElementById("weatherList");
        list.innerHTML = "";

        Object.keys(pref.reasons).forEach(name => {
            const item = source.find(x => x.name === name);
            if (!item) return;

            const card = document.createElement("div");
            card.className = "weather-card";

            card.innerHTML = `
                <div class="weather-badge">${icon}</div>
                <div class="tooltip">
                    <div class="tooltip-title">Neden uygun?</div>
                    ${pref.reasons[name]}
                </div>
                <img src="${item.image}">
                <h4>${item.name}</h4>
            `;

            list.appendChild(card);
        });

    } catch {
        document.getElementById("weatherResultText").innerText =
            "Şehir bulunamadı 😢";
    }
};

document.getElementById("chooseBtn").onclick = () => {
    const person = document.getElementById("choosePerson").value;
    const mood = document.getElementById("chooseMood").value;

    const result = document.getElementById("chooseResult");
    result.innerHTML = "";

    const suggestions = chooseRules[person][mood];

    suggestions.forEach(name => {
        const flower = flowers.find(f => f.name === name);
        if (!flower) return;

        const li = document.createElement("li");
        li.className = "choose-card";

        li.innerHTML = `
        <img src="${flower.image}" alt="${flower.name}">
        <span>${flower.name}</span>
    `;

        result.appendChild(li);
    });

};

function openFaqModal() {
    const list = document.getElementById("faqList");
    list.innerHTML = "";

    faqs.forEach(faq => {
        const item = document.createElement("div");
        item.className = "faq-item";
        item.innerHTML = `
      <div class="faq-question">
        ${faq.question}
        <span>+</span>
      </div>
      <div class="faq-answer">${faq.answer}</div>
    `;
        item.onclick = () => item.classList.toggle("active");
        list.appendChild(item);
    });

    document.getElementById("faqModal").style.display = "flex";
}

function closeFaqModal() {
    document.getElementById("faqModal").style.display = "none";
}



function scrollToSection(id) {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth"
    });




}

