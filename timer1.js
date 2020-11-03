let input = process.argv.slice(2);
input.sort();

if (input.length === 0) {
  console.log('no input');
} else {
  input.forEach(ele => {
    if (ele < 0) {
      console.log("please input postive number time cannot be negative");
    } else {
      setTimeout(() => {
        process.stdout.write(`\x07  ${ele} seconds\n`);
      }, ele * 1000);
   
    
    }
  
  });
}