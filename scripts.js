console.log("hello")
let songindex=0;
let audioelement=new Audio('songs1/believer.mp3')
let masterplay=document.getElementById('masterplay')
let myprogressbar=document.getElementById('myprogressbar')
let gif=document.getElementById('gif')
let songitems=Array.from(document.getElementsByClassName('songitem'))
console.log("songitems",songitems)
let mastersongname=document.getElementById('mastersongname')
currentTime=0
let songs=[
    {songname:"Believer",filepath:"songs1/believer.mp3",coverpath:"covers/1.jpg"},
    {songname:"I can swear,I can joke",filepath:"songs1/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"Night changes",filepath:"songs1/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"perfect",filepath:"songs1/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"who says",filepath:"songs1/5.mp3",coverpath:"covers/5.jpg"},
    
]

songitems.forEach((element,i)=>
{
    console.log(element,i)
    console.log("1",element.getElementsByTagName("img"))
    console.log("2",element.getElementsByTagName("img")[0])
    console.log("1",element.getElementsByClassName("songname"))
    console.log("2",element.getElementsByClassName("songname")[0])
    element.getElementsByTagName("img")[0].src=songs[i].coverpath
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname
})


//handle play/pause click
masterplay.addEventListener('click',()=>
{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play()
        masterplay.classList.remove('fa-play-circle')
        masterplay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioelement.pause()
        masterplay.classList.remove('fa-pause-circle')
        masterplay.classList.add('fa-play-circle')
        gif.style.opacity=0
    }
})
//listen to events
audioelement.addEventListener('timeupdate',()=>
{console.log("waeg")
    console.log('timeupdate')
    //update seekbar
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progress)
    myprogressbar.value=progress
})
myprogressbar.addEventListener('change',()=>
{console.log("changed")
    audioelement.currentTime=(myprogressbar.value*audioelement.duration/100)
})
const makeallplays=()=>
{
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
{console.log(element)
    element.classList.remove('fa-pause-circle')
    element.classList.add('fa-play-circle')
})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
{console.log(element)
    element.addEventListener('click',(e)=>
    {   console.log("e",e)
        console.log("target",e.target)
        makeallplays()
        songindex=parseInt(e.target.id)
        console.log("id",songindex)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioelement.src=`songs1/${songindex+1}.mp3`
        //audioelement.src='songs/3.mp3'
        mastersongname.innerText=songs[songindex].songname
        audioelement.currentTime=0
        audioelement.play()
        element.classList.remove('fa-play-circle')
        element.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click',()=>
{
    if(songindex>=4)
        songindex=0
    else{
        songindex+=1
    }
    audioelement.src=`songs1/${songindex+1}.mp3`
    mastersongname.innerText=songs[songindex].songname
        //audioelement.src='songs/3.mp3'
        audioelement.currentTime=0
        audioelement.play()
        console.log("sngindx",songindex)
        Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
    {
    console.log("previous",element)
    console.log(element.id)
    if(element.id==songindex)
    {
        element.classList.remove('fa-play-circle')
        element.classList.add('fa-pause-circle')
    console.log("heyyy")
    }
    else{
    element.classList.remove('fa-pause-circle')
    element.classList.add('fa-play-circle')
    }
    
})

})
document.getElementById('previous').addEventListener('click',()=>
{
    if(songindex<=0)
        songindex=4
    else{
        songindex-=1
    }
    audioelement.src=`songs1/${songindex+1}.mp3`
    mastersongname.innerText=songs[songindex].songname
        //audioelement.src='songs/3.mp3'
        audioelement.currentTime=0
        audioelement.play()
    console.log("sngindx",songindex)
        Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
    {
    console.log("previous",element)
    console.log(element.id)
    if(element.id==songindex)
    {
        element.classList.remove('fa-play-circle')
        element.classList.add('fa-pause-circle')
    console.log("heyyy")
    }
    else{
    element.classList.remove('fa-pause-circle')
    element.classList.add('fa-play-circle')
    }
    
})
})