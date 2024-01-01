// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.1-esm/index.mjs";import{factory as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randn@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function u(h){var c,f,g,v,b;if(arguments.length>0){if(!o(h))throw new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",h));if(c=i({},h),m(c,"iter")){if(!d(c.iter))throw new TypeError(p("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",c.iter))}else c.iter=l;g=a(c),void 0===c.prng&&!1!==c.copy&&(c.state=g.state)}else g=a(),c={iter:l,state:g.state};return b=0,t(f={},"next",x),t(f,"return",y),c&&c.prng?(t(f,"seed",null),t(f,"seedLength",null),n(f,"state",s(null),r),t(f,"stateLength",null),t(f,"byteLength",null)):(e(f,"seed",G),e(f,"seedLength",N),n(f,"state",w,E),e(f,"stateLength",P),e(f,"byteLength",R)),t(f,"PRNG",g.PRNG),j&&t(f,j,L),f;function x(){return b+=1,v||b>c.iter?{done:!0}:{value:g(),done:!1}}function y(t){return v=!0,arguments.length?{value:t,done:!0}:{done:!0}}function L(){return u(c)}function G(){return g.PRNG.seed}function N(){return g.PRNG.seedLength}function P(){return g.PRNG.stateLength}function R(){return g.PRNG.byteLength}function w(){return g.PRNG.state}function E(t){g.PRNG.state=t}}export{u as default};
//# sourceMappingURL=index.mjs.map
