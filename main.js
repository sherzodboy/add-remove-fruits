var elForm = document.querySelector('.form');
var elStart = document.querySelector('.start');
var elInput1 = document.querySelector('.input1');
var elEnd = document.querySelector('.end');
var elInput2 = document.querySelector('.input2');
var elClean = document.querySelector('.clean')
var elList = document.querySelector('.list');

elForm.addEventListener('submit', function(evt){
    evt.preventDefault();
});

var products = [];

elStart.addEventListener('click', function(){
    if (elInput1.value.trim() === ''){
        alert('mahsulot kiritilmadi');
        elInput1.value = '';
    } else if (products.indexOf(elInput1.value) !== -1) {
        alert('bu mahsulot royhatda bor');
    } else {
        products.unshift(elInput1.value);
        elInput1.value = '';
        elList.innerHTML = '';
        for (var i = 0 ; i < products.length; i++){
            var fruit = document.createElement('li');
            fruit.textContent = products[i];
            elList.appendChild(fruit);
        }
    }
});

elEnd.addEventListener('click', function (){
    if(elInput1.value.trim() === ''){
        alert('mahsulot kiritilmadi');
        elInput1.value = '';
    } else if (products.indexOf(elInput1.value) !== -1) {
        alert('bu mahsulot royhatda bor');
    } else {
        products.push(elInput1.value);
        elInput1.value = '';
        elList.innerHTML = '';
        for (var i = 0 ; i < products.length ; i++){
            var fruit = document.createElement('li');
            fruit.textContent = products[i];
            elList.appendChild(fruit);
        }
    }
});

elClean.addEventListener("click", function(){
	if (elInput2.value === ''){
		alert(" nechanchi index ochirish kerakligini yozing");
		elInput2.value = "";
	} else if (elInput2.value > products.length  || elInput2.value <= 0 ){
        alert("bu index royhatda yoq");
        elInput2.value = "";
    } else {
		products.splice(elInput2.value - 1, 1);
	    elInput2.value = '';
	    elList.innerHTML = '';
	    for(var i = 0 ; i < products.length; i++){
		    var div = document.createElement('li');
		    div.textContent = products[i];
		    elList.appendChild(div);
	    }
    }
});