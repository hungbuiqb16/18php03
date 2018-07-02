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