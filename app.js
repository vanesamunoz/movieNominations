//starting values
const API_KEY = "ce96a27a";
const url = "http://www.omdbapi.com/?apikey=" + API_KEY;
var result = "";




//selecting elements from the DOM
const searchButton = document.querySelector('#search');
const inputSearch = document.querySelector('#inputValue');
const nominationButton = document.querySelector('#addnomination');
var total = 0;
var alertShow = false;





searchButton.onclick = function(event) {
    event.preventDefault();
    const value = inputSearch.value;
    fetch(url+"&s="+value)
       .then((res) => res.json())
       .then((data) => {
           console.log('Data: ', data);
           let output = '';

           if (value == ""){
                alert("Invalid Input");
            } else {
                output = `<h3>Results for "${value}"</h3>`;
            }
           
           document.getElementById('result').innerHTML = output;

                   

           data.Search.forEach(function(movie) {
           
               var list = document.createElement('li');
               var input = movie.Title + " " + "(" + movie.Year + ")";
               list.innerText = input;


                var button = document.createElement("button");
                var t = document.createTextNode("Nominate");
                button.appendChild(t);

        
               
               output += document.getElementById('result').appendChild(list).appendChild(button);

               button.addEventListener ("click", function() {
                    total++;
                    bannerAlert();
                    button.disabled = true;

                    var li = document.createElement("li");
                    var i = input;
                    
                    li.innerText = i;

                    var ul = document.getElementById("ULnom");
                    ul.appendChild(li);
            

                    var ul = document.getElementById("ULnom");
                    ul.appendChild(li);



                    var nomButton = document.createElement("button");
                    var d = document.createTextNode("Delete");
                    nomButton.appendChild(d);

                    document.getElementById('nomination').appendChild(li).appendChild(nomButton);

                    nomButton.addEventListener ("click", function(e) {
                        total--;
                        e.target.parentNode.remove()
                            button.disabled = false;
                    });
                });
            });
          function bannerAlert() {
              if(total == 5) {
                  alertShow = true;
                  alert("You have choosen your 5 nominations!");
              }
          }
        let output2 = "<h3>Nominations</h3>"
        document.getElementById('header02').innerHTML = output2;
       })
       .catch((error) => {
           console.log("Error: ", error);
       }) 
    ;
    console.log('Value: ', value);
}
