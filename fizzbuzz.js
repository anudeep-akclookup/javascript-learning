for(let val=1;val<=100;val++) {

    if(val%5==0&&val%3==0) {
        process.stdout.write("Fizz-Buzz,");
    }    
  if(val%3==0) {
    process.stdout.write("Fizz,");
  } 
  if(val%5==0&&val%3!=0) {
    process.stdout.write("Buzz,");
  } else {
    console.log(val);
  }
   

}