ScrollTrigger.create({
    trigger: ".pic",
    start: "top top+=50",
    end: "bottom+=190%",
    pin: ".pic",
    pinSpacing: false,
    scrub: 1,
    //markers: true,
})
const show = gsap.utils.toArray(".show");

show.forEach((text, i) =>{
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top top+=30%",
        end: "bottom",
        //markers: true,
    })
})
gsap.from(".img-container",{
   x: -600,
   scrollTrigger: {
        trigger: ".container4",
        pin: true,
        start: "top top",
        end: "bottom",
        scrub: 1,
        //markers: true,
   } 
}); 