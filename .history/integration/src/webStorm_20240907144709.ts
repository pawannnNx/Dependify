import { Plugin } from '@jetbrains/ide-plugin';

class DependifyPlugin extends Plugin {
  constructor() {
    super();
    console.log('Dependify WebStorm Plugin Activated!');
  }
}

export default new DependifyPlugin();
