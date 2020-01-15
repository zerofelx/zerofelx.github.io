var ShowBehemoth = false
var ShowGame2D = false
var ShowCyrozExchange = false

function Show(id) {
    switch (id) {
        case "Behemoth":
            if (ShowBehemoth) {
                Remove(id)
                ShowBehemoth = false
                break
            } else {
                Add(id)
                ShowBehemoth = true
                break
            }
        case "Game2D":
            if (ShowGame2D) {
                Remove(id)
                ShowGame2D = false
                break
            } else {
                Add(id)
                ShowGame2D = true
                break
            }
        case "CyrozExchange":
            if (ShowCyrozExchange) {
                Remove(id)
                ShowCyrozExchange = false
                break
            } else {
                Add(id)
                ShowCyrozExchange = true
                break
            }
    }
}

function Add(id) {
    var e = document.getElementById(id)
    e.classList.toggle("show")
    setTimeout(() => {
        e.classList.toggle("showP")
    }, 300);
}

function Remove(id) {
    var e = document.getElementById(id)
    setTimeout(() => {
        e.classList.toggle("showP")
        e.classList.toggle("show")
    }, 100);
}