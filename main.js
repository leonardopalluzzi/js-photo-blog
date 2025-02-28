//recover nodes from dom
const rowEl = document.querySelector('.row');
const postUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/';


fetch(postUrlEndpoint)
    .then(res => res.json())
    .then(posts => {
        console.log(posts);
        
    })



 



function getMarkup(post) {
    return `    <div class="col-12 col-md-6 col-lg-4">
                    <div class="custom_card">
                        <img src="" alt="pin" class="pin">
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