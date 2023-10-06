"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=n(function(l,a){
var i=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-exp/dist');function v(e,r){return i(e)||i(r)?NaN:q(r*e)}a.exports=v
});var f=n(function(m,c){
var N=require('@stdlib/utils-constant-function/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-exp/dist');function x(e){if(s(e))return N(NaN);return r;function r(t){return s(t)?NaN:p(e*t)}}c.exports=x
});var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=u(),g=f();y(o,"factory",g);module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
