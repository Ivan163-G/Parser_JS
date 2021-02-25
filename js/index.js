window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let textNodes = [];

    function getTitle(element) {
        element.childNodes.forEach(node => {
            if(node.nodeName.match(/^H\d/)){
                textNodes.push(node.textContent)
            } else {
                getTitle(node);
            }
        }) 
    }
    getTitle(body);
    console.log(textNodes)
});