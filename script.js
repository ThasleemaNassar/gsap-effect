var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub: true,
    //markers:true,
}})

tl.to("#red",{
    top:"135%",
    left:"7%",
},'redpop')

tl.to("#fallingstraw",{
    top:"165%",
    left:"18%",
},'redpop')

tl.to("#strawberry",{
    width:"25%",
    top:"155%",
    right:"0%",
},'redpop')

tl.to("#leaf1",{
    rotate:"90deg",
    width:"6%",
    top:"126%",
    left:"71%",
},'redpop')

tl.to("#leaf2",{
    width:"10%",
    top:"175%",
    left:"27%",
},'redpop')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"70% 50%",
    scrub: true,
    // markers:true,
}})

tl2.from("#mango",{
    rotate:"360deg",
    left:"-50%",
    top:"120%",
},'all')

tl2.from("#yellow",{
    rotate:"90deg",
    left:"-50%",
    top:"50%",
},'all')

tl2.from("#pista",{
    rotate:"360deg",
    left:"50%",
    top:"50%",
},'all')

tl2.from("#green",{
    rotate:"180deg",
    left:"50%",
    top:"15%",
},'all')

tl2.to("#strawberry",{
    rotate:"360deg",
    width:"17%",
    left:"43%",
    top:"205%",
},'all')

tl2.to("#red",{
    width:"15%",
    left:"43%",
    top:"238%",
},'all')