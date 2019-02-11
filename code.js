  var word = "bottles of beer";
  var count = 99;
  while(count > 0) {
    console.log(count + " " + word + " on the wall,");
    console.log(count + " " + word + ",");
    console.log("Take one down, pass it around,");
    count--;
    if(count>0)
      console.log(count + " " + word + " on the wall.\n\n");
    else
      console.log("No more " + word + " on the wall.\n\n");
  }
