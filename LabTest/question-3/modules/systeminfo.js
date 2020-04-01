const os = require('os');

exports.systemInfo = () => {
    cpu = os.arch();
    hostname = os.hostname();
    operatingSystem = os.platform();{
    console.log(`Operating System Info: CPU architecture: ${cpu} Host name: ${hostname} OS name: ${operatingSystem}`)
    }
}

exports.userInfo = () => {
    userName = os.userInfo().username;
    homeDirectory = os.homedir();{
    console.log(`User Info: Username: ${userName} dir: ${homeDirectory}`)
    }
}


