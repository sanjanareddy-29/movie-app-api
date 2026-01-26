let input=document.querySelector('input')
let api='https://www.omdbapi.com/?i=tt3896198&apikey=9a13eabe&t='
let title=document.getElementById('title')
let actor=document.getElementById('actor')
let plot=document.getElementById('plot')
let director=document.getElementById('director')
let genre=document.getElementById('genre')
let boxoffice=document.getElementById('boxoffice')
let awards=document.getElementById('awards')
let year=document.getElementById('year')
let poster=document.getElementById('poster')
let container=document.querySelector('.container')
let notfound=document.getElementById('notfound')
  
input.addEventListener('keypress',(d)=>
{
     if(d.key==='Enter')
     {
        clickk()
     }
})



async function clickk()
{
let link=api+input.value
let data=await fetch(link)
let d= await data.json()
console.log(d)
if(d.Error==="Movie not found!")
{
    
    container.classList.add('hidden')
    notfound.innerText="Movie not found"

}
else
    {
       container.classList.remove('hidden')
       notfound.innerText="";
       title.innerText=d.Title
       actor.innerText=d.Actors
       plot.innerText=d.Plot
       director.innerText=d.Director
       genre.innerText=d.Genre  
       boxoffice.innerText=d.BoxOffice
       awards.innerText=d.Awards 
       year.innerText=d.Year  
       poster.src=d.Poster
}
}


