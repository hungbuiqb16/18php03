$("#button").click(function(){
    var flag = true;
	var name, genders, year, city;
	name     = document.getElementById('name').value;
	year     = document.getElementById('year').value;
	genders  = document.getElementsByName('gender');
	city     = document.getElementById('city').value;
	//Kiểm tra tên
	if(name == ''){
		document.getElementById('error_name').innerHTML = 
		'Vui lòng nhập họ tên';
		flag = false;
	}
	else{
		document.getElementById('error_name').innerHTML = 
		'';	
	}
	//Kiểm tra giới tính
	if(genders[0].checked == false && genders[1].checked == false){
		document.getElementById('error_gender').innerHTML = 
		'Vui lòng chọn giới tính';
		flag = false;
	}
	else if(genders[0].checked == true){
		localStorage.setItem("backgound", "green");
		window.location.href = 'male.html';
	} 
	else if(genders[1].checked == true){
	    localStorage.setItem("backgound", "blue");
		window.location.href = 'female.html';
	}
	//Kiểm tra năm sinh
	if(year == ''){
		document.getElementById('error_year').innerHTML = 
		'Vui lòng nhập năm sinh';
		flag = false
	} 
	else if (isNaN(year)){
		document.getElementById('error_year').innerHTML = 
		'Năm sinh phải là số';
		flag = false;
	}
	else if( year >= 1990){
		 document.body.style.backgroundColor = localStorage.getItem("bgcolor");
	}
	else{
		 document.body.style.backgroundColor = localStorage.getItem("bgcolorred");
	}
	//Kiểm tra tỉnh/thành
	if(city == 0){
		document.getElementById('error_city').innerHTML =
		'Vui lòng chọn tỉnh/thành phố';
		flag = false;
	}
	else{
		document.getElementById('error_city').innerHTML =
		'';
	}
	return flag;
});