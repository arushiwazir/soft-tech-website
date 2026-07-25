// Soft Tech Distribution - Interactive Engine & DOM Controller
// Features Responsive Top Bar, Theming, Language Switching & Interactive Widgets

document.addEventListener('DOMContentLoaded', () => {
    initThemeEngine();
    initLanguageEngine();
    initCounterAnimations();
    initMissionCarousel();
    initCalculator();
    initModals();
    initFormHandlers();
    initScrollEffects();
    initMobileMenu();
});

/* ==========================================================================
   1. DARK / LIGHT THEME ENGINE
   ========================================================================== */
function initThemeEngine() {
    const themeToggle = document.getElementById('themeToggle');
    const htmlEl = document.documentElement;

    const savedTheme = localStorage.getItem('softTechTheme') || 'light';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle?.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('softTechTheme', newTheme);
        updateThemeIcon(newTheme);

        showToast(`Theme switched to ${newTheme.toUpperCase()} mode.`);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) {
        icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
}

/* ==========================================================================
   2. MULTI-LANGUAGE TRANSLATION ENGINE (EN, ES, FR, SW)
   ========================================================================== */
const translations = {
    en: {
        nav_about: "Who We Are",
        nav_services: "Verticals",
        nav_3d: "3D IT Studio",
        nav_process: "Supply Chain",
        nav_estimator: "Partner Estimator",
        nav_contact: "Become a Partner",
        hero_eyebrow: "Pan-Regional Technology Distribution Powerhouse",
        hero_title: "Connecting Global Tech Giants with <br><span class='highlight-text'>Regional Supply Chain Perfection</span>",
        pill_ai: "Consumer IT Goods",
        pill_ui: "Laptops & Workstations",
        pill_organic: "Foldable Tablets",
        pill_eco: "Smart Accessories",
        pill_deploy: "Retail Channel Logistics",
        hero_desc: "Soft Tech Distribution connects world-class consumer IT manufacturers and mobility brands with over 12,000 active channel partners, retail chains, and system integrators.",
        hero_badge: "Authorized Global OEM Distribution Partner",
        stat_projects: "Countries Covered",
        stat_years: "Channel Partners & Resellers",
        stat_clients: "Global Tech Brands",
        about_eyebrow: "Who We Are",
        about_title: "Building the Technology Highway <br>across Regional Markets",
        about_desc: "Inspired by global distribution excellence, Soft Tech Distribution serves as the premier bridge between international consumer technology OEMs and regional retail & commercial markets.",
        about_btn: "Explore Distribution Network",
        badge_exp: "Active Markets",
        mission_tag: "Distribution Pillar",
        mission_title: "Our Mission",
        mission_desc: "To streamline technology distribution across emerging markets, bringing world-class laptops, smart mobility devices, and personal computing hardware to retail networks with speed and efficiency.",
        btn_manifesto: "Read Partner Charter",
        "3d_eyebrow": "Consumer IT & Electronics 3D Studio",
        "3d_title_highlight": "3D Visualizer",
        "3d_subtitle": "Interact directly with 3D models of premium consumer electronics, ultra-slim laptops, foldable tablets, and smart audio devices distributed to retailers across regional markets.",
        "3d_model_label": "Select Consumer Product:",
        "3d_tool_rotate": "Auto-Rotate",
        "3d_tool_wireframe": "Wireframe",
        "3d_tool_reset": "Reset View",
        "3d_hint": "Drag to Rotate • Scroll to Zoom • Right-click to Pan",
        "3d_spec_proc": "Processor / Display",
        "3d_spec_power": "Battery Life",
        "3d_spec_footprint": "Chassis Weight",
        "3d_spec_rating": "Distribution Grade",
        services_eyebrow: "Distribution Verticals",
        services_title: "Comprehensive IT & <br><span class='rosy-text'>Consumer Tech Portfolio</span>",
        srv_ai_title: "Enterprise Infrastructure & Cloud",
        srv_ai_desc: "Authorized distribution of data center servers, enterprise storage arrays, networking hardware, and cloud software licensing for channel partners.",
        srv_ui_title: "Consumer IT & Laptops",
        srv_ui_desc: "Bulk distribution of commercial laptops, desktops, gaming hardware, smart mobility devices, and accessories from global top-tier OEM vendors.",
        srv_eco_title: "Supply Chain & Channel Support",
        srv_eco_desc: "Seamless regional warehousing, bonded freight fulfillment, RMA technical support, and flexible credit facilities for 12,000+ active resellers.",
        btn_learn_more: "Learn more",
        btn_all_services: "View All Consumer IT Products",
        proc_eyebrow: "Supply Chain Architecture",
        proc_title: "How We Distribute Technology",
        proc_btn: "Become an Authorized Partner",
        step1_title: "Global Vendor Onboarding",
        step1_desc: "Partnering directly with leading international consumer IT, laptop, and mobility OEMs.",
        step2_title: "Regional Hub Logistics",
        step2_desc: "Routing inventory through strategically positioned regional warehouses and free-zone hubs.",
        step3_title: "Channel Partner Enablement",
        step3_desc: "Providing 12,000+ resellers with credit lines, stock portals, and technical training.",
        step4_title: "Last-Mile Execution",
        step4_desc: "Fulfilling orders rapidly with full warranty, RMA support, and localized customer service.",
        calc_eyebrow: "Distribution Estimator",
        calc_title: "Estimate Your Distribution Order",
        calc_desc: "Calculate estimated order volume, credit requirements, and express fulfillment timelines for your retail channel business.",
        calc_metric1_h: "Express Logistics",
        calc_metric1_p: "24 to 48-Hour regional hub fulfillment",
        calc_metric2_h: "Channel Credit Support",
        calc_metric2_p: "Flexible 30/60-day credit lines for resellers",
        calc_scope_lbl: "Distribution Order Tier",
        calc_modules_lbl: "Logistics & Support Add-ons",
        calc_res_price: "Estimated Order Value:",
        calc_res_time: "Delivery Window:",
        calc_btn_proposal: "Apply for Credit & Account",
        footer_tagline: "Pan-regional distributor connecting global consumer technology manufacturers with channel partners across Africa & MEA.",
        footer_nav: "Navigation",
        footer_services: "Distribution Verticals",
        footer_stay: "Partner Portal",
        footer_newsletter_sub: "Subscribe for price lists, laptop stock updates, and retail news.",
        footer_rights: "© 2026 Soft Tech Distribution. All rights reserved."
    },
    es: {
        nav_about: "Quiénes Somos",
        nav_services: "Líneas IT",
        nav_3d: "Estudio IT 3D",
        nav_process: "Cadena Logística",
        nav_estimator: "Estimador de Socios",
        nav_contact: "Ser Socio Distribuidor",
        hero_eyebrow: "Líder Regional en Distribución Tecnológica",
        hero_title: "Conectando Gigantes Tecnológicos Mundiales con <br><span class='highlight-text'>Perfección Logística Regional</span>",
        pill_ai: "Productos IT Consumo",
        pill_ui: "Laptops y Estaciones",
        pill_organic: "Tablets Plegables",
        pill_eco: "Accesorios Inteligentes",
        pill_deploy: "Logística Minorista",
        hero_desc: "Soft Tech Distribution conecta fabricantes globales de computación de consumo y marcas de movilidad con más de 12.000 socios de canal y cadenas minoristas.",
        hero_badge: "Socio Distribuidor Oficial de Marcas OEM",
        stat_projects: "Países Cubiertos",
        stat_years: "Socios de Canal Activos",
        stat_clients: "Marcas Tecnológicas",
        about_eyebrow: "Quiénes Somos",
        about_title: "Construyendo la Autopista Tecnológica <br>en Mercados Emergentes",
        about_desc: "Inspirados en la excelencia logística global de distribución, conectamos fabricantes tecnológicos globales de laptops y movilidad con cadenas minoristas.",
        about_btn: "Explorar Red de Distribución",
        badge_exp: "Mercados Activos",
        mission_tag: "Pilar de Distribución",
        mission_title: "Nuestra Misión",
        mission_desc: "Optimizar la distribución llevando laptops de clase mundial, dispositivos móviles y hardware de computación a tiendas minoristas con velocidad y respaldo financiero.",
        btn_manifesto: "Leer Carta de Socios",
        "3d_eyebrow": "Estudio 3D de Electrónica de Consumo",
        "3d_title_highlight": "Visualizador de Productos IT",
        "3d_subtitle": "Interactúa con modelos 3D de laptops ultra delgadas, tablets plegables y auriculares de alta gama.",
        "3d_model_label": "Seleccionar Producto:",
        "3d_tool_rotate": "Auto-Rotación",
        "3d_tool_wireframe": "Malla Wireframe",
        "3d_tool_reset": "Restablecer Vista",
        "3d_hint": "Arrastra para Rotar • Rueda para Zoom • Clic Derecho para Desplazar",
        "3d_spec_proc": "Procesador / Pantalla",
        "3d_spec_power": "Batería",
        "3d_spec_footprint": "Peso Chasis",
        "3d_spec_rating": "Grado Minorista",
        services_eyebrow: "Líneas de Distribución",
        services_title: "Soluciones Integrales de <br><span class='rosy-text'>Distribución TI y Consumo</span>",
        srv_ai_title: "Infraestructura Empresarial",
        srv_ai_desc: "Distribución autorizada de servidores para centros de datos, redes empresariales y licencias en la nube.",
        srv_ui_title: "Laptops y IT Consumo",
        srv_ui_desc: "Distribución al por mayor de laptops comerciales, equipos de escritorio, tablets plegables y accesorios OEM.",
        srv_eco_title: "Cadena de Suministro y Soporte",
        srv_eco_desc: "Almacenamiento regional, despacho aduanero, soporte técnico RMA y líneas de crédito para más de 12.000 revendedores.",
        btn_learn_more: "Saber más",
        btn_all_services: "Ver Productos de Consumo",
        proc_eyebrow: "Cadena de Suministro",
        proc_title: "Cómo Distribuimos Tecnología",
        proc_btn: "Ser Distribuidor Autorizado",
        step1_title: "Alianzas con Fabricantes OEM",
        step1_desc: "Acuerdos directos con marcas internacionales de laptops y dispositivos móviles.",
        step2_title: "Logística en Centros Regionales",
        step2_desc: "Distribución de inventario a través de centros logísticos estratégicos.",
        step3_title: "Capacitación y Crédito a Canales",
        step3_desc: "Facilidades de crédito, portales de stock y entrenamiento a revendedores.",
        step4_title: "Entrega y Garantía RMA",
        step4_desc: "Despacho rápido con respaldo de garantía oficial del fabricante.",
        calc_eyebrow: "Estimador de Pedidos",
        calc_title: "Calcula tu Pedido de Distribución",
        calc_desc: "Estima volumen de compra, necesidades de crédito y tiempos de entrega minorista.",
        calc_metric1_h: "Logística Exprés",
        calc_metric1_p: "Entregas regionales en 24 a 48 horas",
        calc_metric2_h: "Líneas de Crédito",
        calc_metric2_p: "Crédito a 30/60 días para socios comerciales",
        calc_scope_lbl: "Nivel de Pedido",
        calc_modules_lbl: "Servicios Adicionales",
        calc_res_price: "Valor Estimado de Pedido:",
        calc_res_time: "Tiempo de Entrega:",
        calc_btn_proposal: "Solicitar Apertura de Cuenta",
        footer_tagline: "Distribuidor mayorista que conecta fabricantes globales de consumo con canales comerciales.",
        footer_nav: "Navegación",
        footer_services: "Distribución",
        footer_stay: "Portal de Socios",
        footer_newsletter_sub: "Suscríbete a listas de precios y stock de distribuidores.",
        footer_rights: "© 2026 Soft Tech Distribution. Todos los derechos reservados."
    },
    fr: {
        nav_about: "Qui Sommes-Nous",
        nav_services: "Secteurs IT",
        nav_3d: "Studio IT 3D",
        nav_process: "Chaîne Logistique",
        nav_estimator: "Estimateur Partenaire",
        nav_contact: "Devenir Partenaire",
        hero_eyebrow: "Leader Régional de la Distribution Informatique",
        hero_title: "Connecter les Géants Mondiaux de la Tech à la <br><span class='highlight-text'>Perfection Logistique Régionale</span>",
        pill_ai: "Électronique Grand Public",
        pill_ui: "Ordinateurs Portables",
        pill_organic: "Tablettes Pliables",
        pill_eco: "Accessoires Smart",
        pill_deploy: "Logistique Réseau",
        hero_desc: "Soft Tech Distribution connecte les plus grands constructeurs d'ordinateurs portables et marques mobiles à plus de 12 000 revendeurs et enseignes.",
        hero_badge: "Distributeur Officiel Agréé des Marques OEM",
        stat_projects: "Pays Couverts",
        stat_years: "Revendeurs & Partenaires",
        stat_clients: "Marques Internationales",
        about_eyebrow: "Qui Sommes-Nous",
        about_title: "Construire l'Autoroute Technologique <br>sur les Marchés Émergents",
        about_desc: "Inspiré par l'excellence en distribution technologique, Soft Tech sert de pont stratégique pour les ordinateurs portables, tablettes et produits mobiles.",
        about_btn: "Explorer le Réseau de Distribution",
        badge_exp: "Marchés Actifs",
        mission_tag: "Pilier de Distribution",
        mission_title: "Notre Mission",
        mission_desc: "Optimiser la distribution d'ordinateurs portables et produits mobiles grand public avec rapidité, crédits commerciaux et support RMA.",
        btn_manifesto: "Charte des Partenaires",
        "3d_eyebrow": "Studio 3D Électronique Grand Public",
        "3d_title_highlight": "Visualiseur IT Grand Public",
        "3d_subtitle": "Interagissez avec des modèles 3D d'ordinateurs portables ultra-fins, tablettes pliables et casques audio distribués aux magasins spécialisés.",
        "3d_model_label": "Sélectionner le Produit:",
        "3d_tool_rotate": "Auto-Rotation",
        "3d_tool_wireframe": "Mode Filaire",
        "3d_tool_reset": "Réinitialiser Vue",
        "3d_hint": "Faites glisser pour tourner • Molette pour zoomer • Clic droit pour déplacer",
        "3d_spec_proc": "Processeur / Écran",
        "3d_spec_power": "Autonomie Batterie",
        "3d_spec_footprint": "Poids Châssis",
        "3d_spec_rating": "Niveau Distribution",
        services_eyebrow: "Secteurs de Distribution",
        services_title: "Solutions Complètes de <br><span class='rosy-text'>Distribution IT & Consommation</span>",
        srv_ai_title: "Infrastructure Entreprise",
        srv_ai_desc: "Distribution agréée de serveurs de datacenters, baies de stockage, réseaux d'entreprise et licences cloud pour partenaires réseau.",
        srv_ui_title: "Informatique Grand Public & PC",
        srv_ui_desc: "Distribution en gros d'ordinateurs portables, PC de bureau, tablettes pliables et accessoires des plus grands constructeurs OEM.",
        srv_eco_title: "Chaîne Logistique & Support",
        srv_eco_desc: "Stockage régional sécurisé, expédition douanière, service après-vente RMA et crédit commercial pour 12 000+ revendeurs.",
        btn_learn_more: "En savoir plus",
        btn_all_services: "Voir les Produits Grand Public",
        proc_eyebrow: "Chaîne Logistique",
        proc_title: "Comment Nous Distribuons la Technologie",
        proc_btn: "Devenir Distributeur Agréé",
        step1_title: "Partenariats Constructeurs OEM",
        step1_desc: "Directement en contrat avec les marques d'ordinateurs portables et produits mobiles.",
        step2_title: "Logistique des Hubs Régionaux",
        step2_desc: "Gestion des stocks à travers nos entrepôts régionaux stratégiques.",
        step3_title: "Accompagnement du Réseau",
        step3_desc: "Facilités de paiement à 30/60 jours, portaux cloud et formations.",
        step4_title: "Livraison & Service RMA",
        step4_desc: "Livraison rapide avec couverture garantie et support technique local.",
        calc_eyebrow: "Estimateur de Commande",
        calc_title: "Calculez Votre Commande de Distribution",
        calc_desc: "Estimez le volume de commande, les crédits commercialisables et les délais de livraison.",
        calc_metric1_h: "Logistique Express",
        calc_metric1_p: "Livraison en 24h à 48h depuis nos hubs",
        calc_metric2_h: "Support Crédit Partenaire",
        calc_metric2_p: "Lignes de crédit flex à 30/60 jours",
        calc_scope_lbl: "Volume de Commande",
        calc_modules_lbl: "Options Logistiques",
        calc_res_price: "Valeur Estimée de Commande:",
        calc_res_time: "Délai de Livraison:",
        calc_btn_proposal: "Ouvrir un Compte Revendeur",
        footer_tagline: "Distributeur informatique grossiste reliant constructeurs grand public et réseaux de revente.",
        footer_nav: "Navigation",
        footer_services: "Distribution",
        footer_stay: "Portail Revendeurs",
        footer_newsletter_sub: "Abonnez-vous aux tarifs grossistes et mises à jour de stocks.",
        footer_rights: "© 2026 Soft Tech Distribution. Tous droits réservés."
    },
    sw: {
        nav_about: "Sisi ni Nani",
        nav_services: "Sekta za IT",
        nav_3d: "Studio ya IT 3D",
        nav_process: "Mnyororo wa Ugavi",
        nav_estimator: "Kikokotoo cha Wafanyabiashara",
        nav_contact: "Mshirika wa Usambazaji",
        hero_eyebrow: "Kituo Kikuu cha Usambazaji Teknolojia Barani",
        hero_title: "Kuunganisha Makampuni Makubwa ya Dunia na <br><span class='highlight-text'>Mnyororo Bora wa Ugavi Barani</span>",
        pill_ai: "Vifaa vya Elektroniki vya Watumiaji",
        pill_ui: "Laptop za Biashara",
        pill_organic: "Tablet za Kisasa",
        pill_eco: "Vifaa vya Simu",
        pill_deploy: "Usafirishaji wa Maduka",
        hero_desc: "Soft Tech Distribution inaunganisha watengenezaji wa laptop na simu duniani na zaidi ya wauzaji na maduka 12,000 barani.",
        hero_badge: "Mtawanyaji Rasmi Aliyeidhinishwa wa OEM",
        stat_projects: "Nchi Zinazohudumiwa",
        stat_years: "Wauzaji na Washirika",
        stat_clients: "Aina za Chapa za Dunia",
        about_eyebrow: "Sisi ni Nani",
        about_title: "Kujenga Barabara Kuu ya Teknolojia <br>katika Masoko Yanayokua",
        about_desc: "Ikiongozwa na ubora wa usambazaji wa kimataifa, Soft Tech inaleta laptop, tablet, na vifaa vya kisasa katika maduka ya kikanda.",
        about_btn: "Gundua Mtandao wa Usambazaji",
        badge_exp: "Masoko Amilifu",
        mission_tag: "Nguzo ya Usambazaji",
        mission_title: "Dhamira Yetu",
        mission_desc: "Kuharakisha usambazaji wa laptop, tablet za kisasa, na vifaa vya kompyuta kwa maduka ya rejareja kwa mikopo na ufikishaji wa haraka.",
        btn_manifesto: "Soma Mkataba wa Washirika",
        "3d_eyebrow": "Studio ya 3D ya Vifaa vya Elektroniki",
        "3d_title_highlight": "Mtaswira wa Vifaa vya Watumiaji",
        "3d_subtitle": "Tazama na uingiliane moja kwa moja na mifano ya 3D ya laptop za biashara, tablet za kisasa, na headphones zinazosambazwa kwenye maduka.",
        "3d_model_label": "Chagua Bidhaa ya 3D:",
        "3d_tool_rotate": "Mzunguko wa Moja kwa Moja",
        "3d_tool_wireframe": "Muundo wa Wavu",
        "3d_tool_reset": "Rudisha Muonekano",
        "3d_hint": "Buruza kuZungusha • Sogeza kuKaribia • Bonyeza Kulia kuSogeza",
        "3d_spec_proc": "Kiprosesa / Skrini",
        "3d_spec_power": "Muda wa Betri",
        "3d_spec_footprint": "Uzito wa Laptop",
        "3d_spec_rating": "Kiwango cha Biashara",
        services_eyebrow: "Sekta za Usambazaji",
        services_title: "Suluhisho Kamili za <br><span class='rosy-text'>Usambazaji wa IT & Watumiaji</span>",
        srv_ai_title: "Enterprise & Server",
        srv_ai_desc: "Usambazaji rasmi wa server za data center, vifaa vya mtandao, hifadhi ya data, na leseni za programu za wingu.",
        srv_ui_title: "Kompyuta & Laptop za Watumiaji",
        srv_ui_desc: "Usambazaji wa jumla wa laptop za biashara, kompyuta za mezani, tablet za kisasa, na vifaa kutoka kwa watengenezaji bora wa OEM.",
        srv_eco_title: "Mnyororo wa Ugavi & Huduma",
        srv_eco_desc: "Hifadhi ya mizigo kwenye vituo vya kikanda, kibali cha forodha, matengenezo ya RMA, na mikopo ya siku 30/60 kwa wauzaji.",
        btn_learn_more: "Soma zaidi",
        btn_all_services: "Tazama Bidhaa Zote za Watumiaji",
        proc_eyebrow: "Mnyororo wa Ugavi",
        proc_title: "Jinsi Tunavyosambaza Teknolojia",
        proc_btn: "Wasilisha Ombi la Kuwa Mshirika",
        step1_title: "Mkataba na Watengenezaji OEM",
        step1_desc: "Ushirikiano wa moja kwa moja na chapa kuu za laptop na simu duniani.",
        step2_title: "Vituo vya Mizigo vya Kikanda",
        step2_desc: "Kuhifadhi na kusambaza bidhaa kupitia ghala kuu za kibiashara.",
        step3_title: "Uwezeshaji wa Wauzaji",
        step3_desc: "Kutoa mikopo ya siku 30/60, mifumo ya wingu, na mafunzo kwa wauzaji 12,000+.",
        step4_title: "Ufikishaji na Dhamana ya RMA",
        step4_desc: "Ufikishaji wa haraka wa mzigo ukiwa na dhamana rasmi ya kiwanda.",
        calc_eyebrow: "Kikokotoo cha Oda",
        calc_title: "Kadiria Oda Yako ya Usambazaji",
        calc_desc: "Kokotoa gharama za mzigo, mahitaji ya mkopo, na muda wa kufikishiwa mzigo wa maduka.",
        calc_metric1_h: "Usafirishaji wa Haraka",
        calc_metric1_p: "Kufikishiwa mzigo ndani ya masaa 24 hadi 48",
        calc_metric2_h: "Support ya Mkopo",
        calc_metric2_p: "Mikopo rahisi ya siku 30/60 kwa wauzaji",
        calc_scope_lbl: "Kiwango cha Oda",
        calc_modules_lbl: "Huduma za Nyongeza",
        calc_res_price: "Thamani ya Oda Inayokadiriwa:",
        calc_res_time: "Siku za Kufikishiwa:",
        calc_btn_proposal: "Fungua Akaunti ya Mfanyabiashara",
        footer_tagline: "Mtawanyaji mkuu anayeunganisha watengenezaji wa laptop na maduka ya kikanda.",
        footer_nav: "Urambazaji",
        footer_services: "Usambazaji",
        footer_stay: "Kituo cha Wauzaji",
        footer_newsletter_sub: "Jiunge kupata orodha ya bei za jumla na laptop mpya.",
        footer_rights: "© 2026 Soft Tech Distribution. Haki zote zimehifadhiwa."
    }
};

function initLanguageEngine() {
    const langSelect = document.getElementById('langSelect');
    const savedLang = localStorage.getItem('softTechLang') || 'en';
    if (langSelect) {
        langSelect.value = savedLang;
        applyLanguage(savedLang);

        langSelect.addEventListener('change', (e) => {
            const lang = e.target.value;
            localStorage.setItem('softTechLang', lang);
            applyLanguage(lang);
            showToast(`Language changed to ${lang.toUpperCase()}`);
        });
    }
}

function applyLanguage(lang) {
    const dict = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });
}

/* ==========================================================================
   4. MOBILE MENU & TOP BAR CONTROLLER
   ========================================================================== */
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    mobileToggle?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
            icon.className = navMenu?.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu?.classList.remove('active');
            const icon = mobileToggle?.querySelector('i');
            if (icon) icon.className = 'fa-solid fa-bars';
        });
    });
}

/* ==========================================================================
   5. STATS COUNTER ANIMATION
   ========================================================================== */
function initCounterAnimations() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    animateCount(stat, target);
                });
            }
        });
    }, { threshold: 0.5 });

    const heroStatsCard = document.querySelector('.hero-stats-card');
    if (heroStatsCard) observer.observe(heroStatsCard);
}

function animateCount(element, target) {
    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(10, Math.abs(Math.floor(duration / (target / 50))));
    
    const timer = setInterval(() => {
        start += Math.ceil(target / 40);
        if (start >= target) {
            start = target;
            clearInterval(timer);
        }
        element.innerHTML = `${start.toLocaleString()}<span class="plus">+</span>`;
    }, stepTime);
}

/* ==========================================================================
   6. MISSION & DISTRIBUTION CAROUSEL SWITCHER
   ========================================================================== */
const missionData = [
    {
        title: "Our Mission",
        desc: "To streamline technology distribution across emerging markets, bringing world-class laptops, smart mobility devices, and personal computing hardware to retail networks with speed and efficiency."
    },
    {
        title: "Our Vision",
        desc: "To remain the most trusted and innovative consumer IT distribution partner connecting international technology OEMs to over 12,000 active retail channels."
    },
    {
        title: "Distribution Values",
        desc: "Retail partner empowerment, vendor trust, rapid regional warehousing logistics, financial credit enablement, and zero-compromise post-sales RMA warranty support."
    }
];

let currentMissionIndex = 0;

function initMissionCarousel() {
    const btnPrev = document.getElementById('btnPrevMission');
    const btnNext = document.getElementById('btnNextMission');
    const dots = document.querySelectorAll('.slide-dots .dot');

    if (btnPrev && btnNext) {
        btnPrev.addEventListener('click', () => updateMissionSlide(currentMissionIndex - 1));
        btnNext.addEventListener('click', () => updateMissionSlide(currentMissionIndex + 1));
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            updateMissionSlide(index);
        });
    });
}

function updateMissionSlide(index) {
    if (index < 0) index = missionData.length - 1;
    if (index >= missionData.length) index = 0;
    
    currentMissionIndex = index;

    const titleEl = document.getElementById('missionTitle');
    const descEl = document.getElementById('missionDesc');
    const dots = document.querySelectorAll('.slide-dots .dot');

    if (titleEl && descEl) {
        titleEl.style.opacity = 0;
        descEl.style.opacity = 0;
        
        setTimeout(() => {
            titleEl.textContent = missionData[index].title;
            descEl.textContent = missionData[index].desc;
            titleEl.style.opacity = 1;
            descEl.style.opacity = 1;
        }, 200);
    }

    dots.forEach((dot, i) => {
        if (i === index) dot.classList.add('active');
        else dot.classList.remove('active');
    });
}

/* ==========================================================================
   7. INTERACTIVE DISTRIBUTION ORDER ESTIMATOR
   ========================================================================== */
function initCalculator() {
    const scopeSelect = document.getElementById('calcScope');
    const moduleCheckboxes = document.querySelectorAll('.calc-module');
    const totalPriceEl = document.getElementById('calcTotalPrice');
    const estTimeEl = document.getElementById('calcEstTime');

    function calculateTotal() {
        if (!scopeSelect || !totalPriceEl) return;
        
        let total = parseInt(scopeSelect.value);

        moduleCheckboxes.forEach(cb => {
            if (cb.checked) {
                total += parseInt(cb.value);
            }
        });

        let timeline = "2 - 4 Days";
        if (total > 30000) timeline = "4 - 6 Days";
        else if (total > 15000) timeline = "3 - 5 Days";

        totalPriceEl.textContent = `$${total.toLocaleString()}`;
        if (estTimeEl) estTimeEl.textContent = timeline;
    }

    if (scopeSelect) {
        scopeSelect.addEventListener('change', calculateTotal);
        moduleCheckboxes.forEach(cb => cb.addEventListener('change', calculateTotal));
        calculateTotal();
    }
}

/* ==========================================================================
   8. MODALS SYSTEM
   ========================================================================== */
const serviceDetails = {
    'ui-ux': {
        title: "Consumer IT & Personal Computing",
        icon: "fa-laptop",
        desc: "Bulk wholesale supply of commercial and gaming laptops, desktop PCs, monitors, smart mobility devices, and accessories for retail chains, corporate fleet deployments, and regional resellers.",
        features: [
            "Commercial Laptops & Workstations",
            "Gaming Rig Systems & High-Refresh Displays",
            "Tablets, Mobility & Point-of-Sale Hardware",
            "Authorized OEM Warranty & Regional RMA Support"
        ]
    },
    'ai-cloud': {
        title: "Enterprise Solutions & Cloud Distribution",
        icon: "fa-server",
        desc: "We provide authorized distribution of enterprise data center hardware, multi-socket rack servers, SAN storage arrays, high-speed switching infrastructure, and enterprise cloud software subscriptions.",
        features: [
            "Data Center Server & Blade Chassis Distribution",
            "Enterprise Storage Arrays (SAN/NAS/NVMe)",
            "Core & Edge Networking Hardware",
            "Cloud SaaS/PaaS Volume Licensing & CSP Portals"
        ]
    },
    'eco-tech': {
        title: "Supply Chain & Channel Logistics Support",
        icon: "fa-dolly",
        desc: "End-to-end supply chain management tailored for technology channels across emerging markets. Includes free-zone bonded warehousing, door-to-door express customs clearance, and flexible reseller credit lines.",
        features: [
            "Free-Zone Bonded Regional Hub Warehousing",
            "Flexible 30 / 60-Day Reseller Line of Credit",
            "Express Bonded Freight & Doorstep Logistics",
            "Dedicated Partner Portal API Stock Integration"
        ]
    }
};

function initModals() {
    const btnPlayDemo = document.getElementById('btnPlayDemo');
    const demoModal = document.getElementById('demoModal');
    const btnCloseDemo = document.getElementById('btnCloseDemo');

    if (btnPlayDemo && demoModal) {
        btnPlayDemo.addEventListener('click', () => demoModal.classList.add('active'));
        btnCloseDemo?.addEventListener('click', () => demoModal.classList.remove('active'));
        demoModal.addEventListener('click', (e) => {
            if (e.target === demoModal) demoModal.classList.remove('active');
        });
    }

    const btnContactNav = document.getElementById('btnContactNav');
    const btnStartProcess = document.getElementById('btnStartProjectProcess');
    const contactModal = document.getElementById('contactModal');
    const btnCloseContact = document.getElementById('btnCloseContact');

    const openContact = () => contactModal?.classList.add('active');
    btnContactNav?.addEventListener('click', openContact);
    btnStartProcess?.addEventListener('click', openContact);
    
    btnCloseContact?.addEventListener('click', () => contactModal?.classList.remove('active'));
    contactModal?.addEventListener('click', (e) => {
        if (e.target === contactModal) contactModal.classList.remove('active');
    });

    const serviceModal = document.getElementById('serviceModal');
    const btnCloseService = document.getElementById('btnCloseService');
    btnCloseService?.addEventListener('click', () => {
        serviceModal?.classList.remove('active');
        disposeProductViewer();
    });
    serviceModal?.addEventListener('click', (e) => {
        if (e.target === serviceModal) {
            serviceModal.classList.remove('active');
            disposeProductViewer();
        }
    });

    const btnOpenMission = document.getElementById('btnOpenMissionModal');
    btnOpenMission?.addEventListener('click', () => {
        openServiceModal('ui-ux');
    });

    const btnViewAllServices = document.getElementById('btnViewAllServices');
    btnViewAllServices?.addEventListener('click', () => {
        openServiceModal('ui-ux');
    });
}

window.openServiceModal = function(serviceKey) {
    const data = serviceDetails[serviceKey];
    if (!data) return;

    const modalContent = document.getElementById('serviceModalContent');
    const serviceModal = document.getElementById('serviceModal');

    disposeProductViewer();

    if (modalContent && serviceModal) {
        const viewerBlock = serviceKey === 'ui-ux' ? `
            <div class="modal-3d-viewer" id="modal3DViewer"></div>
            <p class="modal-3d-hint"><i class="fa-solid fa-hand-pointer"></i> Drag to rotate the product</p>
        ` : '';

        modalContent.innerHTML = `
            <div class="eyebrow-tag"><span class="dash"></span> Vertical Overview</div>
            <div style="display:flex; align-items:center; gap:16px; margin: 12px 0 20px;">
                <div style="width:48px; height:48px; border-radius:50%; background:var(--color-dark-green); color:var(--color-rosy-brown); display:flex; align-items:center; justify-content:center; font-size:1.2rem;">
                    <i class="fa-solid ${data.icon}"></i>
                </div>
                <h2 style="font-family:var(--font-heading); font-size:2rem; color:var(--color-text-main);">${data.title}</h2>
            </div>
            ${viewerBlock}
            <p style="font-size:1rem; color:var(--color-text-muted); line-height:1.7; margin-bottom:24px;">${data.desc}</p>
            
            <h4 style="font-family:var(--font-heading); font-size:1.1rem; color:var(--color-text-main); margin-bottom:12px;">Key Offerings & Capabilities:</h4>
            <ul style="list-style:none; padding:0; margin-bottom:28px;">
                ${data.features.map(f => `<li style="margin-bottom:10px; display:flex; align-items:center; gap:10px; font-size:0.95rem; color:var(--color-text-main);"><i class="fa-solid fa-circle-check" style="color:var(--color-rosy-brown);"></i> ${f}</li>`).join('')}
            </ul>

            <button class="btn btn-rosy btn-full" onclick="document.getElementById('serviceModal').classList.remove('active'); disposeProductViewer(); document.getElementById('contactModal').classList.add('active');">
                <span>Apply for Retail Account & Wholesale Pricing</span>
                <span class="btn-circle-arrow"><i class="fa-solid fa-arrow-right"></i></span>
            </button>
        `;
        serviceModal.classList.add('active');

        if (serviceKey === 'ui-ux') {
            requestAnimationFrame(() => {
                const viewerContainer = document.getElementById('modal3DViewer');
                init3DProductViewer(viewerContainer);
            });
        }
    }
};

/* ==========================================================================
   8B. CONSUMER IT PRODUCT 3D VIEWER (shown inside the Laptops service modal)
   ========================================================================== */
let productViewer = null;

function init3DProductViewer(container) {
    if (!container || typeof THREE === 'undefined') return;

    const width = container.clientWidth || 560;
    const height = container.clientHeight || 300;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.3, 4.4);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const keyLight = new THREE.DirectionalLight(0xA68868, 1.3);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);
    const rimLight = new THREE.DirectionalLight(0x4B6382, 0.9);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);

    // Build a simple stylized laptop model
    const laptop = new THREE.Group();

    const base = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 0.12, 1.6),
        new THREE.MeshStandardMaterial({ color: 0x071739, metalness: 0.6, roughness: 0.3 })
    );
    laptop.add(base);

    const keyboard = new THREE.Mesh(
        new THREE.PlaneGeometry(2.1, 1.3),
        new THREE.MeshStandardMaterial({ color: 0x0d2347, metalness: 0.4, roughness: 0.6, side: THREE.DoubleSide })
    );
    keyboard.rotation.x = -Math.PI / 2;
    keyboard.position.y = 0.065;
    laptop.add(keyboard);

    const screenGroup = new THREE.Group();
    const screenBack = new THREE.Mesh(
        new THREE.BoxGeometry(2.4, 1.5, 0.08),
        new THREE.MeshStandardMaterial({ color: 0x071739, metalness: 0.6, roughness: 0.3 })
    );
    screenGroup.add(screenBack);

    const display = new THREE.Mesh(
        new THREE.PlaneGeometry(2.2, 1.3),
        new THREE.MeshStandardMaterial({ color: 0xA68868, emissive: 0xA68868, emissiveIntensity: 0.35, metalness: 0.1, roughness: 0.2 })
    );
    display.position.z = 0.045;
    screenGroup.add(display);

    screenGroup.position.set(0, 0.75, -0.76);
    screenGroup.rotation.x = -0.25;
    laptop.add(screenGroup);

    laptop.rotation.x = 0.15;
    scene.add(laptop);

    let isDragging = false;
    let prevX = 0, prevY = 0;
    let rotY = 0.6, rotX = 0.15;
    let autoRotate = true;

    function getPoint(e) {
        return e.touches ? e.touches[0] : e;
    }
    function onPointerDown(e) {
        isDragging = true;
        autoRotate = false;
        const p = getPoint(e);
        prevX = p.clientX;
        prevY = p.clientY;
    }
    function onPointerMove(e) {
        if (!isDragging) return;
        const p = getPoint(e);
        rotY += (p.clientX - prevX) * 0.008;
        rotX += (p.clientY - prevY) * 0.005;
        rotX = Math.max(-0.6, Math.min(0.6, rotX));
        prevX = p.clientX;
        prevY = p.clientY;
    }
    function onPointerUp() {
        isDragging = false;
    }

    renderer.domElement.style.cursor = 'grab';
    renderer.domElement.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    renderer.domElement.addEventListener('touchstart', onPointerDown, { passive: true });
    renderer.domElement.addEventListener('touchmove', onPointerMove, { passive: true });
    renderer.domElement.addEventListener('touchend', onPointerUp);

    let frameId;
    function animate() {
        frameId = requestAnimationFrame(animate);
        if (autoRotate) rotY += 0.004;
        laptop.rotation.y = rotY;
        laptop.rotation.x = rotX;
        renderer.render(scene, camera);
    }
    animate();

    function handleResize() {
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (!w || !h) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    }
    window.addEventListener('resize', handleResize);

    productViewer = {
        dispose() {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onPointerMove);
            window.removeEventListener('mouseup', onPointerUp);
            renderer.dispose();
            if (renderer.domElement && renderer.domElement.parentNode) {
                renderer.domElement.parentNode.removeChild(renderer.domElement);
            }
        }
    };
}

window.disposeProductViewer = function() {
    if (productViewer) {
        productViewer.dispose();
        productViewer = null;
    }
};

/* ==========================================================================
   9. FORM SUBMISSIONS & TOAST NOTIFICATIONS
   ========================================================================== */
function initFormHandlers() {
    const btnRequestCalcQuote = document.getElementById('btnRequestCalcQuote');
    btnRequestCalcQuote?.addEventListener('click', () => {
        const total = document.getElementById('calcTotalPrice')?.textContent;
        showToast(`Retail credit estimation initiated for ${total}. Opening onboarding application...`);
        setTimeout(() => {
            document.getElementById('contactModal')?.classList.add('active');
        }, 800);
    });

    const modalContactForm = document.getElementById('modalContactForm');
    modalContactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('contactModal')?.classList.remove('active');
        showToast("Thank you! Your reseller partner application has been submitted. Our regional channel manager will contact you shortly.");
        modalContactForm.reset();
    });

    const btnSubscribe = document.getElementById('btnSubscribe');
    btnSubscribe?.addEventListener('click', () => {
        const input = document.getElementById('newsletterEmail');
        if (input && input.value.trim() !== '') {
            showToast("Subscribed to Soft Tech Distribution stock & laptop price alerts!");
            input.value = '';
        } else {
            showToast("Please enter a valid business email address.");
        }
    });
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-laptop"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 4000);
}

/* ==========================================================================
   10. SCROLL EFFECTS & NAVBAR
   ========================================================================== */
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
}
