const fs = require('fs');

let count = 0;
let curr = -Infinity;

function main() {
    fs.readFile('./text.txt', (err, data) =>{
        if(err) {
            console.log('something went wrong');    
        } else {        
            const arr = data.toString().split('\r\n');
            for (let i=0;i<arr.length-1;i++){
                if(arr[i]>curr){            
                    count++;
                }
                curr = arr[i];
            }
        }
        console.log(curr, count);
    });
}

main()
    

