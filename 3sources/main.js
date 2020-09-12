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
	var x=numb.toString()
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
		for(var z=0;z<arr.length;z++){
			
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

//98
function rep(arr,numold,numnew){
	for(var i=0;i<arr.length;i++){
		if(arr[i]===numold){
			arr[i]=numnew
		}
	}

	 return arr
	}


//100
function elementinbotharr(arr1,arr2){
	debugger
	for(var i=0;i<arr1.length;i++){
		for(var z=0;z<arr2.length;z++){
			if(arr1[i]===arr2[z]){
				return true
			}
		
		
	    }
    }
    return false
} 

//103
//function ex103(numb){
  //  var acc=[]
	//var x=numb.toString()
	//var z=x.split("")
	//var total=0
	//for(var i=0;i<x.length;i++){
	//	z.splice(i,1)
      //  var subtotal=0
        //for(var k=0; k<x.length;k++){
        //	subtotal=subtotal+x[k]
        
          //    if(subtotal>total){
         	//    total=subtotal
         	  //    acc.push(z)
              //}
        // }
    // }
    // return acc
 //}

 //105


function reduceToOneDigitIn(num) {
let count = 0;

while(num.toString().split('').length > 1) {
num = num.toString().split('').reduce((accumulator, item) => {
return accumulator + parseInt(item);
},0);

count++;
}

return num
}

function devide(numb1,numb2){
	
	
	if(numb2===1){
		return numb1
	}
	 else{
	 	  while(numb1%numb2===0){
	 	  	numb1=numb1/numb2
	 	  }
	 	  return numb1
	 }
	
}

//107

function div1(arr){
	for(var i=0;i<arr.length;i++){
		for(var z=0;i<arr.length;z++){
			if(i!==z){
				if((arr[i]%arr[z]===0)||(arr[z]%arr[i]===0)){
					console.log(arr[i])
				}
			}
		}

    }     
}
//115







function is_diagonal_matrix(user_matrix) {
    for (var i = 0; i < user_matrix.length; i++) {
        for (var j = 0; j < user_matrix.length; j++) {
            if (i !== j && user_matrix[i][j] !== 0) 
              return false;
        }
    }
    return true;
}

//117

function idendity(matrix){
	for(var i=0;i<matrix.length;i++){
		for(var k=0;k<matrix.length;k++){
			if((i!==k && matrix[i][k]!==0)||(i===k && matrix[i][k]!==1)){
				return false
			}
        }
    }
    return true    	
}

//118
function range(arr,numb){
	for(var i=0;i<arr.length;i++){
		if(arr[i]===numb){
			return true
		}
	}
		return false 
	}


function range1(num1,num2,numb){
	max=num1
	min=num2
	if(max<num2){
		max=num2
		min=num1

	}
      if((numb>min)&&(numb<max)){
      	return true
      }
      return false
    }
//119

function increasing(num){
	debugger
	var x=num.toString()
	var z=x.split("")
	for(var i=0;i<z.length-1;z++){

		if(parseInt(z[i])+1!==parseInt(z[i+1])){
			return false
		}
	}
	return true
}

//121

function triangular(arr){
	for(var i=0; i<arr.length;i++){
		for(var z=0;z<arr.length;z++){
			if(arr[i][z]!==0 && z>i){
				return false
			}
		}
	}
		return true
}

//122
function incredecri(arr){
	for(var i=0;i<arr.length-1;i++){
		for(var z=i+2;z<arr.length;z++){
		if(((arr[i]<arr[i+1])&&(arr[z]<arr[z-1])) || ((arr[i]>arr[i+1])&&(arr[z]<arr[z-1]))){
			return false
		}

		}
	}
	return true
}

//123

function permutation(arr,n){
	for(var i=0;i<arr.length;i++){
		if(arr[i]>n){
			return false
		}
	}
	return true
}



//126

function maxeven(arr){
	var even=arr.filter((element)=>(element%2===0))
		return Math.max(...even)
}

	


//130

function evendigits(num){
	debugger
	count=0
	var x=num.toString()
	var z=x.split("")
	for( var i=0; i<z.length;i++){
		if((parseInt(z[i]))%2===0){
			count=count+1

			
		}
	} 
	return count
}

//124
function nor(x,y){
	
	
		if( x===false && y===false){
			return true
		}
		return false

	}
//131
function prefsum(arr){
	var acc=[]
	
	var tot=0


	for(var i=0; i<arr.length;i++){

	
		
		if(i===0){
			sub=arr[i]
			tot=tot+sub
			acc.push(tot)
		}
		else{
			sub=tot
			tot=sub+arr[i]
			acc.push(tot)
        }
    }
    return acc
}

function prefix_sums(arr) {
  const new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    new_arr[i] = 0;
    for (let j = 0; j < i + 1; j++) {
      new_arr[i] += arr[j];
    }

  }

  return new_arr;
}

//134
function change(str){
	acc=""
	var alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	for(var i =0;i<str.length;i++){
		for(var z=alpha.length-1;z>=0;z--){
		if(str[i]==="a"){
			 acc=acc+"a"
		}
		else if(str[i]===alpha[z]){
			acc=acc+alpha[alpha.length-1-z]

		}
	}

    }

    
  return acc
}

function change_char(str1) {
	var result = [];
	for (var i = 0; i < str1.length; i++)
    {
		var char_order = str1.charCodeAt(i) - 'a'.charCodeAt(0),
			change_char = 25 - char_order + 'a'.charCodeAt(0);
		result.push(String.fromCharCode(change_char));
	}
	return result.join("");
}

//135

function removeappmore1(str){
	
	var x=str.split("")
	k=x.map(element=>element)
	for( var i=0;i<k.length;i++){
		
		
		count=0
		for(var z=i+1;z<k.length;z++){
			
			if(x[i]===x[z]){
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
	return x.join("")
	}


	function removeRepeatingChar(str) {
let arr = str.split('');
for (i = 0; i < arr.length; i++) {
for (j = i + 1; j < arr.length; j++) {
if (arr[i] === arr[j]) {
for (k = 0; k < arr.length; k++) {
str = str.replace(arr[j], '');
} } } }
return str;
}		



var removeappmore11 = function(str) {
    var arr = str.split('');
    for(var i = 0; i < arr.length; i++) {
        //var test = false;
        var count=0
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
               // test = true;
               count=count+1
            }
        }
        if(count>0) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr.join('');
};



//140
function samedigit(num){
	var z=num.toString().split("")
	for(var i=0;i<z.length;i++){
		for(var k=i+1;k<z.length;k++){
			if(z[i]!==z[k]){
				return false
			}
		}
	}
	return true
}

//141
function sameelement(arr1,arr2){
	count=0
	for(var i=0;i<arr1.length;i++){
		
		for( var k=0;k<arr2.length;k++){
			if((arr1[i]!==arr2[k])&&(i===k)){
				count=count
			}
			else if((arr1[i]==arr2[k])&&(i===k)){
				count=count+1
			}

			}
		}

		return count

	}

//143
function sort1(arr){
	acc=[]
	for(var i=0;i<arr.length;i++){
		max=arr[0].length
		ind=0
		val=arr[0]
		for(var z=i+1;z<arr.length;z++){
			if(max<arr[i].length){
				max=arr[i].length
				ind=i
				val=arr[i]
			}
		    }
			acc.push(val)
			arr.splice(ind,1)
			ind--
			
        
		arr.length=arr.length-1


	}
	return acc
}




function max(arr){
	max=arr[0]
	for(var i=0; i<arr.length;i++){
		if(max<arr[i]){
			max=arr[i]
		}
	}
		return max
	}


//144
function re(str){

   
	var x=str.split("://")

	
	var z=x[1].split("/")

	var w=z.unshift(x[0])

	var t=z.join(" ")

	return t
	
}
	
//145
function som(num){
	debugger
	var tot=0
	 var i=0
	    
		while(tot<=num){
			
			i++
			tot=tot+i

		
	
	}

    return i-1

	}

//146
function square(x){
	return x*x*x
}

function sumsquare(num){
	var tot=0
	var i=0
    while(i<=num){
    	tot=tot+square(i)
    	i++
    }

    return tot
}
    

//147
function sumdig(str){
	debugger
	var x=str.split("")
	total=0
	for(var i=0;i<x.length;i++){
		if(!isNaN(x[i])){
			z=parseInt(x[i])
			total=total+z
		}

		}
		return total
	}

function sumdig1111(str){
	var x=str.split("")
	total=0
	for(var i=0;i<x.length;i++){
		if(/[0-9]/.test(x[i])){
			z=parseInt(x[i])
			total=total+z
		}
		    
		}
    
    return total
  }

//148
function sswitch(arr){
	debugger
	if(arr.length%2===0){
		var half=(arr.length/2)
	z=arr.slice(0,half)
	k=arr.slice(half,arr.length)
}
	for(var i=0;i<z.length;i++){
		k.push(z[i])


	}
	return k
}
	

//150
function adjacent(arr){
	debugger
	var acc=[]
	if(arr.length%2!==0){
		return false
	}
	else{
		k=arr.map(element=>element)
		for(var i=0;i<arr.length;i=i+2){
			for(var z=i+1;z<i+2;z++){
			
				arr[z]=arr[z-1]
			    
             

			}
			arr[i]=k[i+1]
		}
	}


		return arr
      
	}

