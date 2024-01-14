import{i as n}from"./assets/vendor-32231325.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const a=document.querySelector(".form"),c="41787862-84986491f6cfdcc41b6404efb";a.addEventListener("submit",i=>{i.preventDefault();const o=i.target.elements.query.value.trim();((r="")=>fetch(`https://pixabay.com/api/?key=${c}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(e=>{if(e.ok)return e.json();throw new Error("No hits")}))(o).then(({hits:r})=>{r.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}):m(o)}).catch(r=>{console.error(r)})});const f=({webformatURL:i,largeImageURL:o,tags:l,likes:r,views:e,comments:t,downloads:s})=>`
<a class="gallery-link" href="${o}">
<img
    class="gallery-image"
    src="${i}"
    alt="${l}"
/>
<ul class="info-list">
  <li class="info-item">
      <p class="info-title">Likes</p>
      <p class="info-value">${r}</p>
  </li>
  <li class="info-item">
      <p class="info-title">Views</p>
      <p class="info-value">${e}</p>
  </li>
  <li class="info-item">
      <p class="info-title">Comments</p>
      <p class="info-value">${t}</p>
  </li>
  <li class="info-item">
      <p class="info-title">Downloads</p>
      <p class="info-value">${s}</p>
  </li>
</ul>
</a> `,u=document.querySelector(".gallery");function m(i){getImage(i).then(o=>u.insertAdjacentHTML("afterbegin",f)).catch(o=>console.error(o))}
//# sourceMappingURL=commonHelpers.js.map
