const fs = require('fs');

let count = 0;
let curr = [];
let next = [];

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
                    if(info[i+1]==undefined){                        
                        break;
                    }                     
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

//will sum the 3 numbers of both sub-arrays, compare the results 
// and increase the counter if the first array sum is smaller 
function sumAndCompare(a,b){          
    if(
        a.reduce((acc, num)=>{return acc+num;}, 0)
        <
        b.reduce((acc, num)=>{return acc+num;}, 0)    
    ){count++}
}
main();


