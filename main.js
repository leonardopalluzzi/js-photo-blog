//recover nodes from dom
const rowEl = document.querySelector('.row');
const postUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/';


fetch(postUrlEndpoint)
    .then(res => res.json())
    .then(posts => {
        console.log(posts);
        renderPosts (posts, rowEl);
    })
    .catch(error => console.error(error));


/**
 * renders the cards on page and insert the information taken from the API 
 * @param {array} posts 
 * @param {HTML} container 
 * @return {viod}
 */
function renderPosts (posts, container) {
    container.innerHTML = '';
    posts.forEach(post => {
        const markup = getMarkup(post);
        container.innerHTML += markup;
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
                            <img src="${post.url}" alt="main img" class="card_img">
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