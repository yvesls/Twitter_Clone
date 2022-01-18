function mudaDescricao(elemento){
    console.log('passou aqui');
    elemento.innerHTML = 'Deixar de Seguir';
    console.log(elemento);
}

function voltaDescricao(elemento){
    elemento.innerHTML = 'Seguindo';
    console.log(elemento);
}

let x = 1;
let y = {};
let selectClass;
let mod;
let sClassReturn = document.getElementsByClassName('options');;
$('.body').on('click', ()=>{ 
    
    if(x == 3){
        console.log('removeu');
        $(sClassReturn[y]).children('.popoverClass').removeClass('d');
        $(sClassReturn).removeAttr("disabled");
        x = 1;
    }else if(x == 2) {
        x = 3; 
        console.log('abriu popover');
    }else{
        x = 1;
        console.log('body');
    }
});

function pop(pos) {
    selectClass = document.getElementsByClassName('options');
    mod = $(selectClass[pos]).children('.popoverClass');
    mod.addClass('d');
    $(selectClass).attr("disabled", 'disabled');
    x = 2;
    y = pos;
};


