var bouton = document.getElementsByTagName('button');


function story(i){

var sections = document.getElementsByTagName('section');

	if(bouton[i] == bouton[0]){
		sections[0].classList.add('hidden');
		sections[1].classList.remove('hidden');
	} else if(bouton[i] == bouton[1]){
		sections[0].classList.add('hidden');
		sections[2].classList.remove('hidden');
	}
}

function capsule(i){
	return function(){
		story(i);
	}
}

for(var i=0; i < bouton.length; i++){
	bouton[i].onclick = capsule(i);
	console.log(bouton[i]);
}