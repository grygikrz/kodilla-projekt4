
function pageScroll(){
  var ele = document.querySelector('.services');
  ele.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}


document.querySelector('#scrollb').addEventListener('click', () => pageScroll());



function toggleSidebar(){
  document.querySelectorAll("header nav ul")[0].classList.toggle("active");
}
