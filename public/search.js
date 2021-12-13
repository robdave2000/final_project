const { default: axios } = require("axios");

console.log('Server Page is up and running');

function getCardInfo() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardsets.php')
        .then(res => {
            for (let i = 0; i < res.data.length; i++)
            {
                console.log(res.data[i])
            }
        })
        .catch(err => console.log(err))
}