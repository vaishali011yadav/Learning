const os=require("os");
let mySystemArch=os.arch();
// returns the underlines architecture
console.log(mySystemArch);
// returns information on cupus
let myCpuInfo=os.cpus();
console.log(myCpuInfo);
// Returns the host name of the operating system as a string.
let hostName=os.hostname();
console.log(hostName);
// Returns an object containing network interfaces that have been assigned a network address
let networkInfo=os.networkInterfaces();
console.log(networkInfo);

console.log(os.release());
//Returns the total amount of system memory in bytes as an integer.
console.log(os.totalmem());

//returns the system uptime in number of seconds.
// console.log(os.uptime());
let uptimeInHours = os.uptime() / 3600;
console.log(uptimeInHours);

//Returns information about the currently effective user
console.log(os.userInfo());

//Returns the platform nodejs was compiled for 
console.log(os.platform());
