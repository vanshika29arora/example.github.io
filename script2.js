//console.log("Welcome to VibeVersa");

//initializing:

let index =0;
let audioElement= new Audio('11.mpeg');
let masterplay = document.getElementById('masterplay');
let mastersong = document.getElementById('mastersong');
let idMybar = document.getElementById('idMybar');
let gif = document.getElementById('gif');
let sitem = Array.from(document.getElementsByClassName('sitem'));

//songs:
let songs= [
    {songname:"Kaun Kehta Hai Bhagwan", filePath:"11.mpeg",coverPath:"c11.jpg"},
    {songname:"Shiv Aarti", filePath:"12.mpeg",coverPath:"c12.jpg"},
    {songname:"Govind Bolo", filePath:"13.mpeg",coverPath:"c12.jpg"},
    {songname:"Kishori Kuch Aesa", filePath:"14.mpeg",coverPath:"c11.jpg"},
    {songname:"Yeh Mat Kaho Khuda Se", filePath:"15.mpeg",coverPath:"c11.jpg"},
]

//iteration in songs(10):
sitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})

//handle play music:
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
})

//timeupdate:
audioElement.addEventListener('timeupdate',()=>{
    //console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    idMybar.value = progress;
})

//change progress bar(idbar):
idMybar.addEventListener('change',()=>{
    audioElement.currentTime = (idMybar.value*audioElement.duration)/100;
})

//makeall play function:
const makeallplay = ()=>{
    Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

//songplay items:
Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        //console.log(e.target);
        index = parseInt(e.target.id);
        makeallplay();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${index + 11}.mpeg`;
        console.log(audioElement.src);
        mastersong.innerText= songs[index].songname;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=4){
        index = 0;
    }
    else{
        index += 1;
    }
    audioElement.src = `${index + 11}.mpeg`;
    mastersong.innerText= songs[index].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
        index = 0;
    }
    else{
        index -= 1;
    }
    audioElement.src = `${index + 11}.mpeg`;
    mastersong.innerText= songs[index].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})