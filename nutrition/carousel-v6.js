(()=>{
  const ROOT='#mealSlots';

  function splitUrls(raw){
    return String(raw||'')
      .split(/\s*\|\|\s*|\r?\n+/)
      .map(s=>s.trim())
      .filter(Boolean);
  }

  function urlsFromPhoto(photo){
    const img=photo.querySelector('img');
    if(!img)return [];
    return splitUrls(img.getAttribute('src')).map(src=>({
      src,
      alt:img.getAttribute('alt')||'餐食图片'
    }));
  }

  function uniqueImages(items){
    const seen=new Set();
    return items.filter(x=>{
      if(!x.src||seen.has(x.src))return false;
      seen.add(x.src);
      return true;
    });
  }

  function galleryMarkup(images){
    return `<div class="mealGallery" data-index="0" aria-label="餐食图片，共 ${images.length} 张">
      <div class="mealGalleryStage">
        <img class="mealGalleryImg" loading="lazy" src="${images[0].src}" alt="${images[0].alt}">
        <button class="mealGalleryNav prev" type="button" aria-label="上一张图片">‹</button>
        <button class="mealGalleryNav next" type="button" aria-label="下一张图片">›</button>
        <div class="mealGalleryCount"><span>1</span> / ${images.length}</div>
        <div class="mealGalleryFail">图片暂时无法显示</div>
      </div>
      <div class="mealGalleryDots" aria-hidden="true">${images.map((_,i)=>`<i class="${i===0?'on':''}"></i>`).join('')}</div>
    </div>`;
  }

  function bindGallery(gallery,images){
    const img=gallery.querySelector('.mealGalleryImg');
    const count=gallery.querySelector('.mealGalleryCount span');
    const dots=[...gallery.querySelectorAll('.mealGalleryDots i')];
    let index=0;

    function show(next){
      index=(next+images.length)%images.length;
      gallery.dataset.index=String(index);
      gallery.classList.remove('bad');
      img.src=images[index].src;
      img.alt=images[index].alt;
      count.textContent=String(index+1);
      dots.forEach((d,i)=>d.classList.toggle('on',i===index));
    }

    gallery.querySelector('.prev').addEventListener('click',()=>show(index-1));
    gallery.querySelector('.next').addEventListener('click',()=>show(index+1));
    img.addEventListener('error',()=>gallery.classList.add('bad'));
    img.addEventListener('load',()=>gallery.classList.remove('bad'));

    let startX=null;
    gallery.addEventListener('touchstart',e=>{startX=e.touches[0]?.clientX??null},{passive:true});
    gallery.addEventListener('touchend',e=>{
      if(startX===null)return;
      const endX=e.changedTouches[0]?.clientX??startX;
      const dx=endX-startX;
      startX=null;
      if(Math.abs(dx)<38)return;
      show(index+(dx<0?1:-1));
    },{passive:true});
  }

  function enhanceSlot(slot){
    if(slot.dataset.galleryReady==='1')return;
    const photos=[...slot.querySelectorAll('.meal .photo')];
    const images=uniqueImages(photos.flatMap(urlsFromPhoto));
    if(images.length<2){
      slot.dataset.galleryReady='1';
      return;
    }

    const firstMeal=slot.querySelector('.meal');
    if(!firstMeal)return;
    photos.forEach(p=>p.classList.add('gallerySource'));
    const galleryHost=document.createElement('div');
    galleryHost.innerHTML=galleryMarkup(images);
    const gallery=galleryHost.firstElementChild;
    const mac=firstMeal.querySelector('.mac');
    if(mac)mac.insertAdjacentElement('afterend',gallery);
    else firstMeal.appendChild(gallery);
    bindGallery(gallery,images);
    slot.dataset.galleryReady='1';
  }

  function enhanceAll(){
    document.querySelectorAll(`${ROOT} .slot`).forEach(enhanceSlot);
  }

  const root=document.querySelector(ROOT);
  if(!root)return;
  const observer=new MutationObserver(()=>enhanceAll());
  observer.observe(root,{childList:true,subtree:true});
  enhanceAll();
})();