import{i as p,S as m}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),y="41787862-84986491f6cfdcc41b6404efb",a=document.querySelector(".loader-container"),l=(i="")=>fetch(`https://pixabay.com/api/?key=${y}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(h(),o.ok)return o.json();throw new Error("No hits")});function g(){a.style.display="block"}function h(){a.style.display="none"}function L(){c.innerHTML=""}d.addEventListener("submit",i=>{i.preventDefault();const o=i.target.elements.query.value.trim();g(),l(o).then(({hits:r})=>{r.length===0?p.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}):v(r),l.reset()}).catch(r=>{console.error(r)})});const c=document.querySelector(".gallery"),b=new m(".gallery a",{captionDelay:250,captionsData:"alt",close:!0});function v(i){const o=i.map(({webformatURL:r,largeImageURL:n,tags:e,likes:t,views:s,comments:f,downloads:u})=>`
<a class="gallery-link" href="${n}">
<img
    class="gallery-image"
    src="${r}"
    alt="${e}"
/>
<ul class="info-list">
  <li class="info-item">
      <p class="info-title">Likes</p>
      <p class="info-value">${t}</p>
  </li>
  <li class="info-item">
      <p class="info-title">Views</p>
      <p class="info-value">${s}</p>
  </li>
  <li class="info-item">
      <p class="info-title">Comments</p>
      <p class="info-value">${f}</p>
  </li>
  <li class="info-item">
      <p class="info-title">Downloads</p>
      <p class="info-value">${u}</p>
  </li>
</ul>
</a> `).join("");L(),c.insertAdjacentHTML("afterbegin",o),b.refresh()}
//# sourceMappingURL=commonHelpers.js.map
