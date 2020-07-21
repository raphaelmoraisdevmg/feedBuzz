var FeedNumbers=[];
var count=1;
var numberOfTimes=prompt("entre com o número desejado é descubra todos os multiplos de 5e3");
var numeros=[];

//numeros.push(buzzFeed(numberOfTimes))
numeros.push(buzzFeed(numberOfTimes));
document.writeln(numeros)
function buzzFeed(times){
    
    while(count <= times){
    if(count%3===0 && count%5===0){
        FeedNumbers.push("feedbuzz")
    }else if(count%3===0){
        FeedNumbers.push("feed");
    }else if(count%5===0){
        FeedNumbers.push("buzz")
    }else{
        FeedNumbers.push(count);
    }
    
    count++;
    
}
return FeedNumbers;
}