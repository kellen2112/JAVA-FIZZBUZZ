document.addEventListener('DOMContentLoaded', function() {
    var fizzList = document.getElementById('The-FizzyBuzz');
    // var listEl = document.createElement('ul');
    
    var TheFizz = function () {
    var arr = []

 for(i = 1; arr.length < 100; i++) {
        if(i % 15 === 0) {
            arr.push('FizzBuzz');
        } else if(i % 3 === 0) {
            arr.push('Fizz');
        } else if(i % 5 === 0) {
            arr.push('Buzz');
        } else {
            arr.push(i);
        }
            TheFizz(arr[i], fizzList);{}
        
    } return arr
};
    // fizzList.appendChild(item);

// function TheFizz(name, list) 
//     // var item = document.createElement('li');
//     item.innerText = name;
//     item.classList.add('fizzbuzzed')
//     list.appendChild(item);
});