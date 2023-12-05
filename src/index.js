import axios from 'axios';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import 'slim-select/dist/slimselect.css';
import SlimSelect from 'slim-select';

import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import './css/common.css';

axios.defaults.headers.common["x-api-key"] = "live_HSQPmqa1nx46VvyaEvirmQdqnJeLQ7QEKJy9M25kS35ftSULlbNbRnAY5GocAi5R";

const selector = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');


loader.innerText = '';
error.classList.add('is-hidden');
catInfo.classList.add('is-hidden');



selector.addEventListener('change',onSelectBreed);

updateSelect();

function updateSelect (data) {
    fetchBreeds(data)
    .then(data => {
        loader.classList.replace('loader', 'is-hidden');
        let markSelect = data.map(({ name, id }) => {
            return `<option value ='${id}'>${name}</option>`;
        });
        selector.insertAdjacentHTML("beforeend",  markSelect)
        
        new SlimSelect({
            select: selector,
        });
    })
    .catch(onError)

}


function onSelectBreed(event) {
    loader.classList.replace('is-hidden', 'loader');
    selector.classList.add('is-hidden');
    catInfo.classList.add('is-hidden');
    const breedId = event.target.value;
    
    fetchCatByBreed(breedId)
    .then(data => {
        console.log(data)
        loader.classList.replace('loader', 'is-hidden');
        selector.classList.remove('is-hidden');
        const { url, breeds } = data[0];
        console.log(data[-1])
        
        catInfo.innerHTML = 
        `<div class="box-img">
            <img src="${url}"
                 alt="${breeds[0].name}" 
                 width="400"
                />
        </div>
        <div class="box">
            <h1>${breeds[0].name}</h1>
            <p>${breeds[0].description}</p>
            <p><b>Temperament:</b> ${breeds[0].temperament}</p>
        </div>`
        catInfo.classList.remove('is-hidden');
    })
    .catch(onError);
    
};

function onError() {
    selector.classList.remove('is-hidden');
    loader.classList.replace('loader', 'is-hidden');

    Notiflix.Report.failure('Oops! Something went wrong!', 'Try reloading the page!', 'Reload')
}