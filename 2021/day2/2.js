const fs = require('fs');
let horizontalPosition = 0;
let depth = 0;
let aim = 0;

function main() {
    fs.readFile('./input.txt', (err, data) =>{
        if(err) {
            console.log('something went wrong');    
        } else {        
            const input = data.toString().split('\r\n'); //split the input into an array
            for(let i=0;i<input.length;i++){ //iterate over each item and change the horizontalPosition and depth accordingly
                const regex = /[0-9]/;
                if(/forward/.test(input[i])) {  
                    horizontalPosition += Number(input[i].match(regex)[0]);
                    depth += aim * Number(input[i].match(regex)[0]);
                }else if(/up/.test(input[i])) {
                    aim -= Number(input[i].match(regex)[0]);
                }else if(/down/.test(input[i])) {
                    aim += Number(input[i].match(regex)[0]);
                }               
            }          
            console.log(`the answer is: ${horizontalPosition*depth}`);
        }
    });
}

main()