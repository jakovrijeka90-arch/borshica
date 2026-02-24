// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
// Zoom on click for gallery images
document.querySelectorAll('.gallery img').forEach(img=>{img.style.cursor='zoom-in';img.addEventListener('click',()=>window.open(img.src,'_blank'))});
