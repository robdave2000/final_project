const cardsContainer = document.querySelector('#card_view')
// const deckCards = require('../db.json')

console.log('Server Page is up and running');

const errCallBack = err => console.log(err)

let offSet = 0

const baseUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php`

const createCard = (cardObj) => {
    // console.log(cardObj)
    // console.log(cardObj.card_images[0].image_url)

    const displayCard = document.createElement('div')
    displayCard.classList.add('card_display')

    displayCard.innerHTML = 
    `<p class="card_name">${cardObj.name}</p>
    <img alt='card image' src=${cardObj.card_images[0].image_url} class="card_image"/>
    <button name=${cardObj.id} class="add_card_button">Add</button>`

    cardsContainer.appendChild(displayCard)

    
}

function addCard (evt)
{
    console.log(evt.target.getAttribute("name"))

    axios.get(baseUrl + `?id=${evt.target.getAttribute("name")}`)
    .then((info) => {

        let newCard = {
            name: info.data.data[0].name,
            image_url: info.data.data[0].card_images[0].image_url
        }

        axios.post('/deck', newCard)
        .then(() => {
        alert("Card added")
        })
        .catch(errCallBack)
    })
    .catch(errCallBack)

    
}

const getAllCards = (offSet) => axios.get(baseUrl + `?num=8&offset=${offSet}`)
    .then((res) => {
        // console.log(res.data.data)
        res.data.data.forEach(element => {
            console.log(element)
            createCard(element)

            
        });

        document.querySelectorAll('.add_card_button').forEach(buttonEl => {
            buttonEl.addEventListener('click', addCard)
        })
    })
    .catch(errCallBack)
// const deleteCard = () =>

const viewPrevCards = () => {
    offSet -= 8

    getAllCards(offSet)
}

const viewNextCards = () => {
    offSet += 8

    console.log(offSet)

    getAllCards(offSet)
}