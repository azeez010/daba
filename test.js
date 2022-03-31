function ValidName(words){
    let validCounter = 0;
    let query = words.split(" ")
    let initial = []
    
    for(let i = 0; i < query.length; i++){
        if(i == 3) break;

        if(query[i][0] == query[i].toUpperCase()[0] && query[i][1] == "."){
            // An initial
            if(i == 2) {
                validCounter = 0
            }
            else{
                validCounter++;
                initial[i] = true
                continue
            }
        }
        
        if(query[i][0] == query[i].toUpperCase()[0] && query[i].length > 2  && query[i][query[i].length - 1] != "."){
            if(!initial[i-1]) {
                validCounter = 0  
            }
            else{
                // A Name
                validCounter++
                initial[i] = false
                continue
            }
        }

        validCounter = 0
    }

    return validCounter
}


function test(){
    let isValid = ValidName("H. H. Her")
    if(isValid > 1){
        return true;
    }
    else{
        return false;
    }
}

console.log(test())