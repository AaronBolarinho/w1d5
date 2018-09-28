var chalk = require("chalk");

var message = "Hello " + chalk.underline('world') + '!';
console.log(message);

// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));