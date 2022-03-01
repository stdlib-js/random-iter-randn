<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# randn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator for generating pseudorandom numbers drawn from a standard normal distribution.



<section class="usage">

## Usage

```javascript
import iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randn@esm/index.mjs';
```

#### iterator( \[options] )

Returns an iterator for generating pseudorandom numbers drawn from a standard normal distribution.

```javascript
var it = iterator();
// returns <Object>

var r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

// ...
```

The function accepts the following `options`:

-   **name**: name of a supported pseudorandom number generator (PRNG), which will serve as the underlying source of pseudorandom numbers. The following PRNGs are supported:

    -   [`improved-ziggurat`][@stdlib/random/base/improved-ziggurat]: improved ziggurat method.
    -   [`box-muller`][@stdlib/random/base/box-muller]: Box-Muller transform.  

    Default: [`'improved-ziggurat'`][@stdlib/random/base/improved-ziggurat].

-   **prng**: pseudorandom number generator for generating uniformly distributed pseudorandom numbers on the interval `[0,1)`. If provided, the function **ignores** both the `state` and `seed` options. In order to seed the returned iterator, one must seed the provided `prng` (assuming the provided `prng` is seedable).

-   **seed**: pseudorandom number generator seed.

-   **state**: a [`Uint32Array`][@stdlib/array/uint32] containing pseudorandom number generator state. If provided, the function ignores the `seed` option.

-   **copy**: `boolean` indicating whether to copy a provided pseudorandom number generator state. Setting this option to `false` allows sharing state between two or more pseudorandom number generators. Setting this option to `true` ensures that a returned iterator has exclusive control over its internal pseudorandom number generator state. Default: `true`.

-   **iter**: number of iterations.

By default, the underlying pseudorandom number generator is [`improved-ziggurat`][@stdlib/random/base/improved-ziggurat]. To use a different PRNG, set the `name` option.

```javascript
var it = iterator({
    'name': 'box-muller'
});

var r = it.next().value;
// returns <number>
```

To use a custom PRNG as the underlying source of uniformly distributed pseudorandom numbers, set the `prng` option.

```javascript
import minstd from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-minstd@esm/index.mjs';

var it = iterator({
    'prng': minstd.normalized
});

var r = it.next().value;
// returns <number>
```

To return an iterator having a specific initial state, set the iterator `state` option.

```javascript
var bool;
var it1;
var it2;
var r;
var i;

it1 = iterator();

// Generate pseudorandom numbers, thus progressing the generator state:
for ( i = 0; i < 1000; i++ ) {
    r = it1.next().value;
}

// Create a new iterator initialized to the current state of `it1`:
it2 = iterator({
    'state': it1.state
});

// Test that the generated pseudorandom numbers are the same:
bool = ( it1.next().value === it2.next().value );
// returns true
```

To seed the iterator, set the `seed` option.

```javascript
var it1 = iterator({
    'seed': 7823
});

var r1 = it1.next().value;
// returns <number>

var it2 = iterator({
    'seed': 7823
});

var r2 = it2.next().value;
// returns <number>

var bool = ( r1 === r2 );
// returns true
```

To limit the number of iterations, set the `iter` option.

```javascript
var it = iterator({
    'iter': 2
});

var r = it.next().value;
// returns <number>

r = it.next().value;
// returns <number>

r = it.next().done;
// returns true
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.
-   **seed**: pseudorandom number generator seed. If provided a `prng` option, the property value is `null`.
-   **seedLength**: length of generator seed. If provided a `prng` option, the property value is `null`.
-   **state**: writable property for getting and setting the generator state. If provided a `prng` option, the property value is `null`.
-   **stateLength**: length of generator state. If provided a `prng` option, the property value is `null`.
-   **byteLength**: size (in bytes) of generator state. If provided a `prng` option, the property value is `null`.
-   **PRNG**: underlying pseudorandom number generator.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.
-   **Warning**: the default underlying source of pseudorandom numbers may **change** in the future. If exact reproducibility is required, either explicitly specify a PRNG via the `name` option or use an underlying PRNG directly.
-   If PRNG state is "shared" (meaning a state array was provided during iterator creation and **not** copied) and one sets the underlying generator state to a state array having a different length, the iterator does **not** update the existing shared state and, instead, points to the newly provided state array. In order to synchronize the output of the underlying generator according to the new shared state array, the state array for **each** relevant iterator and/or PRNG must be **explicitly** set.
-   If PRNG state is "shared" and one sets the underlying generator state to a state array of the same length, the PRNG state is updated (along with the state of all other iterator and/or PRNGs sharing the PRNG's state array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randn@esm/index.mjs';

var it;
var r;

// Create a seeded iterator for generating pseudorandom numbers:
it = iterator({
    'seed': 1234,
    'iter': 10
});

// Perform manual iteration...
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/random/base/randn`][@stdlib/random/base/randn]</span><span class="delimiter">: </span><span class="description">standard normal pseudorandom numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/random-iter-randn.svg
[npm-url]: https://npmjs.org/package/@stdlib/random-iter-randn

[test-image]: https://github.com/stdlib-js/random-iter-randn/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/random-iter-randn/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/random-iter-randn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/random-iter-randn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/random-iter-randn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/random-iter-randn/main

-->

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/random-iter-randn/tree/deno
[umd-url]: https://github.com/stdlib-js/random-iter-randn/tree/umd
[esm-url]: https://github.com/stdlib-js/random-iter-randn/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/random-iter-randn/main/LICENSE

[@stdlib/random/base/improved-ziggurat]: https://github.com/stdlib-js/random-base-improved-ziggurat/tree/esm

[@stdlib/random/base/box-muller]: https://github.com/stdlib-js/random-base-box-muller/tree/esm

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32/tree/esm

<!-- <related-links> -->

[@stdlib/random/base/randn]: https://github.com/stdlib-js/random-base-randn/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
