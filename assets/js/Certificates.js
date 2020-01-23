function ShowCertificate(certificate) {
    var Show = document.getElementById('ShowCertificate')
    Show.innerHTML = `<img src="assets/diplomas/diploma-${certificate}.png" alt="">`

    var bg = document.getElementById('BGCertificate')
    bg.classList.add('Show')
}

function EscBG() {
    var bg = document.getElementById('BGCertificate')
    bg.classList.remove('Show')
}