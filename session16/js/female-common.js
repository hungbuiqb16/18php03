function myHobby(){
	var hobby  = document.getElementsByName('hobby');
	if(hobby[0].checked == true){
		document.getElementById('img').src='./images/shopping.jpg'
	}
	else if(hobby[1].checked == true){
		document.getElementById('img').src='./images/xemphim.png'
	}
	else if(hobby[2].checked == true){
		document.getElementById('img').src='./images/dulich.jpg'
	}
}