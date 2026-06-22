const railEl = document.getElementById('rail');
const clustersEl = document.getElementById('clusters');
const peopleEl = document.getElementById('people');

function renderRail(list){
  const ids = new Set(list.map(p => p.id));
  railEl.innerHTML = CATS.map(cat => {
    const members = ORDER_BY_CAT[cat.id].filter(id => ids.has(id));
    if (!members.length) return '';
    const nodes = members.map(id => {
      const p = PEOPLE.find(x => x.id === id);
      return `<a class="node" href="#${id}">
         <span class="node-dot" style="background:${colorFor[id]}"></span>
         <span class="node-name">${esc(p.short)}</span>
         <span class="node-role">${esc(TAGS[id] || p.role)}</span>
       </a>`;
    }).join('');
    return `<div class="railgroup">
       <h3 class="railgroup-title">${esc(cat.title)}</h3>
       <div class="rail-ends"><span>${esc(cat.left)}</span><span>${esc(cat.right)}</span></div>
       <div class="rail-axis" aria-hidden="true"></div>
       <nav class="rail" aria-label="${esc(cat.title)}">${nodes}</nav>
     </div>`;
  }).join('');
}

function renderClusters(list){
  clustersEl.innerHTML = CLUSTERS.map(cl => {
    const members = list.filter(p => SOVCLUSTER[p.id] === cl.id);
    if (!members.length) return '';
    const cards = members.map(p =>
      `<div class="qcard">
         <p class="qtext ${p.verbatim ? '' : 'paraphrase'}">${esc(p.quote)}</p>
         <div class="qconnect"><span class="qline"></span><span class="qarrow"></span></div>
         <a class="qchip" href="#${p.id}"><span class="qchip-dot" style="background:${colorFor[p.id]}"></span>${esc(p.short)} <span class="qchip-role">&middot; ${esc(p.role.split(',')[0])}</span></a>
       </div>`
    ).join('');
    return `<div class="cluster"><h3 class="cluster-title">${esc(cl.title)}</h3><p class="cluster-desc">${esc(cl.desc)}</p>${cards}</div>`;
  }).join('');
}

function initials(name){ return name.split(/\s+/).filter(Boolean).slice(0,2).map(w => w.charAt(0)).join('').toUpperCase(); }

function photoHtml(p){
  const url = PHOTOS[p.id];
  const initialsSpan = `<span class="pc-initials" style="color:${colorFor[p.id]}">${esc(initials(p.name))}</span>`;
  if(!url) return initialsSpan;
  const cls = LOGO[p.id] ? 'pc-img pc-logo' : 'pc-img';
  const pos = POS[p.id] ? ` style="object-position:${POS[p.id]}"` : '';
  return `${initialsSpan}<img class="${cls}" src="${url}" alt="${esc(p.name)}" loading="lazy"${pos} onerror="this.remove()">`;
}

function videoHtml(p){
  return p.videos.map(v => {
    const emb = 'https://www.youtube.com/embed/' + v.id + (v.start ? '?start=' + v.start : '');
    const watch = 'https://www.youtube.com/watch?v=' + v.id + (v.start ? '&t=' + v.start + 's' : '');
    const badge = v.start ? ('Starts ' + fmtTime(v.start)) : v.ts;
    return `<div class="video">
         <div class="video-frame"><iframe src="${emb}" title="${esc(p.name)}: ${esc(v.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
         <div class="video-body">
           <p class="video-title">${esc(v.title)}</p>
           <p class="video-desc">${esc(v.desc)}</p>
           <blockquote class="video-quote ${p.verbatim ? '' : 'paraphrase'}"><span class="vq-label">${p.verbatim ? 'Transcript excerpt' : 'What they argue'}</span>${esc(p.quote)}</blockquote>
           <div class="video-meta">
             <a class="video-source" href="${watch}" target="_blank" rel="noopener">Source &rarr;</a>
             <span class="video-ts">${esc(badge)}</span>
           </div>
           <p class="video-channel">${esc(v.channel)}</p>
         </div>
       </div>`;
  }).join('');
}

function renderCards(list){
  peopleEl.innerHTML = list.map(p => {
    const idx = String(PEOPLE.indexOf(p)+1).padStart(2,'0');
    return `<button class="pcard" type="button" data-id="${p.id}" style="--ax:${colorFor[p.id]}">
       <span class="pcard-top"><span class="pcard-rank">#${idx}</span></span>
       <span class="pcard-photo">${photoHtml(p)}</span>
       <span class="pcard-name">${esc(p.name)}</span>
       <span class="pcard-tag">${esc(TAGS[p.id] || p.role)}</span>
       <span class="pcard-cta">View card</span>
     </button>`;
  }).join('');
}

function buildModal(p){
  const idx = String(PEOPLE.indexOf(p)+1).padStart(2,'0');
  const S = (typeof SRC !== 'undefined' && SRC[p.id]) ? SRC[p.id] : {};
  function srcTag(s){ return s && s.url ? ` <a class="person-srclink" href="${s.url}" target="_blank" rel="noopener"${s.quote ? ` title="${esc(s.quote)}"` : ''}>${esc(s.label || 'Source')} &rarr;</a>` : ''; }
  const sov = SOV[p.id] ? `<p class="person-sov"><span class="rlabel">On AI sovereignty</span>${esc(SOV[p.id])}${srcTag(S.sov)}</p>` : '';
  const org = ORG[p.id] ? `<p class="person-org"><span class="rlabel">Involvement in AI</span>${esc(ORG[p.id])}${srcTag(S.org)}</p>` : '';
  const reading = p.reading ? `<p class="person-reading"><span class="rlabel">Reading</span><a href="${p.reading.url}" target="_blank" rel="noopener">${esc(p.reading.label)} &rarr;</a></p>` : '';
  return `<div class="pm-head" style="--ax:${colorFor[p.id]}">
       <span class="pm-photo">${photoHtml(p)}</span>
       <span class="pm-headtext">
         <span class="pm-rank">#${idx}</span>
         <span class="pm-name">${esc(p.name)}</span>
         <span class="pm-role">${esc(p.role)}</span>
       </span>
     </div>
     <div class="pm-content">
       ${org}
       <p class="person-stance"><span class="rlabel">On AI</span>${esc(p.stance)}${srcTag(S.stance)}</p>
       ${sov}
       ${reading}
       <div class="videos">${videoHtml(p)}</div>
     </div>`;
}

function applyFilter(type){
  const list = type === 'all' ? PEOPLE : PEOPLE.filter(p => CAT[p.id] === type);
  renderRail(list);
  renderCards(list);
  document.querySelectorAll('.filter-btn').forEach(b =>
    b.classList.toggle('is-active', b.dataset.filter === type));
}

document.querySelectorAll('.filter-btn').forEach(b =>
  b.addEventListener('click', () => applyFilter(b.dataset.filter)));

// Persona modal: open from a card, a rail node, or a transcript chip.
const modalEl = document.getElementById('pmodal');
const modalBody = document.getElementById('pmodal-body');
function openModal(id){
  const p = PEOPLE.find(x => x.id === id);
  if(!p) return;
  modalBody.innerHTML = buildModal(p);
  modalEl.hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  modalEl.hidden = true;
  modalBody.innerHTML = '';
  document.body.style.overflow = '';
}
document.addEventListener('click', e => {
  const card = e.target.closest('.pcard');
  if(card){ openModal(card.dataset.id); return; }
  if(e.target.closest('[data-close]')){ closeModal(); return; }
  const a = e.target.closest('a[href^="#"]');
  if(a){
    const id = a.getAttribute('href').slice(1);
    if(PEOPLE.some(x => x.id === id)){ e.preventDefault(); openModal(id); }
  }
});
document.addEventListener('keydown', e => { if(e.key === 'Escape' && !modalEl.hidden) closeModal(); });

applyFilter('all');
if(location.hash) openModal(location.hash.slice(1));
