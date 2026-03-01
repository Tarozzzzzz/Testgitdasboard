function loadData(complete,error) {
    console.log("Loading Data");
    Math.random() >= 0.5 ? complete() : error();
}

let success = function(){
    console.log("Success!");
}

let failure = function(){
    console.log("Failed!");
}

loadData(success, failure);