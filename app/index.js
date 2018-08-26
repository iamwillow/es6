import Scope from './lessons/01_scope';
Scope();

import Spread from './lessons/02_spread';
Spread();

import Destructure from './lessons/03_destructure';
Destructure();

import Functions from './lessons/04_functions';
Functions();

import helperMethods from './lessons/05_helper-methods/index';
helperMethods();

console.log('Note:: `string ${variable}` is called a template string');

import { title6, add, multiply } from './lessons/06_modules';
console.log( title6 );
console.log( add(4,4) );
console.log( multiply(4,4) );

import Kingdom from './lessons/07_classes/index';
Kingdom();

import { Calculator, title8, subTitle8 } from './lessons/08_static-methods';
let a = Calculator.add(5,5);
console.log( title8 );
console.log( subTitle8 );
console.log(a);


console.log('Note:: javascript is not OOP.  It supports a "prototypal inheritance model');
console.log('Note:: classes are actually wrapped up prototypes, and prototypes are functions');


import {Wizard, harry} from './lessons/09_prototypes';
console.log(harry);
console.log( harry.greet() );
console.log( harry.petInfo() );

import dataStructures from './lessons/10_data-structures/index';
dataStructures();