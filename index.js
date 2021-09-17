const axios = require ('axios');

axios({
    method:'POST',
    url:'https://pasv-kanban.herokuapp.com/card',
    data: {
        "name":"New Card Yehor",
        "status":"todo",
        "priority": 3
    }

})
.then(res => console.log(res.data))
.catch(err =>console.log('error'))

axios({
    method:'DELETE',
    url:'https://pasv-kanban.herokuapp.com/card/0.030790216476793253',
    data: {
        "name":"New Card Yehor",
        "status":"todo",
        "priority": 3
    }

})
    .then(res => console.log(res.data))
    .catch(err =>console.log('error'))





