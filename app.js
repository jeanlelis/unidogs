function handleSideBar() {
    let elementsToAddListener = document.querySelectorAll(".bar-icon");
    let sideBar = document.querySelector(".side-bar");
    let clicked = 0;
    
    elementsToAddListener.forEach(element => {
        

        element.addEventListener("click",function() {
            clicked++;
            sideBar.classList.toggle("side-bar-open");
            
    });
    
    })
}

handleSideBar();