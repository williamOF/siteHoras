

function carregar (){
    let msg = document.getElementById('msg')
    let imagenDoDia = window.document.getElementById('imagem')
    let corpo = document.getElementsByTagName('body')
    let data = new Date()
    let hora = data.getHours()

    if(hora>=0 && hora <12){
        //Bom Dia
        imagenDoDia.src = 'manha.jpg'
        document.body.style.background ='#3CB371'
        msg.innerText='Agora são ' + hora + ' horas ' + 'Boa Dia!'         
    }else if (hora>=12 && hora<18){
        //Boa Tarde
        imagenDoDia.src = 'tarde.jpg'
        document.body.style.background = '#FFE4B5'
        msg.innerText='Agora são ' + hora + ' horas ' + 'Boa Tarde!'
    }else{
        //Boa noite
        imagenDoDia.src ='noite.jpg'
        document.body.style.background = '#483D8B'
        msg.innerText='Agora são ' + hora + ' horas ' + 'Boa Noite!'
    }
}