const animate = function() {
    const elems = document.getElementsByClassName("hidden");
    let windowHeight = window.innerHeight;
    
    const init = function() {
        windowHeight = window.innerHeight;    //현재 창의 크기
        addEventHandlers();
    }
    
    const addEventHandlers = function() {
        
        window.addEventListener("scroll", checkPosition);
        window.addEventListener("resize", init)
    }
    const checkPosition = function() {
      for ( var i = 0; i < elems.length; i++ ) {
        let posFromTop = elems[i].getBoundingClientRect().top;
        if ( posFromTop - windowHeight <= 0) { 
          elems[i].className = elems[i].className.replace( "hidden", "fade-in" );
        }
      }    
    }
    return {
      init
    }
  }
 
  animate().init();

const bars = document.querySelector("#sidebar");
const miniMenu = document.querySelector("#minimenu");
const miniIcon = document.querySelector("#sidelinkIcon")

function onClick() {
  miniMenu.classList.toggle("sidehidden");
  miniIcon.classList.toggle("sidehidden");
}

bars.addEventListener("click", onClick);
  
