/* shared.js – Vlist Otten */

/* ── TRANSLATIONS ── */
const LANG = {
  nl: {
    nav: ['Home','Over Ons','Diensten','Tarieven','Boeken & Contact','Voorwaarden'],
    sidebar_sub: 'KvK: 99913925 &nbsp;&middot;&nbsp; info@vlistotten.nl',

    // HOME
    'h-eyebrow': 'Persoonlijke Chauffeursdiensten',
    'h-tagline': 'Vertrouwd in uw eigen auto',
    'h-t1': 'Uw reis,', 'h-t2': 'onze zorg.',
    'h-sub': 'Vlist – Otten biedt u comfort en vertrouwde service op maat — altijd in uw eigen auto. Van luchthaven-service tot uw auto op uw vakantiebestemming.',
    'h-own-car': '',
    'h-btn1': 'Tarieven', 'h-btn2': 'Boeken',
    'h-about-lbl': 'Over ons',
    'h-about-h2': 'Twee chauffeurs.<br/>Één standaard van professionaliteit.',
    'h-about-p': 'Jip van der Vlist en Cas Otten zijn twee gepassioneerde professionals die geloven dat vervoer meer is dan van A naar B vervoerd worden. Wij rijden altijd in uw eigen auto — met aandacht voor detail en een persoonlijke aanpak staat uw comfort altijd centraal.',
    'h-role': 'Chauffeur & Co-founder',

    // ABOUT
    'ab-ey': 'Het team', 'ab-t': 'Over', 'ab-te': 'Ons',
    'ab-i1': 'Vlist – Otten is opgericht door twee vrienden met een gedeelde passie voor punctualiteit, klantvriendelijkheid en autorijden. Wij geloven dat élke rit, van een zakelijke transfer tot een avond uit, een ervaring moet zijn die u bijblijft.',
    'ab-i2': 'Elke rit wordt zorgvuldig ingepland zodat u altijd op tijd in uw eigen auto aankomt. Discretie is voor ons een vanzelfsprekendheid, geen extra dienst.',
    'ab-i3': 'Wij opereren in en rondom het Gooi, maar rijden door heel Nederland. Neem vrijblijvend contact met ons op om uw wens te bespreken.',
    'ab-role': 'Chauffeur & Co-founder',
    'cas-b1': "Mijn naam is Cas Otten, 21 jaar. Ik ben mede oprichter van Vlist-Otten. Mijn passie voor auto's en autorijden is al begonnen toen ik erg jong was. Mijn vader heeft namelijk een eigen race team. Hiermee gingen we het hele land door en sleutelde soms dagen lang aan auto's.",
    'cas-b2': 'Ik ken Jip al sinds ik 4 ben. Daardoor zijn wij hele goede vrienden. De passie voor het onderweg zijn delen wij sindsdien, en daarom zijn wij samen dit bedrijf begonnen.',
    'jip-b1': 'Mijn naam is Jip, 23 jaar en medeoprichter van Vlist-Otten. Wat begon als een eenmansbedrijf groeide in vijf jaar tijd uit tot een stevige basis, waarna ik samen met mijn beste vriend Vlist-Otten heb opgezet.',
    'jip-b2': 'Mijn passie voor alles wat rijdt, vliegt en vaart zit er al van jongs af aan in. In mijn vrije tijd ben ik graag op het water te vinden om te zeilen of in de lucht tijdens het zweefvliegen. Die passie zie je terug in mijn werk: aandacht voor detail, veiligheid en het plezier van onderweg zijn.',
    'jip-b3': 'Ik hoop u binnenkort te mogen verwelkomen aan boord van uw eerste rit.',

    // DIENSTEN
    'ds-ey': 'Wat wij bieden', 'ds-t': 'Onze', 'ds-te': 'Diensten',
    'd1-title': 'Privéchauffeur op maat', 'd1-text': 'Een vaste chauffeur voor de dag in uw eigen auto. Ideaal bij meerdere afspraken of als u flexibiliteit nodig heeft. Geef in uw reservering aan of u dranken of versnaperingen wenst.',
    'd2-title': 'BOB service', 'd2-text': 'Diner, gala of concert? Geniet van de avond zonder zorgen. Wij rijden in uw eigen auto en brengen u veilig thuis. Geef in uw reservering aan of u dranken of versnaperingen wenst.',
    'd3-title': 'Auto naar het buitenland', 'd3-text': 'Gaat u binnenkort op vakantie? Wij rijden uw eigen auto naar de bestemming zodat u daar direct over uw vertrouwde auto beschikt.',
    'd4-title': 'Luchthaven transfer', 'd4-text': 'Stressvrij naar Schiphol, Rotterdam of een ander vliegveld — in uw eigen auto. Wij volgen uw vlucht en zijn er altijd op tijd.',
    'd5-title': 'Lange afstand', 'd5-text': "Van Amsterdam naar Brussel of Parijs — wij rijden ook internationale ritten in uw eigen auto voor klanten die comfort verkiezen boven vliegen. Dranken en versnaperingen op aanvraag.",
    'd6-title': 'Trailerservice', 'd6-text': 'Wilt u uw auto en boot veilig laten vervoeren, dan kan dat binnenkort. Neem vrijblijvend contact met ons op voor meer informatie.',
    'd6-badge': 'Binnenkort',
    'd7-title': 'Was service', 'd7-text': 'Los of tijdens de rit uw auto laten wassen. Professioneel en op aanvraag in te plannen.',
    'ds-cta': 'Vrijblijvend Aanvragen',

    // TARIEVEN
    'tr-ey': 'Transparante prijzen', 'tr-t': 'Tarieven',
    'tr-own-car': 'Alle ritten worden uitgevoerd in uw eigen auto.',
    'tr-btw': 'Alle prijzen zijn exclusief BTW.',
    'tr-poa': 'Op aanvraag',
    't1-name': 'Privéchauffeur op maat', 't1-price': '€ 29,95 p/u', 't1-note': 'Min. afname 3 uur · daarna € 14,95 p/u extra',
    't1-f1': 'In uw eigen auto', 't1-f2': 'Meerdere afspraken mogelijk', 't1-f3': 'Dranken & versnaperingen op aanvraag',
    't2-name': 'BOB service', 't2-f1': 'In uw eigen auto', 't2-f2': "Avonden, gala's & concerten", 't2-f3': 'Dranken & versnaperingen op aanvraag',
    't3-name': 'Auto naar het buitenland', 't3-f1': 'Uw eigen auto op bestemming', 't3-f2': 'Vakantiecomfort', 't3-f3': 'Heel Europa mogelijk',
    't4-name': 'Luchthaven transfer', 't4-f1': 'In uw eigen auto', 't4-f2': 'Vluchtvolgservice', 't4-f3': 'Altijd op tijd',
    't5-name': 'Lange afstand', 't5-price': '€ 15,– p/u', 't5-note': 'Excl. BTW',
    't5-f1': 'In uw eigen auto', 't5-f2': 'Amsterdam – Brussel – Parijs', 't5-f3': 'Dranken & versnaperingen op aanvraag',
    't6-name': 'Trailerservice', 't6-badge': 'Binnenkort',
    't7-name': 'Was service', 't7-f1': 'Los of tijdens de rit', 't7-f2': 'Uw auto professioneel gewassen', 't7-f3': 'Op aanvraag in te plannen', 't6-f1': 'Auto & boot vervoer', 't6-f2': 'Veilig & verzekerd', 't6-f3': 'Neem contact op voor info',
    'tr-note': 'Dranken en versnaperingen kunnen bij alle diensten worden aangevraagd via het boekingsformulier. Alle prijzen zijn exclusief BTW.',
    'tr-cta': 'Aanvragen',

    // CONTACT
    'ct-ey': 'Neem contact op', 'ct-t': 'Boeken &', 'ct-te': 'Contact',
    'ct-h3': 'Bereikbaarheid',
    'ct-intro': 'Voor boekingen, offertes of vragen kunt u ons direct bereiken.',
    'ct-el': 'Email', 'ct-tl': 'Telefoon', 'ct-al': 'Beschikbaarheid',
    'ct-av': '24/7 bereikbaar',
    'f-nl': 'Uw naam', 'f-el': 'E-mailadres', 'f-tl': 'Telefoonnummer',
    'f-al': 'Adres / vertrekpunt', 'f-dl': 'Type dienst',
    'f-own-car-lbl': 'Merk & type van uw auto',
    'f-own-car-ph': 'bijv. Volkswagen Golf, BMW 5-serie...',
    'f-ml': 'Bericht',
    'f-ok': 'Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact op.',
    'f-sub': 'Versturen',
    'f-dienst-opt': '— Selecteer een dienst —',

    // VOORWAARDEN
    'vw-ey': 'Juridisch', 'vw-t': 'Algemene', 'vw-te': 'Voorwaarden', 'vw-intro': 'Onze algemene voorwaarden zijn beschikbaar als PDF. U kunt deze hieronder bekijken en downloaden.',
    'vw-h1': 'Klantvoorwaarden',
    'vw-fl1': 'Uw naam', 'vw-fl2': 'E-mailadres', 'vw-fl3': 'Telefoonnummer',
    'vw-fl4': 'Bericht / vraag',
    'vw-fsb': 'Versturen',
    'vw-pdf-txt': 'Bekijk onze Algemene Voorwaarden (PDF)',
    'vw-h2': 'Privacybeleid',
    'pp1h': 'Verantwoordelijke', 'pp1p': 'Vlist – Otten Chauffeursdiensten &nbsp;&middot;&nbsp; KvK: 99913925',
    'pp2h': 'Welke gegevens wij verzamelen', 'pp2p': 'Via het contactformulier verzamelen wij uw naam, e-mailadres, telefoonnummer en adres ten behoeve van het afhandelen van uw boeking of vraag. Wij gebruiken geen tracking- of advertentiecookies.',
    'pp3h': 'Cookies', 'pp3p': 'Deze website maakt gebruik van functionele cookies om uw cookievoorkeur op te slaan. Analytische of marketing-cookies worden alleen geplaatst na uw expliciete toestemming.',
    'pp4h': 'Uw rechten', 'pp4p': 'U heeft het recht op inzage, correctie of verwijdering van uw persoonsgegevens. Neem hiervoor contact op via <a href="mailto:info@vlistotten.nl" style="color:var(--gold);text-decoration:none;">info@vlistotten.nl</a>.',
    'pp5h': 'Versie', 'pp5p': '1.0 — 26-02-2026',

    // COOKIE
    'ck-txt': 'Wij gebruiken functionele cookies om uw voorkeuren op te slaan. Met uw toestemming plaatsen wij ook analytische cookies. Lees ons',
    'ck-link': ' privacybeleid', 'ck-dec': 'Alleen noodzakelijk', 'ck-acc': 'Akkoord',
    'ft-av': 'Algemene Voorwaarden',
  },
  en: {
    nav: ['Home','About Us','Services','Rates','Book & Contact','Voorwaarden / Privacy'],
    sidebar_sub: 'KvK: 99913925 &nbsp;&middot;&nbsp; info@vlistotten.nl',

    'h-eyebrow': 'Personal Chauffeur Services',
    'h-tagline': 'Trusted in your own car',
    'h-t1': 'Your journey,', 'h-t2': 'our care.',
    'h-sub': 'Vlist – Otten offers tailored comfort and trusted service — always in your own car. From airport transfers to your own car at your holiday destination.',
    'h-own-car': 'You always travel in your own car.',
    'h-btn1': 'Rates', 'h-btn2': 'Book Now',
    'h-about-lbl': 'About us',
    'h-about-h2': 'Two chauffeurs.<br/>One standard of excellence.',
    'h-about-p': 'Jip van der Vlist and Cas Otten are two passionate professionals who believe that transport is more than getting from A to B. We always drive in your own car — with attention to detail and a personal approach, your comfort always comes first.',
    'h-role': 'Chauffeur & Co-founder',

    'ab-ey': 'The team', 'ab-t': 'About', 'ab-te': 'Us',
    'ab-i1': 'Vlist – Otten was founded by two friends with a shared passion for punctuality, customer service and driving. We believe that every journey — from a business transfer to a night out — should be an experience to remember.',
    'ab-i2': 'Every trip is carefully planned so you always arrive on time in your own car. Discretion is a given for us, not an add-on.',
    'ab-i3': 'We operate in and around the Gooi region but travel throughout the Netherlands. Feel free to contact us to discuss your wishes.',
    'ab-role': 'Chauffeur & Co-founder',
    'cas-b1': "My name is Cas Otten, 21 years old. I am co-founder of Vlist-Otten. My passion for cars and driving started when I was very young. My father runs his own racing team. We travelled the whole country and spent days working on cars.",
    'cas-b2': "I've known Jip since I was 4. That's why we're such good friends. We've shared the passion for being on the road ever since, and that's why we started this company together.",
    'jip-b1': 'My name is Jip, 23 years old and co-founder of Vlist-Otten. What started as a one-man business grew into a solid foundation over five years, after which I set up Vlist-Otten together with my best friend.',
    'jip-b2': 'My passion for everything that drives, flies and sails has been with me since childhood. In my spare time I enjoy sailing or soaring in the sky. That passion is reflected in my work: attention to detail, safety and the joy of being on the move.',
    'jip-b3': 'I look forward to welcoming you on board for your first ride.',

    'ds-ey': 'What we offer', 'ds-t': 'Our', 'ds-te': 'Services',
    'd1-title': 'Private chauffeur on demand', 'd1-text': "A dedicated chauffeur for the day — in your own car. Ideal for multiple appointments or when you need flexibility. Let us know if you'd like drinks or refreshments.",
    'd2-title': 'Designated driver service', 'd2-text': "Dinner, gala or concert? We drive your own car and bring you home safely. Let us know if you'd like drinks or refreshments.",
    'd3-title': 'Car to abroad', 'd3-text': 'Going on holiday? We drive your own car to your destination so you have your trusted vehicle waiting for you.',
    'd4-title': 'Airport transfer', 'd4-text': 'Stress-free travel to Schiphol, Rotterdam or any other airport — in your own car. We track your flight and are always on time.',
    'd5-title': 'Long distance', 'd5-text': 'From Amsterdam to Brussels or Paris — we drive international routes in your own car for clients who prefer comfort over flying. Drinks and refreshments on request.',
    'd6-title': 'Trailer service', 'd6-text': 'Want your car and boat transported safely? Coming soon. Feel free to contact us for more information.',
    'd6-badge': 'Coming soon',
    'd7-title': 'Car wash service', 'd7-text': 'Have your car washed separately or during your ride. Professional and bookable on request.',
    'ds-cta': 'Request a Quote',

    'tr-ey': 'Transparent pricing', 'tr-t': 'Rates',
    'tr-own-car': 'All rides are carried out in your own car.',
    'tr-btw': 'All prices are exclusive of VAT.',
    'tr-poa': 'On request',
    't1-name': 'Private chauffeur on demand', 't1-price': '€ 29.95 /hr', 't1-note': 'Min. 3 hours · then € 14.95 /hr extra',
    't1-f1': 'In your own car', 't1-f2': 'Multiple appointments possible', 't1-f3': 'Drinks & refreshments on request',
    't2-name': 'Designated driver service', 't2-f1': 'In your own car', 't2-f2': 'Evenings, galas & concerts', 't2-f3': 'Drinks & refreshments on request',
    't3-name': 'Car to abroad', 't3-f1': 'Your own car at destination', 't3-f2': 'Holiday comfort', 't3-f3': 'All of Europe possible',
    't4-name': 'Airport transfer', 't4-f1': 'In your own car', 't4-f2': 'Flight tracking service', 't4-f3': 'Always on time',
    't5-name': 'Long distance', 't5-price': '€ 15.– /hr', 't5-note': 'Excl. VAT',
    't5-f1': 'In your own car', 't5-f2': 'Amsterdam – Brussels – Paris', 't5-f3': 'Drinks & refreshments on request',
    't6-name': 'Trailer service', 't6-badge': 'Coming soon',
    't7-name': 'Car wash service', 't7-f1': 'Separately or during your ride', 't7-f2': 'Professionally washed', 't7-f3': 'Bookable on request', 't6-f1': 'Car & boat transport', 't6-f2': 'Safe & insured', 't6-f3': 'Contact us for info',
    'tr-note': 'Drinks and refreshments can be requested for all services via the booking form. Prices exclude VAT unless stated otherwise.',
    'tr-cta': 'Request',

    'ct-ey': 'Get in touch', 'ct-t': 'Book &', 'ct-te': 'Contact',
    'ct-h3': 'Availability',
    'ct-intro': 'For bookings, quotes or questions you can reach us directly.',
    'ct-el': 'Email', 'ct-tl': 'Phone', 'ct-al': 'Availability',
    'ct-av': 'Available 24/7',
    'f-nl': 'Your name', 'f-el': 'Email address', 'f-tl': 'Phone number',
    'f-al': 'Address / departure point', 'f-dl': 'Type of service',
    'f-own-car-lbl': 'Make & model of your car',
    'f-own-car-ph': 'e.g. Volkswagen Golf, BMW 5-Series...',
    'f-ml': 'Message',
    'f-ok': 'Thank you for your message! We will get back to you as soon as possible.',
    'f-sub': 'Send',
    'f-dienst-opt': '— Select a service —',

    'vw-ey': 'Legal', 'vw-t': 'General', 'vw-te': 'Terms & Conditions', 'vw-intro': 'Our general terms and conditions are available as a PDF. You can view and download them below.',
    'vw-h1': 'Terms & Conditions',
    'vw-fl1': 'Your name', 'vw-fl2': 'Email address', 'vw-fl3': 'Phone number',
    'vw-fl4': 'Message / question',
    'vw-fsb': 'Send',
    'vw-pdf-txt': 'View our General Terms & Conditions (PDF)',
    'vw-h2': 'Privacy Policy',
    'pp1h': 'Data controller', 'pp1p': 'Vlist – Otten Chauffeur Services &nbsp;&middot;&nbsp; KvK: 99913925',
    'pp2h': 'Data we collect', 'pp2p': 'Through the contact form we collect your name, email address, phone number and address for the purpose of handling your booking or enquiry. We do not use tracking or advertising cookies.',
    'pp3h': 'Cookies', 'pp3p': 'This website uses functional cookies to store your cookie preference. Analytical or marketing cookies are only placed with your explicit consent.',
    'pp4h': 'Your rights', 'pp4p': 'You have the right to access, correct or delete your personal data. Please contact us at <a href="mailto:info@vlistotten.nl" style="color:var(--gold);text-decoration:none;">info@vlistotten.nl</a>.',
    'pp5h': 'Version', 'pp5p': '1.0 — 26-02-2026',

    'ck-txt': 'We use functional cookies to store your preferences. With your consent we also place analytical cookies. Read our',
    'ck-link': ' privacy policy', 'ck-dec': 'Necessary only', 'ck-acc': 'Accept',
    'ft-av': 'General Terms & Conditions',
  }
};

let currentLang = localStorage.getItem('vo_lang') || 'nl';

function t(key) {
  return (LANG[currentLang] && LANG[currentLang][key]) || LANG.nl[key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('vo_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  applyTranslations();
}

function applyTranslations() {
  // Nav links
  const links = document.querySelectorAll('.sidebar-links li a');
  const navT = LANG[currentLang].nav || LANG.nl.nav;
  links.forEach((a, i) => { if (navT[i]) a.innerHTML = navT[i]; });

  // Sidebar sub-info
  const sf = document.querySelector('.sidebar-sub');
  if (sf) sf.innerHTML = t('sidebar_sub');

  // All data-t elements
  document.querySelectorAll('[data-t]').forEach(el => {
    const key = el.getAttribute('data-t');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });
}

/* ── SIDEBAR ── */
function toggleSidebar() {
  const isOpen = document.getElementById('sidebar').classList.contains('open');
  if (isOpen) { closeSidebar(); } else { openSidebar(); }
}
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('open');
  document.getElementById('hamburger').classList.add('open');
  // Trap scroll on body while sidebar open
  document.body.style.overflow = 'hidden';
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  document.body.style.overflow = '';
}
// Close sidebar on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSidebar();
});
// Close sidebar on swipe-left
(function() {
  let startX = 0;
  document.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -60 && document.getElementById('sidebar').classList.contains('open')) {
      closeSidebar();
    }
  }, { passive: true });
})();

/* ── SCROLL NAV ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── FORM (fallback for non-async forms) ── */
function handleForm(e) {
  e.preventDefault();
  const msg = e.target.querySelector('.form-success');
  if (msg) { msg.style.display = 'block'; msg.textContent = t('f-ok'); }
  e.target.reset();
}

/* ── COOKIES ── */
function initCookies() {
  if (!localStorage.getItem('vo_cookie_pref')) {
    setTimeout(() => {
      const bar = document.getElementById('cookieBar');
      if (bar) bar.classList.add('visible');
    }, 1400);
  }
}
function acceptCookies() {
  localStorage.setItem('vo_cookie_pref', 'accepted');
  const bar = document.getElementById('cookieBar');
  if (bar) bar.classList.remove('visible');
}
function declineCookies() {
  localStorage.setItem('vo_cookie_pref', 'declined');
  const bar = document.getElementById('cookieBar');
  if (bar) bar.classList.remove('visible');
}

/* ── ACTIVE NAV LINK ── */
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-links a').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    a.classList.toggle('active-link', href === page);
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));
  applyTranslations();
  setActiveNav();
  initCookies();
  // Trigger scroll check on load (for pages that start scrolled)
  window.dispatchEvent(new Event('scroll'));
});
