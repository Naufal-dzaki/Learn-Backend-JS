const cpuInformation = process.memoryUsage();
console.log(cpuInformation);

const firstName = process.argv[2];
const lastName = process.argv[3];

console.log(`Hello ${firstName} ${lastName}`);
//run on cmd node namefile.js parameter1 parameter2
