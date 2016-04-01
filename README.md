# angular-register

> Write angular 1 modules using ES6 

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
Check [CONTRIBUTING.md][CONTRIBUTING.md]

## License

[MIT][LICENSE.md] © Matheus Poleza
