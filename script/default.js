document.getElementById('default').addEventListener("click", function(){
    const children = document.getElementById('job-container').children;
    for(const child of children){
        child.classList.remove('hidden');
    }
})