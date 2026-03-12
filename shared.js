/* ── shared.js ── */

// ── ACTIVE NAV LINK ──
(function(){
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === page) a.classList.add('active-link');
  });
})();

// ── SIDEBAR ──
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ── NAV SCROLL BG ──
window.addEventListener('scroll', () => {
  document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 30);
});

// ── COOKIES ──
function initCookies() {
  if (!localStorage.getItem('vo_cookie_pref')) {
    setTimeout(() => document.getElementById('cookieBar').classList.add('visible'), 1400);
  }
}
function acceptCookies() {
  localStorage.setItem('vo_cookie_pref', 'accepted');
  document.getElementById('cookieBar').classList.remove('visible');
}
function declineCookies() {
  localStorage.setItem('vo_cookie_pref', 'declined');
  document.getElementById('cookieBar').classList.remove('visible');
}

// ── TRANSLATIONS ──
const translations = {
  nl: {
    // Nav / sidebar
    nav_home:         'Home',
    nav_about:        'Over Ons',
    nav_diensten:     'Diensten',
    nav_tarieven:     'Tarieven',
    nav_contact:      'Boeken & Contact',
    nav_voorwaarden:  'Klantvoorwaarden & Privacy',

    // Footer
    footer_av:        'Algemene Voorwaarden',

    // Cookie
    cookie_text:      'Wij gebruiken functionele cookies om uw voorkeuren op te slaan. Met uw toestemming plaatsen wij ook analytische cookies. Lees ons',
    cookie_privacy:   'privacybeleid',
    cookie_accept:    'Akkoord',
    cookie_decline:   'Alleen noodzakelijk',

    // HOME
    home_eyebrow:     'Persoonlijke Chauffeursdiensten',
    home_title1:      'Uw reis,',
    home_title2:      'onze zorg.',
    home_sub:         'Vlist – Otten biedt u comfort en vertrouwde service op maat. Van luchthaven-service tot uw auto op uw vakantiebestemming — wij zorgen dat u aankomt zoals u het verdient.',
    home_btn_tarieven:'Tarieven',
    home_btn_boeken:  'Boeken',
    home_about_label: 'Over ons',
    home_about_h2:    'Twee chauffeurs.<br/>Één standaard van professionaliteit.',
    home_about_p:     'Jip van der Vlist en Cas Otten zijn twee gepassioneerde professionals die geloven dat vervoer meer is dan van A naar B vervoerd worden. Met aandacht voor detail en een persoonlijke aanpak staat uw comfort altijd centraal.',
    home_role:        'Chauffeur & Co-founder',

    // ABOUT
    about_eyebrow:    'Het team',
    about_title:      'Over',
    about_title_em:   'Ons',
    about_intro1:     'Vlist – Otten is opgericht door twee vrienden met een gedeelde passie voor punctualiteit, klantvriendelijkheid en autorijden. Wij geloven dat élke rit, van een zakelijke transfer tot een avond uit, een ervaring moet zijn die u bijblijft.',
    about_intro2:     'Elke rit wordt zorgvuldig ingepland zodat u altijd op tijd in uw eigen auto aankomt. Discretie is voor ons een vanzelfsprekendheid, geen extra dienst.',
    about_intro3:     'Wij opereren in en rondom het Gooi, maar rijden door heel Nederland. Neem vrijblijvend contact met ons op om uw wens te bespreken.',
    about_role:       'Chauffeur & Co-founder',
    cas_bio1:         'Mijn naam is Cas Otten, 21 jaar. Ik ben mede oprichter van Vlist-Otten. Mijn passie voor auto\'s en autorijden is al begonnen toen ik erg jong was. Mijn vader heeft namelijk een eigen race team. Hiermee gingen we het hele land door en sleutelde soms dagen lang aan auto\'s.',
    cas_bio2:         'Ik ken Jip al sinds ik 4 ben. Daardoor zijn wij hele goede vrienden. De passie voor het onderweg zijn delen wij sinds toen, en daarom zijn wij samen dit bedrijf begonnen.',
    jip_bio1:         'Mijn naam is Jip, 23 jaar en medeoprichter van Vlist-Otten. Wat begon als een eenmansbedrijf groeide in vijf jaar tijd uit tot een stevige basis, waarna ik samen met mijn beste vriend Vlist-Otten heb opgezet.',
    jip_bio2:         'Mijn passie voor alles wat rijdt, vliegt en vaart zit er al van jongs af aan in. In mijn vrije tijd ben ik graag op het water te vinden om te zeilen of in de lucht tijdens het zweefvliegen. Die passie zie je terug in mijn werk: aandacht voor detail, veiligheid en het plezier van onderweg zijn.',
    jip_bio3:         'Ik hoop u binnenkort te mogen verwelkomen aan boord van uw eerste rit.',

    // DIENSTEN
    diensten_eyebrow: 'Wat wij bieden',
    diensten_title:   'Onze',
    diensten_title_em:'Diensten',
    d1_title: 'Privéchauffeur op maat',
    d1_text:  'Een vaste chauffeur voor de dag. Ideaal bij meerdere afspraken of als u flexibiliteit nodig heeft. Geef in uw reservering aan of u dranken of versnaperingen wenst.',
    d2_title: 'BOB service',
    d2_text:  'Diner, gala of concert? Geniet van de avond zonder zorgen over parkeren of rijden. Wij halen u op en brengen u veilig thuis. Geef in uw reservering aan of u dranken of versnaperingen wenst.',
    d3_title: 'Auto naar het buitenland',
    d3_text:  'Gaat u binnenkort op vakantie? Kies voor het comfort van uw eigen auto op de vakantiebestemming.',
    d4_title: 'Luchthaven transfer',
    d4_text:  'Stressvrij naar Schiphol, Rotterdam of een ander vliegveld. Wij volgen uw vlucht en zijn er altijd op tijd.',
    d5_title: 'Lange afstand',
    d5_text:  'Van Amsterdam naar Brussel of Parijs — wij rijden ook internationale ritten voor klanten die comfort verkiezen boven vliegen. Geef in uw reservering aan of u dranken of versnaperingen wenst.',
    d6_title: 'Trailerservice',
    d6_text:  'Wilt u uw auto en boot veilig laten vervoeren, dan kan dat binnenkort. Neem vrijblijvend contact met ons op voor meer informatie.',
    d6_badge: 'Binnenkort',
    diensten_cta: 'Vrijblijvend Aanvragen',

    // TARIEVEN
    tarieven_eyebrow: 'Transparante prijzen',
    tarieven_title:   'Tarieven',
    t_aanvraag: 'Op aanvraag',
    t_note: 'Dranken en versnaperingen kunnen bij alle diensten worden aangevraagd via het boekingsformulier. Prijzen zijn inclusief BTW tenzij anders vermeld.',
    t1_name: 'Privéchauffeur op maat',
    t1_price: '€ 29,95 p/u',
    t1_note: 'Min. afname 3 uur · daarna € 14,95 p/u extra',
    t1_feat1: 'Vaste chauffeur voor de dag',
    t1_feat2: 'Meerdere afspraken mogelijk',
    t1_feat3: 'Dranken & versnaperingen op aanvraag',
    t2_name: 'BOB service',
    t2_feat1: 'Ophalen & thuisbrengen',
    t2_feat2: 'Avonden, gala\'s & concerten',
    t2_feat3: 'Dranken & versnaperingen op aanvraag',
    t3_name: 'Auto naar het buitenland',
    t3_feat1: 'Uw eigen auto op bestemming',
    t3_feat2: 'Vakantiecomfort',
    t3_feat3: 'Heel Europa mogelijk',
    t4_name: 'Luchthaven transfer',
    t4_feat1: 'Schiphol, Rotterdam & meer',
    t4_feat2: 'Vluchtvolgservice',
    t4_feat3: 'Altijd op tijd',
    t5_name: 'Lange afstand',
    t5_price: '€ 15,– p/u',
    t5_note: 'Excl. BTW',
    t5_feat1: 'Internationaal rijden',
    t5_feat2: 'Amsterdam – Brussel – Parijs',
    t5_feat3: 'Dranken & versnaperingen op aanvraag',
    t6_name: 'Trailerservice',
    t6_badge: 'Binnenkort',
    t6_feat1: 'Auto & boot vervoer',
    t6_feat2: 'Veilig & verzekerd',
    t6_feat3: 'Neem contact op voor info',
    tarieven_cta: 'Aanvragen',

    // CONTACT
    contact_eyebrow:  'Neem contact op',
    contact_title:    'Boeken &',
    contact_title_em: 'Contact',
    contact_h3:       'Bereikbaarheid',
    contact_intro:    'Voor boekingen, offertes of vragen kunt u ons direct bereiken.',
    contact_email_lbl:'Email',
    contact_email_val:'info@vlistotten.nl',
    contact_tel_lbl:  'Telefoon',
    contact_avail_lbl:'Beschikbaarheid',
    contact_avail:    'Maandag t/m zondag<br/>07:00 – 00:00',
    f_name:    'Uw naam',
    f_name_ph: 'Voor- en achternaam',
    f_email:   'E-mailadres',
    f_email_ph:'uw@email.nl',
    f_tel:     'Telefoonnummer',
    f_tel_ph:  '+31 6 00 00 00 00',
    f_addr:    'Adres / vertrekpunt',
    f_addr_ph: 'Straat, huisnummer, woonplaats',
    f_dienst:  'Type dienst',
    f_dienst_ph:'— Selecteer een dienst —',
    f_msg:     'Bericht',
    f_msg_ph:  'Vermeld uw gewenste datum, bestemming en eventuele dranken of versnaperingen. Hoe meer detail, hoe beter wij u kunnen helpen.',
    f_submit:  'Versturen',
    f_success: 'Bedankt voor uw bericht! Wij nemen zo snel mogelijk contact op.',

    // VOORWAARDEN
    vw_eyebrow:   'Juridisch',
    vw_title:     'Klantvoorwaarden &',
    vw_title_em:  'Privacybeleid',
    vw_h2_kv:     'Klantvoorwaarden',
    vw_kv_link:   'Bekijk onze Algemene Voorwaarden (PDF)',
    vw_kv1: 'Om de verzekering van uw auto te dekken, vragen wij bij de aanvang een contract te tekenen. Dit dient getekend te worden voor vertrek.',
    vw_kv2: 'Ritten kunnen minimaal 24 uur voor vertrek worden geannuleerd. Bij annulering binnen 24 uur worden minimaal 3 uur in rekening gebracht (€ 29,95 p/u).',
    vw_kv3: 'Facturen dienen binnen 10 werkdagen te worden voldaan.',
    vw_h2_pp:     'Privacybeleid',
    vw_pp1_h:     'Verantwoordelijke',
    vw_pp1_p:     'Vlist – Otten Chauffeursdiensten',
    vw_pp2_h:     'Welke gegevens wij verzamelen',
    vw_pp2_p:     'Via het contactformulier verzamelen wij uw naam, e-mailadres, telefoonnummer en adres ten behoeve van het afhandelen van uw boeking of vraag. Wij gebruiken geen tracking- of advertentiecookies.',
    vw_pp3_h:     'Cookies',
    vw_pp3_p:     'Deze website maakt gebruik van functionele cookies om uw cookievoorkeur op te slaan. Analytische of marketing-cookies worden alleen geplaatst na uw expliciete toestemming.',
    vw_pp4_h:     'Uw rechten',
    vw_pp4_p:     'U heeft het recht op inzage, correctie of verwijdering van uw persoonsgegevens. Neem hiervoor contact op via telefoon of e-mail.',
    vw_pp5_h:     'Versie',
    vw_pp5_p:     '1.0 — 26-02-2026',
  },

  en: {
    nav_home:         'Home',
    nav_about:        'About Us',
    nav_diensten:     'Services',
    nav_tarieven:     'Rates',
    nav_contact:      'Book & Contact',
    nav_voorwaarden:  'Terms & Privacy',

    footer_av:        'General Terms & Conditions',

    cookie_text:      'We use functional cookies to store your preferences. With your consent we also place analytical cookies. Read our',
    cookie_privacy:   'privacy policy',
    cookie_accept:    'Accept',
    cookie_decline:   'Necessary only',

    home_eyebrow:     'Personal Chauffeur Services',
    home_title1:      'Your journey,',
    home_title2:      'our care.',
    home_sub:         'Vlist – Otten offers tailored comfort and trusted service. From airport transfers to your own car at your holiday destination — we make sure you arrive in style.',
    home_btn_tarieven:'Rates',
    home_btn_boeken:  'Book Now',
    home_about_label: 'About us',
    home_about_h2:    'Two chauffeurs.<br/>One standard of excellence.',
    home_about_p:     'Jip van der Vlist and Cas Otten are two passionate professionals who believe that transport is more than getting from A to B. With attention to detail and a personal approach, your comfort always comes first.',
    home_role:        'Chauffeur & Co-founder',

    about_eyebrow:    'The team',
    about_title:      'About',
    about_title_em:   'Us',
    about_intro1:     'Vlist – Otten was founded by two friends with a shared passion for punctuality, customer service and driving. We believe that every journey — from a business transfer to a night out — should be an experience to remember.',
    about_intro2:     'Every trip is carefully planned so you always arrive on time in your own car. Discretion is a given for us, not an add-on.',
    about_intro3:     'We operate in and around the Gooi region, but travel throughout the Netherlands. Feel free to contact us to discuss your wishes.',
    about_role:       'Chauffeur & Co-founder',
    cas_bio1:         'My name is Cas Otten, 21 years old. I am co-founder of Vlist-Otten. My passion for cars and driving started when I was very young. My father runs his own racing team. We travelled the whole country and spent days working on cars.',
    cas_bio2:         'I\'ve known Jip since I was 4. That\'s why we\'re such good friends. We\'ve shared the passion for being on the road ever since, and that\'s why we started this company together.',
    jip_bio1:         'My name is Jip, 23 years old and co-founder of Vlist-Otten. What started as a one-man business grew into a solid foundation over five years, after which I set up Vlist-Otten together with my best friend.',
    jip_bio2:         'My passion for everything that drives, flies and sails has been with me since childhood. In my spare time I enjoy sailing or soaring in the sky. That passion is reflected in my work: attention to detail, safety and the joy of being on the move.',
    jip_bio3:         'I look forward to welcoming you on board for your first ride.',

    diensten_eyebrow: 'What we offer',
    diensten_title:   'Our',
    diensten_title_em:'Services',
    d1_title: 'Private chauffeur on demand',
    d1_text:  'A dedicated chauffeur for the day. Ideal for multiple appointments or when you need flexibility. Let us know in your booking if you\'d like drinks or refreshments.',
    d2_title: 'Designated driver service',
    d2_text:  'Dinner, gala or concert? Enjoy the evening without worrying about parking or driving. We pick you up and bring you home safely. Let us know if you\'d like drinks or refreshments.',
    d3_title: 'Car to abroad',
    d3_text:  'Going on holiday soon? Enjoy the comfort of your own car at your destination.',
    d4_title: 'Airport transfer',
    d4_text:  'Stress-free travel to Schiphol, Rotterdam or any other airport. We track your flight and are always on time.',
    d5_title: 'Long distance',
    d5_text:  'From Amsterdam to Brussels or Paris — we also drive international routes for clients who prefer comfort over flying. Let us know if you\'d like drinks or refreshments.',
    d6_title: 'Trailer service',
    d6_text:  'Want your car and boat transported safely? Coming soon. Feel free to contact us for more information.',
    d6_badge: 'Coming soon',
    diensten_cta: 'Request a Quote',

    tarieven_eyebrow: 'Transparent pricing',
    tarieven_title:   'Rates',
    t_aanvraag: 'On request',
    t_note: 'Drinks and refreshments can be requested for all services via the booking form. Prices include VAT unless stated otherwise.',
    t1_name: 'Private chauffeur on demand',
    t1_price: '€ 29.95 /hr',
    t1_note: 'Min. 3 hours · then € 14.95 /hr extra',
    t1_feat1: 'Dedicated chauffeur for the day',
    t1_feat2: 'Multiple appointments possible',
    t1_feat3: 'Drinks & refreshments on request',
    t2_name: 'Designated driver service',
    t2_feat1: 'Pick-up & drop-off',
    t2_feat2: 'Evenings, galas & concerts',
    t2_feat3: 'Drinks & refreshments on request',
    t3_name: 'Car to abroad',
    t3_feat1: 'Your own car at destination',
    t3_feat2: 'Holiday comfort',
    t3_feat3: 'All of Europe possible',
    t4_name: 'Airport transfer',
    t4_feat1: 'Schiphol, Rotterdam & more',
    t4_feat2: 'Flight tracking service',
    t4_feat3: 'Always on time',
    t5_name: 'Long distance',
    t5_price: '€ 15.– /hr',
    t5_note: 'Excl. VAT',
    t5_feat1: 'International driving',
    t5_feat2: 'Amsterdam – Brussels – Paris',
    t5_feat3: 'Drinks & refreshments on request',
    t6_name: 'Trailer service',
    t6_badge: 'Coming soon',
    t6_feat1: 'Car & boat transport',
    t6_feat2: 'Safe & insured',
    t6_feat3: 'Contact us for info',
    tarieven_cta: 'Request',

    contact_eyebrow:  'Get in touch',
    contact_title:    'Book &',
    contact_title_em: 'Contact',
    contact_h3:       'Availability',
    contact_intro:    'For bookings, quotes or questions you can reach us directly.',
    contact_email_lbl:'Email',
    contact_email_val:'info@vlistotten.nl',
    contact_tel_lbl:  'Phone',
    contact_avail_lbl:'Availability',
    contact_avail:    'Monday through Sunday<br/>07:00 – 00:00',
    f_name:    'Your name',
    f_name_ph: 'First and last name',
    f_email:   'Email address',
    f_email_ph:'your@email.com',
    f_tel:     'Phone number',
    f_tel_ph:  '+31 6 00 00 00 00',
    f_addr:    'Address / departure point',
    f_addr_ph: 'Street, number, city',
    f_dienst:  'Type of service',
    f_dienst_ph:'— Select a service —',
    f_msg:     'Message',
    f_msg_ph:  'Please include your desired date, destination and any drinks or refreshments you\'d like. The more detail, the better we can assist you.',
    f_submit:  'Send',
    f_success: 'Thank you for your message! We will get back to you as soon as possible.',

    vw_eyebrow:   'Legal',
    vw_title:     'Terms &',
    vw_title_em:  'Privacy Policy',
    vw_h2_kv:     'Terms & Conditions',
    vw_kv_link:   'View our General Terms & Conditions (PDF)',
    vw_kv1: 'To cover the insurance of your vehicle, we ask you to sign a contract at the start of the service. This must be signed before departure.',
    vw_kv2: 'Rides can be cancelled up to 24 hours before departure. Cancellations within 24 hours will be charged a minimum of 3 hours (€ 29.95 /hr).',
    vw_kv3: 'Invoices must be paid within 10 business days.',
    vw_h2_pp:     'Privacy Policy',
    vw_pp1_h:     'Data controller',
    vw_pp1_p:     'Vlist – Otten Chauffeur Services',
    vw_pp2_h:     'Data we collect',
    vw_pp2_p:     'Through the contact form we collect your name, email address, phone number and address for the purpose of handling your booking or enquiry. We do not use tracking or advertising cookies.',
    vw_pp3_h:     'Cookies',
    vw_pp3_p:     'This website uses functional cookies to store your cookie preference. Analytical or marketing cookies are only placed with your explicit consent.',
    vw_pp4_h:     'Your rights',
    vw_pp4_p:     'You have the right to access, correct or delete your personal data. Please contact us by phone or email.',
    vw_pp5_h:     'Version',
    vw_pp5_p:     '1.0 — 26-02-2026',
  }
};

let currentLang = localStorage.getItem('vo_lang') || 'nl';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations['nl'][key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('vo_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });
  applyTranslations();
}

function applyTranslations() {
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

document.addEventListener('DOMContentLoaded', () => {
  // Set active lang button
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === currentLang);
  });
  applyTranslations();
  initCookies();
});
