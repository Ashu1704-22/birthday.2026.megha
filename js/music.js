const music=document.getElementById("birthdayMusic");
const musicButton=document.getElementById("musicButton");
const openButton=document.getElementById("openButton");
const birthdaySection=document.getElementById("birthday");
const songs={
    intro:"assets/music/mere humsafar.mpeg",
    birthday:"assets/music/MASKARA.mpeg"
};

function updateMusicButton(){
    if(!music.paused){
        musicButton.textContent="⏸";
        musicButton.title="Pause music";
        musicButton.classList.add("playing");
    }else{
        musicButton.textContent="▶";
        musicButton.title="Play music";
        musicButton.classList.remove("playing");
    }
}

function loadSong(src){
    if(!music) return;
    music.src=src;
    music.load();
}

async function playMusic(){
    try{
        await music.play();
        updateMusicButton();
    }catch(error){
        console.log("Browser blocked autoplay. User interaction is required.");
        updateMusicButton();
    }
}

function pauseMusic(){
    music.pause();
    updateMusicButton();
}

function fadeOutThenSwitchToBirthday(){
    if(!music) return;
    if(music.src.includes("MASKARA.mpeg")) return;

    const startVolume=music.volume || 0.8;
    let volume=startVolume;
    const fadeOut=setInterval(()=>{
        volume=Math.max(0, volume-0.02);
        music.volume=volume;
        if(volume<=0){
            clearInterval(fadeOut);
            loadSong(songs.birthday);
            music.volume=0;
            playMusic();
            let fadeInVolume=0;
            const fadeIn=setInterval(()=>{
                fadeInVolume=Math.min(0.8, fadeInVolume+0.02);
                music.volume=fadeInVolume;
                if(fadeInVolume>=0.8){
                    clearInterval(fadeIn);
                }
            },90);
        }
    },90);
}

musicButton.addEventListener("click",async()=>{
    if(music.paused) await playMusic();
    else pauseMusic();
});

if(openButton){
    openButton.addEventListener("click",()=>{
        loadSong(songs.intro);
        music.volume=0.8;
        playMusic();
        document.getElementById("home").classList.add("home-hidden");
        document.getElementById("website").classList.remove("hidden");
        setTimeout(()=>{
            document.getElementById("story").scrollIntoView({behavior:"smooth"});
        },700);
    });
}

document.querySelectorAll(".next-button[data-section='birthday']").forEach(button=>{
    button.addEventListener("click",()=>{
        setTimeout(()=>{
            fadeOutThenSwitchToBirthday();
        },150);
    });
});

if(birthdaySection){
    const birthdayObserver=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                fadeOutThenSwitchToBirthday();
            }
        });
    },{threshold:0.3});
    birthdayObserver.observe(birthdaySection);
}

music.addEventListener("play",updateMusicButton);
music.addEventListener("pause",updateMusicButton);
loadSong(songs.intro);
music.volume=0.8;
updateMusicButton();
