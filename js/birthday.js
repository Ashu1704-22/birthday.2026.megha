const birthdayElements=document.querySelectorAll(".birthday-memory,.final-message,.birthday-ending");
const birthdayObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add("visible");
    });
},{threshold:0.12});
birthdayElements.forEach(element=>birthdayObserver.observe(element));
