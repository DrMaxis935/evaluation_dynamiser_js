let totalScorePlayer1
let currentScorePlayer1
let totalScorePlayer2
let currentScorePlayer2
let diceRoll


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

document.getElementById("randomScore").addEventListener("click", function() {
    currentScorePlayer1 = randomInteger(0, 12);
    document.getElementById("randomScoreValue").setAttribute('value',currentScorePlayer1) ;
  });



/*let name
let firstName
let age
let mailAdress
let phoneNumber

let productsTotalValue = "154.38";
let specialOffer  = "10";

let cartTotalValue = productsTotalValue - specialOffer  ;
console.log(cartTotalValue);

alert('Nique !')


{
    "stadium":{
        "id" : 18,
        "label" : "stade de cul",
        "fields" :[
        "train1":{
            "id":1
            "surface":100
            "type":"foot"
    },
            
            "train2":{
                "id":2
                "surface":200
                "type":"rugby"
        }]
    }
    

    let termsOfServiceAccepted = false ;

    const boxChecked = () =>{
        if (termsOfServiceAccepted === true){
            termsOfServiceAccepted =false
        }else{
            termsOfServiceAccepted = true
        }
    }
    
    <form>
      <input type="checkbox" value={termsOfServiceAccepted} onChange={boxChecked} />  
    </form>
    


    const userCredentials = {
        email : null,
        mdp : null
    }
    
    const loadEmail = (event) => {
        userCredentials.email = event.target.value
    }

    const loadMdp = (event) => {
        userCredentials.mdp = event.target.value
    }

    <form>
        <input type="text" value={userCredentials.email} onChange={loadEmail} />
        <input type="text" value={userCredentials.mdp} onChange={loadMdp} />
        <button type="submit">Connecte toi le Jo !</button>
    </form>*/