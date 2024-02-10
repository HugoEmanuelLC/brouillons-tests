let prev = document.querySelector('.prev')
let next = document.querySelector('.next')

function mySlide(params) {
    if (params == "Prev") {
        let list = document.querySelectorAll('.item')
        let slide = document.querySelector('.slide')
        // slide.innerHTML = ""
        // list[0].classList.add('itemPrev')
        slide.appendChild(list[0])
    } else if ("Next") {
        let list = document.querySelectorAll('.item')
        let slide = document.querySelector('.slide')
        // slide.innerHTML = ""
        // list[list.length -1].classList.add('itemNext')
        slide.prepend(list[list.length -1])
    }
    mySlideColor()
}
function mySlideColor() {
    let list = document.querySelectorAll('.item')
    let slide = document.querySelector('.slide')
    list.forEach((ele, id) =>{
        // id == 0 ?
        // slide.style.backgroundImage = `url('${ele.childNodes[0].src}')` :
        // null
        // ele.classList.remove('itemPrev')
        // ele.classList.remove('itemNext')
    })

}

mySlideColor()
prev.addEventListener('click', () => mySlide("Prev"))
next.addEventListener('click', () => mySlide("Next"))
