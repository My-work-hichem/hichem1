//underbar
function cons(){
	debugger
	
	var flag=false
	
	function once(func){
		if(flag===false){
		flag=true
		 return func()
	}
	else{
		return "error"
	}
}
    return once
}










function extend(obj,arr){
	debugger
	

   for(var key in obj){
   	 for( var i=0;i<arr.length;i++){
   	 	var temp=arr.splice(i,1)
   	 	break
   	 }
   	  obj[temp]=obj[key]

   }
   return obj
}


function every(coll,func){
	for(var i=0;i<coll.length;i++){
		if(!func(coll[i])){
			return false
		}
	}
	return true
}

function contains(coll,tar){
	if(Array.isArray(coll)){
		for(var i=0;i<coll.length;i++){
			if(coll[i]===tar){
				return true
			}
		}
		return false
	}
	else{
		for(var key in coll){
			if(coll[key]===tar){
				return true
			}
		}
        return false
	}
}

function each(coll,func){
	if(Array.isArray(coll)){
		for(var i=0;i<coll.length;i++){
			func(coll[i],i,coll)
		}
	}
	else if(!Array.isArray(coll)){
		for(var key in coll){
			func(key,coll,coll[key])
		}
	}
}

function filter(coll,func){
	var acc=[]
	if(Array.isArray(coll)){
		for(var i=0;i<coll.length;i++){
			if(func(coll[i])){
				acc.push(coll[i])
			}
		}
	}
	
	return acc
}

function reject(coll,func){
	var acc=[]
	if(Array.isArray(coll)){
		for(var i=0;i<coll.length;i++){
			if(!func(coll[i])){
				acc.push(coll[i])
			}
		}
	}
	return acc
}

function reduce(coll,func,start){
	var acc=start
	for(var i=0;i<coll.length;i++){
		acc=func(acc,coll[i])

	}
    return acc

}

function map(coll,func){
   	if(Array.isArray(coll)){
   		var acc=[]
   		for(var i=0;i<coll.length;i++){
   			acc.push(func(coll[i],i))

   		}
   		return acc
   	}	
   	else {
   		var acc={}
   		for (var key in coll){
   			acc[key]=func(coll[key],key)
   		}
   		return acc
   	}
}

		
	


function first(coll,n){
	
	if(Array.isArray(coll)){
			if(n===undefined){
				return coll[0]
			}
			 else{
			 	return coll.splice(0,n)
			 }
    }
    else{
    	return "error"
    }
}

function last(coll,n){
	if(Array.isArray(coll)){
			if(n===undefined){
				return coll[0]
			}
			 else{
			 	return coll.splice(coll.length-n,coll.length-1)
			 }
    }
    else{
    	return "error"
    }
}


// closure review
function makeGetterSetter(){
	var acc
	function getterSetter(x){
		if((x===undefined)&&(acc===undefined)){
          return undefined
		}
		if(x){
			return acc=x

		}
		if(x===undefined){
			return acc
		}


	}
	return getterSetter
}

//assessment4

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArrays(arr1,arr2){
	var acc=[]
	var max=arr1
	var min=arr2
	if(arr2.length>arr1.length){
		max=arr2
		min=arr1
	}
	for (var i=0;i<min.length;i++){
		acc.push(min[i]+max[i])

	}
	for (var z=min.length;z<max.length;z++){
		acc.push(max[z]+1)
	}
	return acc
}

function addArrays1(arr1,arr2){
var acc=[]
	var max=arr1
	var min=arr2
	if(arr2.length>arr1.length){
		max=arr2
		min=arr1
	}
	var i=0
	while(i<min.length){
		acc.push(min[i]+max[i])
		i++
	}
	var z=min.length
	while(z<max.length){
		acc.push(max[z]+1)
		z++
	}	
	return acc
}

//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20
var acc=0
function posSum(arr){
	if(arr.length===0){
		return acc
	}
	else{
		acc=acc+arr[0]
		arr.splice(0,1)
	}
	return posSum(arr)

}

//I have a bucket of sloths. Each sloth is special and has a long name.
 // Below is an array called bucketOfSloths, containing all the information about my sloths.
 var bucketOfSloths = [
 {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2},
 {name: {first: "Slow", last: "Pumpkin"}, age: 3},
 {name: {first: "Bullet", middle: "Proof", last: "Sloth"}, age: 4},
 {name: {first: "Boos", middle: "Boos", last: "Bun"}, age: 5},
 {name: {first: "Jungle", last: "Fuzz"}, age: 2}
 ];
 
    // a- write a function fullName that takes index number and array as input and return the full name as string
    // fullName(bucketOfSloths,0) //==> "Furry Danger Assassin"
    function fullName(bucket,n){
    	
    	return bucket[n].name.first + " "+bucket[n].name.middle+ " "+ bucket[n].name.last
    }


    function val(obj){
    	acc=[]
    	for(var key in obj){
    		acc.push(obj[key])

    	}
    	return acc
    }


    function fullName1(arr,n){
    	debugger
    	var acc=""
    	for(var key in arr[n].name){
    		
    			acc=acc+arr[n].name[key]
    		

    	}
    	return acc
    }

    function longestName(arr){
    	var acc=[]
    	for(var i=0;i<arr.length;i++){
    		acc.push(fullName1(arr,i))

    	}
    	acc.sort(function(a,b){return b.length-a.length})
    	return acc[0]
    }

// toy problems
    //find the first non repeated caracter

    function nonRep(str){
    	debugger
    	
    	str=str.toLowerCase().split("")
    	  for(var i=0;i<str.length;i++){
    	  	var count=0
    	  	for(var z=i+1;z<str.length;z++){
    	  		if(str[z]==str[i]){
    	  			var count=count+1
    	  			str.splice(z,1)
    	  			z--
    	  			}
    	  		}
    	  		if (count===0){
    	  			return str[i]
                }
    	  	}

    }

    function isSubset(arr,sub){
    	debugger
    	var acc=[]
    	for(var i=0;i<arr.length;i++){
    		for(var z=0;z<sub.length;z++){
    			if(sub[z]===arr[i]){
    				acc.push(sub[z])
    			}
    		}
    	} 
    	for(var k=0;k<sub.length;k++){
    		if(sub.includes(acc[k])){
    			continue
    		}
    		else{
    			return false
    		}
    	}
    	return true
   }
    		

  var acc=[] 
  var count=0
function nthFib(n){
	if(count===0){
		count=count+1
		acc.push(0)	
		n=n-1
	}
	if(count===1){
        count=count+1
		acc.push (1)
		n=n-1
	}
	if(n===0){
		return acc
	}
	acc.push(acc[acc.length-1]+acc[acc.length-2])
	n=n-1
	return nthFib(n)



}


function fib(n){
	var acc=[]
	for(var i=0;i<n;i++){
		if(i===0){
          acc.push(0)
		}
		else if(i===1){
		 acc.push(1)
		}
		else{
			acc.push(acc[acc.length-1]+acc[acc.length-2])
		}
		
    }
		return acc
	
}


function commonCar(str,str1){
	var acc=[]
	var str=str.split("")
	var str1=str1.split("")
	for(var i=0;i<str.length;i++){
		var count=0
		for(var z=0;z<str1.length;z++){
			if(str1[z]===str[i]){
                if(count>0){
                	str1.splice(z,1)
                	z--
                }
                else{
				acc.push(str1[z])
				count=count+1
				str1.splice(z,1)
				z--
			    }
			}
		}
    }
	
	return acc.join("")
		
}
		 
 ////////////////////////////////////////////////////////////////////////////////////

// .prototype methods

//var Bee = function() {
//	Grub.call(this);
//	this.age = 5;
//	this.color = 'yellow';
//	this.job = 'keep on growing';
//};
//Bee.prototype=Object.create(Grub.prototype) 
//Bee.prototype.constructor=Bee 


//var ForagerBee = function() {
//	Bee.call(this);

//	this.age=10;
//	this.job='find pollen';
//	this.canFly =true;
//	this.treasureChest=[];	
//}; 

//ForagerBee.prototype=Object.create(Bee.prototype)
//ForagerBee.prototype.constructor=ForagerBee
//ForagerBee.prototype.eat=function(treasure){
//	return this.treasureChest.push(treasure)
//}

//var Grub = function() {
//	this.age = 0;
//	this.color = 'pink';
//	this.food = 'jelly';
//};
//Grub.prototype.constructor=Grub

//va//r HoneyMakerBee = function() {
//	Bee.call(this);
//	this.age = 10;
//	this.job = 'make honey';
//	this.honeyPot = 0;
//};
//HoneyMakerBee.prototype=Object.create(Bee.prototype)
//HoneyMakerBee.prototype.constructor=HoneyMakerBee

 //- Write an Airplane constructor that initializes `name` from an argument.
   // - All airplanes built with Airplane should initialize with an `isFlying` of false.
    //- Give airplanes the ability to `.takeOff()` and `.land()`:
      //  + If a plane takes off, its `isFlying` property is set to true.
        //+ If a plane lands, its `isFlying` property is set to false.
    	

    var MakeAirplane=function(name1){
    	AirPlane=Object.create(MakeAirplane.prototype)
    	AirPlane.name=name1
    	AirPlane.isFlying=false
    	return AirPlane
    }

    MakeAirplane.prototype.takeOff=function(){
    	return this.isFlying=true
    }

    MakeAirplane.prototype.land=function(){
    	return this.isFlying=false
    }


   var constrac=function(noun){
   	this.name=noun
   	this.isflying=false

   }

   constrac.prototype.takeoff=function(){
   	return this.isflying=true
   }
   constrac.prototype.land=function(){
   	return this.isflying=false
   }

class airCraft{
	constructor(name){
		this.name=name
		this.isFlying=false
	}
	takeoff(){
		return this.isFlying=true
	}
	land(){
		return this.isFlying=false
	}
}

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
var person=function(name,age){
	this.name=name
	this.age=age
	this.stomach=[]
}

person.prototype.eat=function(someFood){
	if(this.stomach.length<10){
	return this.stomach.push(someFood)
}
}
person.prototype.poop=function(){
	return this.stomach.splice(0,this.stomach.length)
}
person.prototype.fullInf=function(){
	return this.name+ " "+this.age
}

class personBis{
	constructor(name,age){
		this.name=name
		this.age=age
		this.stomach=[]
	}
	eat(someFood){
	if(this.stomach.length<10){
	return this.stomach.push(someFood)
    }
    }
   poop(){
	return this.stomach.splice(0,this.stomach.length)
    }
    fullInf(){
	return this.name+ " "+this.age
    }
}

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/
class car{
	constructor(model,milesPerGalon){
		this.model=model
		this.milesPerGalon=milesPerGalon
		this.tank=0
		this.odometer=0
	}
	fill(galon){
		return this.tank=this.tank+galon
	}
	drive(distance){
		if(this.tank>=(distance*this.milesPerGalon)){
           this.tank=this.tank-(distance*this.milesPerGallon)
           this.odometer=this.odometer+distance
		}
		else{
		return 	"you dont have enough fuel"
		}

	}

}


var makeCar=function(model,milesPerGalon){
	debugger
	this.tank=0
	this.odometer=0
	this.model=model
	this.milesPerGalon=milesPerGalon
}
makeCar.prototype.fill=function(galon){
	return this.tank=this.tank+galon
}
makeCar.prototype.drive=function(distance){
	//var acc=[]
	if(this.tank>=distance*this.milesPerGalon){
	this.tank=this.tank-(distance*this.milesPerGalon)
	this.odometer=this.odometer+distance
	//acc.push(this.tank,this.odometer)
	//return acc
    }
    else{
    	return "I run out of fuel at "+ " "+ this.odometer
    }
}


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
class baby extends personBis{

	constructor(name,age,favoriteToy){
		debugger
		super(name,age)
		this.favoriteToy=favoriteToy

	}
	play(){
		return this.name+ " " +"play with" +" "+this.favoriteToy
	}

}


var makeBaby=function(favoriteToy){
	person.call(this)
	this.favoriteToy=favoriteToy
}
makeBaby.prototype=Object.create(person.prototype)
makeBaby.prototype.constructor=makeBaby
makeBaby.prototype.play=function(){
	return this.name + "play with" + this.favoriteToy
}