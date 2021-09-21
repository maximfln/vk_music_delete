
function audioRowDelete(element) {
    return new Promise(resolve => setTimeout((function(element, resolve){
        const mouseoverEvent = new Event('click');
        element.querySelector(".audio_row__action_delete").dispatchEvent(mouseoverEvent);
        resolve();
    }).bind(this, element, resolve), 100));
}


function audioRowMouseover(element) {
    return new Promise(resolve => setTimeout((function(element, resolve){
        const mouseoverEvent = new Event('mouseover');
        element.dispatchEvent(mouseoverEvent);
        audioRowDelete(element);
        resolve();
    }).bind(this, element, resolve), 1000));
}

async function start() {
    let i = 0;
    const audioRowArray = document.querySelectorAll('.audio_row:not(.audio_row__deleted)');
    console.log(audioRowArray.length);
    for (elem of audioRowArray) {
        // if (elem.innerHTML.match(/max|filon|макс|филон|грей|greate|мф|неизвест|без|laminor/img)) {
        //     console.info("ex");
        //     continue;
        // }
        console.log(i);
        await audioRowMouseover(elem);
        i++;
        if (i > 100) {
            console.info("done");
            return;
        }
    }
}

start()