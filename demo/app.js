angular.module('app', []);

/**
 * This is an example of a "component" directive which encapsulates a template.
 */
class HelloWorldDirective {

    constructor() {
        this.template = '<h3>Hello World. Welcome to NgRegister</h3>';
        this.restrict = 'E';
        this.replace = true;
    }
}

register('app').directive('helloWold', HelloWorldDirective);
