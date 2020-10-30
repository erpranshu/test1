// image randomisation part

let i = Math.floor(Math.random() * 5);
let imgElem = document.querySelectorAll(".imgButton")[i]
document.body.appendChild(imgElem);
let j = Math.floor(Math.random() * 5);
let imgSource = document.querySelectorAll("img")[j].getAttribute("src");
let img6 = document.createElement("img");
let button6 = document.createElement("button");
img6.setAttribute("src", `${imgSource}`);
button6.setAttribute("class", "imgButton");
button6.appendChild(img6);
document.body.appendChild(button6);

//clicking part
let count = 0;
let resetButton = document.createElement("button");
resetButton.innerHTML = "reset";
resetButton.setAttribute("id", "reset");
document.body.appendChild(resetButton);
resetButton.style.visibility = "hidden";

let verifyButton = document.createElement("button");
verifyButton.innerHTML = "verify";
verifyButton.setAttribute("id", "btn");
document.body.appendChild(verifyButton);
verifyButton.style.visibility = "hidden";

let display=document.createElement("p");
display.setAttribute("id","para");

let imgSource1="";
let imgSource2="";
for (let i = 0; i < 6; i++) {


    document.querySelectorAll(".imgButton")[i].addEventListener("click", function () {
        
        
       // count++;
 
       let img=document.querySelectorAll("img")[i].getAttribute("src");
        if (resetButton.style.visibility == "hidden") {
            document.querySelectorAll(".imgButton")[i].style.pointerEvents = "none";
            document.getElementById("reset").style.visibility = "visible";
            document.getElementById("h").style.visibility = "hidden";
             imgSource1=img;
            // console.log(img);
            
        }
        else{
            
            document.getElementById("btn").style.visibility = "visible";
            imgSource2=img;
           // console.log(img);
        
            for(let i=0; i<6; i++){
                document.querySelectorAll(".imgButton")[i].style.pointerEvents="none" ;
             }  
                
        }

                
       
        //console.log(count);
    })

}

document.getElementById("reset").addEventListener("click", function () {
    count=0;
    display.innerHTML="";
    document.body.appendChild(display);
    document.getElementById("reset").style.visibility = "hidden";
    document.getElementById("btn").style.visibility="hidden";
    document.getElementById("h").style.visibility = "visible";
    window.location="index.html";
    for(let i=0; i<6; i++){
        document.querySelectorAll(".imgButton")[i].style.pointerEvents="auto" ;
        } 
})

document.getElementById("btn").addEventListener("click",function(){
    count=0;
    for(let i=0; i<6; i++){
    document.querySelectorAll(".imgButton")[i].style.pointerEvents="auto" ;
    }
    document.getElementById("btn").style.visibility="hidden";
    //document.getElementById("reset").style.visibility = "hidden";
    document.body.appendChild(display);
    if(imgSource1==imgSource2) {
      display.innerHTML="You are a human. Congratulations!"
    }else{
        display.innerHTML="We can't verify you as a human. You selected the non-identical tiles."
    }
   
})

