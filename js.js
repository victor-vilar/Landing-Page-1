function addActionListenerScreenshotsButtons(){
    var bts = [];
    bts = document.querySelectorAll('.button-screenshots');
    bts.forEach((item) => {
        item.addEventListener("mouseover",() =>{
            item.style.fontSize = "40px";
        });
        item.addEventListener("mouseout",() =>{
            item.style.fontSize = "60px";
        })
    })

}


 addActionListenerScreenshotsButtons();




