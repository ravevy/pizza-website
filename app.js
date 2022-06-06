//Pizza animasyonu + fonksiyon içerisinde buton displayi
$(document).ready(function(){
  $(window).scroll(function(event){
    $("#hugepizza")[0].style.left = window.scrollY
    $("#hugepizza")[0].style.transform = "rotate("+window.scrollY/4+"deg)"
    
    if ($(document.body)[0].scrollTop > 200 || $(document.documentElement)[0].scrollTop > 200) {
      $("#tepebutonu")[0].style.display = "block";
    } else {
      $("#tepebutonu")[0].style.display = "none";
    }
  })
    
  //Sayfanın başına git butonu aktivasyonu
  $("#tepebutonu").click(function(){
    $(document.body)[0].scrollTop = 0;
    $(document.documentElement)[0].scrollTop = 0;
  })
})

