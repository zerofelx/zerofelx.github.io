var ShowPandora = false

var ShowBehimosu = false
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
        case "Behimosu":
            if (ShowBehimosu) {
                Remove(id)
                ShowBehimosu = false
                break
            } else {
                Add(id)
                ShowBehimosu = true
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
var SSBehimosu = false
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
        case "SSBehimosu":
            if (SSBehimosu) {
                RemoveSS(id)
                SSBehimosu = false
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