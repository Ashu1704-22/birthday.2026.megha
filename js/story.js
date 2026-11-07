const storyElements=document.querySelectorAll(".story-section .reveal");
const storyObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add("visible");
    });
},{threshold:0.15});
storyElements.forEach(element=>storyObserver.observe(element));
