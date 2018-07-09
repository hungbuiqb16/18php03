  //Khai báo biến slideIndex đại diện cho slide hiện tại
  var slideIndex = 1;
  showSlides(slideIndex);
  //hàm next & prev
  function plusSlides(n) {
      showSlides(slideIndex += n);
}
 //hàm lựa chọn slide để hiển thị
  function currentSlides(n) {
    showSlides(slideIndex = n);
  }
  //Khai bào hàm hiển thị slide
  function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if ( n > slides.length){
      	slideIndex = 1;
      }
      if (n < 1){
      	slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace("active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
  }

