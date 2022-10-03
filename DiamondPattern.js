// Diamond Pattern
var row, i, j, blank_space = 1;
row = 6;  // "Enter the first half number of rows: "
blank_space = row - 1; // initial number of blanks before first * in every row
var output_pattern = ""; // save every now output in output_pattern

// print first half of the diamond pattern
for(j = 1; j<= row; j++){
    // allocate required blank spaces before first star
    for( i = 1; i<= blank_space; i++){
        output_pattern+=" "
    }
    // print 2*j-1 stars in erery row after blank space
    for(i = 1; i<= 2*j-1; i++){
        output_pattern+='*'
    }
    // add line break
    output_pattern+='\n'
    // keep reducing the balnk space after every row
    blank_space--;
}

blank_space = 1; // reset blank space to 1

// print second half of the diamond pattern
for(j = 1; j<= row-1; j++){
    // allocate required blank spaces before first star
    for(i = 1; i<= blank_space; i++){
        output_pattern += ' ';
    }
    // print 2*(row-j)-1 stars in every row after blank space
    for(i = 1; i<= 2 * (row - j) - 1; i++){
        output_pattern += '*';
    }
    // add line break
    output_pattern += '\n';
    // keep increasing the blank space after every row
    blank_space++;
}

// print the final output pattern
console.log(output_pattern);