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
const skillPercent = { //los números representan porcentajes
    "python": new Array("progPy",90), //id,progreso de python
    "java": new Array("progJ",80), //id,progreso de java
    "html": new Array("progHTML",65), //id,progreso de html
    "css": new Array("progCSS",65), //id,progreso de css
    "javascript": new Array("progJS",55) //id,progreso de javascript
};

//barra de python
document.getElementById(skillPercent["python"][0]).style.width = `${skillPercent["python"][1]}%`

//barra de java
document.getElementById(skillPercent["java"][0]).style.width = `${skillPercent["java"][1]}%`

//barra de html
document.getElementById(skillPercent["html"][0]).style.width = `${skillPercent["html"][1]}%`

//barra de css
document.getElementById(skillPercent["css"][0]).style.width = `${skillPercent["css"][1]}%`

//barra de javascript
document.getElementById(skillPercent["javascript"][0]).style.width = `${skillPercent["javascript"][1]}%`
