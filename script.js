//function to open menu
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

//hide header when scrolling
//show when scrolling up
var prevScrollPos = window.pageYOffset;
window.onscroll = ()=>{
    var currentScrollPos = window.pageYOffset;
    if  (prevScrollPos > currentScrollPos){
        document.getElementById("navbar").style.top = "0";
    }else{
        document.getElementById("navbar").style.top = "-50px";
    };
    prevScrollPos=currentScrollPos;
};
