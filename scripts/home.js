


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
        //moveit
        var modalMoveit = $('.moveit');
        //node
        var modalNode = $('.node');
        //alura
        var modalImersa = $('.imersaalura');

    //ecoleta
    $('.btnEco').click(()=>{
        modalPage.fadeIn();
        modalEco.fadeIn();
    })
    //proffy
    $('.btnProff').click(()=>{
        modalPage.fadeIn();
        modalProff.fadeIn();
    })
    //happy
    $('.btnHappy').click(()=>{
        modalPage.fadeIn();
        modalHappy.fadeIn();
    })
    //moveit
    $('.btnMoveit').click(()=>{
        modalPage.fadeIn();
        modalMoveit.fadeIn();
    })
    //node
    $('.btnNode').click(()=>{
        modalPage.fadeIn();
        modalNode.fadeIn();
    })
    //imersão
    $('.btnAlura2').click(()=>{
        modalPage.fadeIn();
        modalImersa.fadeIn();
    }) 
        // modal instruction 1
        $('.btnAula1').click(()=>{
            if(!$('.aula1').is(':hidden')){
                $('.aula1').fadeOut();
            }else{
                $('.aula1').fadeIn();
            }
        })
        // modal instruction 2
        $('.btnAula2').click(()=>{
            if(!$('.aula2').is(':hidden')){
                $('.aula2').fadeOut();
            }else{
                $('.aula2').fadeIn();
            }
        })
        // modal instruction 3
        $('.btnAula3').click(()=>{
            if(!$('.aula3').is(':hidden')){
                $('.aula3').fadeOut();
            }else{
                $('.aula3').fadeIn();
            }
        })
        // modal instruction 4
        $('.btnAula4').click(()=>{
            if(!$('.aula4').is(':hidden')){
                $('.aula4').fadeOut();
            }else{
                $('.aula4').fadeIn();
            }
        })
         // modal instruction 5
         $('.btnAula5').click(()=>{
            if(!$('.aula5').is(':hidden')){
                $('.aula5').fadeOut();
            }else{
                $('.aula5').fadeIn();
            }
        })
    //fechar modal
    $('.close').click(()=>{
        modalPage.fadeOut();
        modalClose.fadeOut();
    })
    
})


