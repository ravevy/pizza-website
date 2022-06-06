//sabitler
const pizza = document.querySelector("#hugepizza")
const tepebutonu = document.querySelector("#tepebutonu")

//Pizza animasyonu + fonksiyon içerisinde buton displayi
window.addEventListener("scroll", rollPizza)
function rollPizza(event){
  pizza.style.left = window.scrollY
  pizza.style.transform = "rotate("+window.scrollY/4+"deg)"
  
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    tepebutonu.style.display = "block";
  } else {
    tepebutonu.style.display = "none";
  }
}
  
//Sayfanın başına git butonu aktivasyonu
tepebutonu.addEventListener("click", tepeyeGit)
function tepeyeGit(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
