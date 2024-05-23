///JavaScript of our page for animation,transistions

const wrap = document.querySelector('.wrap');
const loginLink=document.querySelector('.login-link');
const registerLink = document.querySelector('.register');
const butPopup = document.querySelector('.but');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=>{
  wrap.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrap.classList.remove('active');
  });

  butPopup.addEventListener('click', ()=>{
    wrap.classList.add('active-popup');
  }); 

  iconClose.addEventListener('click', ()=>{
    wrap.classList.remove('active-popup');
  }); 

  //button changes colour on click
      function toggleColor(buttonId) {
        var button = document.getElementById(buttonId);
        if (button.style.backgroundColor === "red") {
          button.style.backgroundColor = "greenyellow";
        } else {
          button.style.backgroundColor = "red";
        }
      }
//about page
function splitScroll(){
  const controller = new ScrollMagic.Controller();

  new ScrollMagic.Scene({
      duration: '200%',
      triggerElement: '.about-title',
      triggerHook: 0
  })
  .setPin('.about-title')
  .addIndicators()
  .addTo(controller);
}

splitScroll();

