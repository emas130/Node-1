var os = require("os");
var timeFormatter = require("./Time");

function getOSinfo() {
    var type = os.type();
    var time = os.uptime();

    if (type === "Darwin") {
        type = "OSX";
    } else if (type === "Windows_NT") {
        type = "Windows";
    }

    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();

    console.log("System:", type);
    console.log("System release:", release);
    console.log("CPU model is:", cpu);
    console.log("System uptime is " + timeFormatter.print(time));
    console.log("User's name is: " + userInfo.username + " and their catalog location is: " + userInfo.homedir);
}

exports.print = getOSinfo;
