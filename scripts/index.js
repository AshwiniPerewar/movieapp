var movie=[
"https://m.media-amazon.com/images/M/MV5BOGU0ODhhOGUtYmE5NC00YTczLTkwMGYtMWRjZDczODg1Mzk1XkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg",
"https://images.odishatv.in/uploadimage/library/16_9/16_9_0/IMAGE_1626507079.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4KjrbwrSJEFCPlAYNvTBx_xldXQjNfFqxJA&usqp=CAU",
];

localStorage.setItem("movieslist",JSON.stringify(movie));

let i=0;
let id;

let image=document.createElement("img");
data=(JSON.parse(localStorage.getItem("movieslist")) || []);
console.log(data)
id=setInterval(function()
{
    document.querySelector("#slideshow").innerHTML=null;
    if(i==data.length)
        {
            i=0;
        }
        image.src=data[i];
        i++;
        
        document.querySelector("#slideshow").append(image);
    
},1000)


let movies=[
    {URL:"https://m.media-amazon.com/images/M/MV5BNDI3M2E5ZGQtZjVlNS00NzFhLTg0NTAtZDZmOTBjODg3ZDQ1XkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_QL75_UX180_CR0,27,180,266_.jpg",
    name:"Sooryavanshi",release_date:"05/11/2021",IMDB:8.9,
},
{
    URL:"https://images.odishatv.in/uploadimage/library/16_9/16_9_0/IMAGE_1626507079.jpg",
name:"KGF",release_date:"21/12/2018",IMDB:8.9
},

{
    URL:"https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Panipat_%28film%29_poster.jpg/220px-Panipat_%28film%29_poster.jpg",
name:"Panipat",release_date:"21/12/2018",IMDB:7.5
},

{
    URL:"https://upload.wikimedia.org/wikipedia/en/7/73/Padmaavat_poster.jpg",
name:"padmavat",release_date:"21/12/2018",IMDB:8.1
},
{URL:"https://m.media-amazon.com/images/M/MV5BNDI3M2E5ZGQtZjVlNS00NzFhLTg0NTAtZDZmOTBjODg3ZDQ1XkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_QL75_UX180_CR0,27,180,266_.jpg",
    name:"Sooryavanshi",release_date:"05/11/2021",IMDB:8.3,
},
{
    URL:"https://images.odishatv.in/uploadimage/library/16_9/16_9_0/IMAGE_1626507079.jpg",
name:"KGF",release_date:"21/12/2018",IMDB:8.5
},
{
    URL:"https://upload.wikimedia.org/wikipedia/en/7/73/Padmaavat_poster.jpg",
name:"Panipat",release_date:"21/12/2018",IMDB:7.5
},

{
    URL:"https://images.odishatv.in/uploadimage/library/16_9/16_9_0/IMAGE_1626507079.jpg",
name:"KGF",release_date:"21/12/2018",IMDB:8.5
},
{URL:"https://m.media-amazon.com/images/M/MV5BNDI3M2E5ZGQtZjVlNS00NzFhLTg0NTAtZDZmOTBjODg3ZDQ1XkEyXkFqcGdeQXVyNzkxOTEyMjI@._V1_QL75_UX180_CR0,27,180,266_.jpg",
    name:"Sooryavanshi",release_date:"05/11/2021",IMDB:6.3,
},

];



localStorage.setItem("movies",JSON.stringify(movies));
var movieList=JSON.parse(localStorage.getItem("movies"));

displayMovie(movieList);

function displayMovie(movieList)
{
    document.querySelector("#movies").innerHTML=null;
movieList.map(function(el){
 box=document.createElement("div");
 var image=document.createElement("img");
 var name1=document.createElement("h4");
 var rel=document.createElement("h6");
 var imdb=document.createElement("h6");


 image.src=el.URL;
 image.style.width="440px";
 image.style.height="300px";
 name1.innerText=el.name;
 rel.innerText=el.release_date;
 imdb.innerText=el.IMDB;

 box.append(image,name1,rel,imdb);
 document.querySelector("#movies").append(box);

})
}

function sorting()
{
var sortData=document.querySelector("#sort").value;
if(sortData=="inc")
{
    movieList.sort(function(a,b)
    {
        if(a.IMDB>b.IMDB)
        return 1;
        if(a.IMDB<b.IMDB)
        return -1;
        return 0;
    })
    displayMovie(movieList);
}

if(sortData=="dec")
{
    movieList.sort(function(a,b)
    {
        if(a.IMDB>b.IMDB)
        return -1;
        if(a.IMDB<b.IMDB)
        return 1;
        return 0;
    })
    displayMovie(movieList);
}
}