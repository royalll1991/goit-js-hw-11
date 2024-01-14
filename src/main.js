import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const activeForm = document.querySelector(`.form`);
const API_KEY = `41787862-84986491f6cfdcc41b6404efb`;


activeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = event.target.elements.query.value.trim();

    const getImage = (query = "") => {
        return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then((response) => {
            if(response.ok) {
            return response.json();}
            else {
                throw new Error('No hits');
            }
        });
    }
    

    getImage(query)
    .then(({hits}) => {
        if (hits.length === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!",
                color: "red",
  position: "topRight",  
            });
        } else {
            renderImage(query);
        }
    })
    .catch(error => {
        console.error(error);
    });
    
})

const imageHTML = ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
<a class="gallery-link" href="${largeImageURL}">
<img
    class="gallery-image"
    src="${webformatURL}"
    alt="${tags}"
/>
<ul class="info-list">
  <li class="info-item">
      <p class="info-title">Likes</p>
      <p class="info-value">${likes}</p>
  </li>
  <li class="info-item">
      <p class="info-title">Views</p>
      <p class="info-value">${views}</p>
  </li>
  <li class="info-item">
      <p class="info-title">Comments</p>
      <p class="info-value">${comments}</p>
  </li>
  <li class="info-item">
      <p class="info-title">Downloads</p>
      <p class="info-value">${downloads}</p>
  </li>
</ul>
</a> `

const gallery = document.querySelector(`.gallery`);
function renderImage(query){
    getImage(query)
    .then(image => gallery.insertAdjacentHTML("afterbegin",imageHTML))
    .catch(error => console.error(error))
}
