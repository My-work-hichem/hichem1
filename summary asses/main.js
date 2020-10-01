//1
function makeIncrementer(x){
	function incrementer1(){
		return x=x+1
	}
	return incrementer1
}



function makeinc(x){
	var inc={}
	inc.init=x
	inc.incrementer=incrementer
	return inc
}
var incrementer=function(){
	return this.init=this.init+1
}

//2

function makeSen(sent){
	function sentence(newSent){
		if(sent===undefined){
			return newesent

		}
		return sent=sent+ " " +newSent
	}
	return sentence
}


function makeSen1(sent){
	acc={}
	acc.sent=sent
	acc.add=add
	return acc
}
add=function(newSent){
	return this.sent=this.sent+" "+newSent
}

var result=[]
function getStringValues(obj) {
    for (var key in obj) {
        var value = obj[key];
        if(typeof value==='string'){
        	result.push(value)
        }
        else if (typeof value === 'object') {
            getStringValues (value); // <- recursive call
        }
        
    }
    return result;
}

  var sum=0
 function sumNumericValues(obj){
 	for(var key in obj){
 		var value=obj[key]
 		if(typeof value==="number"){
 			sum=sum+value
 		}
 		else if(typeof value==="object"){
 			sumNumericValues(value)

 		}
    }
    return sum
}
var acc=""
function repeatString(str,n){
	if(n===0){
		return acc
	}
	acc=acc+str
	var n=n-1
    return repeatString(str,n)
}
var count=0
var acc=0
function zeta(min,max){
	if( max===0){
		return acc
	}
	acc=acc+(1/(max**min))
	 max=max-1
    return zeta(min,max)

	}

var z={names:[{mother:"aaa"},{father:"bbbb"}],
       ages:[60,50]
       }

function makeAccount(){
	var account={}

	account.dateOfCreation=new Date()
	account.name=""
	account.balance=0
	account.addBalance=addBalance
	account.withdrawBalance=withdrawBalance
	
	account.numberOfDeposits=0
	account.numberOfWithdrawals=0
	account.SetAccountName=SetAccountName
	return account

}



var addBalance=function(number){
	var acc=[]
    this.numberOfDeposits=this.numberOfDeposits+1
	 this.balance=this.balance+number
	acc.push(this.numberOfDeposits,this.balance)
    return acc

}
var withdrawBalance=function(number1){
	var acc1=[]
	this.numberOfWithdrawals=this.numberOfWithdrawals+1
	this.balance=this.balance-number1
	acc1.push(this.numberOfWithdrawals,this.balance)
	return acc1

}
var SetAccountName=function(name1){
	return this.name=this.name + name1
}


function call(){
	var callMeNow={}
	callMeNow.callMe=callMe
	return callMeNow

}
var callMe=function(){
	alert("hi")
}


//var callMeNow1={
//	callMe1:function(){
//		 alert("2 seconds passed")}
//	Time:setTimeout(this.callMe1,2000)

//}

function callMeNow2(){
	function callMe2(){
		alert("hi")
	}
	return callMe2
}


function someoneSays(obj,str){
	return obj.name + " "+str
}

var acc=[]
function flatten(arr){
	debugger
	for(var i=0;i<arr.length;i++){
		if(typeof arr[i]==="number"|| typeof arr[i]==="string" ){
			acc.push(arr[i])
		}
		if(Array.isArray(arr[i])){
			 flatten(arr[i])
		}
	}
	return acc
}

//underscore

 function indexof(arr,n){
 	debugger
 	for(var i=0;i<arr.length;i++){
 		if(arr[i]===n){
 			return i
 		}
 		
 	}
 	return -1
 }




function zip(arr1,arr2){
	var x=arr1.toString().split(",")
	var z=arr2.toString().split(",")
	for(var i=0;i<x.length;i++){
		x[i]=parseInt(x[i])
	}
	for(var k=0;k<z.length;k++){
		z[k]=parseInt(z[k])
	}
	var max=z
	var min=x
	if(x.length>z.length){
		max=x
		min=z
	}
	var acc=[]
	for (var w=0;w<max.length;w++){
		acc.push([max[w],min[w]])
	}
	return acc

	}
   
    
   var flatt=function(){
   	debugger
   	var acc1=[]
   	function f(arr){
   	
   	for(var i=0;i<arr.length;i++){

   		if(Array.isArray(arr[i])){
   		 f(arr[i])
   		}
   		else{
   			
   			 acc1.push(arr[i])
   		}
   	}
       return acc1
   	}
   	return f
   }

   



   function zip1(arr1,arr2){
   	debugger
   	var acc=[]
   	var f=flatt()
   	var z=f(arr1)

   	var f=flatt()
   	var x=f(arr2)

   	var max=z
   	var min=x
   	if(z.length<x.length){
   		max=x
   		min=z
   	}
   	for(var i=0;i<max.length;i++){
   		acc.push([max[i],min[i]])


   	}
   	return acc
   	}

function makeFetchAndSet(){
	var acc
	function fetchAndSet(x){
		if((acc===undefined)&&(x===undefined)){
		
			return "value not set"
		}
		if(x===undefined){
			return acc
		}
		else{
			return acc=x
		}
     
	}
	return fetchAndSet
}
   


	
	


 

	
	

			

		

	
