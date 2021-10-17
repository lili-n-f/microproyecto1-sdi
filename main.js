const carouselImgs = [
        'img/pic.jpg',
        'img/pyproj.png', 
        'img/pyproj2.png', 
        'img/javaproj.png', 
        'img/javaproj2.png'
    ];

let carouselIndex = 0;

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
}

window.onload = renderImage();