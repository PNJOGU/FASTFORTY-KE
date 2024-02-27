function showSidebar(){
  const sidebar=document.querySelector('.mobileSubpages');
  sidebar.style.display='flex';
}
function hideSidebar(){
  const sidebar=document.querySelector('.mobileSubpages');
  sidebar.style.display='none';
}

let hamburgerMenu = document.querySelector('.toggleOn');
let closeMenu = document.querySelector('.toggleOff');
hamburgerMenu.addEventListener('click',showSidebar);
closeMenu.addEventListener('click',hideSidebar);