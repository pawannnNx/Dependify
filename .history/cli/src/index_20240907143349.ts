#!/usr/bin/env node

import { Command } from 'commander';
import { managePackage } from '../core/src/core';

const program = new Command();

program
  .version('1.0.0')
  .description('Dependify CLI for managing packages')
  .option('-a, --add <package>', 'Add a package')
  .option('-r, --remove <package>', 'Remove a package')
  .action((cmd) => {
    if (cmd.add) {
      managePackage(cmd.add, 'add');
    } else if (cmd.remove) {
      managePackage(cmd.remove, 'remove');
    }
  });

program.parse(process.argv);
