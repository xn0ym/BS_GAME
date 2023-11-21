function openPage(pageName,elmnt,color) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].style.backgroundColor = "";
}
document.getElementById(pageName).style.display = "block";
elmnt.style.backgroundColor = color;
}


// Get the element with id="defaultOpen" and click on it
var vardi=["SAULE", "PĒRKONS","DAUGAVA"];
function randomVards(){
let i=1;
return vardi[i];
}
function sajauc(vards){
let randomPairs=[];
for(let i=0;i<vards.length;i++){
let nr=Math.floor(Math.random()*100);
randomPairs[i]={"index":i,"random":nr};
}
randomPairs.sort(function(a,b){return a.random-b.random});
let sajaukts="";
for(let i=0;i<vards.length;i++){
sajaukts+=vards.charAt(randomPairs[i]["index"]);
}
return sajaukts;
}

 

console.log(sajauc(randomVards()));
console.log(sajauc(randomVards()));
