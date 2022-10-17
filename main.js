var slideindex = 1 ;
showSlids(slideindex);

function plusSlides(n){
    showSlids(slideindex += n);
}
function showSlids(n){
    var i ;
    var slides = document.getElementsByClassName("myslides");
    if ( n > slides.length){
        slideindex = 1;
    }
    if ( n < 1 ){
        slideindex = slides.length;
    }
    for( i = 0 ; i < slides.length ; i++){
        if ( i == ( slideindex - 1 )){
            slides[i].style.display = 'block';
        }
        else {
            slides[i].style.display = 'none';
        }
    }
}