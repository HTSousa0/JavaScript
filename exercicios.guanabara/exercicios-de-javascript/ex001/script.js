function carregar() {
    var area = document.getElementById('area')
    var hora = document.getElementById('hora')
    var agora = new Date()
    var hora = agora.getHours()
    
    // var hora = 18
    msg.innerHTML = `Agora são ${hora} horas `
    if (hora >= 0 && hora < 12) {
        area.style.backgroundColor = '#050000'
    } else if (hora >= 12 && hora <= 18) {
        area.style.backgroundColor = '#fffd9f'
    } else {
        area.style.backgroundColor = '#5e5e5e'
    }
}