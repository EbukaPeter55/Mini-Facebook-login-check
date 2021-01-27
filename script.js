let database = [
    {
        username: 'andrei',
        password: 'supersecret'
    },
    {
        username: 'sally',
        password: '123'
    },
    {
        username: 'ingrid',
        password: '777'
    }
];

let newsFeed = [
    {
        username: 'Bobby',
        timeline: 'So tired from all that learning'
    },
    {
        username: 'Sally',
        timeline: 'JavaScript is so cool'
    },
    {
        username: 'Mitch',
        timeline: 'JavaScript is pretty cool'
    }
];

let userNamePrompt = prompt("What\'s your username?");
let passwordPrompt = prompt("What\'s your password?");

// A function to check whether user is valid
function isUserValid(username, password){
    for(var i = 0; i < database.length; i++){
        if(database[i].username === username &&
            database[i].password === password){
                return true;
            } 
    }
    return false;
}

function signIn(username, password){
    
 console.log(isUserValid(username, password));
    if(isUserValid(username, password)){
            console.log(newsFeed);
        } else{
            alert("Sorry, wrong username and password");
        }
}
signIn(userNamePrompt, passwordPrompt);