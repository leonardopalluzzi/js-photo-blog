//recover nodes from dom
const rowEl = document.querySelector('.row');
const postUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const overlayEl = document.getElementById('overlay');
const btnEl = document.querySelector('.btn');
const overlayImgEl = document.querySelector('.overlay_img');


fetch(postUrlEndpoint)
    .then(res => res.json())
    .then(posts => {
        console.log(posts);
        renderPosts (posts, rowEl);


        //click on card
        const cardEl = document.querySelectorAll('.custom_card');
        console.log(cardEl);
        cardEl.forEach((card, i) =>{
            card.addEventListener('click', () => {
                
                // recover current img
                const currentImg = document.getElementById(`img_${i + 1}`);
                
                // place the img into the overlay
                overlayImgEl.src = currentImg.src;

                // show the overlay
                overlayEl.classList.add('d-block');
            })
        })

        // close overlay
        btnEl.addEventListener('click', ()=> {
            overlayEl.classList.remove('d-block');
        })


    })
    .catch(error => console.error(error));


/**
 * renders the cards on page and insert the information taken from the API 
 * @param {array} posts 
 * @param {HTML} container 
 * @return {viod}
 */
function renderPosts (posts) {
    rowEl.innerHTML = '';
    posts.forEach(post => {
        const markup = getMarkup(post);
        rowEl.innerHTML += markup;
    });

    // classic for loop implementation
   /* for(let i = 0; i < posts.length; i++){
        const post = posts[i];
        const markup = getMarkup(post);
        container.innerHTML += markup
    }*/
}


/**
 * create the markup for the cards
 * @param {object} post 
 * @returns {string} return a string containing the card's markup
 */
function getMarkup(post) {
    return `    <div class="col-12 col-md-6 col-lg-4">
                    <div class="custom_card">
                        <img src="./img/pin.svg" alt="pin" class="pin">
                        <div class="card-header">
                            <img src="${post.url}" alt="main img" class="card_img" id="img_${post.id}">
                        </div>
                        <div class="card-body">
                            <p class="photo_data sometype-mono-font">${post.date}</p>
                            <h3 class="photo_title edu-tas-beginner-font">
                                ${post.title.toUpperCase()}
                            </h3>
                        </div>
                    </div>
                </div>`
}