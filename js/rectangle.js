function calculateRectangleArea(){
    // Rectangle width
   const rectangleWidthInpute=document.getElementById('rectengle-width');
   const rectangleWidthText=rectangleWidthInpute.value;
   const width=parseFloat(rectangleWidthText);
   console.log(width);

    //rectangle length
   const rectangleLengthInpute=document.getElementById('rectengle-length');
   const rectangleLengthText=rectangleLengthInpute.value;
   const length=parseFloat(rectangleLengthText);
   console.log(length);

    // Calculate Value
    const area= width*length;
    console.log('area of the rectangle is',area);

    // Displa value
    const rectangleAreaSpan=document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText=area;
}