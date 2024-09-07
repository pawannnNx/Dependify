#!/usr/bin/env node
"use strict";
exports.__esModule = true;
var commander_1 = require("commander");
var core_1 = require("../core/src/core");
var program = new commander_1.Command();
program
    .version('1.0.0')
    .description('Dependify CLI for managing packages')
    .option('-a, --add <package>', 'Add a package')
    .option('-r, --remove <package>', 'Remove a package')
    .action(function (cmd) {
    if (cmd.add) {
        (0, core_1.managePackage)(cmd.add, 'add');
    }
    else if (cmd.remove) {
        (0, core_1.managePackage)(cmd.remove, 'remove');
    }
});
program.parse(process.argv);
