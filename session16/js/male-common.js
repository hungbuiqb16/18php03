function myHobby(){
	var hobby  = document.getElementsByName('hobby');
	if(hobby[0].checked == true){
		document.getElementById('img').src='./images/bongda.jpg'
	}
	else if(hobby[1].checked == true){
		document.getElementById('img').src='./images/annhau.jpg'
	}
	else if(hobby[2].checked == true){
		document.getElementById('img').src='./images/coffee.jpg'
	}
}