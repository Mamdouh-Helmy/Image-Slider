let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

let slideCount = sliderImages.length;

let currentSlider = 1;

let slideNumberElement = document.getElementById('slide-number');

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

nextButton.addEventListener('click' , nextSlide)
prevButton.addEventListener('click' , prevSlide)

let paginationElemnt = document.createElement('ul');
paginationElemnt.id = 'pagination-ul';

for(let i = 1 ; i <= slideCount ; i++){

    let li = document.createElement('li');
    li.dataset.index = i;
    li.textContent = i;
    paginationElemnt.appendChild(li);
}

document.getElementById('indicators').appendChild(paginationElemnt);

let ul = document.getElementById('pagination-ul')
let li = document.getElementById('pagination-ul li')
let arr = Array.from(document.querySelectorAll('#pagination-ul li'));

for(let i = 0 ; i < arr.length ; i++){
    arr[i].onclick = function (){
        currentSlider = parseInt(this.dataset.index);
        theChecker()
    }
}
function nextSlide(){
    currentSlider++;
    theChecker()
}

function prevSlide(){
    currentSlider--;
    theChecker()
}

function theChecker(){

    slideNumberElement.textContent = `slide #${currentSlider} of ${slideCount}`;

    removeAllActive()

    sliderImages[currentSlider - 1].classList.add('active');
    paginationElemnt.children[currentSlider - 1].classList.add('active');

    if(currentSlider == 1){
        prevButton.classList.add("disabled")
    }else{
        prevButton.classList.remove("disabled")
    }

    if(currentSlider == slideCount){
        nextButton.classList.add("disabled")
    }else{
        nextButton.classList.remove("disabled")
    }
}
theChecker()

function removeAllActive(){
    sliderImages.forEach((ele) => {
        ele.classList.remove("active")
    })

    arr.forEach((ele) => {
        ele.classList.remove("active")
    })
}