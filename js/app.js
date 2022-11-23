// this function will add the Ron Swanson quote from the API as well as a picture. It would be good if a new picture appeared with each refresh!
function wordSuccess(response){
let data = response.data;
for(let result of data){
document.body.insertAdjacentHTML(`beforeend`,
`<img src="https://raw.githubusercontent.com/dfelsent/random-quote-gen/master/img/ron-swanson.jpg" alt="Ron Swanson pic">`);
document.body.insertAdjacentHTML(`beforeend`, `<h2>${data}</h2>`);
}};

// this message appears when the something goes wrong with the request
function wordFailure(error){
    document.body.insertAdjacentHTML(`beforebegin`, `<img src="fail.jpg" alt="fail image">`);
    document.body.insertAdjacentHTML(`afterend`, `<h2>This operation has failed miserably, that was a very poor request on your part.</h2>`);
};

// this is my attempt at a document loader. there is a spinner in the css but the page loads too fast for me to test if it works.
function loader(){
    if(document.body != document.readyState){
        document.getElementById(`loader`).style.display="initial";
    } else if (document.body == document.readyState){
        document.getElementById(`loader`).style.display="none";
    }
};

// the axios request is activated when the user clicks the button
function clickMe(){
axios.request({
    url : "https://ron-swanson-quotes.herokuapp.com/v2/quotes/",
}).then(wordSuccess).catch(wordFailure);
};
document.getElementById(`api`).addEventListener(`click`, clickMe);

// I added this so the user is encouraged to refresh directly on the page for a new quote.
// I was trying to find a way to circle back to the 'click me' button so there was only one button on the page without it adding a new picture and quote with each click
function reload(){
    location.reload();
}
document.getElementById(`reload`).addEventListener(`click`, reload);