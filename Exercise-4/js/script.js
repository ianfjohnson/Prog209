window.addEventListener("load",init);

function init(){
    if(typeof(Storage)!=="undefined"){
//        display();
        var button=document.getElementById("button");
        button.addEventListener("click",saveInfo);
    }
    else{
        //old bowser	
    }
}

function saveInfo(){
    //text input
    var customerIn=document.getElementById("customer").value;
    var quantityIn=document.getElementById("quantity").value;
    var commentIn=document.getElementById("comment").value;
    //radio buttons 
    var sprinkleIn = getRadioValue("sprinkle" );
    var fillingIn = getRadioValue("filling" );
    //comment cleanup
    if (commentIn = "Include any comments or special orders.") {
        commentIn = "None"
    }
    
    var error=validator(customerIn, quantityIn);
    
    if (error == 0) {
        localStorage.setItem("customerSet",customerIn);
        localStorage.setItem("quantitySet",quantityIn);
        localStorage.setItem("sprinkleSet",sprinkleIn);
        localStorage.setItem("fillingSet",fillingIn);
        localStorage.setItem("commentSet",commentIn);
    
        display();
    }
    else {
        document.getElementById("useroutput").innerHTML="<h1>Oh no!</h1><hr /><br />"+error;
    }

}

function validator(name, quantity) {
    var error = 0;
    if (name == "") {
        error = "You must enter a name for your order!";
    }
    else if (quantity == "") {
        error = "You must enter a number for the quantity of donuts in your order!";
    }
    else if (isNaN(quantity) == true) {
        error = "You must enter a number for the quantity of donuts in your order!";
    }
    else if (quantity < 1) {
        error = "You cannot order fewer than one donut!"
    }
    else if (quantity > 36) {
        error = "You cannot order more than 36 donuts at a time!"
    }
    return error;
}

function getRadioValue(name) {
    var val;
    var radio = input.elements[name];
    var len = radio.length;
    
    for (var i=0; i<radio.length; i++) {
        if ( radio[i].checked ) {
            val = radio[i].value;
            break;
        }
    }

    return val;
}


function display(){
    var rightBox=document.getElementById("useroutput");

    var customerOut=localStorage.getItem("customerSet");
    var quantityOut=localStorage.getItem("quantitySet");
    var sprinkleOut=localStorage.getItem("sprinkleSet");
    var fillingOut=localStorage.getItem("fillingSet");
    var commentOut=localStorage.getItem("commentSet");
    	
    document.getElementById("useroutput").innerHTML="<h1>YOUR ORDER</h1> <hr /><br /><p>Thank you for your order!</p>Customer Name: "+customerOut+"<br /><br />  Quantity: "+quantityOut+"<br /><br />  Sprinkles: "+sprinkleOut+"<br /><br />  Filling: "+fillingOut+"<br /><br />  Comments: "+commentOut;
}


