window.addEventListener("mousemove",(e)=>{
    let circle = document.querySelector(".circle")
    let xval =gsap.utils.mapRange(0,window.innerWidth,circle.getBoundingClientRect().width/2,window.innerWidth - circle.getBoundingClientRect().width/2,e.clientX)
    let yval =gsap.utils.mapRange(0,window.innerHeight,circle.getBoundingClientRect().height/2,window.innerHeight - circle.getBoundingClientRect().height/2,e.clientY)
    gsap.to('.circle',{
        left: xval + "px",
        top : yval + "px",
        ease: Power3,
    })
})