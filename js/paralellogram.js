function calculateParalellogramArea(){
    // Base inpute
    const paralellogramBaseInpute=document.getElementById('paralellogram-base');
    const paralellogramBaseText= paralellogramBaseInpute.value;
    const base=parseFloat(paralellogramBaseText);
    console.log(base);
    // height
    const paralellogramHeightInpute=document.getElementById('paralellogram-height');
    const paralellogramHeightText= paralellogramHeightInpute.value;
    const height=parseFloat(paralellogramHeightText);
    console.log(height);
    // calculate value
    const area= base*height;
    console.log('area of the parlellogram is', area);
    // display value
    const paralellogramAreaSpan=document.getElementById('paralellogram-area');
    paralellogramAreaSpan.innerText=area;
   
}