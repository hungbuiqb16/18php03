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
function myLove(){
	var love  = document.getElementsByName('love');
	if(love[0].checked == true){
		document.getElementById("place").style.display = "block";
		document.getElementById("gfrd").style.display = "none";
	}
	if(love[1].checked == true){
		document.getElementById("place").style.display = "none";
		document.getElementById("gfrd").style.display = "block";
	}
}
var test = localStorage.getItem("backgound");
document.getElementById('contain').style.background = test;