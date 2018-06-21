/**
 * file: myScript.js
 * purpose: add your JavaScript here
 **/

console.log('Hello from js/myScript.js - Vanilla JavaScript'); // Vanilla JavaScript test

var $j = jQuery.noConflict();

/**
 * Run jQuery in a "no-conflict" way
 * document-ready-function
 **/
$j(function(){

    console.log('Cheers from jQuery too!')

    // ... add your code here ...

}); // ends jQuery on-document-ready (don't delete this line!)
