let array2D = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let arrayDisplay = document. getElementById("arrayDisplay");
display();

    let input = document.getElementById("inputfield").value;
    //swap
     for(let i=0;i<array2D.length;i++){
        let temp=array2D[i][i];
        array2D[i][i]=array2D[i][input-1];
        array2D[i][input-1]=temp;
     }
    //display
    display();

    function display(){
        let htmlContent="<table>";
            for(let i=0;i<array2D.length;i++){
                htmlContent +="<tr>";
                    for(let j=0;j<array2D[i].length;j++){
                        htmlContent +=`<td>${array2D[i][j]}</td>`;
                          
                    }
                    htmlContent +="</tr>";
            }
            htmlContent +="</table>";
            arrayDisplay.innerHTML=htmlContent;
        }