let isColorChanged = false;  

function changeColor() {
    const colorBox = document.getElementById('colorBox');
    
  
    if (!isColorChanged) {
        colorBox.style.backgroundColor = "#00cc99";  
        isColorChanged = true;  
    } else {
        colorBox.style.backgroundColor = "#ff6347";  
        isColorChanged = false; 
    }
   
}
