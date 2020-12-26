


$(function(){
    $('.mobile').click(function(){
        var listaMenu = $('.mobile ul');
        var icon = $('.hamburguer').find('i');

        if(listaMenu.is(':hidden') == true){    
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
            listaMenu.slideDown();    
        }else{
            icon.removeClass('fa-times');
            icon.addClass('fa-bars');
            listaMenu.slideUp();
        }
    })
    // modais
        var modalClose = $('.modal')
        var modalPage = $('.modal-downloads');
        //ecoleta
        var modalEco = $('.eco');
        //proffy
        var modalProff = $('.proff');
        //happy
        var modalHappy = $('.happy');
    $('.btnEco').click(()=>{
            modalPage.fadeIn();
            modalEco.fadeIn();
    })
    //proffy
    $('.btnProff').click(()=>{
        modalPage.fadeIn();
        modalProff.fadeIn();
    })
    $('.btnHappy').click(()=>{
        modalPage.fadeIn();
        modalHappy.fadeIn();
    })

    $('.close').click(()=>{
        modalPage.fadeOut();
        modalClose.fadeOut()
    })
    $
})


