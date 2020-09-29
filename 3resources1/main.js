//functions
//1
function inverse(num){
	var acc=[]
	var x= num.toString().split("")
	for (var z=x.length-1;z>=0;z--){
		acc.push(x[z])

	}
     
	return acc.join("")

}
//2
function palindrome(str){
	debugger
	var acc=[]
	for(var i=str.length-1;i>=0;i--){
		acc.push(str[i])

	}
	z=acc.join("")
	if(z===str){
		return true
	}
	false
}

//4
//function alphaorder(str){
	//var alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

	//for(var i=0;i<alpha.length;i++){

	//}

function alpha(str){
	var x=str.split("")
	x.sort()
	var z=x.join("")
	return z
}

//5
function upperCase(str){
	debugger
	z=str.split("")
	z[0]=z[0].toUpperCase()
	for(var i=1;i<z.length;i++){
		if(z[i-1]===" "){
		
			z[i]=z[i].toUpperCase()
		}

	}
	x=z.join("")
	return x
}

//6
function longestword(str){
	var x=str.split(" ")
	x.sort(function(a,b){return b.length-a.length})
	return x[0]
}

//7
function vowels(str){
	var x=str.split("")
	var vow=["a","e","i","o","u","w"]
	var count=0
	for(var i=0;i<x.length;i++){
		for(var z=0;z<vow.length;z++){
			if(x[i]===vow[z]){
				count=count+1
			}
		}
	}
	return count
}

//8
function prime(num){
	if(num===0){
		return false
	}
	else if(num===1){
		return true
	}
	else if(num===2){
		return true
	}
	else{
		for( var i=2;i<num;i++){
			if((num%i)===0){
				return false
			}
		}
	return true
}
		}
	
//9
function type(x){
	z=typeof x
	return z
}

//10
function identity(arr){
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr.length;j++){
			if((i!==j)&&(arr[i][j]!==0)||(i===j)&&(arr[i][j]!==1)){
				return  false
			}
		}
	}
	return true
}

//11
function sortbis(arr){
	arr.sort(function(a,b){return a-b})
	console.log(arr[1])
	console.log(arr[arr.length-2])
}

//12
function perfect(n){
	debugger
	var acc=[]
	for(var i=0;i<n;i++){
		if(n%i===0){
			
			acc.push(i)
		}
	}
	var total=0
	for(var z=0;z<acc.length;z++){
		total=total+acc[z]

	}
	if(total!==n){
		return false
	}
	return true
}

//16
function duplicate(str){
	debugger
	var x=str.split("")
	for(var i=0;i<x.length;i++){
		for(var z=i+1;z<x.length;z++){
			if(x[z]===x[i]){
				x.splice(z,1)
				z--
			}
		}
	}
		var k=x.join("")
		return k
}

//17
function occurences(str){
	var acc={}
	var x=str.split("")
    for(var i=0;i<x.length;i++){
    	var count=0
    	for(var z=i+1;z<x.length;z++){
    		if(x[z]===x[i]){
    			count=count+1
    			x.splice(z,1)
    			z--
    		}
    	}
    	    
                acc[x[i]]=count+1   	    
    		   x.splice(i,1)
    	       i--
    		    


    	}
    	
    
     return acc
}

//19
function larger(arr,n){
	debugger
	var acc=[]
	for(var i=0;i<arr.length;i++){
		if(arr[i]>n){
			acc.push(arr[i])
		}
		
	}
return acc

}

//22
function occ(arr,char){
	var count=0
	for(var i=0;i<arr.length;i++){
		if(arr[i]===char){
			count=count+1
		}
	}
	return count
}
//23
function firstnotrep(str){
	var x=str.split("")
	for(var i=0;i<x.length;i++){
		var count=0
		for(var k=i+1;k<x.length;k++){
			if(x[k]===x[i]){
				count=count+1
			}
		}
		if(count===0){
			return x[i]
		}
		
}

}

		
//24
function sor(arr){
	arr.sort(function(a,b){return a-b })
	var acc=[]
	for(var i=arr.length-1;0<=i;i--){
		acc.push(arr[i])

	}
	return acc
}	

//25 
function sorr(arr){
	arr.sort(function(a,b){return b.length-a.length})
	return arr[0]

}

//26

function longg(str){
	debugger
	var acc=[]
	for(var i=0;i<str.length;i++){
		var substr=""
		for(var z=i;z<str.length;z++){
			if(substr.includes(str[z])===false){
				substr=substr+str[z]
			}
			else{
				break
			}
		}
			acc.push(substr)

		}

		acc.sort(function(a,b){return b.length-a.length})
		return acc[0]
	}

//27

function palindromicSub(str){
	var acc=[]
for(var i=0;i<str.length;i++){
	var substr=""
	for(var k=i;k<str.length;k++){
		substr=str[k]+substr
		if(substr===str.substring(i,k+1)){
			acc.push(substr)
		}
		else{
			continue
		}
		
	}



		}
           acc.sort(function(a,b){return b.length-a.length})
		return acc[0]
	}

//29 
function getfuncname(str){
	var z=str.substring(0,8)
	var w=str.substring(str.indexOf("("),str.length+1)
	var y=str.substring(8,str.indexOf("("))
	return y
}

//loops and conditions

//1
function larger(num1,num2){
	var x=num1.toString()
	var z=num2.toString()
	if(x.length>z.length){
		return num1
	}
	return num2
}

//2
function product3num(num1,num2,num3){
     var x=num1*num2*num3
     if(x>0){
     	return "+"
     }
     return "-"
    }

//3
function sorT(num1,num2,num3){
	acc=[]
	acc.push(num1)
	acc.push(num2)
	acc.push(num3)
	acc.sort(function(a,b){return a-b})
	acc.join("")
	return acc
}

function sorTT(num1,num2,num3){
	debugger
	var acc=[num1,num2,num3]
var acc1=[]
for(var i=0;i<acc.length;i++){
	var max=acc[0]
	for (var k=0;k<acc.length;k++){
		if(max<acc[k]){
			max=acc[k]
		}
	}
		   acc1.push(max)
		   acc.splice(acc.indexOf(max),1)
		   i--

	}
	return acc1
}

//5
function rangecheck(num){
	for(var i=0;i<num;i++){
		if(i%2===0){
			console.log(i+"even")
		}
		console.log(i+"odd")
	}
}

//7
function range(){
	var x=[1,100]
for(var i=1;i<=100;i++){
	if((i%3===0)&&(i%5===0)){
		console.log ( i+"  isfuzzBuzz")
	}
	else if((i%3!==0)&&(i%5===0)){
		console.log( i +" is Buzz")
	}
	else if((i%3===0)&&(i%5!==0)){
		console.log(i +" is fuzz")
	}
}
}

//8
function red(num){
	debugger

while(num.toString().split("").length>1){
	num=num.toString().split("").reduce((tot,element)=>{return tot+(parseInt(element)*parseInt(element))},0)
}
return num
}

//9
function cube(x){
	return x*x*x

}

function armstrong(num){
	var z=num.toString()
	var total=0
	for(var i=0;i<z.length;i++){
		total=total+cube(parseInt(z[i]))

	}
	if(total===num){
		return true
	}
	return false

}

//10

function draw(){
	var count=""
	for(var i=1;i<6;i++){
		count=count+"*"
		console.log(count)

	}
}

function GCD(x,y){
	debugger
	acc1=[]
	acc2=[]
  for(var i=1;i<=x;i++){
  	if(x%i===0){
  		acc1.push(i)
  	}
  }
  for(var z=1;z<=y;z++){
  	if(y%z===0){
  		acc2.push(z)

  	}
  }
  var arr=[]
  for(var q=0;q<acc1.length;q++){
  	for(var k=0;k<acc2.length;k++){
  		if(acc2[k]===acc1[q]){
  			arr.push(acc1[q])
        }
    }
}
     return Math.max(...arr)
}
  		
//array

//1
function check(x){
	if(Array.isArray(x)){
		return true
	}
	else{
		return false
	}
}
		
//2
function clone(arr){
z=arr.map(element=>element)
return z
}
//3
function nFirst(arr,i){
	var acc=[]
	for(var z=0;z<i;z++){
		acc.push(arr[z])

	}
	return acc
}

//4
function nLast(arr,i){
	var x=arr.splice(arr.length-i,arr.length)
	return x
}

//5
function str(arr){
	var x=arr.join(",")
	return x
}

//6
function dash(num){
	debugger
	var acc=[]
	var x=num.toString().split("")
	x.forEach((element,i)=> {
		if(i===0){
			acc.push(element)
		}
		
		if((element%2===0)&&(x[i-1]%2===0)){
			acc.push("-",element)
		}
		if(element%2!==0){
			acc.push(element)
		}
		
		
	})
	return acc.join("")

		
}

//7
function sor(arr){
	var acc=[]
	for(var i=0;i<arr.length;i++){
	var z=Math.max(...arr)
	acc.push(z)
	arr.splice(arr.indexOf(z),1)
	i--
} 
    return acc
}

//8
function mostApp(arr){
	debugger
	
	var acc={}
	for(var i=0;i<arr.length;i++){
    var count=1
		for(var z=i+1;z<arr.length;z++){
			if(arr[z]===arr[i]){
				count=count+1
				arr.splice(z,1)
				z--

			}


		}
		acc[arr[i]]=count
		//arr.splice(i,1)
		//i--
}

	 var max=0
	 var element=""
	for( var key in acc){
		
		if(max<acc[key]){
			max=acc[key]
			element=key
		}
	}
	return element + ":"+ max

}

//9
function toCase(str){
	//var str=str.split("")
	acc=""
	for(var i=0;i<str.length;i++){
		if(str[i]==str[i].toUpperCase()){
			
			acc=acc+str[i].toLowerCase()
		}
		else{
			acc=acc+str[i].toUpperCase()
		}

	}
	return acc
}

//10
function printFirst(arr){
  for(var k=0;k<arr.length;k++){
  	    console.log("row"+k)
	for(var i=0;i<arr[k].length;i++){
		console.log(arr[k][i])
	}
}
}

//12
function sumProd(arr){
	var prod=1
	var somme=0
	for(var i=0;i<arr.length;i++){
		prod=prod*arr[i]
		somme=somme+arr[i]
	}
	return somme + " "+prod
}

//14
function removeDup(arr){
	for(var i=0;i<arr.length;i++){
		for(var z=i+1;z<arr.length;z++){
			if(arr[z]===arr[i]){
				arr.splice(z,1)
			    z--
			}
			}
		}
		return arr
	}

//15
function match(color,o){
    var color=["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
    var o = ["th","st","nd","rd"]

for(var i=0;i<color.length;i++){
	if(i===0){
		console.log (color[i] + " " + o[1])
	}
	else if(i===1){
		console.log (color[i]+ " "+o[2])
	}
	else if(i===2){
		console.log (color[i]+ " "+o[3])
	}
	else{
		console.log (color[i]+ " "+o[0])
	}
	
}
}

//17
function shuffle(arr){
	debugger
	var acc=[]
	for(var i=0;i<arr.length;i++){
		var k=Math.floor(Math.random() * arr.length)
		acc.push(arr[k])
		arr.splice(k,1)
		i--


	}
	return acc
}

//19
function indVal(arr1,arr2){
	var max=arr1
	var min=arr2
	if(arr2.length>arr1.length){
		max=arr2
		min=arr1
	}
	var acc=[]
	
	for(var i=0;i<min.length;i++){
		acc.push(min[i]+max[i])


	}
	for(var z=min.length;z<max.length;z++){
		acc.push(max[z])
	}
    return acc
}		

//20
function dup(arr){
	debugger
	var acc={}
	for(var i=0;i<arr.length;i++){
		var count=0
		for(var z=i+1;z<arr.length;z++){
			if(arr[z]===arr[i]){
				count=count+1
				arr.splice(z,1)
				z--
			}
		}
		acc[arr[i]]=count
	}
	
      return acc
	}

//21
function flatten(arr){
	var x=arr.toString().split(",")
	for(var i=0;i<x.length;i++){
		if(isNaN(x[i])){
			x[i]=x[i]
		}
		 else{ x[i]=parseInt(x[i])

		 }
	}
	return x
}

function flatten1(arr){
	var i=0
	while(i<arr.length){
		arr=arr.reduce((acc,element)=>{return acc.concat(element)},[])
	    i++	
	}
	return arr
}

//22
function union(arr1,arr2){
	debugger
	var x= arr1.concat(arr2)
	for(var i=0;i<x.length;i++){
		for(var z=i+1;z<x.length;z++){
			if(x[z]===x[i]){
				x.splice(z,1)
				z--

			}
		}
	}
	  return x
}

//23
function one(arr1,arr2){
	
	var x=arr1.concat(arr2)
	for(var i=0;i<x.length;i++){
		var count=0
		for(var z=i+1;z<x.length;z++){
			if(x[z]===x[i]){
				x.splice(z,1)
				z--
				count=count+1
			}
		}
		if(count>0){
		x.splice(i,1)
		i--
	}

	}
	return x

}

//24
function sOR(arr){
	var z =arr.sort(function(a,b){return a.title<b.title})

	return z

}

//26
function ind(arr,num){
	debugger
	acc=[]

for(var i=0;i<arr.length;i++){
	for(var z=i+1;z<arr.length;z++){
		if(arr[z]+arr[i]===num){
			acc.push([i,z])
		}
	}
}
	return acc
}


//30
function merg(arr1,arr2){
	var x=arr1.concat(arr2)
	for(var i=0;i<x.length;i++){
		for(var z=i+1;z<x.length;z++){
			if(x[z]===x[i]){
				x.splice(z,1)
				z--
			}
		}
	}
	return x
}

//31
function rem(arr,num){
	for(var i=0;i<arr.length;i++){
		if(arr[i]===num){
			arr.splice(i,1)
			i--
		}
	}
	return arr
}

//32 
function cont(arr,num){
	if(arr.includes(num)){
		return true
	}
	return false
}

//34

function nth(arr,numb){
	arr.sort(function(a,b){return b-a})
	return arr[numb-1]
}

//35

function rand(arr){
	var z= Math.floor(Math.random() * Math.floor(arr.length))
	 return arr[z]
}

//36

function fill(num,n){
	var acc=[]
	for(var i=0;i<n;i++){
		acc.push(num)

	}
	return acc
}

//37

function move(arr,n1,n2){
	var arr1=arr.map(element=>element)
	arr[n1]=arr[n2]
	arr[n2]=arr1[n1]
	return arr
}

function move1(arr,n1,n2){
	debugger
    var arr1=arr.map(element=>element)
    var acc=[]
    var z=arr.splice(n1,1)
    var k=z[0]
		for(var i=0;i<arr1.length;i++){
			if(i===n2){
				acc.push(k)
			}
			 else{
			 	acc.push(arr[i])
			 }

		}
		return acc
}

//40

function ran(num,inc){
	var acc=[]
	for(var i=0;i<inc;i++){
		num=num+1
		acc.push(num)
	}
	return acc
}

//41
function ran1(num1,num2){
	debugger
	var acc=[]
	var max=num1
	var min=num2
	if(num1<num2){
		max=num2
		min=num1
	}
	
	for(var i=min;i<=max;i++){
		acc.push[i]
	}
	return acc
}
 
//42

function uniq(arr1,arr2){
	debugger
	
	var x=arr1.concat(arr2)
	for(var i=0;i<x.length;i++){
		var count=0
		for(var z=i+1;z<x.length;z++){
			if(x[z]===x[i]){
				count=count+1
				x.splice(x[z],1)
				z--
			}
		}
		if(count>0){
			x.splice(x[i],1)
			i--
		}
	}

      return x
}

function uniq1(arr1,arr2){
	debugger
	var acc=[]

	for(var i=0;i<arr1.length;i++){
		var count1=0
		for(var z=0;z<arr2.length;z++){
			if(arr2[z]===arr1[i]){
				count1=count1+1
				break
			}
			

		}
		if(count1===0){
		acc.push(arr1[i])
	    }
	}
	for(var k=0;k<arr2.length;k++){
		var count2=0
		for(var s=0;s<arr1.length;s++){
			if(arr1[s]===arr2[k]){
				count2=count2+1
				break
			}
			
		}
		 if(count2===0){
		acc.push(arr2[k])
	    }
	}
	return acc
}
	

function uni(arr1,arr2){
	for(var i=0;i<arr1.length;i++){
		for(var z=i+1;z<arr1.length;z++){
			if(arr1[z]===arr1[i]){
				arr1.splice(arr1[z])
				z--
			}
		}
	}

    for(var k=0;k<arr2.length;k++){
    	for(var s=k+1;s<arr2.length;s++){
    		if(arr2[s]===arr2[k]){
    			arr2.splice(arr2[s])
    			s--
    		}
    	}
    }
			
    var x=arr1.concat(arr2)

    for(var q=0;q<x.length;q++){
    	var count=0
    	for(var w=q+1;w<x.length;w++){
    		if(x[w]===x[q]){
    			count=count+1
    			x.splice(w,1)
    			w--
    		}
    	}
    	if(count>0){
    	x.splice(q,1)
    	q--
        }
    }
	return x
}

		
//objects

//1
function objectKeys(obj){
	var acc=[]
	for(var key in obj){
		acc.push(key)
	}
	return acc
}

function objectK(obj){
	//return Object.getOwnPropertyNames(obj)
	return Object.keys(obj)
}    

//2
function delet(obj){
	delete obj.rollno
	return obj
}

//3
function keysLength(obj){
	return Object.keys(obj).length
}

function keysLength1(obj){
	var count=0
	for(var key in obj){
		count=count+1

	}
	return count
}

//4

function display(arr){
	var disp=""
	for(var i=0;i<arr.length;i++){
		if(arr[i].readingStatus===true){
          disp=disp+arr[i].author+ " "+ arr[i].title+ " "+ arr[i].readingStatus + " "+"\n"
        }
    }
    return disp
}

//5
 function Vol(rad1,height1){
 	debugger
 	cylinder = {}
	cylinder.volume=volume
	cylinder.height=height1
	cylinder.radius=rad1
	return cylinder
}

var volume=function(){
	debugger
    return this.volume=this.radius*3.14*this.radius*this.height
}

//9

function are(rad1){
	cyrcle={}
	cyrcle.rad=rad1
	cyrcle.area=area
	return cyrcle
}

var area=function(){
	return this.area=this.rad*3.14*2
}

//14
function getval(arr){
	var acc=[]
	for(var i=0;i<arr.length;i++){
     acc.push(Object.values(arr[i]))
 
	}
	
    return acc
}

function mod(arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i].libraryID<2000){
			delete arr[i].libraryID
		}
	}
	return arr
}
	
		
function del2ndauthor(arr){
	debugger
	for(var i=0;i<arr.length;i++){
		if(Array.isArray(arr[i].author)){
			arr[i].author.splice(0,1)
			i--
		}
	}
	return arr
}

//15

function pair(arr){
	var acc=[]
	for(var i=0;i<arr.length;i++){
		for(var key in arr[i]){
			acc.push([key,arr[i][key]])


		}
	}
	return acc
}

//16
function rev(obj){
	var acc={}
	for(var key in obj){
		acc[(obj[key])]=key
	}
	return acc
}

function rev1(arr){
	var acc=[]
	for(var i=0;i<arr.length;i++){
		acc1={}
		for(var key in arr[i]){
			acc1[arr[i][key]]=key
			
		}
		acc.push(acc1)
	}
	return acc
}

//17
function prop(obj,key){
	return obj.hasOwnProperty(key)
}

//recursion

//1
function factorial(n){
	var prod=1
	 if(n===1){
	 	return 1

	 }
	 
  return	 n*factorial(n-1) 
}

//2
function lar(a,b){
	debugger
	var acc1=[]
	var acc2=[]

	for(var i=1;i<=a;i++){
		if(a%i===0){
			acc1.push(i)
		}
	}
	for(var z=1;z<=b;z++){
		if(b%z===0){
			acc2.push(z)
		}
	}
	var arr=[]
	for(var x=0;x<acc1.length;x++){
		for(var y=0;y<acc2.length;y++){
			if(acc2[y]===acc1[x]){
				arr.push(acc2[y])
			}
		}
	}
	 arr.sort(function(a,b){return b-a})
	 return arr[0]
}   

//function lar1(a,b){
//	if(a===1 && b===1){
//		return 1
//	}

//}


var gcd = function(a, b) {
	debugger
	return b === 0 ? a : gcd( b, a % b )
} 

//3

function range(a,b){
	var acc=[]
	if(a===b-2){
		acc.push(a+1)
	}
    b=b-1
	acc.push(b)
    
    return range(a,b)
}


var arr = [];
function range1(x, y) {
if (x + 1 == y)
return arr;
arr.push(++x);
return range1(x, y);
}

var prod= 1
function fac(n){
	if(n===1){
		return prod
	}
prod=prod*n
n=n-1
return fac(n)
}

var acc=[]
var count=0
function gcd1(x,y){
	debugger

	 var max=y
	 if(y<x){
	 	max=x
	 }

	 var i=max-count

       
	   if(i===1){
		    acc.sort(function(a,b){return b-a})
		     return acc[0]
	        }
	    
	    if((x%i===0)&&(y%i===0)){
	    	
		acc.push(i)
		count=count+1
	    }
		 
	
	    else{
	    count=count+1
	    }


   return gcd1(x,y)
}

var acc=""
function repStr(str,n){
	if(n===0){
		return acc
	}

	acc=acc+str

	var n=n-1
	return repStr(str,n)

}

//5

var tot=1
function exp(b,e){
	if(e===0){
		return tot
	}
	tot=tot*b
	e=e-1
	return exp(b,e)

}

//6

var acc=[]
var count=0
function fib(n){

	debugger
	
	if(n===0){
		return acc
	}
	if( count===0){
		acc.push(0)
		n=n-1
		count=count+1
	}
	if(count===1){
		acc.push(1)
		n=n-1
		count=count+1
	}
	else{
		acc.push(acc[acc.length-1]+acc[acc.length-2])
		n=n-1
		count=count+1
	}

	return fib(n)
	
}

//7

function even(n){
	if(n===0){
		return "even"
	}
	if(n===1){
		return "odd"
	}
	n=n-2
	return even(n)
}

//6
function search(arr,n){
	if(arr[0]===n){
		return arr[0]
	}
	if(arr[arr.length-1]!==0){
		return "not found"
	}
	arr.shift()
	return search(arr,n)

}

//9 to do

//regular exp

//1
function upper(str){
	return /^[A-Z]/.test(str)
}

//2
function credit(str){
	return /\d{4}-\d{4}-\d{4}-\d{4}/.test(str)
}

//3

     



