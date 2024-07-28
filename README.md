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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Moment-Generating Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Degenerate][degenerate] distribution moment-generating function (MGF).

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [moment-generating function][mgf] for a [degenerate][degenerate] random variable is

<!-- <equation class="equation" label="eq:degenerate_mgf" align="center" raw="M_X(t) := e^{\mu t}" alt="Moment-generating function (MGF) of a degenerate distribution."> -->

```math
M_X(t) := e^{\mu t}
```

<!-- <div class="equation" align="center" data-raw-text="M_X(t) := e^{\mu t}" data-equation="eq:degenerate_mgf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/degenerate/mgf/docs/img/equation_degenerate_mgf.svg" alt="Moment-generating function (MGF) of a degenerate distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `mu` is the distribution mean.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-mgf@v0.2.2-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-mgf@v0.2.2-deno/mod.js';
```

#### mgf( t, mu )

Evaluates the moment-generating function ([MGF][mgf]) of a [degenerate][degenerate] distribution with parameter `mu` (mean).

```javascript
var y = mgf( 1.0, 1.0 );
// returns ~2.718

y = mgf( 2.0, 3.0 );
// returns ~403.429
```

If provided `NaN` for any argument, the function returns `NaN`.

```javascript
var y = mgf( NaN, 0.0 );
// returns NaN

y = mgf( 0.0, NaN );
// returns NaN
```

#### mgf.factory( mu )

Returns a function for evaluating the [moment-generating function][mgf] of a [degenerate][degenerate] distribution with parameter `mu` (mean).

```javascript
var mymgf = mgf.factory( 10.0 );

var y = mymgf( 0.1 );
// returns ~2.718
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@deno/mod.js';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@deno/mod.js';
import mgf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-mgf@v0.2.2-deno/mod.js';

var mu;
var t;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    t = round( randu()*5.0 );
    mu = round( randu()*5.0 );
    y = mgf( t, mu );
    console.log( 'x: %d, µ: %d, M_X(t;µ): %d', t, mu, y );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-degenerate-mgf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-degenerate-mgf

[test-image]: https://github.com/stdlib-js/stats-base-dists-degenerate-mgf/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-mgf/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-degenerate-mgf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-degenerate-mgf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-degenerate-mgf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-degenerate-mgf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-mgf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-degenerate-mgf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-mgf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-degenerate-mgf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-mgf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-degenerate-mgf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-degenerate-mgf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-degenerate-mgf/main/LICENSE

[degenerate]: https://en.wikipedia.org/wiki/Degenerate_distribution

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

</section>

<!-- /.links -->
