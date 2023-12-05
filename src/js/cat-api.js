
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



