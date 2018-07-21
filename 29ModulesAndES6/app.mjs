// IMPORTANT
// In order to use the import and export tags in nodejs you must use the .mjs file extension as well as run the
// node command with --experimental-modules flag as in:
// node --experimental-modules app.mjs

import * as greetr from './greet'; // same as var greetr = require('./greet');
import { sayBye, myName } from "./bye.mjs"; // ES6 destructuring syntax!
import Robby from './robot.mjs'; // 'Robby' is just the name of the default export in the robot.mjs file in THIS file

greetr.greet();
sayBye();
console.log(myName);
console.log(Robby);

// But i guess we're gonna stick with boring ole module.exports syntax for this...