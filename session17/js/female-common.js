//Khai báo hàm sở thích
function myHobby(){
	var hobby  = document.getElementsByName('hobby');
	if(hobby[0].checked == true){
		document.getElementById('img').src='./images/shopping.jpg';
	}
	if(hobby[1].checked == true){
		document.getElementById('img').src='./images/xemphim.png';
	}
	if(hobby[2].checked == true){
		document.getElementById('img').src='./images/dulich.jpg';
	}
};
//Khai báo hàm người yêu
function myLove(){
	var love  = document.getElementsByName('love');
	if(love[0].checked == true){
		document.getElementById("place").style.display = "block";
		document.getElementById("bfrd").style.display = "none";
	}
	if(love[1].checked == true){
		document.getElementById("place").style.display = "none";
		document.getElementById("bfrd").style.display = "block";
	}
}
var test = localStorage.getItem("backgound");
document.getElementById('contain').style.background = test;