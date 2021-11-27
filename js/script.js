// // business logic


function getPizza(type, size, crust, topping) {
    this.type = type;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

getPizza.prototype.pizzaSize=function(){
    if(this.type==0){
        if(this.size==0){
            return 1250;
        }
        else if(this.size==1){
            return 850;
        }
        else if(this.size==2){
            return 650;
        }
    }
    else if(this.type==1){
        if(this.size==0){
            return 1250;
        }
        if(this.size==1){
            return 850;
        }
        if(this.size==2){
            return 650;
        }
    }
    else if(this.type==2){
        if(this.size==0){
            return 1250;
        }
        if(this.size==1){
            return 850;
        }
        if(this.size==2){
            return 650;
        }
    }
    else if(this.type==3){
        if(this.size==0){
            return 1250;
        }
        if(this.size==1){
            return 850;
        }
        if(this.size==2){
            return 650;
        }
    }
    else if(this.type==4){
        if(this.size==0){
            return 1250;
        }
        if(this.size==1){
            return 850;
        }
        if(this.size==2){
            return 650;
        }
    }
    else if(this.type==5){
        if(this.size==0){
            return 1250;
        }
        if(this.size==1){
            return 850;
        }
        if(this.size==2){
            return 650;
        }
    }
}
getPizza.prototype.pizzaCrust=function(){
    if(this.crust==0){
        return 220;
    }
    if(this.crust==1){
        return 170;
    }
    if(this.crust==2){
        return 150;
    }
}
getPizza.prototype.pizzaTopping=function(){
    if(this.topping==0){
        return 60;
    }
    if(this.topping==1){
        return 90;
    }
    if(this.topping==2){
        return 80;
    }
}

// user interface logic
$(document).ready(function(event){
    $("form").submit(function(){
        let item1=parseInt($("#flavor option:selected").val());
        let item2=parseInt($("#size option:selected").val());
        let item3=parseInt($("#crust option:selected").val());
        let item4=parseInt($("#topping option:selected").val());
        let number=parseInt($("#num").val());
        let pizzaOrder=new getPizza(item1,item2,item3,item4);
        let newPizzaPrice=(pizzaOrder.pizzaSize()+pizzaOrder.pizzaCrust()+pizzaOrder.pizzaTopping())*number;

        $("#pizzaname").text($("#flavor option:selected").text());
        $("#pizzasize").text($("#size option:selected").text());
        $("#pizzacrust").text($("#crust option:selected").text());
        $("#pizzatopping").text($("#topping option:selected").text());
        $("#pizzanumber").text($("#num").text());

        $("#totals").text(newPizzaPrice).val();
    })
})
function validateOrder(){
    let itemNumber=document.getElementById("num").value;
    if(myForm.flavor.value==""){
        alert("please select your flavour");
        return false;
    }
    else if(myForm.size.value==""){
        alert("please select your size");
        return false;
    }
    else if(myForm.crust.value==""){
        alert("please select your crust");
        return false;
    }
    else if(myForm.topping.value==""){
        alert("please select your topping");
        return false;
    }
    else if(itemNumber==0){
        alert("item should not be zero");
        return false;
    }
}