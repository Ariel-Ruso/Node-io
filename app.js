const os= require('os');
const fs= require('fs');
const mi= require('./file.js');


let cpu= os.cpus();
let sist= os.platform();
let user= os.hostname();
let cpu_string= JSON.stringify(cpu);

/*fs.appendFile('prueba.txt', ' info d cpu: '+JSON.stringify(cpu), function(error){
    if (error){
        console.log('Error');
    }
});
*/


console.log(mi.datos);
//console.log(cpu);
//console.log(sist);
//console.log(user);