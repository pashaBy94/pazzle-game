
function fullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.webkitrequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.mozRequestFullscreen) {
    element.mozRequestFullScreen();
  }
}


function generateAsk(){
    const box = document.createElement('div');
    box.classList.add('box_screen')
    const button = document.createElement('button');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Для игры необходимо включить полноэкранный режим!'
    button.innerHTML = 'Включить';
    button.addEventListener('click',()=>{
        const html = document.documentElement
        fullScreen(html)
        html.addEventListener('fullscreenchange',(ev)=>{
            console.log(ev,22222);
            box.remove()
        })
        html.addEventListener('fullscreenerror',(ev)=>{
            console.log(ev);
        })
    }) 
    box.append(paragraph, button)
    document.body.append(box)
}
generateAsk()