// MODAL CONTENUE
let modal = document.querySelector('.modal')
let modal_bloc = modal.querySelector('.bloc')
let btn_modal_on = document.querySelector('.btn_modal_on')
let btn_modal_off = document.querySelector('.btn_modal_off')

let template_about = document.querySelector('.template_about').innerHTML
// let template_prototypes = document.querySelector('.template_prototypes').innerHTML

const modalOnOff = () => {
    if (modal.matches('.modal_active')) {
        modal.classList.remove('modal_active')
        modal.classList.add('modal_desactive')
    } else {
        modal.classList.remove('modal_desactive')
        modal.classList.add('modal_active')
    }
}

const template = (key)=>{
    switch (key) {
        case "about":
            modal_bloc.innerHTML = template_about
            break;
        
        case "skills":
            
            break;
            
        case "formation":
            // modal_bloc.innerHTML = template_prototypes
            break;
        
        case "contact":
            
            break;
        
        // case "about":
            
        //     break;
    
        default:
            break;
    }
}
// template("about")


// laptop
btn_modal_on.addEventListener('click', (e)=>{
    modalOnOff()
    template(e.target.innerText.toLowerCase())
})
btn_modal_off.addEventListener('click', modalOnOff)


// mobile
btn_modal_on.addEventListener("touchstart", (e)=>{
    [...e.changedTouches].forEach(touch => {
        modalOnOff();
        template(touch.target.innerText.toLowerCase())
    })
})





// MODAL INTRO
let modal_intro = document.querySelector('.modal_intro');
let btn_modal_intro_off = document.querySelector('.btn_modal_intro_off')

const modalIntroOff = () => {
    modal_intro.classList.remove('modal_active')
    modal_intro.classList.add('modal_desactive')
}

btn_modal_intro_off.addEventListener('click', modalIntroOff)

