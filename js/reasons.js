const reasonElements=document.querySelectorAll(".reason-card,.reasons-ending");
const reasonObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add("visible");
    });
},{threshold:0.15});
reasonElements.forEach(element=>reasonObserver.observe(element));
