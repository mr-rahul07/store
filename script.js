function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();

var tl_1 = gsap.timeline();

tl_1.from("nav>img, #links>a, #buttons>button",{
    y:-200,
    opacity:0,
    delay:0.5,
    stagger:0.2
})

tl_1.from("#center-text>h1",{
    x:-300,
    opacity:0,
    stagger:0.2
})

tl_1.from("#bottom-images img",{
    y:500,
    opacity:0,
    stagger:0.1
})

var tl_2 = gsap.timeline();

tl_2.from("#page2-right h1, #page2-right p, #page2-right button",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#search-bar",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:2
    }
})

tl_2.from("#page2-left img, #search-bar",{
    opacity:0,
    scale:2,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#search-bar",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 60%",
        scrub:2
    }
})

var tl_3 = gsap.timeline();

tl_3.from("#page3-left h1, #page3-left p, #page3-left button",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page3-left h1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2
    }
})

tl_3.from("#page3-right .elem",{
    opacity:0,
    scale:0,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#page3-right #element1",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
        scrub:2
    }
})

var tl_4 = gsap.timeline();

tl_4.from("#page4-right h1, #page4-right p, #page4-right button",{
    y:200,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page4-right h1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 70%",
        scrub:2
    }
})

tl_4.from("#page4-left #story, #page4-left #dp, #page4-left h4, #page4-left p",{
    x:-500,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
        trigger:"#page4-left #story",
        scroller:"#main",
        // markers:true,
        start:"top 90%",
        end:"top 60%",
        scrub:2
    }
})