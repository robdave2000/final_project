const cardsContainer = document.querySelector('#card_view')

const errCallBack = err => console.log(err)

console.log('Heloo Wolrd');

const getDeckCards = () => axios.get("/deck")
.then((res) => {
    res.data.forEach(element => {
        console.log(element)
        createCard(element)
    });
})
.catch(errCallBack)

const createCard = (cardObj) => {
    const displayCard = document.createElement('div')
    displayCard.classList.add('card_display')

    displayCard.innerHTML = 
    `<p class="card_name">${cardObj.name}</p>
    <img alt='card image' src=${cardObj.image_url} class="card_image"/>`

    cardsContainer.appendChild(displayCard)

    
}
