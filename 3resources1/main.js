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





















