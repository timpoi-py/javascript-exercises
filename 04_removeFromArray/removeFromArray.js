const removeFromArray = function(...args) {

    array = args[0];
    newarray = [];
    
    array.forEach(element => {
        if(!args.includes(element)){
            newarray.push(element);
            console.log(newarray);
        }
    });

    return newarray;
    

};

removeFromArray([0,1,2,3,4],2,4)

// Do not edit below this line
module.exports = removeFromArray;
