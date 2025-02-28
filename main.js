//recover nodes from dom
const rowEl = document.querySelector('.row');
const postUrlEndpoint = 'https://lanciweb.github.io/demo/api/pictures/';


fetch(postUrlEndpoint)
    .then(res => res.json())
    .then(posts => {
        console.log(posts);
        
    })