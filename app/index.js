import scope from './lessons/01_scope.js';
scope();

import spread from './lessons/02_spread.js';
spread();

import destructure from './lessons/03_destructure.js';
destructure();

import functions from './lessons/04_functions.js';
functions();

import helperMethods from './lessons/05_helper-methods/index.js';
helperMethods();

import { title, add, multiply } from './lessons/06_modules.js';
console.log(title);
console.log( add(4,4) );
console.log( multiply(4,4) );