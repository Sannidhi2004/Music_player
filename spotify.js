console.log("Welcome to Spotify!")

//Initialising the variables
let songIndex=1;
let audioElement= new Audio("songs/1.mp3");
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongPlay= document.getElementById('masterSongPlay');
let songItems= Array.from(document.getElementsByClassName('SongItem'));
let songs=[
    {songName: "Beautiful Dream", filePath: "songs/1.mp3", coverPath: "cover1.jpg"},
    {songName: "Deep Meditation", filePath: "songs/2.mp3", coverPath: "cover2.jpg"},
    {songName: "Feeling Happy", filePath: "songs/3.mp3", coverPath: "happy.png"},
    {songName: "Piano Reflection", filepath: "songs/4.mp3", coverPath: "piano.webp"},
    {songName: "Delightful", filePath: "songs/5.mp3", coverPath: "cover5.jpg"},
    {songName: "Dreaming Big", filePath: "songs/6.mp3", coverPath: "dream.jpg"},
    {songName: "Hazy after hours", filePath: "songs/7.mp3", coverPath: "cover6.jpg"},
    {songName: "Tech house vibes", filePath: "songs/8.mp3", coverPath: "bg1.jpg"},
    {songName: "Hip Hop", filePath: "songs/9.mp3", coverPath:"hip hop.jpg"},
    
    
]
    songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
   })
//he has taken 10 songs(0-9)..we have taken only 9 songs)
//audioElement.play();

//Hadle play/pause clicks
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

        //Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
        console.log('timeupdate');
        //Update Seekbar
        //To show how much audio has been played
        progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
        
        myProgressBar.value=progress;
        

    //To drag the progressbar and take the music forward/ backward{
    //logic: 100 x C.T./ D = Progress
    //therefore, C.T.= Progress x D / 100
    }
)
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value * audioElement.duration/100;
}) 

 const makeAllPlays= ()=>{
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.remove('fa-pause');
       element.classList.add('fa-play');
 })}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click', (e)=>{ //if the element is 'clicked' then call back function =>{} starts working/         console.log(e.target); //to get the targetted(clicked) element
        makeAllPlays();
        songIndex= parseInt(e.target.id)
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        masterSongPlay.innerText= songs[songIndex-1].songName;
        audioElement.src=`songs/${songIndex}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

   })

})
// //To play the song we will have to change the audioElement to the targetted/ clicked song
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=1;
        audioElement.play();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play')
    
    
                     }
   else{
     songIndex+=1;


       }

    audioElement.src=`songs/${songIndex}.mp3`;
    masterSongPlay.innerText= songs[songIndex-2].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

 })
document.getElementById('previous').addEventListener('click', ()=>{
      if(songIndex<=1){
       songIndex=1




                   }
      else{
        songIndex-=1;
      }
  
       audioElement.src=`songs/${songIndex}.mp3`;
       masterSongPlay.innerText= songs[songIndex-1].songName;
       audioElement.currentTime=0;
       audioElement.play();
       masterPlay.classList.remove('fa-play');
       masterPlay.classList.add('fa-pause');
     
  
    })
