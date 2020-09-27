var ShowPandora = false

var ShowGame2D = false
var ShowCyrozExchange = false

function Show(id) {
    switch (id) {
        case "Pandora":
            if (ShowPandora) {
                Remove(id)
                ShowPandora = false
                break
            } else {
                Add(id)
                ShowPandora = true
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

var SSPandora = false
var SSGame2D = false
var SSCyrozExchange = false

function ShowScreenshots(id) {
    switch(id) {
        case "SSPandora":
            if (SSPandora) {
                RemoveSS(id)
                SSPandora = false
                break
            } else {
                AddSS(id)
                SSPandora = true
                break
            }
        case "SSGame2D":
            if (SSGame2D) {
                RemoveSS(id)
                SSGame2D = false
                break
            } else {
                AddSS(id)
                SSGame2D = true
                break
            }
        case "SSCyrozExchange":
            if (SSCyrozExchange) {
                RemoveSS(id)
                SSCyrozExchange = false
                break
            } else {
                AddSS(id)
                SSCyrozExchange = true
                break
            }
    }
}

function AddSS(id) {
    var e = document.getElementById(id)
    e.classList.toggle("show")
}

function RemoveSS(id) {
    var e = document.getElementById(id)
    setTimeout(() => {
        e.classList.toggle('show')
    }, 100)
}