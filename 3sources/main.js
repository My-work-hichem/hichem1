function rotate(str){
	
	var rt=""
	var x= str.length-1
	for(var i=x;i>=0;i--){

      rt= rt + str[i]     
      console.log(str[i])
	}

	
}


	
//13
function guess(num){

	

	var x=Math.ceil(Math.random() * 10)
	  
	
	if(num===x){
		return "guessed rigth number"

	}
	 else{
	 	return "guess again"
	 }
}


//15
function extension(name){
	debugger
	var x=name.indexOf(".")

	return name.slice(x)

}

filename = "abc.js"
console.log(filename.split('.').pop());

//16

function sum(x,y){
	if(x!==y){
		return x+y
	}
	else{
		return (x+y)*3
	}
}

//18

function diff(x){
	if(x>19){
		return 3*(x-19)
	}
}
//19

function add(str){
	debugger
  if(str[0]==="p" && str[1]==="y"){
  
 return str
}
}

//22
function removeChar(str,pos){
	
	var x=str.substring(0,pos)
	var y=str.substring(pos+1,str.length)
	return x+y


}
//23
function change1standlast(str){

	var x=str.slice(0,1)
	var y=str.slice(str.length-1,str.length)
	var z=str.slice(1,str.length)

	return y+z+x



}

//26
function add3last(str){
	debugger
	var x=str.slice(str.length-3,str.length+1)
	return x+str+x

}

//27

function strtswithjava(str){
	if(str.substring(0,4)==="java"){
	 return true
}
     return false
    }

 //28

 function range5099(num1,num2){
 	if(50<=num1<=99 || 50<=num2<=99){
 		return true
 	}
 }

 //30

 function java(str){
 	debugger
 	z=str.split(" ")
 	x=z.indexOf("java")
 	if(x===true){
 		y=z.slice(0,x)
 		y1=y.join(" ")
 		w=z.slice(x+1,z.length-1)
 		w1=w.join(" ")
 		return y1+w1
        
 	} 
 	 return str
 }

 //31

 function maxval(a,b,c){
 	var max=a
 	if(max<b){
 		max=b
 	  }
 	  else if(max<c){
 	  	max=c
 	  }
 	  return max

 }



 function a(arr1,arr2){
 	debugger
 	var acc=[]
 	if(arr1.length===arr2.length){
 		for (var i=0; i<arr1.length;i++){
 			acc.push(arr1[i]+arr2[i])
 		}
 	}

 	else if(arr1.length>arr2.length){
        for(var i=0; i<arr2.length;i++){
 		
 			acc.push(arr1[i]+arr2[i])
 		}
 			var arr1slice=arr1.slice(arr2.length , arr1.length)
 			    var x = arr1.length-arr2.length
                for (var i=0;i<x;i++){
                	acc.push(arr1slice[i]+1)

                }
    }


    return acc
 		

}

 function aa(arr1,arr2){
 	acc=[]
 	max=arr1.length
 	if(max<arr2.length){
 		max=arr2.length
 	}
 	
 	for(var i=0; i<max;i++){
 		acc.push([arr1[i],arr2[i]])
 	}
 

 	return acc
 }

 //35

 function find(str,car){
 	for(var i =2;i<5;i++){
       if (str.charAt(i)===car)
       	return true
 	}
 }

 //36

 function lastdigit(num1,num2,num3){
 	a=num1.toString()
 	b=num2.toString()
 	c=num3.toString()
    
    if(a.charAt(a.length-1)===b.charAt(b.length-1)===c.charAt(c.length-1)){
    	return true
    }

 }


//37
function upper(str){
	if(str.length>3){
		x=str.substring(0,3).tolowerCase()
		y=str.substring(3,str.length).toupperCase()
		return x+y
	}else
	   return str.toupperCase()
	
}

//40

function eigth(a,b){
	if(a===8 || b===8 || Math.abs(a-b)===8 || a+b===8)
		return true

}

//41 

function same(a,b,c){
	if(a===b && b===c){
		return 40
	}
	else if(a===b || b===c || a===c){
		return 20
	}

	}
 //60 
 function without(str1,str2){
 	a=str1.slice(1,str1.length+1)
 	b=str2.slice(1,str2.length+1)
 	return a+b

 }

 //59
 function firsthalfeven(str){

 var acc=" "
 
 var x= str.length
 var y=Math.floor(str.length/2)
 var z=str.slice(0,y+1)

 for( var i=0; i<z.length; i++){
 	if(i%2===0){

    acc=acc+z[i]
 	} 

 }
 	 return acc
 }

//68

function calculatetotal(arr){
	var total=0
	for(var i= 0; i<arr.length;i++){
		total=total+arr[i]
	}
	return total
}

//70
	  			
	  			
	  			
 
function rot(arr){
	debugger

	arr.push(arr.shift())
}

function reverse(arr) {
	
arr.unshift(arr.pop())

return arr;
}


function rot1(arr){ // rigth
	debugger
	acc=[]
	for(var i=0; i<arr.length;i++){
		if(i===arr.length-1){
			acc.unshift(arr[arr.length-1])
        }
         else{
         	  acc.push(arr[i])
         }
    }
    return acc
}

function rot2(arr){  //left
	acc=[]
	for(var i=arr.length-1; i>=0;i--){
		if(i===0){
			acc.push(arr[0])
		}
		else{
			acc.unshift(arr[i])
		}
}
return acc   


//65

function endscript(str){
	if(str.slice(-5,str.length)==="script"){
		return true
	}
}

//75

//function middle(arr1){
//	var acc=[]
//	var x=(arr1.length-1)%2
//	if(x===1){
//	mid=((arr1.length-2)/2)+1

//}
//return acc.push(arr1[mid])	
//}

//78
}
function z(arr){
	debugger
	for(var i=0;i<arr.length;i++){
		if(arr[i]===1 || arr[i]===3){
			return true
		}
	}return false
		
}
//80
function swap(arr){
	
	var x=arr.splice(0,1)
	var y=arr.splice(arr.length-1,arr.length)
	arr.push(x[0])
	arr.unshift(y[0])
	return arr


}

//81
function addd(numb){
	var total=0
	var x=numb.toString(" ")
	for(var i=0;i<x.length;i++){
		total=total+x[i]
}
  return total
}  

function longuestString(str){
	debugger
	var x=str.split(" ")
	
	for(var i=0;i<x.length;i++){
		var max = x[0]
		 if(max.length<x[i].length){
		 	max=x[i]
		 }
	}
	  return max
}

//84

function replace1(str){
	debugger
	var acc=""
	var alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	for(var aa=0;aa<alpha.length;aa++){
       for(var zz=0;zz<str.length;zz++){
       	if(str[zz]==="z"){
       		acc=acc+"z"
       	}
		else if(str[zz]===alpha[aa]){
			acc=acc+alpha[aa+1]
		}
	}
}
    return acc
}

//88
function intolengthof2(arr){
	var total=0
	var total1=0
	var acc=[]
	for (var i=0;i<arr.length;i++){
		if(i%2===0){
			total=total+arr[i]
		}
		
		else{ 
			total1=total1+arr[i]
		}
		}
		acc.push(total1)
		acc.push(total)
	
	return acc
}	

//90
function Nthgreatelement(arr,num){
	debugger
	var count=0
	var max=arr[0]
	for(var i=0;i<arr.lenght;i++){
		
		if(max<arr[i] && count<num){
			max=arr[i]
			count=count+1
        }
        else{
        	return "error"
        }

    }
    return max		
}

//92

function diff(arr){
	var max=(arr.length-1)-(arr.length-2)
	for(var i=arr.length-1;i>=1;i--){
     var dif=arr[i]-arr[i-1]
     if(max<dif){
     	max=dif
     }
    }
   return max
}

//94

function numapp(arr){
	var acc=[]
	for(var i=0;i<arr.length;i++){
	  for(var z=i;z<arr.length;z++){
	  	var count=0
	  	if(arr[i]===arr[z]){
	  		count=count+1
	  	}
	  
	  		acc.push([arr[z],count])
	  }	
	  }
	  return acc
	}


	function countN(arr) {

var max_count = 0;
var num = 0;
for (i = 0; i < arr.length; i++) {
var count_temp = 0;
for (k = i ; k < arr.length; k++) {
if (arr[i] == arr[k]) {
count_temp++;
}
if (count_temp > max_count) {
max_count = count_temp;
num = arr[i];
}
}
}
return num;
}
	  	


function countt(arr){
	var total =0
	var num= 0
	for(var i=0;i<arr.length;i++){
		var subcount=0
		for(var z=i;z<arr.length;z++){
			
			if(arr[i]===arr[z]){
				subcount=subcount+1
			}
			if(subcount>total){
				total=subcount
				num=arr[i]
			}
		}
	}
		return num
}
