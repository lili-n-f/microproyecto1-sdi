const carouselImgs = [
        'img/pic.png', 
        'img/pyproj.png', 
        'img/pyproj2.png', 
        'img/javaproj.png', 
        'img/javaproj2.png'
    ];

let carouselIndex = 0;


document.getElementById("back").addEventListener("click", pastImage());
document.getElementById("forward").addEventListener("click", nextImage());

function nextImage() {
    if (carouselIndex<carouselImgs.length-1){
        carouselIndex++;
    }else{
        carouselIndex=0;
    }
    renderImage();
}

function pastImage() {
    if (carouselIndex===0){
        carouselIndex=carouselImgs.length-1;
    }else{
        carouselIndex--;
    }
    renderImage();

}

function renderImage() {
    document.getElementById("carouselImage").style.backgroundImage = `url(${carouselImgs[carouselIndex]})`;
    console.log("renderizar");
}