// https://github.com/akib391/assignment3.git

//Problem - 1
// Convert to meter from kilometer
var meter = 0;
function kilometerToMeter(km) {
    if (km < 0) {
        return ("Input value is invaid");
    }
    else {
        meter = km * 1000;
        return meter;
    }
}


// Problem - 2
// Budget calculator for watch, mobile and laptop
var amount = 0;
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return ("One or more input is not valid");
    }
    else {
        amount = (watch * 50) + (phone * 100) + (laptop * 500);
        return amount;
    }
}


// Problem - 3
// Hotel cost calculation
function hotelCost(totalDay) {
    if (totalDay < 0) {
        return ("Input valid number of day");
    }
    else {
        if (totalDay <= 10) {
            cost = day * 100;
            return cost;
        }
        else if (totalDay <= 20) {
            cost = 100 * 10 + (100 - 20) * (day - 10);
            return cost;
        }
        else {
            cost = 100 * 10 + (100 - 20) * 10 + (100 - 50) * (day - 20);
            return cost;
        }
    }
}


// Problem - 4
// Largest word or name in an array
function megaFriend(friendList){
    var largeName = friendList.length;
    
   if(friendList.length == 0){
       return ("Empty");
   }
   else{
        for(var i = 0; i < friendList.length; i++){
        var element = friendList[i];
        if(largeName <= element.length){
            largeName = element.length;
            var largeMan = element;
        }
    }
    return largeMan;
   }
}
var largeFriend = megaFriend(["Salam", "Abdullah", "Akib", "Alamin"]);
console.log(largeFriend);