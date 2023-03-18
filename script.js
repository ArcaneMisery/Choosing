

function chooseType(type) {
    const bigSect = document.getElementsByClassName("choosing-section");
    if (bigSect?.length) {
        bigSect[0].classList.add("not-visible");
    }
    if(type === "2p"){
        document.getElementById("joppi").classList.add("visible");
        return
    }
    document.getElementById("joppa").classList.add("visible");
}

function rerun() {
    document.getElementById("joppa").classList.remove("visible");
    document.getElementById("joppi").classList.remove("visible");
    document.getElementsByClassName("choosing-section")[0].classList.remove("not-visible");
}