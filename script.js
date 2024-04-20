function disableScroll() {
    document.body.classList.add('no-scroll');
}

// Function to enable scroll
function enableScroll() {
    document.body.classList.remove('no-scroll');
}
function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        var parent=document.createElement('span');
        var child =document.createElement('span');

        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML=elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML=""
        elem.appendChild(parent)
    })
}
function valueSetters(){
    gsap.set(".nav a",{y:"-100%",opacity:0}) 
    gsap.set(".home .parent .child",{y:"100%"})
    gsap.set(".home .row img",{opacity:0})
    document.querySelectorAll("#Visual>g").forEach(function(e){
        var character=e.childNodes[1].childNodes[1]
        character.style.strokeDasharray=character.getTotalLength()+'px';
        character.style.strokeDashoffset=character.getTotalLength()+'px';  
    })
}
function loaderAnimation(){
    var t1=gsap.timeline();

t1
    .from(".loader .child span",{
      x:100,
      delay:-.5,
      stagger:.2,
      duration:2,
      ease:Power3.easeInOut  
    })
    .to(".loader .parent .child",{
    y:"-100%",
    duration:1,
    delay:-.5,
    ease:Circ.easeInOut
    })
    .to(".loader",{
        height:0,
        duration:1,
        ease:Circ.easeInOut
    })
    .to(".green",{
        height:"100%",
        top:0,
        duration:1,
        delay:-.8,
        ease:Circ.easeInOut
    })
    .to(".green",{
        height:"0%",
        duration:1,
        delay:-.5,
        ease:Circ.easeInOut,
        onComplete:function(){
            enableScroll();
            animateHomepage();
        }
    })
}
function animateHomepage(){
    
    var tl=gsap.timeline();

    tl.to(".nav a",{
        y:0,
        opacity:1,
        stagger:.05,
        ease:Expo.easeInOut
    })
    .to(".home .parent .child",{
        y:0,
        // opacity:1,
        stagger:.1,
        duration:1.5,
        ease:Expo.easeInOut
    })
    .to(".home .row img ",{
        opacity:1,
        delay:-.5,
        ease:Expo.easeInOu,
        onComplete:function(){
            animatesvg();
        }
    })
}
function animatesvg(){


        gsap.to("#Visual>g>g>path,#Visual>g>g>polyline",{
            strokeDashoffset:0,
            duration:2,
            ease:Expo.easeInOut,
            
        })
}

disableScroll();
revealToSpan();
valueSetters();
loaderAnimation();

