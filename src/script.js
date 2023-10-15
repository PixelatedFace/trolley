
const trolls =[
 'files/troll_laugh.png',
 'files/trolley.png',
 'files/trollface.png'   
]

var images = document.querySelectorAll('a, img, picture, div, figure')



function select_rand(){
    return trolls[Math.floor(Math.random() * trolls.length)]
}


setTimeout(() =>{

    for (var img of images) {
        try {
            var selected = select_rand()
            img.src = chrome.runtime.getURL(selected)
            img.style.objectFit = 'cover'
            img.style.objectPosition = '50%'
        } catch (error) {
            continue;
        }
        
    

    }


}, 125)