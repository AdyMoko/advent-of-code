const fs = require('fs');

let count = 0;
let curr = [];
let next = [];

//will sum the 3 numbers of both arrays, compare the results and increase the counter if the first array sum is greater 
function sumAndCompare(a,b){          
    if(
        a.reduce((acc, num)=>{return acc+num;}, 0)
        <
        b.reduce((acc, num)=>{return acc+num;}, 0)    
    )        
        {count++}
}


function main (){
    fs.readFile('./text.txt', (err, data) =>{
        if(err) {
            console.log('something went wrong');
    
        } else {        
            const info = data.toString() 
            .split('\r\n')
            .map(n => parseInt(n, 10));
    
            const initialLength = info.length;
    
            for (let index = 0; index < initialLength; index++) {
                 
                for (var i=0;i<3;i++){           
                    curr.push(info[i]);
                    next.push(info[i+1]); 
                    if(info[i+1]==undefined){console.log("reached the end " + count )}                     
                } 
                
                sumAndCompare(curr, next);
                info.shift();            
                curr = []; 
                next = [];       
            }
        }
        console.log(count);
    });    
}

main();


