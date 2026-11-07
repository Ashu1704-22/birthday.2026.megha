const letterElements=document.querySelectorAll(".love-letter");
const letterObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add("visible");
    });
},{threshold:0.1});
letterElements.forEach(element=>letterObserver.observe(element));
