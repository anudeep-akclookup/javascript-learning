for(let row = 0;row<9;row++) {
   
    for(let col = 0; col<8;col++ ) {
        if((row+col)%2!=0) {
            process.stdout.write("#");
        } else {
            process.stdout.write(" ");
        }
       
    }
    console.log();
}