//function openPage(pageName,elmnt,color) {
//var i, tabcontent, tablinks;
//tabcontent = document.getElementsByClassName("tabcontent");
//for (i = 0; i < tabcontent.length; i++) {
//tabcontent[i].style.display = "none";
//}
//tablinks = document.getElementsByClassName("tablink");
//for (i = 0; i < tablinks.length; i++) {
//tablinks[i].style.backgroundColor = "";
//}
//document.getElementById(pageName).style.display = "block";
//elmnt.style.backgroundColor = color;
//}


// Get the element with id="defaultOpen" and click on it
//var vardi=["SAULE", "PĒRKONS","DAUGAVA"];
//function randomVards(){
//let i=1;
//return vardi[i];
//}
//function sajauc(vards){
//let randomPairs=[];
//for(let i=0;i<vards.length;i++){
//let nr=Math.floor(Math.random()*100);
//randomPairs[i]={"index":i,"random":nr};
//}
//randomPairs.sort(function(a,b){return a.random-b.random});
//let sajaukts="";
//for(let i=0;i<vards.length;i++){
//sajaukts+=vards.charAt(randomPairs[i]["index"]);
//}
//return sajaukts;
//}
//
// 
//
//console.log(sajauc(randomVards()));
//console.log(sajauc(randomVards()));
//
//// no https://www.w3schools.com/howto/howto_js_countdown.asp 
//            var countDownDate, spele;
//            function sakt() {
//                countDownDate = new Date().getTime();
//                spele = setInterval(skaita, 1000);
//            }
//        // Update the count down every 1 second
//            function skaita() {
//                let now = new Date().getTime();
//                // Find the distance between now and the count down date
//                let distance = now - countDownDate;
//
//                // Time calculations for days, hours, minutes and seconds
//                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//                let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//                // Output the result in an element with id="demo"
//                document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";
//
//                // If the count down is over, write some text 
//                if (distance > 5000) {
//                    clearInterval(spele);
//                    document.getElementById("demo").innerHTML = "EXPIRED";
//                }
//            }

var words = ["apple", "banana", "cherry", "grape", "orange", "strawberry", "watermelon"];
        var randomWord = words[Math.floor(Math.random() * words.length)];
 
        // Shuffle function to randomize the order of letters
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
 
        var shuffledWord = randomWord.split("");
        shuffleArray(shuffledWord);
 
        var letterBoxes = document.getElementById("letter-boxes");
 
        shuffledWord.forEach(function(letter) {
            var box = document.createElement("div");
            box.className = "letter-box";
            box.textContent = letter;
            box.setAttribute("draggable", "true");
            box.addEventListener("dragstart", function(event) {
                event.dataTransfer.setData("text", event.target.textContent);
            });
            letterBoxes.appendChild(box);
        });
 
        function checkWord() {
            var boxes = document.querySelectorAll(".letter-box");
            var userWord = "";
            boxes.forEach(function(box) {
                userWord += box.textContent;
            });
 
            if (userWord === randomWord) {
                
                
                document.getElementById("message").textContent = "Correct! The word is " + randomWord + ".";
                boxes.forEach(function(box) {
                    box.setAttribute("draggable", "false");
                });
            } else {
                document.getElementById("message").textContent = "Try again.";
            }
        }
 
 
 
 
        document.addEventListener('DOMContentLoaded', (event) => {
 
function handleDragStart(e) {
  this.style.opacity = '0.4';
  dragSrcEl = this;
 
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}
 
function handleDragEnd(e) {
  this.style.opacity = '1';
 
  items.forEach(function (item) {
    item.classList.remove('over');
  });
}
 
function handleDragOver(e) {
  e.preventDefault();
  return false;
}
 
function handleDragEnter(e) {
  this.classList.add('over');
}
 
function handleDragLeave(e) {
  this.classList.remove('over');
}
 
function handleDrop(e) {
    e.stopPropagation();
 
if (dragSrcEl !== this) {
  dragSrcEl.innerHTML = this.innerHTML;
  this.innerHTML = e.dataTransfer.getData('text/html');
}
 
return false;
}
 
let items = document.querySelectorAll('.letter-box');
items.forEach(function(item) {
  item.addEventListener('dragstart', handleDragStart);
  item.addEventListener('dragover', handleDragOver);
  item.addEventListener('dragenter', handleDragEnter);
  item.addEventListener('dragleave', handleDragLeave);
  item.addEventListener('dragend', handleDragEnd);
  item.addEventListener('drop', handleDrop);
});
});
       
 
 
 