

document.addEventListener("DOMContentLoaded",function(){
    var list = document.getElementById('The-FizzyBuzz');
    var listEl = document.createElement('ul');

    for(i=1; i < 101; i++) {
        if(i % 15 === 0)
            console.log('FizzBuzz');
        else if(i % 3 === 0)
            console.log('Fizz');
        else if(i % 5 === 0)
            console.log('Buzz');
        else
            console.log(i);
    }

    // list.appendChild(listEl);

    }
)

function addFB(listEL, FB) {
    var item = document.createElement('li');
    item.innerText = FB.name;

    listEL.appendChild(item);


}