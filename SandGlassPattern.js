var rows = 6;
var output_pattern = ""

// print first half of the pattern
for (var i= 0; i<= rows-1; i++){
    for (var j= 0; j< i; j++){
        output_pattern+= " "; // provide required no. of space in each row
    }
    for (var k= i; k<= rows-1; k++){
        output_pattern+= "* "  // print required stars in each row
    }
    output_pattern+= '\n'
}

for (var i= rows-1; i>= 0; i--){
    for (var j= 0; j< i; j++){
        output_pattern+= " " // provide required no. of space in each row
    }
    for (var k= i; k<= rows-1; k++){
        output_pattern += '* '  // print required stars in each row
    }
    output_pattern+= '\n'  // add line break
}

// print the final output pattern
console.log(output_pattern)