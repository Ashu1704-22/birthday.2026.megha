const navigationButtons=document.querySelectorAll(".navigation button");
navigationButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        const target=document.getElementById(button.getAttribute("data-section"));
        if(target) target.scrollIntoView({behavior:"smooth"});
    });
});

const nextButtons=document.querySelectorAll(".next-button");
nextButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        const target=document.getElementById(button.getAttribute("data-section"));
        if(target) target.scrollIntoView({behavior:"smooth"});
    });
});
