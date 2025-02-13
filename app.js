let a ;
//console.log(a);
let array = [];
let v=10;
let b;
function show(){
    a = document.getElementById("inputt").value;
    let contents = document.getElementById("display");
    let content;
    
    while((a<3)||(a>9)){
    
      alert("OOPS!! YOU ARE ENTERED WRONG CHOICE ,plz enter right one");
     
        a =document.getElementById("rest").value;
  
    } 
    
      content ="<table>";
    for(let i=0;i<a;i++){
       array[i]=[];
       content += "<tr>";
      for(let j=0;j<a;j++){
        array[i][j]=v;
        content +=`<td> ${array[i][j]} </td>`;
          v +=3;
      }
      content +="</tr>";
    }
    content +="</table>";

   content +=" <br><p>Now,Plz! select <strong>Any number from above set & Enter it's column number below..</strong></p>";
   content +=" <input  type = number id=set  >";
   content +="<a href = #display1 ><button onclick = set()>submit</button></a>";

   contents.innerHTML=content;

  
    
} 


function set(){
    b=document.getElementById("set").value;
   // console.log(b);
   //swap
   while(b<1||b>a){
    alert("OOPS!! YOU ARE ENTERED WRONG CHOICE ,plz enter right one");
    b=document.getElementById("rest").value;
   }
   for(let i=0;i<a;i++){
    let temp = array[i][i];
    array[i][i]=array[i][b-1];
    array[i][b-1]=temp;
   }

   let secs = document.getElementById("display1");
   let sec ="<table>";
    for(let i=0;i<a;i++){
       sec += "<tr>";
      for(let j=0;j<a;j++){
        sec +=`<td> ${array[i][j]} </td>`;
      }
      sec +="</tr>";
    }
    sec +="</table>";
    sec +=" <br><p> <strong>Check! your number's column from above set & enter again.</strong></p>";
    sec +=" <input  type = number id=result >";
    sec +="<a href = #display2 ><button onclick = result()>submit</button></a>";


   
    secs.innerHTML = sec ;
}

function result(){
    let c =document.getElementById("result").value;
   // console.log(c);
   while(c<1||c>a){
    alert("OOPS!! YOU ARE ENTERED WRONG CHOICE ,plz enter right one");
     c=document.getElementById("rest").value;
   }
   let d =document.getElementById("display2");
   let res ="<h1> your number is :</h1>";
   res +=`${array[c-1][c-1] }`;
   d.innerHTML= res ;
    let e = document.getElementById("foot");
   e.style.display = "block";
}
