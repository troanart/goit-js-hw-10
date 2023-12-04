// import Notiflix from 'notiflix';



// const loader = document.querySelector('.loader');
// loader.classList.remove('loader')


// select.addEventListener('change', fetchCatByBreed )

// function fetchBreeds() {
//     loader.classList.add('loader')
//     fetch('https://api.thecatapi.com/v1/breeds')
//     .then(respons => respons.json())
//     .then(renderOptioninSelect)
//     .catch(error => {
//         return Notiflix.Report.failure('Oops! Something went wrong! Try reloading the page!')
//     })
//     loader.classList.remove('loader')
    
    
// }

// function fetchCatByBreed(breedId) {
    
//     let id = breedId.target.value
//     fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}`)
//     .then(respons => respons.json() )
//     .then(renderCatCard)
//     .catch(error => {
//         return Notiflix.Report.failure('Oops! Something went wrong! Try reloading the page!')
//      })
   
       
// }


// function renderCatCard(data) {
//     let [obj] = data;
//     info.innerHTML= '';
//         fetch(`https://api.thecatapi.com/v1/images/${obj.id}`)
//         .then(respons => respons.json())
//         .then(renderCard)
//         .catch(error => {
//             return Notiflix.Report.failure('Oops! Something went wrong! Try reloading the page!')
//          })
    
//         const img = document.createElement('img');
//         img.src = `${obj.url}`;
//         img.width = `${obj.width}`;
//         img.height = `${obj.height}`
//         info.append(img)
// }

// function renderCard (dataCard) {
   
//     dataCard.breeds.forEach(({name,description,temperament}) => {
//         const catName = document.createElement('h1');
//         const descriptionText = document.createElement('p');
//         const temperamentTitel = document.createElement('p');
//         const strongElement = document.createElement('strong');
        
//         catName.innerText = `${name}`;
//         descriptionText.innerText = `${description}`;
//         strongElement.innerText = 'Temperament: ';
//         temperamentTitel.appendChild(strongElement);
//         temperamentTitel.append(temperament);
//         info.append(catName,descriptionText,temperamentTitel);
//     })
   
// }

// function renderOptioninSelect(data) {
//    data.forEach(item => {
//         const option = document.createElement('option')
//         option.setAttribute('value', `${item.id}`)
//         option.textContent = `${item.name}`
//         select.append(option)  
//     })
// }
const URL = 'https://api.thecatapi.com/v1';
const KEY = 'live_HSQPmqa1nx46VvyaEvirmQdqnJeLQ7QEKJy9M25kS35ftSULlbNbRnAY5GocAi5R'

export function fetchBreeds() {
   return fetch(`${URL}/breeds?api_key=${KEY}`)
    .then(response => {
       if(!response.ok) {
        throw new Error(response.status);
       }
       return response.json()
    });
     
}

export function fetchCatByBreed(breedId) {
    return fetch(`${URL}/images/search?api_key=${KEY}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });  
};



