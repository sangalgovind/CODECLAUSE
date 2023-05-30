var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

option_from = inputType.value;
option_to   = resultType.value;
function myResult(){


	option_from = inputType.value;
	option_to = resultType.value;



if(option_from === "meter" && option_to==="kilometer"){

		
		result.value = Number(input.value) * 0.001;
	}
	else if(option_from === "meter" && option_to==="Centimeter"){

		
		result.value = Number(input.value) * 100;

	}
	else if(option_from === "meter" && option_to==="meter"){
		
		result.value = input.value
	}


    else if(option_from === "Kilogram" && option_to==="Grams"){
        result.value=Number(input.value)*1000;
    }
    else if(option_from === "Kilogram" && option_to==="Kilogram"){
        result.value=input.value;

    }


    else if(option_from === "Grams" && option_to==="Kilogram"){
        result.value=Number(input.value)*0.001;

    }
    else if(option_from === "Grams" && option_to==="Grams"){
        result.value=input.value;

    }

 
    else if(option_from === "Celsius" && option_to==="Celsius"){
        result.value=input.value;

    }
    else if(option_from === "Celsius" && option_to==="Fahrenheit"){
        result.value=(Number(input.value)*(9/5))+32;

    }

	
    else if(option_from === "Fahrenheit" && option_to==="Fahrenheit"){
        result.value=input.value;

    }
    else if(option_from === "Fahrenheit" && option_to==="Celsius"){
        result.value=((Number(input.value))-32)*5/9;

    }

	if(option_from === "kilometer" && option_to==="meter"){ 
		result.value = Number(input.value) * 1000;
	}
	
	else if(option_from === "kilometer" && option_to==="Centimeter"){
		result.value = Number(input.value) * 100000;
	}
	
	else if(option_from === "kilometer" && option_to==="kilometer"){
		result.value = input.value
	}

	if(option_from === "Centimeter" && option_to==="kilometer"){
		result.value = Number(input.value) * 0.00001;
	}
	
	else if(option_from === "Centimeter" && option_to==="meter"){
		result.value = Number(input.value) * 0.01;
	}
	else if(option_from === "Centimeter" && option_to==="Centimeter"){
		
		result.value = input.value
	}

}