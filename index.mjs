// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.1-esm/index.mjs";import{factory as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randn@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";function p(u){var f,c,v,g,b;if(arguments.length>0){if(!d(u))throw new TypeError(a("0qN2V",u));if(f=i({},u),m(f,"iter")){if(!o(f.iter))throw new TypeError(a("0qN2t","iter",f.iter))}else f.iter=l;v=j(f),void 0===f.prng&&!1!==f.copy&&(f.state=v.state)}else v=j(),f={iter:l,state:v.state};return b=0,t(c={},"next",(function(){if(b+=1,g||b>f.iter)return{done:!0};return{value:v(),done:!1}})),t(c,"return",(function(t){if(g=!0,arguments.length)return{value:t,done:!0};return{done:!0}})),f&&f.prng?(t(c,"seed",null),t(c,"seedLength",null),n(c,"state",s(null),r),t(c,"stateLength",null),t(c,"byteLength",null)):(e(c,"seed",(function(){return v.PRNG.seed})),e(c,"seedLength",(function(){return v.PRNG.seedLength})),n(c,"state",(function(){return v.PRNG.state}),(function(t){v.PRNG.state=t})),e(c,"stateLength",(function(){return v.PRNG.stateLength})),e(c,"byteLength",(function(){return v.PRNG.byteLength}))),t(c,"PRNG",v.PRNG),h&&t(c,h,(function(){return p(f)})),c}export{p as default};
//# sourceMappingURL=index.mjs.map
