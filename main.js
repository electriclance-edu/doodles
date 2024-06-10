let selected = {
    hair:"none",
    face:"none",
    cloth:"none",
    outline:"clean",
}
let types = {
    hair:["cone","leafy","red","bang","frerne"],
    face:["neu","close","cry","frustration","really","wink","heh","none"],
    cloth:["monk","turtle","cape","floppy"]
}

function onload() {
    preload(); 

    selected.hair  = randElem(types.hair);
    selected.face  = randElem(types.face);
    selected.cloth = randElem(types.cloth);
    
    display();
}

function randInt(max) {
    return Math.floor(Math.random()*(max));
}
function randElem(array) {
     return array[randInt(array.length)];
}

function display() {
    Object.keys(selected).forEach((type)=>{
        if (selected[type] == "none") {
            document.getElementById(`layer-${type}`).style.setProperty("--url","");
        } else {
            let url = `url(./resources/${type}/${selected[type]}.png)`;
            document.getElementById(`layer-${type}`).style.setProperty("--url",url);
        }
    });
}

let images = [];
function preload() {
    Object.keys(types).forEach((type)=>{
        types[type].forEach((id)=>{
            // let link = document.createElement("link");
            // link.rel = "prefetch";
            // link.href = `url(./resources/${type}/${selected[category]}.png)`;
            // document.head.append(link);
            let img = new Image();
            img.src = `url(./resources/${type}/${selected[type]}.png)`;
            images.push(img);
        })
    })
}

function setImage(type, id) {
    let section = document.getElementById(`selectors-${type}`);
    for (var i = 0; i < section.children.length; i++) {
        section.children[i].classList.remove("state-selected");
    };

    let elem = document.getElementById(`${type}-${id}`);
    elem.classList.add("state-selected");

    selected[type] = id;
    display();
}