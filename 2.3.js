function circleArea (radius){
    circleArea = Math.PI*(radius**2);
    return circleArea;
} 

console.log(circleArea(3));

fixedArea = circleArea.toFixed(2);
console.log(fixedArea);