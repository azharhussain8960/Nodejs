const { log } = require("console");
let os = require("os");
console.log(os.freemem()/1024/1024/1024);
console.log(os.totalmem()/1024/1024/1024);
// console.log(os.cpus());
console.log(os.arch());


// console.log(JSON.stringify(os.EOL)); 
// console.log(os.EOL());

//       os.availableParallelism()
console.log(os.availableParallelism());

// os.constants
// console.log(os.constants);

//  os.cpus()
// console.log(os.cpus());

// os.devNull
console.log(os.devNull);

// os.endianness()
console.log(os.endianness());

// os.getPriority([pid])
console.log(os.getPriority());

//os.homedir()
console.log(os.homedir());

//os.hostname()
console.log(os.hostname());

// os.loadavg()
console.log(os.loadavg());

//os.machine()
console.log(os.machine());

//os.networkInterfaces()
// console.log(os.networkInterfaces());

// os.platform()
console.log(os.platform());

//os.release()
console.log(os.release());

//os.setPriority([pid, ]priority)
// console.log(os.setPriority(1, 1));

//os.tmpdir()
console.log(os.tmpdir());

//os.totalmem()
console.log(os.totalmem());
console.log(os.networkInterfaces);
