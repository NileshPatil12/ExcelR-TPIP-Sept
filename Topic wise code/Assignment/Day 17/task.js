function calculateRectangleArea(width = 1, height = 1) { 
    return width * height;
  }
  const area1 = calculateRectangleArea(5, 3); 
  const area2 = calculateRectangleArea(4);     
  const area3 = calculateRectangleArea(undefined, 2); 
  console.log("Area1:", area1);   
  console.log("Area2:", area2);   
  console.log("Area3:", area3);   
  