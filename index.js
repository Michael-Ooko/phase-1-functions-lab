function distanceFromHqInBlocks (someValue) {
    //returns the number of blocks given a value
    if (someValue<42){
      return(42-someValue);
    }
    else {
  
    return(someValue-42);
  }
  }
  

  function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264;
  }

  function distanceTravelledInFeet(x,y){
    if (y>x){
      return((y-x)*264);
    }
    else
      return((x-y)*264);
  }
  
  