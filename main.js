function rain () {
    let qty = 200;
    let body = document.querySelector('body');
    for(let i = 0; i < qty; i++) {
        let drop = document.createElement('i');
        body.appendChild(drop);
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = duration + 's';
    }
}
rain();
