function calculateTriangleArea(){
    // base integrate
    const triangleBaseInpute=document.getElementById('triangale-base');
    const triangleBaseText= triangleBaseInpute.value;
    const base=parseFloat(triangleBaseText);
    console.log(base);
// height intregate
    const triangaleHeightInput=document.getElementById('triangle-height');
    const triangaleHeightText= triangaleHeightInput.value;
    const height= parseFloat(triangaleHeightText);
    console.log(height)

// calculate value
    const area= 0.5*base*height;
    console.log('area of the triangle is',area);

// Display value;
    const triangaleAreaSpan=document.getElementById('triangle-area');
    triangaleAreaSpan.innerText=area;


}