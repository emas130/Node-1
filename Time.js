var os = require('os');
process.stdin.setEncoding('utf-8');

function time () {
var uptime = os.uptime();
console.log('Uptime: ~', (uptime / 60).toFixed(0), 'min');
}

console.log(time());
exports.print = time;
 
