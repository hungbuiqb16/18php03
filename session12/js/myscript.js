// function changeInfo1(){
// 	document.getElementById('img').src='./images/degea.png';
// 	document.getElementById('profile').innerHTML="David Degea";
// }
// function changeInfo2(){
// 	document.getElementById('img').src='./images/jones.png';
// 	document.getElementById('profile').innerHTML="Phil Jones";
// }
// function changeInfo3(){
// 	document.getElementById('img').src='./images/pogba.png';
// 	document.getElementById('profile').innerHTML="Paul Pogba";
// }
// function changeInfo4(){
// 	document.getElementById('img').src='./images/lukaku.png';
// 	document.getElementById('profile').innerHTML="Romelu Lukaku";
// }


function changeInfo(x,y,z){
	var name = x;
	var year = y;
	var nationlity = z;
	if( name == 'David Degea'){
		document.getElementById('img').src='./images/degea.png';
	}
	else if( name == 'Phil Jones'){
	    document.getElementById('img').src='./images/jones.png';
	}
	else if( name == 'Paul Pogba'){
	    document.getElementById('img').src='./images/pogba.png';
	}
	else{
	    document.getElementById('img').src='./images/lukaku.png';
	}
    document.getElementById('profile').innerHTML= name + " sinh năm " + year + " là cầu thủ người "+ nationlity;
}