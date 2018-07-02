function checkValidate(){
	var name, email, password, genders, city;
	name     = document.getElementById('name').value;
	email    = document.getElementById('email').value;
	password = document.getElementById('password').value;
	genders  = document.getElementsByName('gender');
	city     = document.getElementById('city').value;
	//Kiểm tra họ tên
	if(name == ''){
		document.getElementById('error_name').innerHTML = 
		'Vui lòng nhập họ tên';
	}else{
		document.getElementById('error_name').innerHTML = 
		'';
	}
	//Kiểm tra địa chỉ mail
	var atpos = email.indexOf("@");
	if(email == ''){
		document.getElementById('error_email').innerHTML = 
		'Vui lòng nhập email';
	}
    else if(atpos < 0){
    	 document.getElementById('error_email').innerHTML = 
    	 'Địa chỉ email không hợp lệ';
    }
	else{
		document.getElementById('error_email').innerHTML = 
		'';
	}
	//Kiểm tra mật khẩu
	if(password == ''){
		document.getElementById('error_passwd').innerHTML = 
		'Vui lòng nhập mật khẩu';
	}
	else if(password.length < 8){
		 document.getElementById('error_passwd').innerHTML = 
		 'Mật khẩu phải có ít nhất 8 ký tự';
	}
	else{
		document.getElementById('error_passwd').innerHTML = 
		'';
	}
	//Kiểm tra giới tính
	if(genders[0].checked == false && genders[1].checked == false){
		document.getElementById('error_gender').innerHTML = 
		'Vui lòng chọn giới tính';
	}
	else{
		document.getElementById('error_gender').innerHTML = 
		'';
	}
	//Kiểm tra tỉnh/thành
	if(city == 0){
		document.getElementById('error_city').innerHTML =
		'Vui lòng chọn tỉnh/thành phố';
	}
	else{
		document.getElementById('error_city').innerHTML =
		'';
	}

	// console.log(name);
}