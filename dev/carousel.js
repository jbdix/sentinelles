var bouton1 = document.getElementById('bouton1');
var bouton2 = document.getElementById('bouton2');
var imgCarousel = document.getElementsByClassName('carrousel');

var galeries = document.getElementsByClassName('galerie');

var i = 0; //Compteur 

setTimeout(defile, 2500);

function defile(){
	if(i < imgCarousel.length - 1){
		imgCarousel[i].classList.add('hidden');
		i++;
		imgCarousel[i].classList.remove('hidden');
		setTimeout(defile, 2500); 
	} else{
		imgCarousel[i].classList.add('hidden');
		i = 0;
		imgCarousel[i].classList.remove('hidden');
		setTimeout(defile, 2500);
	}
}

function creerGalerie(uneGalerie, imagesGalerie){

}


bouton1.onclick = function(){ //Element précédent
	if(i === 0){
		imgCarousel[i].classList.add('hidden');
		i = imgCarousel.length - 1;
		imgCarousel[i].classList.remove('hidden'); //Retire hidden du dernier element
	} else{
		imgCarousel[i].classList.add('hidden');
		i--;
		imgCarousel[i].classList.remove('hidden');
	}
}

bouton2.onclick = function (){ //Element suivant
 /*alert("test");*/
 	
 	if(i === (imgCarousel.length - 1)){ 
 		imgCarousel[i].classList.add('hidden');
 		i = 0; // Reset de i quand fin du tableau
 		imgCarousel[i].classList.remove('hidden'); //Enlève hidden de imgCarousel[0]
 	} else{
 		//alert('avant la fin : ' + i); //TEST
 		imgCarousel[i].classList.add('hidden');
 		i++;
 		imgCarousel[i].classList.remove('hidden');
 		//alert('après la fin : ' + i); //TEST
 	}
}

for(var j=0; j < galeries.length ; j++){
	var uneGalerie = galeries[j];
	var imagesGalerie = galeries[j].getElementsByTagName('img');
	//console.log(imagesGalerie);
	//console.log(uneGalerie);
	//console.log(galeries);
	creerGalerie(uneGalerie, imagesGalerie);
}


