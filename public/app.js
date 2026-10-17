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

document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{
 const status=document.querySelector('#contact-status');
 try{await navigator.clipboard.writeText(button.dataset.copy);status.textContent=button.dataset.label+'已复制。';}
 catch{status.textContent='请手动复制'+button.dataset.label+'：'+button.dataset.copy;}
}));

document.querySelector('#contact-form')?.addEventListener('submit',event=>{
 event.preventDefault();
 const form=event.currentTarget;
 if(!form.reportValidity())return;
 const fields=new FormData(form);
 const name=String(fields.get('name')||'').trim();
 const email=String(fields.get('email')||'').trim();
 const message=String(fields.get('message')||'').trim();
 const status=document.querySelector('#message-status');
 if(!name||!message){status.textContent='请填写称呼和留言内容。';return;}
 const subject=encodeURIComponent('来自作品集网站的联系：'+name);
 const body=encodeURIComponent('称呼：'+name+'\n联系邮箱：'+email+'\n\n'+message);
 status.textContent='请在邮件应用中确认发送。如未打开，请使用左侧邮箱直接联系。';
 window.location.href='mailto:1139637692@qq.com?subject='+subject+'&body='+body;
});
