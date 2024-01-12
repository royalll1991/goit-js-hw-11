import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const activeForm = document.querySelector(`nav`);
const API_KEY = `41787862-84986491f6cfdcc41b6404efb`;

activeForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const query = event.target.elements.query.value;

    getImage(query)
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
} )

const getImage = (query = "") => {
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then((response) => {
        if(response.ok) {
        return response.json();}
        else {
            console.log('No hits');
        }
    });
}


