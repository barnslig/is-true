# is-true
Returns `true` if the given value is true. Otherwise false.

## Install with [npm](npmjs.org)

	npm install --save barnslig/is-true

## Usage
ES6 usage:

```js
import isTrue from 'is-true';

isTrue(true);
//=> true

isTrue(false);
//=> false
```

If you include the `is-true.dist.js` file, you can even directly use it within
your browser:

```html
<script src="is-true.dist.js"></script>
<script>
	console.log(isTrue(true));
	//=> true

	console.log(isTrue(false));
	//=> false
</script>
```

## Run tests
Install dev dependencies. Then:

	npm test

## Run linter
Install dev dependencies. Then:

	npm run lint

## Build ES5 compatible [UMD](https://github.com/ForbesLindesay/umd) package
Install dev dependencies. Then:

	npm run build

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests,
please create an issue.

Make sure that your PR successfully passes the tests and linter + keep the dist
file up to date!

## License
Copyright © 2016 Leonard Techel

Released under the MIT license.
