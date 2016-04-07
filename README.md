# angular-register

> Write angular 1.x modules using ES6

_You can use this module with AMD, CommonJS or just like a method of window object!_

## Instalation

```
npm install angular-register.
```

Add angular register in your index.html
```html
<script src="node_modules/angular-register/dist/angular-register.min.js"></script>
```

If you're using require, commomJS or something like you can call angular-register.
```js
var register = require('angular-register');
```

## Basic Usage

```js
angular.module('app', []);

class AppController {
  constructor($scope){
    $scope.test = true;
  }
}

register('app').controller('appController', AppController);
```

## Contributing
Check [CONTRIBUTING.md](https://github.com/matheuspoleza/blob/master/CONTRIBUTING.md)

## Credits
Thanks to [Michael Bromley](https://github.com/michaelbromley/michaelbromley) for example https://github.com/michaelbromley/angular-es6.

## License

[MIT](https://github.com/matheuspoleza/blob/master/LICENSE) © Matheus Poleza
