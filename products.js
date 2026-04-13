// ============================================================
//  FarmFreshGrains — PRODUCT DATA FILE
//  Edit THIS file to: add/remove products, change prices,
//  update images, mark items as sold out, change descriptions.
// ============================================================

const PRODUCTS = {

  // ── RICE ────────────────────────────────────────────────
  rice: {
    label: "Rice",
    icon: "🌾",
    items: [
      {
        id: "R001",
        name: "Ponni Raw Rice",
        inr: 85,       // price per kg in INR
        usd: 3.50,     // price per kg in USD
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Cooked_white_rice.jpg/640px-Cooked_white_rice.jpg",
        description: "Ponni Raw Rice is a premium short-grain variety grown in the fertile river delta regions of Tamil Nadu. Known for its soft texture and distinct aroma when cooked, it is a staple in South Indian households.",
        uses: "Ideal for everyday cooking, plain rice, lemon rice, curd rice, and South Indian rice dishes. Pairs beautifully with sambar, rasam, and curries."
      },
      {
        id: "R002",
        name: "Ponni Boiled Rice",
        inr: 80,
        usd: 3.20,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ponni_boiled_rice.jpg/640px-Ponni_boiled_rice.jpg",
        description: "Ponni Boiled Rice is parboiled before milling, retaining more nutrients compared to raw rice. It has a slightly firm texture and is highly digestible.",
        uses: "Perfect for daily meals, idli batter, rice porridge (kanji), and traditional South Indian cooking. Widely consumed for its nutritional benefits."
      },
      {
        id: "R003",
        name: "Sona Masoori Rice",
        inr: 90,
        usd: 3.80,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sona_masoori_rice.jpg/640px-Sona_masoori_rice.jpg",
        description: "Sona Masoori is a lightweight, aromatic medium-grain rice cultivated in Andhra Pradesh and Telangana. It is low in starch and easy to cook.",
        uses: "Great for everyday cooking, fried rice, biryani, sweet pongal, and idli batter. Loved for its fluffy, non-sticky texture."
      },
      {
        id: "R004",
        name: "Basmati Rice",
        inr: 140,
        usd: 5.50,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Beras_Basmati.jpg/640px-Beras_Basmati.jpg",
        description: "Premium long-grain Basmati rice with a distinctive fragrance and elegant slender grains. Aged for optimal texture and aroma.",
        uses: "Perfect for biryani, pulao, dum rice dishes, and all festive preparations. The grains elongate beautifully on cooking."
      },
      {
        id: "R005",
        name: "Maappillai Sambha",
        inr: 160,
        usd: 6.50,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mappillai_Samba_rice.jpg/640px-Mappillai_Samba_rice.jpg",
        description: "Maappillai Sambha is an ancient Tamil heirloom variety traditionally given to grooms for strength and vitality. It is rich in iron, zinc, and antioxidants.",
        uses: "Used in rice dishes, porridges, and health tonics. Known for its energy-boosting properties and nutty flavour. A treasured traditional variety."
      },
      {
        id: "R006",
        name: "Black Kavuni Rice",
        inr: 200,
        usd: 8.00,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Black_rice.JPG/640px-Black_rice.JPG",
        description: "Black Kavuni Rice (also called Forbidden Rice) is a rare, nutrient-dense heirloom variety with a striking deep purple-black colour. Rich in anthocyanins and antioxidants.",
        uses: "Used in desserts like payasam, rice pudding, and health bowls. Excellent for diabetics and those seeking antioxidant-rich food."
      },
      {
        id: "R007",
        name: "Seeraga Samba Rice",
        inr: 130,
        usd: 5.20,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Seeraga_Samba_Rice.jpg/640px-Seeraga_Samba_Rice.jpg",
        description: "Seeraga Samba is a tiny, aromatic short-grain rice known as the 'king of rice' in Tamil Nadu. Its grains resemble cumin seeds (seeragam) in shape.",
        uses: "The traditional choice for authentic Tamil biryani, especially the famous Ambur and Dindigul styles. Also used for pulao and special rice dishes."
      },
      {
        id: "R008",
        name: "Idly Rice",
        inr: 75,
        usd: 3.00,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Idly_rice.jpg/640px-Idly_rice.jpg",
        description: "Specially selected parboiled rice with high starch content designed for making soft, fluffy idlis. Sourced from dedicated paddy cultivation.",
        uses: "Primary ingredient for idli and dosa batter. Produces the softest idlis when combined with urad dal. A kitchen essential for South Indian households."
      }
    ]
  },

  // ── DHAL & SWEETENERS ────────────────────────────────────
  dhal: {
    label: "Dhal & Sweeteners",
    icon: "🫘",
    items: [
      {
        id: "D001",
        name: "Urad Gota",
        inr: 180,
        usd: 7.20,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Urad_dal.jpg/640px-Urad_dal.jpg",
        description: "Whole white urad (black gram) with the skin removed. High in protein and a rich source of dietary fibre. Carefully cleaned and processed on our farm.",
        uses: "Essential for idli and dosa batter. Also used in dal makhani, vada, papad, and various South Indian and North Indian preparations."
      },
      {
        id: "D002",
        name: "Moong Dal",
        inr: 160,
        usd: 6.50,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Yellow_moong_dal.jpg/640px-Yellow_moong_dal.jpg",
        description: "Split yellow moong dal (mung beans) — light, easily digestible, and packed with protein. Grown organically on our farmland.",
        uses: "Used in dal, khichdi, payasam, pesarattu, soups, and baby food. Highly recommended for its digestibility and nutritional value."
      },
      {
        id: "D003",
        name: "Palm Jaggery (Sillu Karupatti)",
        inr: 220,
        usd: 9.00,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Palm_jaggery.jpg/640px-Palm_jaggery.jpg",
        description: "Traditional Sillu Karupatti made from the sap of Palmyra palm trees. Unrefined, chemical-free, and packed with minerals. A prized natural sweetener from Tamil Nadu.",
        uses: "Used in payasam, coffee, tea, and traditional sweets. Rich in iron and potassium. An excellent sugar substitute with a distinctive smoky-caramel flavour."
      },
      {
        id: "D004",
        name: "Raw Cane Jaggery Powder",
        inr: 120,
        usd: 5.00,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jaggery_powder.jpg/640px-Jaggery_powder.jpg",
        description: "Finely powdered raw cane jaggery, unrefined and free from chemicals. Retains natural molasses and minerals unlike processed white sugar.",
        uses: "Convenient for baking, beverages, desserts, and everyday cooking as a healthier sweetener replacement. Dissolves easily in liquids."
      },
      {
        id: "D005",
        name: "Jaggery Ball",
        inr: 100,
        usd: 4.00,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Jaggery.jpg/640px-Jaggery.jpg",
        description: "Traditional round jaggery balls made from pure sugarcane juice. No additives, no preservatives — just pure natural sweetness from farm to table.",
        uses: "Used in traditional sweets, pongal, payasam, and as a natural energy snack. Excellent for digestive health and as a sugar alternative."
      }
    ]
  },

  // ── PICKLES ──────────────────────────────────────────────
  pickles: {
    label: "Pickles",
    icon: "🫙",
    items: [
      {
        id: "P001",
        name: "Tomato Pickle",
        inr: 180,
        usd: 7.50,
        unit: "250g",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Tomato_pickle.jpg/640px-Tomato_pickle.jpg",
        description: "Tangy, spicy tomato pickle made from fresh farm tomatoes, sesame oil, and a blend of traditional spices. No artificial preservatives.",
        uses: "A perfect accompaniment for rice, idli, dosa, roti, and curd rice. Adds a burst of flavour to any meal."
      },
      {
        id: "P002",
        name: "Mango Pickle",
        inr: 200,
        usd: 8.00,
        unit: "250g",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mango_pickle.jpg/640px-Mango_pickle.jpg",
        description: "Classic South Indian raw mango pickle prepared with raw green mangoes, mustard, fenugreek, and red chillies in traditional gingelly oil.",
        uses: "A beloved condiment for rice, curd rice, parathas, and any Indian meal. Its tangy-spicy profile is irresistible."
      },
      {
        id: "P003",
        name: "Lemon Pickle",
        inr: 190,
        usd: 7.80,
        unit: "250g",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Lemon_pickle.jpg/640px-Lemon_pickle.jpg",
        description: "Sun-dried lemon pickle with a perfect balance of tartness, spice, and salt. Made using traditional recipes passed down through generations.",
        uses: "Excellent with curd rice, dal rice, and Indian breads. Also used as a digestive aid and appetite stimulant."
      },
      {
        id: "P004",
        name: "Citron Pickle",
        inr: 210,
        usd: 8.50,
        unit: "250g",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Narthangai_pickle.jpg/640px-Narthangai_pickle.jpg",
        description: "Narthangai (citron) pickle made from the prized citron fruit. A rare traditional pickle with a unique bitter-tart flavour profile.",
        uses: "A traditional remedy for digestive issues. Served with rice and curries. Known for its medicinal properties and distinctive taste."
      },
      {
        id: "P005",
        name: "Amla Pickle",
        inr: 170,
        usd: 7.00,
        unit: "250g",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Amla_pickle.jpg/640px-Amla_pickle.jpg",
        description: "Indian gooseberry (amla) pickle with traditional spices. Amla is a superfood rich in Vitamin C and antioxidants.",
        uses: "An immunity-boosting condiment for rice and Indian breads. Valued for its health benefits including hair and skin nourishment."
      }
    ]
  },

  // ── FLOURS ───────────────────────────────────────────────
  flours: {
    label: "Flours",
    icon: "🌿",
    items: [
      {
        id: "F001",
        name: "Ragi Flour",
        inr: 95,
        usd: 3.80,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ragi_flour.jpg/640px-Ragi_flour.jpg",
        description: "Stone-ground finger millet (ragi) flour from our own farm cultivation. Rich in calcium, iron, and dietary fibre. 100% natural with no additives.",
        uses: "Used for ragi mudde (balls), roti, dosa, porridge (kanji), and health drinks. Excellent for bone health, weight management, and diabetic diets."
      },
      {
        id: "F002",
        name: "Rice Flour",
        inr: 70,
        usd: 2.80,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rice_flour.jpg/640px-Rice_flour.jpg",
        description: "Fine-ground raw rice flour milled from premium rice varieties. Silky smooth texture, naturally gluten-free.",
        uses: "Used for puttu, kozhukattai, murukku, rice papads, and various traditional snacks and sweets. A versatile gluten-free flour."
      },
      {
        id: "F003",
        name: "Puttu Flour",
        inr: 80,
        usd: 3.20,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Puttu_flour.jpg/640px-Puttu_flour.jpg",
        description: "Specially milled and lightly roasted rice flour with the perfect coarseness for making authentic Kerala-style puttu. Stone-milled for best texture.",
        uses: "The essential ingredient for making traditional puttu (steamed rice cylinders) served with kadala curry or banana. A breakfast staple."
      },
      {
        id: "F004",
        name: "Karupukavuni Flour",
        inr: 220,
        usd: 9.00,
        unit: "kg",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Black_rice.JPG/640px-Black_rice.JPG",
        description: "Stone-ground flour from Black Kavuni (forbidden black rice). Deep purple in colour, extraordinarily rich in antioxidants and anthocyanins.",
        uses: "Used for healthy rotis, black rice payasam, porridge, and health drinks. Excellent for antioxidant benefits and a stunning natural colour in food."
      }
    ]
  },

  // ── TEA ──────────────────────────────────────────────────
  tea: {
    label: "Tea",
    icon: "🌸",
    items: [
      {
        id: "T001",
        name: "Sangu Poo",
        inr: 250,
        usd: 10.00,
        unit: "100g",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Clitoria_ternatea_flowers.jpg/640px-Clitoria_ternatea_flowers.jpg",
        description: "Dried butterfly pea flowers (Sangu Poo / Aparajita) — a stunning blue herbal tea flower with powerful antioxidant properties. Naturally sun-dried, no preservatives.",
        uses: "Brewed as a vivid blue herbal tea that turns purple with lemon. Improves memory, reduces stress, and supports eye health. Also used as a natural food colouring."
      },
      {
        id: "T002",
        name: "Aavaram Poo",
        inr: 200,
        usd: 8.00,
        unit: "100g",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Senna_auriculata_flower.jpg/640px-Senna_auriculata_flower.jpg",
        description: "Dried Aavaram (Tanner's Cassia / Senna auriculata) flowers. A time-honoured medicinal flower used in Siddha and Ayurvedic medicine for centuries.",
        uses: "Brewed as tea for managing blood sugar levels, improving skin complexion, and supporting kidney health. A traditional wellness tea of South India."
      },
      {
        id: "T003",
        name: "Chambarathi Poo",
        inr: 180,
        usd: 7.50,
        unit: "100g",
        soldOut: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Hibiscus_rosa-sinensis.jpg/640px-Hibiscus_rosa-sinensis.jpg",
        description: "Dried hibiscus flowers (Chambarathi) with a deep ruby-red colour and tangy floral aroma. Rich in Vitamin C and natural antioxidants.",
        uses: "Brewed as a bright crimson herbal tea. Known for supporting heart health, reducing blood pressure, and aiding weight management. Also used in coolers and lemonades."
      }
    ]
  }
};

// ── CURRENCY CONFIG ──────────────────────────────────────
// Detected automatically from user's country via IP geolocation
const CURRENCY = {
  INR: { symbol: "₹", label: "INR", key: "inr" },
  USD: { symbol: "$", label: "USD", key: "usd" }
};

// Default fallback if geolocation fails
const DEFAULT_CURRENCY = "USD";
