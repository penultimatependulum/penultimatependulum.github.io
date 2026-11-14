// Replace with your studio's exact Instagram profile URL when ready.
const INSTAGRAM_URL = 'https://www.instagram.com/';
const gallery = document.getElementById('gallery-grid');
const dialog = document.getElementById('art-dialog');
const dialogContent = document.getElementById('dialog-content');
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('instagram-link').href = INSTAGRAM_URL;
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const placeholder = '<div class="art-placeholder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="8" cy="8" r="2"/><path d="m3 18 6-6 4 4 3-3 5 5"/></svg><span>Photograph coming soon</span></div>';
let works=[];
function showWork(work){
  const image = work.image ? `<img class="dialog-art" src="${escapeHTML(work.image)}" alt="${escapeHTML(work.title)}">` : '<div class="dialog-placeholder">Photograph coming soon</div>';
  const subject = encodeURIComponent(`Inquiry about ${work.title}`);
  dialogContent.innerHTML = `${image}<p class="eyebrow">${escapeHTML(work.status || 'Collection')}</p><h2 id="dialog-title">${escapeHTML(work.title)}</h2><p class="dialog-meta">${escapeHTML([work.year,work.dimensions,work.medium].filter(Boolean).join(' · '))}</p><p>${escapeHTML(work.description || 'More details coming soon.')}</p>${work.status==='Available'?`<a class="contact-button" href="mailto:penultimatependulum@gmail.com?subject=${subject}">Inquire about this work ↗</a>`:''}${work.marketplace_url?` <p><a href="${escapeHTML(work.marketplace_url)}" target="_blank" rel="noopener noreferrer">View Marketplace listing ↗</a></p>`:''}`;
  dialog.showModal();
}
document.getElementById('dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
fetch('data/paintings.json').then(response=>{if(!response.ok)throw Error('Collection unavailable');return response.json()}).then(data=>{
  works=data.filter(item=>item.published!==false);
  if(!works.length){gallery.innerHTML='<p>New work coming soon.</p>';return;}
  gallery.innerHTML='';
  works.forEach((work,index)=>{
    const card=document.createElement('article');card.className='art-card';
    card.innerHTML=`<button type="button" aria-label="View ${escapeHTML(work.title)}"><div class="art-visual">${work.image?`<img loading="lazy" src="${escapeHTML(work.image)}" alt="${escapeHTML(work.title)}">`:placeholder}</div><div class="art-info"><div><h3>${escapeHTML(work.title)}</h3><p>${escapeHTML([work.year,work.dimensions].filter(Boolean).join(' · '))}</p></div><span class="status">${escapeHTML(work.status||'')}</span></div></button>`;
    card.querySelector('button').addEventListener('click',()=>showWork(works[index]));gallery.append(card);
  });
}).catch(()=>gallery.innerHTML='<p>Unable to load the collection. Please refresh the page.</p>');
