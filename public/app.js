document.querySelector('#copy')?.addEventListener('click',async()=>{const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText('1139637692@qq.com');status.textContent='邮箱已复制，期待你的来信。'}catch{status.textContent='请手动复制邮箱：1139637692@qq.com'}});

const folders=document.querySelectorAll('[data-folder]');
const panel=document.querySelector('#category-panel');
function closeFolder(){panel.hidden=true;folders.forEach(folder=>folder.setAttribute('aria-expanded','false'));}
folders.forEach(folder=>folder.addEventListener('click',()=>{
 const wasOpen=folder.getAttribute('aria-expanded')==='true';
 closeFolder();
 if(wasOpen)return;
 const category=folder.dataset.folder;
 folder.setAttribute('aria-expanded','true');
 document.querySelectorAll('[data-category]').forEach(card=>card.hidden=card.dataset.category!==category);
 document.querySelector('#category-title').textContent=category+' / 作品档案';
 panel.hidden=false;
 document.querySelector('#category-title').focus({preventScroll:true});
 panel.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
}));
document.querySelector('.close-folder')?.addEventListener('click',()=>{
 const active=document.querySelector('[data-folder][aria-expanded="true"]');
 closeFolder();
 active?.focus();
});
