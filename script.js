// Base de données précise des 8 shots Cosmos
const products = {
    // Gamme Prêt à boire pur (2.79€)
    'energie-gc': {
        title: "Shot Énergie — Gingembre Citron 🟢 (2,79 €)",
        desc: "Idéal pour un coup de fouet immédiat. Sa formule piquante et thermogénique réveille l'organisme instantanément. Riche en manganèse pour un métabolisme énergétique au top.",
        link: "https://www.cosmos.bio/collections/all"
    },
    'energie-fcv': {
        title: "Shot Énergie — Framboise Citron Vert 🟢 (2,79 €)",
        desc: "Le coup de boost immédiat avec la douceur fruitée de la framboise et l'acidité du citron vert. Riche en vitamine C pour réduire drastiquement la fatigue.",
        link: "https://www.cosmos.bio/collections/all"
    },
    'detox-gp': {
        title: "Shot Détox — Gingembre Pissenlit 🟢 (2,79 €)",
        desc: "Parfait pour éliminer les toxines et retrouver de la légèreté digestive après des excès. Formulé avec du pissenlit détoxifiant et riche en manganèse.",
        link: "https://www.cosmos.bio/collections/all"
    },
    'relax-lmmm': {
        title: "Shot Relax — Lion's Mane Mangue 🟢 (2,79 €)",
        desc: "Ton allié anti-stress et charge mentale. Conçu à base de champignon adaptogène Lion's Mane et riche en vitamine B9 pour favoriser la relaxation psychologique.",
        link: "https://www.cosmos.bio/collections/all"
    },
    
    // Gamme Extra-Concentrée à diluer (3.65€)
    'vitalite-mg': {
        title: "Shot Extra Vitalité — Mangue Gingembre 🟡 (3,65 €)",
        desc: "À diluer dans 50 cl d'eau. Une véritable cure de fond complète riche en manganèse et vitamines C & B9 pour combler les carences et maintenir ton tonus durablement.",
        link: "https://www.cosmos.bio/collections/all"
    },
    'energie-mg': {
        title: "Shot Extra Énergie — Myrtille Grenade 🟡 (3,65 €)",
        desc: "À diluer dans 50 cl d'eau. Un concentré hautement antioxydant et énergisant riche en vitamine C pour soutenir l'effort tout au long de la journée.",
        link: "https://www.cosmos.bio/collections/all"
    },
    'immunite-ge': {
        title: "Shot Extra Immunité — Gingembre Épices 🟡 (3,65 €)",
        desc: "À diluer dans 50 cl d'eau. Le bouclier naturel classique par excellence. Une recette robuste et piquante riche en manganèse pour blinder tes défenses naturelles.",
        link: "https://www.cosmos.bio/collections/all"
    },
    'immunite-cg': {
        title: "Shot Extra Immunité — Curcuma Gingembre 🟡 (3,65 €)",
        desc: "À diluer dans 50 cl d'eau. La synergie ultime anti-inflammatoire et protectrice. Riche en manganèse pour aider le corps à résister aux agressions extérieures.",
        link: "https://www.cosmos.bio/collections/all"
    }
};

let userChoiceGamme = "";

function nextStep(gamme) {
    userChoiceGamme = gamme;
    document.getElementById('step-1').classList.remove('active');
    
    if (gamme === 'classique') {
        document.getElementById('step-2-classique').classList.add('active');
    } else {
        document.getElementById('step-2-extra').classList.add('active');
    }
}

function showResult(productId) {
    // Masquer les étapes de questions
    document.getElementById('step-2-classique').classList.remove('active');
    document.getElementById('step-2-extra').classList.remove('active');
    
    // Récupérer le produit unique correspondant
    const product = products[productId];
    
    // Injecter le contenu textuel et le bouton d'achat direct
    const detailsContainer = document.getElementById('product-details');
    detailsContainer.innerHTML = `
        <div class="product-title">${product.title}</div>
        <p class="product-desc">${product.desc}</p>
        <a href="${product.link}" target="_blank"><button class="cta-btn">Ajouter au panier 🛒</button></a>
    `;
    
    // Afficher la boîte de résultat
    document.getElementById('quiz-result').classList.add('active');
}

function restartQuiz() {
    document.getElementById('quiz-result').classList.remove('active');
    document.getElementById('step-1').classList.add('active');
    userChoiceGamme = "";
}
