'use strict';

/**
 * DIY Array.
 * 
 * 
 */
function Curray() {
    this.length = 0;

    if (arguments.length === 1) {
        this.length = arguments[0];
    } else if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
            this[i] = arguments[i];
            // this.push(arguments[i]); // TRY not to depend on push here.
        }
        this.length = arguments.length;
    }
}

Curray.prototype.concat = function(element) {
    if (arguments.length === 0) throw TypeError('missing argument 0 when calling function concat');

    for (var i = 0; i < element.length; i++) {
        this[this.length + i] = element[i]
    };
    this.length = this.length + element.length;
    return this;
};

Curray.prototype.entries = function(){
    
   
}; 

Curray.prototype.every = function(value){
    //if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function');
    for(var i=0;i<this.length;i++)
    {
        if(this[i]=== value){ 
        return true;
    } else  {
        return false;
    }
    }
};

Curray.prototype.fill = function fill(value, start, end) {
    
    // if (arguments.length === 0) throw TypeError('missing argument 0 when calling function fill');
    // if (!(array instanceof Array)) throw TypeError(array + ' is not an array');


    var i=0;
    var j=0;
    
    if (end){
       
        j=start;
       
        for (j; j<end; j++){
          
            this[j]=value;
       
        }
        
        return this;
        
    
        
    } 

    else if (start){

        i=start-1;
      
        for (i; i<this.length-1; i++){
            this[i]=value;
        }

        return  this;

    } else 
    
        {

        for (var i=0; i<this.length-1; i++){
            
            
            this[i]=value;
           
         
        }

        return  this ;
    }
};

Curray.prototype.filter = function(expression){
    if (arguments.length === 0) throw TypeError('missing argument 0 when calling function filter');
    if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function'); 

   var newExp= [];
   var j=0;
   for(var i=0;i<this.length;i++) {

       if(expression(this[i])){
           
           newExp[j]=this[i];
           
           j++;

        }
   }  return newExp;

};

Curray.prototype.flat = function(depth) {
    
    depth = typeof depth === 'undefined' ? 1 : depth;
    depth = depth < 0? 0 : depth;

    var result = [];

    for (var i = 0; i < this.length; i++) {
        var element = this[i];

        if (element instanceof Curray && depth > 0) {
            var arr = this[i].flat(depth - 1, element);

            for (var j = 0; j < arr.length; j++) result.push(arr[j]);
        } else result.push(element);
    }

    return result;
};

Curray.prototype.forEach = function(expression) {
    if (arguments.length === 0) throw TypeError('missing argument 0 when calling function forEach');

    if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

    for (var i = 0; i < this.length; i++)
        expression(this[i], i, this);
};

Curray.prototype.includes = function(value){
    if (arguments.length === 0) throw TypeError('missing argument 0 when calling function includes');

    for(var i = 0; i < this.length; i++){
        var test = false;

        if(this[i] == value){
            test = true;
        }
    }
    return test;
};



Curray.prototype.join = function(separator){
    var string = '';

    if (separator == '' || separator == undefined) {
      separator = ',';
    }

    if (this.length == 1) {
      string = this[0];
      return string;
    } else {
      for (var i = 0; i < this.length; i++) {
        if (i == this.length - 1) {
          string += this[i];
        } else {
          string += this[i] + separator;
        }
      }
      return string;
  }
   
};

Curray.prototype.lastIndexOf = function(element) {
    if (arguments.length === 0) throw TypeError('missing argument 0 when calling function lastIndexOf');

    for (var i = this.length+1; i > 0; i--){     
        if ( this[i] === element ){    
          return i;
        }  
      }
    return -1;
};

Curray.prototype.map = function(expression) {

    if (arguments.length === 0) throw TypeError('missing argument 0 when calling function map');

    var result= this;

     for (var i = 0; i < this.length; i++)
         result[i] = expression(this[i], i, this);

     return result;
 };

 
Curray.prototype.pop = function() {
    var last = this[--this.length];

    delete this[this.length];

    return last;
};

Curray.prototype.push = function (element) {
    this[this.length++] = element;

    return this.length;
};


Curray.prototype.reduce = function(reducer, initialValue) {
    if (arguments.length === 0) throw TypeError('missing argument 0 when calling function reduce');

    if (initialValue || initialValue === 0) {
        var accumulator = initialValue;
        var start = 0;
    } else {
        var accumulator = this[0];
        var start = 1;
    }

    for (var i = start; i < this.length; i++) {
        accumulator = reducer(accumulator, this[i]);
    }
    return accumulator;
};


Curray.prototype.reduceRight = function(expression) {
    if (arguments.length === 0) throw TypeError('missing argument 0 when calling function reduceRight');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var newArray = []
    for (var i = this.length -1; i >= 0  ;i--){
        newArray = expression(newArray, this[i]);
    }
   return newArray;
};

Curray.prototype.reverse = function(){
    for (var i = 0; i <= Math.floor((this.length - 1) / 2); i++) {
        var a = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = a;
    }
    var arrResult = Array.from(this)
    return arrResult;
    
   
};


Curray.prototype.shift = function(){

    var first = this[0];
    for(var i = 1; i < this.length; i++) {
        this[i-1] = this[i];
      }
    this.length = this.length - 1;
    return first;
   
};

Curray.prototype.slice = function() {
   
};


Curray.prototype.some = function(expression) {
    if (arguments.length === 0) throw TypeError('missing argument 0 when calling function some');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    for (var i = 0; i < this.length; i++){
        if (expression(this[i]) === true){
            return true;
        }
    }  
    return false;
};

Curray.prototype.sort = function(expression) {

    var sorted = [this[0]]
    expression = expression || function (a, b) { return String(a) >= String(b); }

    for (var i = 1; i < this.length; i++) {
      var indexToInsert = 0
            for (var j = 0; j < sorted.length; j++) {
        if (expression(this[i], sorted[j])) {
          indexToInsert = j + 1;
        } else {
          break
        }
      }
      sorted.splice(indexToInsert, 0, this[i])
    }
    return sorted;
};

Curray.prototype.splice = function(start, remove, add1, add2) {

    var newArray = [];
    var n = 0;
    var x = remove;

    for (var i = 0; i < this.length; i++) {
        if (i < start) {
            newArray[n++] = this[i];
        } else if (x >= 0) {
            if (x === 0) {
                newArray[n++] = this[i];
                if (add1 != 0) {
                    newArray[n++] = add1;
                    add1 = 0;
                    if (add2 != 0) {
                        newArray[n++] = add2;
                        add2 = 0;
                    }
                }
            } else if (x-- === 1) {
                if (add1 != 0) {
                    newArray[n++] = add1;
                    add1 = 0;
                    if (add2 != 0) {
                        newArray[n++] = add2;
                        add2 = 0;
                    }
                }
            }
        } else if (this.length > start + remove) {
            newArray[n++] = array[i];
        }
    }
    return newArray;
};


Curray.prototype.unshift = function() {

    var newArray = [];
    for (var i = 0; i < arguments.length; i++){
        newArray[i] = arguments[i];
    };
    for (var i = 0; i < this.length; i++){
        newArray[i + arguments.length] = this[i];
    };
    return newArray.length;
};


