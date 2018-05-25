function slopeVelocity(num1, num2) {
  var velocity = num1;
  var slope = num2;

  if (slope <= 14) {
    console.log(velocity);
  }else if (slope <= 29) {
    console.log(velocity - 10);
  }else if (slope <= 44) {
    console.log(velocity - 15);
  }else if (slope <= 50) {
    console.log(velocity - 25);
  }
}

slopeVelocity(80, 33)
