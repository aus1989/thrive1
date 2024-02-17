let loader = document.querySelector(".loader");

window.addEventListener("load", function(){
  loader.classList.add("loader-hidden");
  loader.addEventListener("transitionend", function(){
    document.body.removeChild(loader);
  })
})