// script.js - configuration and behavior for the wedding invitation

/*
  Editable content lives in the `config` object below.
  Edit couple names, initials, eventDate, venue, mapEmbedUrl, fallbackImage, and schedule items here.
*/
const config = {
  lang: 'ar', // 'en' or 'ar'
  dir: 'rtl', // 'ltr' or 'rtl' (will be applied to <html>)
  initials: 'H & B',
  // Separate groom/bride names to control ordering and styling
  groomName: 'بشر',
  brideName: 'هالة',
  groomRole: 'المهندس',
  brideRole: 'الصيدلانية',
  groomTitle: 'حرم السيد محمد هاشم أصيل',
  brideTitle: 'حرم السيد عبد الرزاق مستت',
  inviteText: '',
  city: 'قاعة افراح مونلايت',
  // ISO 8601 date/time for the event (local time assumed if no timezone). Edit this.
  eventDate: '2026-09-12T18:00:00',
  venueName: 'قاعة افراح موون لايت',
  venueAddress: 'حلب الجديدة خلف نقابة الصيدلة',
  // Preferred: a Google Maps embed URL (iframe src). Replace with your embed URL.
  // Example: 'https://www.google.com/maps/embed?pb=...'
  mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d201.2154766666436!2d37.095215863154664!3d36.20431349126315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1525590026293fcb%3A0x5cd5089e5ab97340!2sMoon%20Light%20Hall!5e0!3m2!1sen!2sus!4v1788039907283!5m2!1sen!2sus',
  // The public place URL to open when clicking "فتح في خرائط جوجل". Using the exact place page the user supplied.
  openMapsUrl: 'https://maps.google.com/?cid=6689262297748697920&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF',
  // Fallback static image path (used if no embed set). Place your image in assets/ or replace path.
  fallbackMapImage: 'assets/map-placeholder.jpg',
  schedule: [
    { time: '17:00', title: 'المأذون / العقد' },
    { time: '18:30', title: 'الاستقبال' },
    { time: '20:00', title: 'العشاء' },
    { time: '21:30', title: 'الاحتفال والرقص' }
  ]
};

// Apply language and direction
document.documentElement.lang = config.lang || 'en';
document.documentElement.dir = config.dir || 'ltr';

// Utility: select elements
const $ = (sel) => document.querySelector(sel);

// Populate static text from config
function populateContent(){
  // Primary content
  // set monogram initials on any monogram element (there are now two halves)
  document.querySelectorAll('.monogram').forEach(el => el.textContent = config.initials);
  $('#initials').textContent = config.initials;
  // Build couple names with groom on the right and decorative connector (❦).
  const groom = config.groomName || '';
  const bride = config.brideName || '';
  const groomRole = config.groomRole || '';
  const brideRole = config.brideRole || '';
  const groomTitle = config.groomTitle || '';
  const brideTitle = config.brideTitle || '';
  $('#coupleNames').innerHTML = `
    <div class="name-row">
      <div class="person"><span class="role">${groomRole}</span><span class="name">${groom}</span></div>
      <span class="connector">❦</span>
      <div class="person"><span class="role">${brideRole}</span><span class="name">${bride}</span></div>
    </div>
  `;
  $('#coupleNames').style.display = 'block';

  const groomParts = groomTitle ? groomTitle.split(' ') : [];
  const brideParts = brideTitle ? brideTitle.split(' ') : [];
  const groomLine1 = groomParts.length >= 2 ? `${groomParts[0]} ${groomParts[1]}` : '';
  const groomLine2 = groomParts.length > 2 ? groomParts.slice(2).join(' ') : '';
  const brideLine1 = brideParts.length >= 2 ? `${brideParts[0]} ${brideParts[1]}` : '';
  const brideLine2 = brideParts.length > 2 ? brideParts.slice(2).join(' ') : '';

  $('#inviteText').innerHTML = `
    <div class="title-block title-left">
      <span class="title-line title-prefix">${groomLine1}</span>
      <span class="title-line title-name">${groomLine2}</span>
    </div>
    <div class="title-block title-right">
      <span class="title-line title-prefix">${brideLine1}</span>
      <span class="title-line title-name">${brideLine2}</span>
    </div>
    <div class="title-announce">يتشرفان بدعوتكم لحضور زفاف ابنيهما</div>
  `;
  $('#venueName').textContent = config.venueName;
  const venueEl = $('#venueAddress');
  if (venueEl) venueEl.innerHTML = config.venueAddress.replace(/\n/g, '<br>');
  const eventTimeEl = $('#eventTime');
  if (eventTimeEl) eventTimeEl.textContent = new Date(config.eventDate).toLocaleTimeString(config.lang === 'ar' ? 'ar-EG' : undefined, {hour: '2-digit', minute:'2-digit'});

  // Localized headings / labels
  $('#openHint').textContent = config.lang === 'ar' ? 'اضغط للفتح' : 'Tap to open';
  $('#countTitle').textContent = config.lang === 'ar' ? 'العد التنازلي' : 'Countdown';
  document.querySelector('#schedule h2').textContent = config.lang === 'ar' ? 'البرنامج' : 'Schedule';
  document.querySelector('#closing h2').textContent = config.lang === 'ar' ? 'لضيوفنا الكرام' : 'Dear Guests';
  const closingP = document.querySelector('#closing p');
  if (closingP){
    if (config.lang === 'ar'){
      closingP.innerHTML = `
        <div class="notice-list">
          <div class="notice-item"><div class="notice-text">حرصاً على أن تليق مناسبتنا بأجوائها ، نرجو الالتزام باللباس المحتشم واللائق بطبيعة الحفل.</div><span class="notice-icon">❦</span></div>
          <div class="notice-item"><div class="notice-text">يمنع اصطحاب الأطفال.</div><span class="notice-icon">❦</span></div>
          <div class="notice-item"><div class="notice-text">طلباً للبركة في زواجنا، نود إحاطتكم علماً بأن الحفل نسائي بخصوصية تامة وبدون معازف.</div><span class="notice-icon">❦</span></div>
        </div>
      `;
    } else {
      closingP.textContent = 'We look forward to celebrating with you.';
    }
  }
  document.querySelector('.footer .muted').textContent = config.lang === 'ar' ? 'حضوركم يبهجنا، ونسعد بتأكيدكم للحضور خلال يومين لأن الدخول على الصالة بالإسم' : 'This is a static invitation — no RSVP form is included.';

  // Countdown label translations (small elements)
  $('#labelDays').textContent = config.lang === 'ar' ? 'أيام' : 'Days';
  $('#labelHours').textContent = config.lang === 'ar' ? 'ساعات' : 'Hours';
  $('#labelMinutes').textContent = config.lang === 'ar' ? 'دقائق' : 'Minutes';
  $('#labelSeconds').textContent = config.lang === 'ar' ? 'ثواني' : 'Seconds';

  // Actions (guard elements that may be removed)
  const copyBtn = $('#copyAddress');
  if (copyBtn) copyBtn.textContent = config.lang === 'ar' ? 'نسخ العنوان' : 'Copy Address';
  const openMapsBtn = $('#openMaps');
  if (openMapsBtn){
    openMapsBtn.textContent = config.lang === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps';
    // set the button's href to the canonical place URL so clicks, middle-clicks, and bookmarks work
    openMapsBtn.href = config.openMapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.venueAddress)}`;
  }

  // Populate timeline only when the old timeline markup is present.
  const tl = $('#timeline');
  if (tl) {
    tl.innerHTML = '';
    config.schedule.forEach(item => {
      const li = document.createElement('li');
      const h3 = document.createElement('h3');
      h3.textContent = item.title;
      const p = document.createElement('p');
      p.textContent = item.time || '';
      li.appendChild(h3);
      li.appendChild(p);
      tl.appendChild(li);
    });
  }

  // Date card (localized month/weekday)
  const d = new Date(config.eventDate);
  const month = d.toLocaleString(config.lang === 'ar' ? 'ar-EG' : 'en-US', { month: 'long' });
  $('#month').textContent = month;
  $('#day').textContent = '12/9';
  $('#year').textContent = d.getFullYear();
  $('#weekday').textContent = d.toLocaleString(config.lang === 'ar' ? 'ar-EG' : 'en-US', { weekday: 'long' });

  // Hijri date (Islamic calendar) + real monthly grid
  const hijriDate = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(d);
  const hijriEl = document.getElementById('hijriDate');
  if (hijriEl) hijriEl.textContent = hijriDate;

  buildMonthCalendar(d);
}

function buildMonthCalendar(date){
  const calendarEl = document.getElementById('calendar');
  if (!calendarEl) return;

  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const offset = firstDay.getDay();
  const totalDays = lastDay.getDate();
  const names = ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'];

  calendarEl.innerHTML = '';
  names.forEach(name => {
    const head = document.createElement('div');
    head.className = 'day-name';
    head.textContent = name;
    calendarEl.appendChild(head);
  });

  for (let i = 0; i < offset; i++) {
    const blank = document.createElement('div');
    blank.className = 'day day-empty';
    calendarEl.appendChild(blank);
  }

  for (let day = 1; day <= totalDays; day++) {
    const cell = document.createElement('div');
    cell.className = 'day' + (day === date.getDate() ? ' selected' : '');
    cell.textContent = day;
    calendarEl.appendChild(cell);
  }
}

// Doors open behavior
const doors = document.getElementById('doors');
const invitation = document.getElementById('invitation');
let opened = false;
function openDoors(){
  if(opened) return;
  opened = true;
  doors.classList.add('open');

  const bgMusic = document.getElementById('bgMusic');
  if (bgMusic) {
    bgMusic.volume = 0.25;
    bgMusic.play().catch(() => {
      // Browsers block autoplay until a user gesture; the click/touch already triggered this function,
      // so playback should normally start. If the file is missing or blocked, fail silently.
    });
  }

  // after animation, hide doors and reveal content
  setTimeout(() => {
    doors.classList.add('hidden');
    doors.setAttribute('aria-hidden','true');
    invitation.setAttribute('aria-hidden','false');
    // reveal sections
    document.querySelectorAll('.section').forEach(s => s.classList.add('reveal'));
    // scroll a little to ensure user sees content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 1200);
}

// Open on click or first scroll
doors.addEventListener('click', openDoors, { once: true });
window.addEventListener('wheel', function onFirstScroll(e){
  openDoors();
  window.removeEventListener('wheel', onFirstScroll);
});
window.addEventListener('touchstart', function onFirstTouch(){ openDoors(); window.removeEventListener('touchstart', onFirstTouch); }, {passive:true});

// Scroll reveal fallback if doors already hidden
window.addEventListener('DOMContentLoaded', () => {
  populateContent();
  // If doors are removed by CSS or user prefers reduced motion, reveal content immediately
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced){
    doors.classList.add('hidden');
    invitation.setAttribute('aria-hidden','false');
    document.querySelectorAll('.section').forEach(s => s.classList.add('reveal'));
  }
  setupCountdown();
  setupMap();
  setupActions();
});

// IntersectionObserver to reveal sections elegantly (for users who open doors via keyboard)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('reveal');
      io.unobserve(entry.target);
    }
  });
},{threshold:0.12});
document.querySelectorAll('.section').forEach(s => io.observe(s));

// Countdown
let countdownTimer = null;
function pluralize(n, forms){
  return n + ' ' + forms;
}

function setupCountdown(){
  const target = new Date(config.eventDate).getTime();
  const dEl = $('#days');
  const hEl = $('#hours');
  const mEl = $('#minutes');
  const sEl = $('#seconds');
  function tick(){
    const now = Date.now();
    let diff = Math.max(0, target - now);
    const days = Math.floor(diff / (1000*60*60*24));
    diff -= days * (1000*60*60*24);
    const hours = Math.floor(diff / (1000*60*60));
    diff -= hours * (1000*60*60);
    const minutes = Math.floor(diff / (1000*60));
    diff -= minutes * (1000*60);
    const seconds = Math.floor(diff / 1000);
    dEl.textContent = days;
    hEl.textContent = String(hours).padStart(2,'0');
    mEl.textContent = String(minutes).padStart(2,'0');
    sEl.textContent = String(seconds).padStart(2,'0');
  }
  tick();
  if(countdownTimer) clearInterval(countdownTimer);
  countdownTimer = setInterval(tick, 1000);
}

// Map handling: use embed URL if provided, otherwise show fallback image
function setupMap(){
  const frame = $('#mapFrame');
  const wrap = $('#mapWrap');
  if(config.mapEmbedUrl && config.mapEmbedUrl.trim().length > 0){
    frame.src = config.mapEmbedUrl;
    // ensure frame visible
    frame.style.display = 'block';
  } else {
    // use fallback image
    const img = document.createElement('img');
    img.alt = 'Map';
    img.src = config.fallbackMapImage;
    img.style.width = '100%';
    img.style.display = 'block';
    frame.replaceWith(img);
  }
}

// Actions: copy address, open maps
function setupActions(){
  const copyBtn = $('#copyAddress');
  if (copyBtn){
    copyBtn.addEventListener('click', async ()=>{
      try{
        await navigator.clipboard.writeText(config.venueAddress);
        copyBtn.textContent = config.lang === 'ar' ? 'تم النسخ' : 'Copied';
        setTimeout(()=>{ copyBtn.textContent = config.lang === 'ar' ? 'نسخ العنوان' : 'Copy Address'; }, 2000);
      }catch(e){
        alert(config.lang === 'ar' ? 'النسخ غير مدعوم' : 'Copy not supported');
      }
    });
  }

  const openMapsBtn = $('#openMaps');
  if (openMapsBtn){
    // href is already set in populateContent to the canonical place URL (openMapsUrl) so no click handler is needed.
    // Leaving this block in case future behavior is required.
  }
}


// Expose config for debugging in console (safe to remove in production)
window._INV_CONFIG = config;
